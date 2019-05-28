package types

import (
	"encoding/json"
	"errors"
	"fmt"
	"math/big"
	"strconv"
	"strings"
)

type Dec struct {
	*big.Int `json:"int"`
}

const (
	Precision = 18
)

func NewDecFromStr(str string) (d Dec, err error) {
	if len(str) == 0 {
		return d, errors.New("decimal string is empty")
	}

	neg := false
	if str[0] == '-' {
		neg = true
		str = str[1:]
	}

	if len(str) == 0 {
		return d, errors.New("decimal string is empty")
	}

	strs := strings.Split(str, ".")
	lenDecs := 0
	combinedStr := strs[0]

	if len(strs) == 2 { // has a decimal place
		lenDecs = len(strs[1])
		if lenDecs == 0 || len(combinedStr) == 0 {
			return d, errors.New("bad decimal length")
		}
		combinedStr = combinedStr + strs[1]

	} else if len(strs) > 2 {
		return d, errors.New("too many periods to be a decimal string")
	}

	if lenDecs > Precision {
		return d, fmt.Errorf("too much precision, maximum %v, len decimal %v", Precision, lenDecs)
	}

	zerosToAdd := Precision - lenDecs
	zeros := fmt.Sprintf(`%0`+strconv.Itoa(zerosToAdd)+`s`, "")
	combinedStr = combinedStr + zeros

	combined, ok := new(big.Int).SetString(combinedStr, 10) // base 10
	if !ok {
		return d, fmt.Errorf("bad string to integer conversion, combinedStr: %v", combinedStr)
	}
	if neg {
		combined = new(big.Int).Neg(combined)
	}
	return Dec{combined}, nil
}

func (d Dec) IsNegative() bool { return (d.Int).Sign() == -1 }         // is negative
func (d Dec) Neg() Dec         { return Dec{new(big.Int).Neg(d.Int)} } // reverse the decimal sign

func (d Dec) Format(s fmt.State, verb rune) {
	_, err := s.Write([]byte(d.String()))
	if err != nil {
		panic(err)
	}
}

func (d Dec) String() string {
	if d.Int == nil {
		return d.Int.String()
	}

	isNeg := d.IsNegative()
	if d.IsNegative() {
		d = d.Neg()
	}

	bzInt, err := d.Int.MarshalText()
	if err != nil {
		return ""
	}
	inputSize := len(bzInt)

	var bzStr []byte

	if inputSize <= Precision {
		bzStr = make([]byte, Precision+2)

		bzStr[0] = byte('0')
		bzStr[1] = byte('.')

		for i := 0; i < Precision-inputSize; i++ {
			bzStr[i+2] = byte('0')
		}

		copy(bzStr[2+(Precision-inputSize):], bzInt)

	} else {
		bzStr = make([]byte, inputSize+1)
		decPointPlace := inputSize - Precision

		copy(bzStr, bzInt[:decPointPlace])                   // pre-decimal digits
		bzStr[decPointPlace] = byte('.')                     // decimal point
		copy(bzStr[decPointPlace+1:], bzInt[decPointPlace:]) // post-decimal digits
	}

	if isNeg {
		return "-" + string(bzStr)
	}

	return string(bzStr)
}

var (
	nilAmino string
	nilJSON  []byte
)

func init() {
	empty := new(big.Int)
	bz, err := empty.MarshalText()
	if err != nil {
		panic("bad nil amino init")
	}
	nilAmino = string(bz)

	nilJSON, err = json.Marshal(string(bz))
	if err != nil {
		panic("bad nil json init")
	}
}

func (d Dec) MarshalAmino() (string, error) {
	if d.Int == nil {
		return nilAmino, nil
	}
	bz, err := d.Int.MarshalText()
	return string(bz), err
}

func (d *Dec) UnmarshalAmino(text string) (err error) {
	tempInt := new(big.Int)
	err = tempInt.UnmarshalText([]byte(text))
	if err != nil {
		return err
	}
	d.Int = tempInt
	return nil
}

func (d Dec) MarshalJSON() ([]byte, error) {
	if d.Int == nil {
		return nilJSON, nil
	}

	return json.Marshal(d.String())
}

func (d *Dec) UnmarshalJSON(bz []byte) error {
	if d.Int == nil {
		d.Int = new(big.Int)
	}

	var text string
	err := json.Unmarshal(bz, &text)
	if err != nil {
		return err
	}

	newDec, err := NewDecFromStr(text)
	if err != nil {
		return err
	}
	d.Int = newDec.Int
	return nil
}
