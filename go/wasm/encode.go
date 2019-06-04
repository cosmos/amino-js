// +build js,wasm

package main

import (
	"github.com/cosmos/amino-js/go/src"
	"syscall/js"
	"time"
)

func EncodeBool(this js.Value, args []js.Value) interface{} {
	bz := src.EncodeBool(args[0].Bool())
	return js.TypedArrayOf(bz)
}

func EncodeByte(this js.Value, args []js.Value) interface{} {
	bz := src.EncodeByte(byte(args[0].Int()))
	return js.TypedArrayOf(bz)
}

func EncodeByteSlice(this js.Value, args []js.Value) interface{} {
	bz := typedArrayToByteSlice(args[0])
	bz2 := src.EncodeByteSlice(bz)
	return js.TypedArrayOf(bz2)
}

func EncodeFloat32(this js.Value, args []js.Value) interface{} {
	bz := src.EncodeFloat32(float32(args[0].Float()))
	return js.TypedArrayOf(bz)
}

func EncodeFloat64(this js.Value, args []js.Value) interface{} {
	bz := src.EncodeFloat64(args[0].Float())
	return js.TypedArrayOf(bz)
}

func EncodeInt16(this js.Value, args []js.Value) interface{} {
	bz := src.EncodeInt16(int16(args[0].Int()))
	return js.TypedArrayOf(bz)
}

func EncodeInt32(this js.Value, args []js.Value) interface{} {
	bz := src.EncodeInt32(int32(args[0].Int()))
	return js.TypedArrayOf(bz)
}

func EncodeInt64(this js.Value, args []js.Value) interface{} {
	bz := src.EncodeInt64(int64(args[0].Int()))
	return js.TypedArrayOf(bz)
}

func EncodeInt8(this js.Value, args []js.Value) interface{} {
	bz := src.EncodeInt8(int8(args[0].Int()))
	return js.TypedArrayOf(bz)
}

func EncodeString(this js.Value, args []js.Value) interface{} {
	bz := src.EncodeString(args[0].String())
	return js.TypedArrayOf(bz)
}

func EncodeTime(this js.Value, args []js.Value) interface{} {
	bz := src.EncodeTime(time.Time{}) // @FIXME
	return js.TypedArrayOf(bz)
}

func EncodeUint16(this js.Value, args []js.Value) interface{} {
	bz := src.EncodeUint16(uint16(args[0].Int()))
	return js.TypedArrayOf(bz)
}

func EncodeUint32(this js.Value, args []js.Value) interface{} {
	bz := src.EncodeUint32(uint32(args[0].Int()))
	return js.TypedArrayOf(bz)
}

func EncodeUint64(this js.Value, args []js.Value) interface{} {
	bz := src.EncodeUint64(uint64(args[0].Int()))
	return js.TypedArrayOf(bz)
}

func EncodeUint8(this js.Value, args []js.Value) interface{} {
	bz := src.EncodeUint8(uint8(args[0].Int()))
	return js.TypedArrayOf(bz)
}

func EncodeUvarint(this js.Value, args []js.Value) interface{} {
	bz := src.EncodeUvarint(uint64(args[0].Int()))
	return js.TypedArrayOf(bz)
}

func EncodeVarint(this js.Value, args []js.Value) interface{} {
	bz := src.EncodeVarint(int64(args[0].Int()))
	return js.TypedArrayOf(bz)
}
