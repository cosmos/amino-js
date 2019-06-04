package misc

import (
	"github.com/cosmos/amino-js/go/src"
	"math"
	"testing"
	"time"
)

func TestBasicEncode(t *testing.T) {
	var val interface{}
	var err error

	val, err = src.EncodeBool(true)
	val, err = src.EncodeBool(false)

	val, err = src.EncodeByte(byte('a'))
	val, err = src.EncodeByte(byte(0))

	val, err = src.EncodeByteSlice(make([]byte, 4))
	val, err = src.EncodeByteSlice([]byte{})

	val, err = src.EncodeFloat32(math.MaxFloat32)
	val, err = src.EncodeFloat32(math.SmallestNonzeroFloat32)
	val, err = src.EncodeFloat32(0)

	val, err = src.EncodeFloat64(math.MaxFloat64)
	val, err = src.EncodeFloat64(math.SmallestNonzeroFloat64)
	val, err = src.EncodeFloat64(0)

	val, err = src.EncodeInt8(math.MaxInt8)
	val, err = src.EncodeInt8(math.MinInt8)
	val, err = src.EncodeInt8(0)

	val, err = src.EncodeInt16(math.MaxInt16)
	val, err = src.EncodeInt16(math.MinInt16)
	val, err = src.EncodeInt16(0)

	val, err = src.EncodeInt32(math.MaxInt32)
	val, err = src.EncodeInt32(math.MinInt32)
	val, err = src.EncodeInt32(0)

	val, err = src.EncodeInt64(math.MaxInt64)
	val, err = src.EncodeInt64(math.MinInt64)
	val, err = src.EncodeInt64(9007199254740991)
	val, err = src.EncodeInt64(-9007199254740991)
	val, err = src.EncodeInt64(0)

	val, err = src.EncodeString("hello")

	val, err = src.EncodeTime(time.Now())
	val, err = src.EncodeTime(time.Date(1970, 1, 1, 0, 0, 1, 0, time.UTC))
	val, err = src.EncodeTime(time.Date(2000, 1, 1, 0, 0, 0, 0, time.UTC))

	val, err = src.EncodeUint8(math.MaxUint8)
	val, err = src.EncodeUint8(0)

	val, err = src.EncodeUint16(math.MaxUint16)
	val, err = src.EncodeUint16(0)

	val, err = src.EncodeUint32(math.MaxUint32)
	val, err = src.EncodeUint32(0)

	val, err = src.EncodeUint64(math.MaxUint64)
	val, err = src.EncodeUint64(0)

	val, err = src.EncodeVarint(math.MaxInt64)
	val, err = src.EncodeVarint(math.MinInt64)
	val, err = src.EncodeVarint(9007199254740991)
	val, err = src.EncodeVarint(9007199254740991 * -1)
	val, err = src.EncodeVarint(0)

	val, err = src.EncodeUvarint(math.MaxUint64)
	val, err = src.EncodeUvarint(9007199254740991)
	val, err = src.EncodeUvarint(0)

	_ = val
	_ = err
}
