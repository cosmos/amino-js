package main

import (
	"fmt"
	"github.com/tendermint/go-amino"
	"syscall/js"
)

var cdc *amino.Codec
var c chan bool

func init () {
	cdc = amino.NewCodec()
	c = make(chan bool)
}

func kill () {
	c <- true
}

func main () {
	encoded, err := encode("hello")
	if err == nil {
		decoded, err := decode(encoded)
		if err == nil {
			fmt.Println(decoded)
		}
	}
	<-c
}

type SimpleStruct struct {
	String string
}

//go:export encode
func encode (input string) ([]byte, error) {
	s := SimpleStruct{
		String: input,
	}
	output, err := cdc.MarshalJSON(s)
	if err != nil {
		return nil, err
	}
	return output, nil
}

//go:export decode
func decode (input []byte) (SimpleStruct, error) {
	var s SimpleStruct
	err := cdc.UnmarshalJSON(input, &s)
	if err != nil {
		return s, err
	}
	return s, nil
}

//go:export update
func update () {
	document := js.Global().Get("document")
	inputStr := document.Call("getElementById", "input").Get("value").String()
	output, err := encode(inputStr)
	if err == nil {
		document.Call("getElementById", "output").Set("value", string(output))
	} else {
		return
	}
}
