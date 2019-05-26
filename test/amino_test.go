package main

import (
	"math"
	"testing"
	"time"
)

func TestEncode(t *testing.T) {
	var val interface{}
	var err error

	val, err = EncodeBool(true)
	val, err = EncodeBool(false)

	val, err = EncodeByte(byte('a'))
	val, err = EncodeByte(byte(0))

	val, err = EncodeByteSlice(make([]byte, 4))
	val, err = EncodeByteSlice([]byte{})

	val, err = EncodeFloat32(math.MaxFloat32)
	val, err = EncodeFloat32(math.SmallestNonzeroFloat32)
	val, err = EncodeFloat32(0)

	val, err = EncodeFloat64(math.MaxFloat64)
	val, err = EncodeFloat64(math.SmallestNonzeroFloat64)
	val, err = EncodeFloat64(0)

	val, err = EncodeInt8(math.MaxInt8)
	val, err = EncodeInt8(math.MinInt8)
	val, err = EncodeInt8(0)

	val, err = EncodeInt16(math.MaxInt16)
	val, err = EncodeInt16(math.MinInt16)
	val, err = EncodeInt16(0)

	val, err = EncodeInt32(math.MaxInt32)
	val, err = EncodeInt32(math.MinInt32)
	val, err = EncodeInt32(0)

	val, err = EncodeInt64(math.MaxInt64)
	val, err = EncodeInt64(math.MinInt64)
	val, err = EncodeInt64(9007199254740991)
	val, err = EncodeInt64(-9007199254740991)
	val, err = EncodeInt64(0)

	val, err = EncodeString("hello")

	val, err = EncodeTime(time.Now())
	val, err = EncodeTime(time.Date(1970, 1, 1, 0, 0, 1, 0, time.UTC))
	val, err = EncodeTime(time.Date(2000, 1, 1, 0, 0, 0, 0, time.UTC))

	val, err = EncodeUint8(math.MaxUint8)
	val, err = EncodeUint8(0)

	val, err = EncodeUint16(math.MaxUint16)
	val, err = EncodeUint16(0)

	val, err = EncodeUint32(math.MaxUint32)
	val, err = EncodeUint32(0)

	val, err = EncodeUint64(math.MaxUint64)
	val, err = EncodeUint64(0)

	val, err = EncodeVarint(math.MaxInt64)
	val, err = EncodeVarint(math.MinInt64)
	val, err = EncodeVarint(9007199254740991)
	val, err = EncodeVarint(9007199254740991 * -1)
	val, err = EncodeVarint(0)

	val, err = EncodeUvarint(math.MaxUint64)
	val, err = EncodeUvarint(9007199254740991)
	val, err = EncodeUvarint(0)

	_ = val
	_ = err
}
