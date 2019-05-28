package types

import (
	"math/big"
)

type Uint struct {
	i *big.Int
}

func (u Uint) MarshalAmino() (string, error) {
	if u.i == nil { // Necessary since default Uint initialization has i.i as nil
		u.i = new(big.Int)
	}
	return marshalAmino(u.i)
}

func (u *Uint) UnmarshalAmino(text string) error {
	if u.i == nil { // Necessary since default Uint initialization has i.i as nil
		u.i = new(big.Int)
	}
	return unmarshalAmino(u.i, text)
}

func (u Uint) MarshalJSON() ([]byte, error) {
	if u.i == nil { // Necessary since default Uint initialization has i.i as nil
		u.i = new(big.Int)
	}
	return marshalJSON(u.i)
}

func (u *Uint) UnmarshalJSON(bz []byte) error {
	if u.i == nil { // Necessary since default Uint initialization has i.i as nil
		u.i = new(big.Int)
	}
	return unmarshalJSON(u.i, bz)
}
