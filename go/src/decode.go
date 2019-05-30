package src

import (
	"time"
)

func DecodeBool(bz []byte) (b bool, n int) {
	b, n, err := decodeBool(bz)
	if err != nil {
		panic(err)
	}
	return b, n
}

func DecodeByte(bz []byte) (b byte, n int) {
	b, n, err := decodeByte(bz)
	if err != nil {
		panic(err)
	}
	return b, n
}

func DecodeByteSlice(bz []byte) (bz2 []byte, n int) {
	bz2, n, err := decodeByteSlice(bz)
	if err != nil {
		panic(err)
	}
	return bz2, n
}

func DecodeFloat32(bz []byte) (f float32, n int) {
	f, n, err := decodeFloat32(bz)
	if err != nil {
		panic(err)
	}
	return f, n
}

func DecodeFloat64(bz []byte) (f float64, n int) {
	f, n, err := decodeFloat64(bz)
	if err != nil {
		panic(err)
	}
	return f, n
}

func DecodeInt16(bz []byte) (i int16, n int) {
	i, n, err := decodeInt16(bz)
	if err != nil {
		panic(err)
	}
	return i, n
}

func DecodeInt32(bz []byte) (i int32, n int) {
	i, n, err := decodeInt32(bz)
	if err != nil {
		panic(err)
	}
	return i, n
}

func DecodeInt64(bz []byte) (i int64, n int) {
	i, n, err := decodeInt64(bz)
	if err != nil {
		panic(err)
	}
	return i, n
}

func DecodeInt8(bz []byte) (i int8, n int) {
	i, n, err := decodeInt8(bz)
	if err != nil {
		panic(err)
	}
	return i, n
}

func DecodeString(bz []byte) (s string, n int) {
	s, n, err := decodeString(bz)
	if err != nil {
		panic(err)
	}
	return s, n
}

func DecodeTime(bz []byte) (t time.Time, n int) {
	t, n, err := decodeTime(bz)
	if err != nil {
		panic(err)
	}
	return t, n
}

func DecodeUint16(bz []byte) (u uint16, n int) {
	u, n, err := decodeUint16(bz)
	if err != nil {
		panic(err)
	}
	return u, n
}

func DecodeUint32(bz []byte) (u uint32, n int) {
	u, n, err := decodeUint32(bz)
	if err != nil {
		panic(err)
	}
	return u, n
}

func DecodeUint64(bz []byte) (u uint64, n int) {
	u, n, err := decodeUint64(bz)
	if err != nil {
		panic(err)
	}
	return u, n
}

func DecodeUint8(bz []byte) (u uint8, n int) {
	u, n, err := decodeUint8(bz)
	if err != nil {
		panic(err)
	}
	return u, n
}

func DecodeUvarint(bz []byte) (u uint64, n int) {
	u, n, err := decodeUvarint(bz)
	if err != nil {
		panic(err)
	}
	return u, n
}

func DecodeVarint(bz []byte) (i int64, n int) {
	i, n, err := decodeVarint(bz)
	if err != nil {
		panic(err)
	}
	return i, n
}
