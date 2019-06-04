// +build js,wasm

package main

import (
	"github.com/cosmos/amino-js/go/src"
	"syscall/js"
)

func DecodeBool(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	b, n := src.DecodeBool(bz)
	return []interface{}{b, n}
}

func DecodeByte(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	b, n := src.DecodeByte(bz)
	return []interface{}{b, n}
}

func DecodeByteSlice(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	bz2, n := src.DecodeByteSlice(bz)
	return []interface{}{bz2, n}
}

func DecodeFloat32(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	f, n := src.DecodeFloat32(bz)
	return []interface{}{f, n}
}

func DecodeFloat64(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	f, n := src.DecodeFloat64(bz)
	return []interface{}{f, n}
}

func DecodeInt16(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	i, n := src.DecodeInt16(bz)
	return []interface{}{i, n}
}

func DecodeInt32(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	i, n := src.DecodeInt32(bz)
	return []interface{}{i, n}
}

func DecodeInt64(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	i, n := src.DecodeInt64(bz)
	return []interface{}{i, n}
}

func DecodeInt8(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	i, n := src.DecodeInt8(bz)
	return []interface{}{i, n}
}

func DecodeString(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	s, n := src.DecodeString(bz)
	return []interface{}{s, n}
}

func DecodeTime(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	t, n := src.DecodeTime(bz)
	return []interface{}{t, n} // @FIXME
}

func DecodeUint16(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	u, n := src.DecodeUint16(bz)
	return []interface{}{u, n}
}

func DecodeUint32(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	u, n := src.DecodeUint32(bz)
	return []interface{}{u, n}
}

func DecodeUint64(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	u, n := src.DecodeUint64(bz)
	return []interface{}{u, n}
}

func DecodeUint8(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	u, n := src.DecodeUint8(bz)
	return []interface{}{u, n}
}

func DecodeUvarint(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	u, n := src.DecodeUvarint(bz)
	return []interface{}{u, n}
}

func DecodeVarint(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	i, n := src.DecodeVarint(bz)
	return []interface{}{i, n}
}
