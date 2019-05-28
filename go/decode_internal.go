package lib

import (
	"github.com/tendermint/go-amino"
	"time"
)

func decodeBool(bz []byte) (b bool, n int, err error) {
	return amino.DecodeBool(bz)
}

func decodeByte(bz []byte) (b byte, n int, err error) {
	return amino.DecodeByte(bz)
}

func decodeByteSlice(bz []byte) (bz2 []byte, n int, err error) {
	return amino.DecodeByteSlice(bz)
}

func decodeFloat32(bz []byte) (f float32, n int, err error) {
	return amino.DecodeFloat32(bz)
}

func decodeFloat64(bz []byte) (f float64, n int, err error) {
	return amino.DecodeFloat64(bz)
}

func decodeInt16(bz []byte) (i int16, n int, err error) {
	return amino.DecodeInt16(bz)
}

func decodeInt32(bz []byte) (i int32, n int, err error) {
	return amino.DecodeInt32(bz)
}

func decodeInt64(bz []byte) (i int64, n int, err error) {
	return amino.DecodeInt64(bz)
}

func decodeInt8(bz []byte) (i int8, n int, err error) {
	return amino.DecodeInt8(bz)
}

func decodeString(bz []byte) (s string, n int, err error) {
	return amino.DecodeString(bz)
}

func decodeTime(bz []byte) (t time.Time, n int, err error) {
	return amino.DecodeTime(bz)
}

func decodeUint16(bz []byte) (u uint16, n int, err error) {
	return amino.DecodeUint16(bz)
}

func decodeUint32(bz []byte) (u uint32, n int, err error) {
	return amino.DecodeUint32(bz)
}

func decodeUint64(bz []byte) (u uint64, n int, err error) {
	return amino.DecodeUint64(bz)
}

func decodeUint8(bz []byte) (u uint8, n int, err error) {
	return amino.DecodeUint8(bz)
}

func decodeUvarint(bz []byte) (u uint64, n int, err error) {
	return amino.DecodeUvarint(bz)
}

func decodeVarint(bz []byte) (i int64, n int, err error) {
	return amino.DecodeVarint(bz)
}
