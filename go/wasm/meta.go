// +build js,wasm

package main

import (
	"github.com/jordansexton/amino-js/go/src"
	"syscall/js"
)

func DecodeDisambPrefixBytes(this js.Value, args []js.Value) interface{} {
	dbr, pbr, n := src.DecodeDisambPrefixBytes(typedArrayToByteSlice(args[0]))
	return []interface{}{js.TypedArrayOf(dbr), js.TypedArrayOf(pbr), n}
}

func NameToDisfix(this js.Value, args []js.Value) interface{} {
	pb, db := src.NameToDisfix(args[0].String())
	return []interface{}{js.TypedArrayOf(pb), js.TypedArrayOf(db)}
}

func ByteSliceSize(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	return src.ByteSliceSize(bz)
}

func UvarintSize(this js.Value, args []js.Value) interface{} {
	return src.UvarintSize(uint64(args[0].Int()))
}

func VarintSize(this js.Value, args []js.Value) interface{} {
	return src.VarintSize(int64(args[0].Int()))
}
