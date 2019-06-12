package main

import (
	"github.com/cosmos/amino-js/go/src"
	"time"
)

func EncodeByte(b byte) (bz []byte) {
	bz, err := src.EncodeByte(b)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeByteSlice(bz []byte) (bz2 []byte) {
	bz2, err := src.EncodeByteSlice(bz)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeInt8(i int8) (bz []byte) {
	bz, err := src.EncodeInt8(i)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeInt16(i int16) (bz []byte) {
	bz, err := src.EncodeInt16(i)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeInt32(i int32) (bz []byte) {
	bz, err := src.EncodeInt32(i)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeInt64(i int64) (bz []byte) {
	bz, err := src.EncodeInt64(i)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeVarint(i int64) (bz []byte) {
	bz, err := src.EncodeVarint(i)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeUint8(u uint8) (bz []byte) {
	bz, err := src.EncodeUint8(u)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeUint16(u uint16) (bz []byte) {
	bz, err := src.EncodeUint16(u)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeUint32(u uint32) (bz []byte) {
	bz, err := src.EncodeUint32(u)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeUint64(u uint64) (bz []byte) {
	bz, err := src.EncodeUint64(u)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeUvarint(u uint64) (bz []byte) {
	bz, err := src.EncodeUvarint(u)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeFloat32(f float32) (bz []byte) {
	bz, err := src.EncodeFloat32(f)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeFloat64(f float64) (bz []byte) {
	bz, err := src.EncodeFloat64(f)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeBool(b bool) (bz []byte) {
	bz, err := src.EncodeBool(b)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeString(s string) (bz []byte) {
	bz, err := src.EncodeString(s)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeTime(t time.Time) (bz []byte) {
	bz, err := src.EncodeTime(t)
	if err != nil {
		panic(err)
	}
	return
}
