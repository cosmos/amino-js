// +build js,wasm

package main

import (
	"encoding/json"
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

func encodeDecodeType(fn func(bz []byte, lengthPrefixed bool) (bz2 []byte, err error)) js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		bz := typedArrayToByteSlice(args[0])
		bz2, err := fn(bz, args[1].Bool())
		return []interface{}{js.TypedArrayOf(bz2), errorOf(err)}
	})
}

func errorOf(err error) interface{} {
	if err == nil {
		return nil
	}
	bz, _ := json.Marshal(err)
	return js.TypedArrayOf(bz)
}
