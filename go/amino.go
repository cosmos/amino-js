package main

import (
    "github.com/gopherjs/gopherjs/js"
    "github.com/tendermint/go-amino"
)

func main() {
    js.Global.Set("Amino", map[string]interface{}{
        "Go": map[string]interface{}{
            "DecodeBool":              amino.DecodeBool,
            "DecodeByte":              amino.DecodeByte,
            "DecodeByteSlice":         amino.DecodeByteSlice,
            "DecodeDisambPrefixBytes": amino.DecodeDisambPrefixBytes,
            "DecodeFloat32":           amino.DecodeFloat32,
            "DecodeFloat64":           amino.DecodeFloat64,
            "DecodeInt16":             amino.DecodeInt16,
            "DecodeInt32":             amino.DecodeInt32,
            "DecodeInt64":             amino.DecodeInt64,
            "DecodeInt8":              amino.DecodeInt8,
            "DecodeString":            amino.DecodeString,
            "DecodeTime":              amino.DecodeTime,
            "DecodeUint16":            amino.DecodeUint16,
            "DecodeUint32":            amino.DecodeUint32,
            "DecodeUint64":            amino.DecodeUint64,
            "DecodeUint8":             amino.DecodeUint8,
            "DecodeUvarint":           amino.DecodeUvarint,
            "DecodeVarint":            amino.DecodeVarint,

            "EncodeBool":      EncodeBool,
            "EncodeByte":      EncodeByte,
            "EncodeByteSlice": EncodeByteSlice,
            "EncodeFloat32":   EncodeFloat32,
            "EncodeFloat64":   EncodeFloat64,
            "EncodeInt16":     EncodeInt16,
            "EncodeInt32":     EncodeInt32,
            "EncodeInt64":     EncodeInt64,
            "EncodeInt8":      EncodeInt8,
            "EncodeString":    EncodeString,
            "EncodeTime":      EncodeTime,
            "EncodeUint16":    EncodeUint16,
            "EncodeUint32":    EncodeUint32,
            "EncodeUint64":    EncodeUint64,
            "EncodeUint8":     EncodeUint8,
            "EncodeUvarint":   EncodeUvarint,
            "EncodeVarint":    EncodeVarint,

            "NameToDisfix":  amino.NameToDisfix,
            "ByteSliceSize": amino.ByteSliceSize,
            "UvarintSize":   amino.UvarintSize,
            "VarintSize":    amino.VarintSize,

            // @TODO

            "DeepCopy": amino.DeepCopy,

            "MarshalBinaryBare":                 amino.MarshalBinaryBare,
            "MarshalBinaryLengthPrefixed":       amino.MarshalBinaryLengthPrefixed,
            "MarshalBinaryLengthPrefixedWriter": amino.MarshalBinaryLengthPrefixedWriter,
            "MarshalJSON":                       amino.MarshalJSON,
            "MarshalJSONIndent":                 amino.MarshalJSONIndent,
            "MustMarshalBinaryBare":             amino.MustMarshalBinaryBare,
            "MustMarshalBinaryLengthPrefixed":   amino.MustMarshalBinaryLengthPrefixed,
            "MustUnmarshalBinaryBare":           amino.MustUnmarshalBinaryBare,
            "MustUnmarshalBinaryLengthPrefixed": amino.MustUnmarshalBinaryLengthPrefixed,

            "UnmarshalBinaryBare":                 amino.UnmarshalBinaryBare,
            "UnmarshalBinaryLengthPrefixed":       amino.UnmarshalBinaryLengthPrefixed,
            "UnmarshalBinaryLengthPrefixedReader": amino.UnmarshalBinaryLengthPrefixedReader,
            "UnmarshalJSON":                       amino.UnmarshalJSON,
        },
        "JS": map[string]interface{}{
            "decodeBool":        jsDecodeBool,
            "decodeByte":        jsDecodeByte,
            "decodeByteSlice":   jsDecodeByteSlice,
            "decodeDisfixBytes": jsDecodeDisfixBytes,
            "decodeFloat32":     jsDecodeFloat32,
            "decodeFloat64":     jsDecodeFloat64,
            "decodeInt16":       jsDecodeInt16,
            "decodeInt32":       jsDecodeInt32,
            "decodeInt64":       jsDecodeInt64,
            "decodeInt8":        jsDecodeInt8,
            "decodeString":      jsDecodeString,
            "decodeTime":        jsDecodeTime,
            "decodeUint16":      jsDecodeUint16,
            "decodeUint32":      jsDecodeUint32,
            "decodeUint64":      jsDecodeUint64,
            "decodeUint8":       jsDecodeUint8,
            "decodeUvarint":     jsDecodeUvarint,
            "decodeVarint":      jsDecodeVarint,

            "encodeBool":      jsEncodeBool,
            "encodeByte":      jsEncodeByte,
            "encodeByteSlice": jsEncodeByteSlice,
            "encodeFloat32":   jsEncodeFloat32,
            "encodeFloat64":   jsEncodeFloat64,
            "encodeInt16":     jsEncodeInt16,
            "encodeInt32":     jsEncodeInt32,
            "encodeInt64":     jsEncodeInt64,
            "encodeInt8":      jsEncodeInt8,
            "encodeString":    jsEncodeString,
            "encodeTime":      jsEncodeTime,
            "encodeUint16":    jsEncodeUint16,
            "encodeUint32":    jsEncodeUint32,
            "encodeUint64":    jsEncodeUint64,
            "encodeUint8":     jsEncodeUint8,
            "encodeUvarint":   jsEncodeUvarint,
            "encodeVarint":    jsEncodeVarint,

            "nameToDisfix":     amino.NameToDisfix,
            "getByteSliceSize": amino.ByteSliceSize,
            "getUvarintSize":   amino.UvarintSize,
            "getVarintSize":    amino.VarintSize,

            // @TODO

            "deepCopy": amino.DeepCopy,

            "marshalBinaryBare":                 amino.MarshalBinaryBare,
            "marshalBinaryLengthPrefixed":       amino.MarshalBinaryLengthPrefixed,
            "marshalBinaryLengthPrefixedWriter": amino.MarshalBinaryLengthPrefixedWriter,
            "marshalJSON":                       amino.MarshalJSON,
            "marshalJSONIndent":                 amino.MarshalJSONIndent,
            "mustMarshalBinaryBare":             amino.MustMarshalBinaryBare,
            "mustMarshalBinaryLengthPrefixed":   amino.MustMarshalBinaryLengthPrefixed,
            "mustUnmarshalBinaryBare":           amino.MustUnmarshalBinaryBare,
            "mustUnmarshalBinaryLengthPrefixed": amino.MustUnmarshalBinaryLengthPrefixed,

            "unmarshalBinaryBare":                 amino.UnmarshalBinaryBare,
            "unmarshalBinaryLengthPrefixed":       amino.UnmarshalBinaryLengthPrefixed,
            "unmarshalBinaryLengthPrefixedReader": amino.UnmarshalBinaryLengthPrefixedReader,
            "unmarshalJSON":                       amino.UnmarshalJSON,
        },
    })
}
