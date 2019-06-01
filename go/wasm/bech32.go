// +build js,wasm

package main

import (
	"github.com/jordansexton/amino-js/go/src"
	"syscall/js"
)

func DecodeBech32(this js.Value, args []js.Value) interface{} {
	hrp, data := src.DecodeBech32(args[0].String())
	return []interface{}{hrp, js.TypedArrayOf(data)}
}

func EncodeBech32(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[1])
	return src.EncodeBech32(args[0].String(), bz)
}
