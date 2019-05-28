package misc

import (
	"math"
	"testing"
	"time"
	amino "github.com/jordansexton/go-amino-js/go"
)

func TestBasicEncode(t *testing.T) {
	var val interface{}
	var err error

	val, err = amino.EncodeBool(true)
	val, err = amino.EncodeBool(false)

	val, err = amino.EncodeByte(byte('a'))
	val, err = amino.EncodeByte(byte(0))

	val, err = amino.EncodeByteSlice(make([]byte, 4))
	val, err = amino.EncodeByteSlice([]byte{})

	val, err = amino.EncodeFloat32(math.MaxFloat32)
	val, err = amino.EncodeFloat32(math.SmallestNonzeroFloat32)
	val, err = amino.EncodeFloat32(0)

	val, err = amino.EncodeFloat64(math.MaxFloat64)
	val, err = amino.EncodeFloat64(math.SmallestNonzeroFloat64)
	val, err = amino.EncodeFloat64(0)

	val, err = amino.EncodeInt8(math.MaxInt8)
	val, err = amino.EncodeInt8(math.MinInt8)
	val, err = amino.EncodeInt8(0)

	val, err = amino.EncodeInt16(math.MaxInt16)
	val, err = amino.EncodeInt16(math.MinInt16)
	val, err = amino.EncodeInt16(0)

	val, err = amino.EncodeInt32(math.MaxInt32)
	val, err = amino.EncodeInt32(math.MinInt32)
	val, err = amino.EncodeInt32(0)

	val, err = amino.EncodeInt64(math.MaxInt64)
	val, err = amino.EncodeInt64(math.MinInt64)
	val, err = amino.EncodeInt64(9007199254740991)
	val, err = amino.EncodeInt64(-9007199254740991)
	val, err = amino.EncodeInt64(0)

	val, err = amino.EncodeString("hello")

	val, err = amino.EncodeTime(time.Now())
	val, err = amino.EncodeTime(time.Date(1970, 1, 1, 0, 0, 1, 0, time.UTC))
	val, err = amino.EncodeTime(time.Date(2000, 1, 1, 0, 0, 0, 0, time.UTC))

	val, err = amino.EncodeUint8(math.MaxUint8)
	val, err = amino.EncodeUint8(0)

	val, err = amino.EncodeUint16(math.MaxUint16)
	val, err = amino.EncodeUint16(0)

	val, err = amino.EncodeUint32(math.MaxUint32)
	val, err = amino.EncodeUint32(0)

	val, err = amino.EncodeUint64(math.MaxUint64)
	val, err = amino.EncodeUint64(0)

	val, err = amino.EncodeVarint(math.MaxInt64)
	val, err = amino.EncodeVarint(math.MinInt64)
	val, err = amino.EncodeVarint(9007199254740991)
	val, err = amino.EncodeVarint(9007199254740991 * -1)
	val, err = amino.EncodeVarint(0)

	val, err = amino.EncodeUvarint(math.MaxUint64)
	val, err = amino.EncodeUvarint(9007199254740991)
	val, err = amino.EncodeUvarint(0)

	_ = val
	_ = err
}
