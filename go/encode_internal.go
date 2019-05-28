package js

import (
	"bytes"
	"github.com/tendermint/go-amino"
	"time"
)

func encodeBool(b bool) (bz []byte, err error) {
	var w bytes.Buffer
	err = amino.EncodeBool(&w, b)
	if err != nil {
		return nil, err
	}
	return w.Bytes(), nil
}

func encodeByte(b byte) (bz []byte, err error) {
	var w bytes.Buffer
	err = amino.EncodeByte(&w, b)
	if err != nil {
		return nil, err
	}
	return w.Bytes(), nil
}

func encodeByteSlice(bz []byte) (bz2 []byte, err error) {
	var w bytes.Buffer
	err = amino.EncodeByteSlice(&w, bz)
	if err != nil {
		return nil, err
	}
	return w.Bytes(), nil
}

func encodeFloat32(f float32) (bz []byte, err error) {
	var w bytes.Buffer
	err = amino.EncodeFloat32(&w, f)
	if err != nil {
		return nil, err
	}
	return w.Bytes(), nil
}

func encodeFloat64(f float64) (bz []byte, err error) {
	var w bytes.Buffer
	err = amino.EncodeFloat64(&w, f)
	if err != nil {
		return nil, err
	}
	return w.Bytes(), nil
}

func encodeInt16(i int16) (bz []byte, err error) {
	var w bytes.Buffer
	err = amino.EncodeInt16(&w, i)
	if err != nil {
		return nil, err
	}
	return w.Bytes(), nil
}

func encodeInt32(i int32) (bz []byte, err error) {
	var w bytes.Buffer
	err = amino.EncodeInt32(&w, i)
	if err != nil {
		return nil, err
	}
	return w.Bytes(), nil
}

func encodeInt64(i int64) (bz []byte, err error) {
	var w bytes.Buffer
	err = amino.EncodeInt64(&w, i)
	if err != nil {
		return nil, err
	}
	return w.Bytes(), nil
}

func encodeInt8(i int8) (bz []byte, err error) {
	var w bytes.Buffer
	err = amino.EncodeInt8(&w, i)
	if err != nil {
		return nil, err
	}
	return w.Bytes(), nil
}

func encodeString(s string) (bz []byte, err error) {
	var w bytes.Buffer
	err = amino.EncodeString(&w, s)
	if err != nil {
		return nil, err
	}
	return w.Bytes(), nil
}

func encodeTime(t time.Time) (bz []byte, err error) {
	var w bytes.Buffer
	err = amino.EncodeTime(&w, t)
	if err != nil {
		return nil, err
	}
	return w.Bytes(), nil
}

func encodeUint16(u uint16) (bz []byte, err error) {
	var w bytes.Buffer
	err = amino.EncodeUint16(&w, u)
	if err != nil {
		return nil, err
	}
	return w.Bytes(), nil
}

func encodeUint32(u uint32) (bz []byte, err error) {
	var w bytes.Buffer
	err = amino.EncodeUint32(&w, u)
	if err != nil {
		return nil, err
	}
	return w.Bytes(), nil
}

func encodeUint64(u uint64) (bz []byte, err error) {
	var w bytes.Buffer
	err = amino.EncodeUint64(&w, u)
	if err != nil {
		return nil, err
	}
	return w.Bytes(), nil
}

func encodeUint8(u uint8) (bz []byte, err error) {
	var w bytes.Buffer
	err = amino.EncodeUint8(&w, u)
	if err != nil {
		return nil, err
	}
	return w.Bytes(), nil
}

func encodeUvarint(u uint64) (bz []byte, err error) {
	var w bytes.Buffer
	err = amino.EncodeUvarint(&w, u)
	if err != nil {
		return nil, err
	}
	return w.Bytes(), nil
}

func encodeVarint(i int64) (bz []byte, err error) {
	var w bytes.Buffer
	err = amino.EncodeVarint(&w, i)
	if err != nil {
		return nil, err
	}
	return w.Bytes(), nil
}
