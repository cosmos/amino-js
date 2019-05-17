package main

import (
    "github.com/tendermint/go-amino"
    "time"
)

func jsDecodeBool(bz []byte) bool {
    b, _, err := amino.DecodeBool(bz)
    if err != nil {
        panic(err)
    }
    return b
}

func jsDecodeByte(bz []byte) byte {
    b, _, err := amino.DecodeByte(bz)
    if err != nil {
        panic(err)
    }
    return b
}

func jsDecodeByteSlice(bz []byte) []byte {
    bz2, _, err := amino.DecodeByteSlice(bz)
    if err != nil {
        panic(err)
    }
    return bz2
}

func jsDecodeDisfixBytes(bz []byte) (dbr *amino.DisambBytes, pbr *amino.PrefixBytes) {
    db, hasDb, pb, hasPb, _, err := amino.DecodeDisambPrefixBytes(bz)
    if err != nil {
        panic(err)
    }

    dbr, pbr = &db, &pb
    if !hasDb {
        dbr = nil
    }

    if !hasPb {
        pbr = nil
    }

    return dbr, pbr
}

func jsDecodeFloat32(bz []byte) float32 {
    f, _, err := amino.DecodeFloat32(bz)
    if err != nil {
        panic(err)
    }
    return f
}

func jsDecodeFloat64(bz []byte) float64 {
    f, _, err := amino.DecodeFloat64(bz)
    if err != nil {
        panic(err)
    }
    return f
}

func jsDecodeInt16(bz []byte) int16 {
    i, _, err := amino.DecodeInt16(bz)
    if err != nil {
        panic(err)
    }
    return i
}

func jsDecodeInt32(bz []byte) int32 {
    i, _, err := amino.DecodeInt32(bz)
    if err != nil {
        panic(err)
    }
    return i
}

func jsDecodeInt64(bz []byte) int64 {
    i, _, err := amino.DecodeInt64(bz)
    if err != nil {
        panic(err)
    }
    return i
}

func jsDecodeInt8(bz []byte) int8 {
    i, _, err := amino.DecodeInt8(bz)
    if err != nil {
        panic(err)
    }
    return i
}

func jsDecodeString(bz []byte) string {
    s, _, err := amino.DecodeString(bz)
    if err != nil {
        panic(err)
    }
    return s
}

func jsDecodeTime(bz []byte) time.Time {
    t, _, err := amino.DecodeTime(bz)
    if err != nil {
        panic(err)
    }
    return t
}

func jsDecodeUint16(bz []byte) uint16 {
    u, _, err := amino.DecodeUint16(bz)
    if err != nil {
        panic(err)
    }
    return u
}

func jsDecodeUint32(bz []byte) uint32 {
    u, _, err := amino.DecodeUint32(bz)
    if err != nil {
        panic(err)
    }
    return u
}

func jsDecodeUint64(bz []byte) uint64 {
    u, _, err := amino.DecodeUint64(bz)
    if err != nil {
        panic(err)
    }
    return u
}

func jsDecodeUint8(bz []byte) uint8 {
    u, _, err := amino.DecodeUint8(bz)
    if err != nil {
        panic(err)
    }
    return u
}

func jsDecodeUvarint(bz []byte) uint64 {
    u, _, err := amino.DecodeUvarint(bz)
    if err != nil {
        panic(err)
    }
    return u
}

func jsDecodeVarint(bz []byte) int64 {
    i, _, err := amino.DecodeVarint(bz)
    if err != nil {
        panic(err)
    }
    return i
}
