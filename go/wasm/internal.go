// +build js,wasm

package main

import (
	"syscall/js"
)

func typedArrayToByteSlice(arg js.Value) []byte {
	length := arg.Length()
	bz := make([]byte, length)
	for i := 0; i < length; i++ {
		bz[i] = byte(arg.Index(i).Int())
	}
	return bz
}

func encodeDecodeType(fn func(bz []byte, bare bool) []byte) js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		bz := typedArrayToByteSlice(args[0])
		bz2 := fn(bz, args[1].Bool())
		return js.TypedArrayOf(bz2)
	})
}
