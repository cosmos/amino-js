// +build js,wasm

package main

import (
	"github.com/cosmos/amino-js/go/src"
	"syscall/js"
)

func EncodeBech32(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[1])
	bech, err := src.EncodeBech32(args[0].String(), bz)
	return []interface{}{bech, errorOf(err)}
}

func DecodeBech32(this js.Value, args []js.Value) interface{} {
	hrp, data, err := src.DecodeBech32(args[0].String())
	return []interface{}{hrp, js.TypedArrayOf(data), errorOf(err)}
}
