package main

import (
	"github.com/cosmos/amino-js/go/src"
	"time"
)

func DecodeByte(bz []byte) (b byte, n int) {
	b, n, err := src.DecodeByte(bz)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeByteSlice(bz []byte) (bz2 []byte, n int) {
	bz2, n, err := src.DecodeByteSlice(bz)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeInt8(bz []byte) (i int8, n int) {
	i, n, err := src.DecodeInt8(bz)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeInt16(bz []byte) (i int16, n int) {
	i, n, err := src.DecodeInt16(bz)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeInt32(bz []byte) (i int32, n int) {
	i, n, err := src.DecodeInt32(bz)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeInt64(bz []byte) (i int64, n int) {
	i, n, err := src.DecodeInt64(bz)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeVarint(bz []byte) (i int64, n int) {
	i, n, err := src.DecodeVarint(bz)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeUint8(bz []byte) (u uint8, n int) {
	u, n, err := src.DecodeUint8(bz)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeUint16(bz []byte) (u uint16, n int) {
	u, n, err := src.DecodeUint16(bz)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeUint32(bz []byte) (u uint32, n int) {
	u, n, err := src.DecodeUint32(bz)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeUint64(bz []byte) (u uint64, n int) {
	u, n, err := src.DecodeUint64(bz)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeUvarint(bz []byte) (u uint64, n int) {
	u, n, err := src.DecodeUvarint(bz)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeFloat32(bz []byte) (f float32, n int) {
	f, n, err := src.DecodeFloat32(bz)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeFloat64(bz []byte) (f float64, n int) {
	f, n, err := src.DecodeFloat64(bz)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeBool(bz []byte) (b bool, n int) {
	b, n, err := src.DecodeBool(bz)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeString(bz []byte) (s string, n int) {
	s, n, err := src.DecodeString(bz)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeTime(bz []byte) (t time.Time, n int) {
	t, n, err := src.DecodeTime(bz)
	if err != nil {
		panic(err)
	}
	return
}
