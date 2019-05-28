package js

import (
	"time"
)

func EncodeBool(b bool) []byte {
	bz, err := encodeBool(b)
	if err != nil {
		panic(err)
	}
	return bz
}

func EncodeByte(b byte) []byte {
	bz, err := encodeByte(b)
	if err != nil {
		panic(err)
	}
	return bz
}

func EncodeByteSlice(bz []byte) []byte {
	bz2, err := encodeByteSlice(bz)
	if err != nil {
		panic(err)
	}
	return bz2
}

func EncodeFloat32(f float32) []byte {
	bz, err := encodeFloat32(f)
	if err != nil {
		panic(err)
	}
	return bz
}

func EncodeFloat64(f float64) []byte {
	bz, err := encodeFloat64(f)
	if err != nil {
		panic(err)
	}
	return bz
}

func EncodeInt16(i int16) []byte {
	bz, err := encodeInt16(i)
	if err != nil {
		panic(err)
	}
	return bz
}

func EncodeInt32(i int32) []byte {
	bz, err := encodeInt32(i)
	if err != nil {
		panic(err)
	}
	return bz
}

func EncodeInt64(i int64) []byte {
	bz, err := encodeInt64(i)
	if err != nil {
		panic(err)
	}
	return bz
}

func EncodeInt8(i int8) []byte {
	bz, err := encodeInt8(i)
	if err != nil {
		panic(err)
	}
	return bz
}

func EncodeString(s string) []byte {
	bz, err := encodeString(s)
	if err != nil {
		panic(err)
	}
	return bz
}

func EncodeTime(t time.Time) []byte {
	bz, err := encodeTime(t)
	if err != nil {
		panic(err)
	}
	return bz
}

func EncodeUint16(u uint16) []byte {
	bz, err := encodeUint16(u)
	if err != nil {
		panic(err)
	}
	return bz
}

func EncodeUint32(u uint32) []byte {
	bz, err := encodeUint32(u)
	if err != nil {
		panic(err)
	}
	return bz
}

func EncodeUint64(u uint64) []byte {
	bz, err := encodeUint64(u)
	if err != nil {
		panic(err)
	}
	return bz
}

func EncodeUint8(u uint8) []byte {
	bz, err := encodeUint8(u)
	if err != nil {
		panic(err)
	}
	return bz
}

func EncodeUvarint(u uint64) []byte {
	bz, err := encodeUvarint(u)
	if err != nil {
		panic(err)
	}
	return bz
}

func EncodeVarint(i int64) []byte {
	bz, err := encodeVarint(i)
	if err != nil {
		panic(err)
	}
	return bz
}
