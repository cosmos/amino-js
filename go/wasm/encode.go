// +build js,wasm

package main

import (
	"github.com/cosmos/amino-js/go/src"
	"syscall/js"
	"time"
)

func EncodeByte(this js.Value, args []js.Value) interface{} {
	bz, err := src.EncodeByte(byte(args[0].Int()))
	return []interface{}{js.TypedArrayOf(bz), errorOf(err)}
}

func EncodeByteSlice(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	bz2, err := src.EncodeByteSlice(bz)
	return []interface{}{js.TypedArrayOf(bz2), errorOf(err)}
}

func EncodeInt8(this js.Value, args []js.Value) interface{} {
	bz, err := src.EncodeInt8(int8(args[0].Int()))
	return []interface{}{js.TypedArrayOf(bz), errorOf(err)}
}

func EncodeInt16(this js.Value, args []js.Value) interface{} {
	bz, err := src.EncodeInt16(int16(args[0].Int()))
	return []interface{}{js.TypedArrayOf(bz), errorOf(err)}
}

func EncodeInt32(this js.Value, args []js.Value) interface{} {
	bz, err := src.EncodeInt32(int32(args[0].Int()))
	return []interface{}{js.TypedArrayOf(bz), errorOf(err)}
}

func EncodeInt64(this js.Value, args []js.Value) interface{} {
	bz, err := src.EncodeInt64(int64(args[0].Int()))
	return []interface{}{js.TypedArrayOf(bz), errorOf(err)}
}

func EncodeVarint(this js.Value, args []js.Value) interface{} {
	bz, err := src.EncodeVarint(int64(args[0].Int()))
	return []interface{}{js.TypedArrayOf(bz), errorOf(err)}
}

func EncodeUint8(this js.Value, args []js.Value) interface{} {
	bz, err := src.EncodeUint8(uint8(args[0].Int()))
	return []interface{}{js.TypedArrayOf(bz), errorOf(err)}
}

func EncodeUint16(this js.Value, args []js.Value) interface{} {
	bz, err := src.EncodeUint16(uint16(args[0].Int()))
	return []interface{}{js.TypedArrayOf(bz), errorOf(err)}
}

func EncodeUint32(this js.Value, args []js.Value) interface{} {
	bz, err := src.EncodeUint32(uint32(args[0].Int()))
	return []interface{}{js.TypedArrayOf(bz), errorOf(err)}
}

func EncodeUint64(this js.Value, args []js.Value) interface{} {
	bz, err := src.EncodeUint64(uint64(args[0].Int()))
	return []interface{}{js.TypedArrayOf(bz), errorOf(err)}
}

func EncodeUvarint(this js.Value, args []js.Value) interface{} {
	bz, err := src.EncodeUvarint(uint64(args[0].Int()))
	return []interface{}{js.TypedArrayOf(bz), errorOf(err)}
}

func EncodeFloat32(this js.Value, args []js.Value) interface{} {
	bz, err := src.EncodeFloat32(float32(args[0].Float()))
	return []interface{}{js.TypedArrayOf(bz), errorOf(err)}
}

func EncodeFloat64(this js.Value, args []js.Value) interface{} {
	bz, err := src.EncodeFloat64(args[0].Float())
	return []interface{}{js.TypedArrayOf(bz), errorOf(err)}
}

func EncodeBool(this js.Value, args []js.Value) interface{} {
	bz, err := src.EncodeBool(args[0].Bool())
	return []interface{}{js.TypedArrayOf(bz), errorOf(err)}
}

func EncodeString(this js.Value, args []js.Value) interface{} {
	bz, err := src.EncodeString(args[0].String())
	return []interface{}{js.TypedArrayOf(bz), errorOf(err)}
}

func EncodeTime(this js.Value, args []js.Value) interface{} {
	bz, err := src.EncodeTime(time.Time{}) // @FIXME: not implemented
	return []interface{}{js.TypedArrayOf(bz), errorOf(err)}
}
