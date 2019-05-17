package main

import (
	"github.com/gopherjs/gopherjs/js"
	"github.com/tendermint/go-amino"
)

var cdc = amino.NewCodec()

type Message interface{}

type bcMessage struct {
	Message string
	Height  int
}

func init () {
	cdc.RegisterInterface((*Message)(nil), nil)
	cdc.RegisterConcrete(&bcMessage{}, "bcMessage", nil)
}

func main () {
	js.Global.Set("Message", map[string]interface{}{
		"encode": encodeMessage,
		"decode": decodeMessage,
	})
}

func encodeMessage(Message string, Height int) []byte {
	msg := bcMessage{Message, Height}
	bz, err := cdc.MarshalBinaryLengthPrefixed(msg)
	return bz
}

func decodeMessage(bz []byte) Message {
	var message Message
	err := cdc.UnmarshalBinaryLengthPrefixed(bz, &message)
	return message
}
