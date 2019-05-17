package main

import (
    "bytes"
    "github.com/tendermint/go-amino"
    "time"
)

// EncodeBool encodes a bool
func EncodeBool(b bool) (bz []byte, err error) {
    var w bytes.Buffer
    err = amino.EncodeBool(&w, b)
    if err != nil {
        return nil, err
    }
    return w.Bytes(), nil
}

func jsEncodeBool(b bool) []byte {
    bz, err := EncodeBool(b)
    if err != nil {
        panic(err)
    }
    return bz
}

func EncodeByte(b byte) (bz []byte, err error) {
    var w bytes.Buffer
    err = amino.EncodeByte(&w, b)
    if err != nil {
        return nil, err
    }
    return w.Bytes(), nil
}

func jsEncodeByte(b byte) []byte {
    bz, err := EncodeByte(b)
    if err != nil {
        panic(err)
    }
    return bz
}

func EncodeByteSlice(bz []byte) (bz2 []byte, err error) {
    var w bytes.Buffer
    err = amino.EncodeByteSlice(&w, bz)
    if err != nil {
        return nil, err
    }
    return w.Bytes(), nil
}

func jsEncodeByteSlice(bz []byte) []byte {
    bz, err := EncodeByteSlice(bz)
    if err != nil {
        panic(err)
    }
    return bz
}

func EncodeFloat32(f float32) (bz []byte, err error) {
    var w bytes.Buffer
    err = amino.EncodeFloat32(&w, f)
    if err != nil {
        return nil, err
    }
    return w.Bytes(), nil
}

func jsEncodeFloat32(f float32) []byte {
    bz, err := EncodeFloat32(f)
    if err != nil {
        panic(err)
    }
    return bz
}

func EncodeFloat64(f float64) (bz []byte, err error) {
    var w bytes.Buffer
    err = amino.EncodeFloat64(&w, f)
    if err != nil {
        return nil, err
    }
    return w.Bytes(), nil
}

func jsEncodeFloat64(f float64) []byte {
    bz, err := EncodeFloat64(f)
    if err != nil {
        panic(err)
    }
    return bz
}

func EncodeInt16(i int16) (bz []byte, err error) {
    var w bytes.Buffer
    err = amino.EncodeInt16(&w, i)
    if err != nil {
        return nil, err
    }
    return w.Bytes(), nil
}

func jsEncodeInt16(i int16) []byte {
    bz, err := EncodeInt16(i)
    if err != nil {
        panic(err)
    }
    return bz
}

func EncodeInt32(i int32) (bz []byte, err error) {
    var w bytes.Buffer
    err = amino.EncodeInt32(&w, i)
    if err != nil {
        return nil, err
    }
    return w.Bytes(), nil
}

func jsEncodeInt32(i int32) []byte {
    bz, err := EncodeInt32(i)
    if err != nil {
        panic(err)
    }
    return bz
}

func EncodeInt64(i int64) (bz []byte, err error) {
    var w bytes.Buffer
    err = amino.EncodeInt64(&w, i)
    if err != nil {
        return nil, err
    }
    return w.Bytes(), nil
}

func jsEncodeInt64(i int64) []byte {
    bz, err := EncodeInt64(i)
    if err != nil {
        panic(err)
    }
    return bz
}

func EncodeInt8(i int8) (bz []byte, err error) {
    var w bytes.Buffer
    err = amino.EncodeInt8(&w, i)
    if err != nil {
        return nil, err
    }
    return w.Bytes(), nil
}

func jsEncodeInt8(i int8) []byte {
    bz, err := EncodeInt8(i)
    if err != nil {
        panic(err)
    }
    return bz
}

func EncodeString(s string) (bz []byte, err error) {
    var w bytes.Buffer
    err = amino.EncodeString(&w, s)
    if err != nil {
        return nil, err
    }
    return w.Bytes(), nil
}

func jsEncodeString(s string) []byte {
    bz, err := EncodeString(s)
    if err != nil {
        panic(err)
    }
    return bz
}

func EncodeTime(t time.Time) (bz []byte, err error) {
    var w bytes.Buffer
    err = amino.EncodeTime(&w, t)
    if err != nil {
        return nil, err
    }
    return w.Bytes(), nil
}

func jsEncodeTime(t time.Time) []byte {
    bz, err := EncodeTime(t)
    if err != nil {
        panic(err)
    }
    return bz
}

func EncodeUint16(u uint16) (bz []byte, err error) {
    var w bytes.Buffer
    err = amino.EncodeUint16(&w, u)
    if err != nil {
        return nil, err
    }
    return w.Bytes(), nil
}

func jsEncodeUint16(u uint16) []byte {
    bz, err := EncodeUint16(u)
    if err != nil {
        panic(err)
    }
    return bz
}

func EncodeUint32(u uint32) (bz []byte, err error) {
    var w bytes.Buffer
    err = amino.EncodeUint32(&w, u)
    if err != nil {
        return nil, err
    }
    return w.Bytes(), nil
}

func jsEncodeUint32(u uint32) []byte {
    bz, err := EncodeUint32(u)
    if err != nil {
        panic(err)
    }
    return bz
}

func EncodeUint64(u uint64) (bz []byte, err error) {
    var w bytes.Buffer
    err = amino.EncodeUint64(&w, u)
    if err != nil {
        return nil, err
    }
    return w.Bytes(), nil
}

func jsEncodeUint64(u uint64) []byte {
    bz, err := EncodeUint64(u)
    if err != nil {
        panic(err)
    }
    return bz
}

func EncodeUint8(u uint8) (bz []byte, err error) {
    var w bytes.Buffer
    err = amino.EncodeUint8(&w, u)
    if err != nil {
        return nil, err
    }
    return w.Bytes(), nil
}

func jsEncodeUint8(u uint8) []byte {
    bz, err := EncodeUint8(u)
    if err != nil {
        panic(err)
    }
    return bz
}

func EncodeUvarint(u uint64) (bz []byte, err error) {
    var w bytes.Buffer
    amino.EncodeUvarint(&w, u)
    if err != nil {
        return nil, err
    }
    return w.Bytes(), nil
}

func jsEncodeUvarint(u uint64) []byte {
    bz, err := EncodeUvarint(u)
    if err != nil {
        panic(err)
    }
    return bz
}

func EncodeVarint(i int64) (bz []byte, err error) {
    var w bytes.Buffer
    err = amino.EncodeVarint(&w, i)
    if err != nil {
        return nil, err
    }
    return w.Bytes(), nil
}

func jsEncodeVarint(i int64) []byte {
    bz, err := EncodeVarint(i)
    if err != nil {
        panic(err)
    }
    return bz
}
