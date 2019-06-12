// +build js,wasm

package main

import (
	"github.com/cosmos/amino-js/go/src"
	"syscall/js"
)

func DecodeByte(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	b, n, err := src.DecodeByte(bz)
	return []interface{}{b, n, errorOf(err)}
}

func DecodeByteSlice(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	bz2, n, err := src.DecodeByteSlice(bz)
	return []interface{}{js.TypedArrayOf(bz2), n, errorOf(err)}
}

func DecodeInt8(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	i, n, err := src.DecodeInt8(bz)
	return []interface{}{i, n, errorOf(err)}
}

func DecodeInt16(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	i, n, err := src.DecodeInt16(bz)
	return []interface{}{i, n, errorOf(err)}
}

func DecodeInt32(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	i, n, err := src.DecodeInt32(bz)
	return []interface{}{i, n, errorOf(err)}
}

func DecodeInt64(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	i, n, err := src.DecodeInt64(bz)
	return []interface{}{i, n, errorOf(err)}
}

func DecodeVarint(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	i, n, err := src.DecodeVarint(bz)
	return []interface{}{i, n, errorOf(err)}
}

func DecodeUint8(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	u, n, err := src.DecodeUint8(bz)
	return []interface{}{u, n, errorOf(err)}
}

func DecodeUint16(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	u, n, err := src.DecodeUint16(bz)
	return []interface{}{u, n, errorOf(err)}
}

func DecodeUint32(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	u, n, err := src.DecodeUint32(bz)
	return []interface{}{u, n, errorOf(err)}
}

func DecodeUint64(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	u, n, err := src.DecodeUint64(bz)
	return []interface{}{u, n, errorOf(err)}
}

func DecodeUvarint(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	u, n, err := src.DecodeUvarint(bz)
	return []interface{}{u, n, errorOf(err)}
}

func DecodeFloat32(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	f, n, err := src.DecodeFloat32(bz)
	return []interface{}{f, n, errorOf(err)}
}

func DecodeFloat64(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	f, n, err := src.DecodeFloat64(bz)
	return []interface{}{f, n, errorOf(err)}
}

func DecodeBool(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	b, n, err := src.DecodeBool(bz)
	return []interface{}{b, n, errorOf(err)}
}

func DecodeString(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	s, n, err := src.DecodeString(bz)
	return []interface{}{s, n, errorOf(err)}
}

func DecodeTime(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	t, n, err := src.DecodeTime(bz)
	return []interface{}{t, n, errorOf(err)} // @FIXME: not implemented
}
