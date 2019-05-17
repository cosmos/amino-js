declare global {
    interface Window {
        Amino: AminoGlobal;
    }
}

const Amino = window.Amino;
export default Amino;

export interface AminoGlobal {
    Go: AminoGo;
    JS: AminoJS;
}

export type DecodeReturnType<T> = [T, number, null] | [null, null, Error];

export type EncodeReturnType<T> = [T, null] | [null, Error];

export interface AminoGo {
    DecodeBool (bytes: Uint8Array): DecodeReturnType<boolean>;
    DecodeByte (bytes: Uint8Array): DecodeReturnType<Uint8Array>;
    DecodeByteSlice (bytes: Uint8Array): DecodeReturnType<Uint8Array>;
    DecodeDisambPrefixBytes (bytes: Uint8Array): [Uint8Array, boolean, Uint8Array, boolean, number, null] | [null, null, null, null, null, Error];
    DecodeFloat32 (bytes: Uint8Array): DecodeReturnType<number>;
    DecodeFloat64 (bytes: Uint8Array): DecodeReturnType<number>;
    DecodeInt16 (bytes: Uint8Array): DecodeReturnType<number>;
    DecodeInt32 (bytes: Uint8Array): DecodeReturnType<number>;
    DecodeInt64 (bytes: Uint8Array): DecodeReturnType<number>;
    DecodeInt8 (bytes: Uint8Array): DecodeReturnType<number>;
    DecodeString (bytes: Uint8Array): DecodeReturnType<string>;
    DecodeTime (bytes: Uint8Array): DecodeReturnType<Date>;
    DecodeUint16 (bytes: Uint8Array): DecodeReturnType<number>;
    DecodeUint32 (bytes: Uint8Array): DecodeReturnType<number>;
    DecodeUint64 (bytes: Uint8Array): DecodeReturnType<number>;
    DecodeUint8 (bytes: Uint8Array): DecodeReturnType<number>;
    DecodeUvarint (bytes: Uint8Array): DecodeReturnType<number>;
    DecodeVarint (bytes: Uint8Array): DecodeReturnType<number>;

    EncodeBool (bool: boolean): EncodeReturnType<Uint8Array>;
    EncodeByte (byte: Uint8Array): EncodeReturnType<Uint8Array>;
    EncodeByteSlice (bytes: Uint8Array): EncodeReturnType<Uint8Array>;
    EncodeFloat32 (float: number): EncodeReturnType<Uint8Array>;
    EncodeFloat64 (float: number): EncodeReturnType<Uint8Array>;
    EncodeInt16 (int16: number): EncodeReturnType<Uint8Array>;
    EncodeInt32 (int32: number): EncodeReturnType<Uint8Array>;
    EncodeInt64 (int64: number): EncodeReturnType<Uint8Array>;
    EncodeInt8 (int8: number): EncodeReturnType<Uint8Array>;
    EncodeString (string: string): EncodeReturnType<Uint8Array>;
    EncodeTime (time: Date): EncodeReturnType<Uint8Array>;
    EncodeUint16 (uint16: number): EncodeReturnType<Uint8Array>;
    EncodeUint32 (uint32: number): EncodeReturnType<Uint8Array>;
    EncodeUint64 (uint64: number): EncodeReturnType<Uint8Array>;
    EncodeUint8 (uint8: number): EncodeReturnType<Uint8Array>;
    EncodeUvarint (uvarint: number): EncodeReturnType<Uint8Array>;
    EncodeVarint (varint: number): EncodeReturnType<Uint8Array>;

    NameToDisfix (name: string): [Uint8Array, Uint8Array];
    ByteSliceSize (bytes: Uint8Array): number;
    UvarintSize (uvarint: number): number;
    VarintSize (varint: number): number;
}

export interface AminoJS {
    decodeBool (bytes: Uint8Array): boolean;
    decodeByte (bytes: Uint8Array): Uint8Array;
    decodeByteSlice (bytes: Uint8Array): Uint8Array;
    decodeDisfixBytes (bytes: Uint8Array): [Uint8Array | null, Uint8Array | null];
    decodeFloat32 (bytes: Uint8Array): number;
    decodeFloat64 (bytes: Uint8Array): number;
    decodeInt16 (bytes: Uint8Array): number;
    decodeInt32 (bytes: Uint8Array): number;
    decodeInt64 (bytes: Uint8Array): number;
    decodeInt8 (bytes: Uint8Array): number;
    decodeString (bytes: Uint8Array): string;
    decodeTime (bytes: Uint8Array): Date;
    decodeUint16 (bytes: Uint8Array): number;
    decodeUint32 (bytes: Uint8Array): number;
    decodeUint64 (bytes: Uint8Array): number;
    decodeUint8 (bytes: Uint8Array): number;
    decodeUvarint (bytes: Uint8Array): number;
    decodeVarint (bytes: Uint8Array): number;

    encodeBool (bool: boolean): Uint8Array;
    encodeByte (byte: Uint8Array): Uint8Array;
    encodeByteSlice (bytes: Uint8Array): Uint8Array;
    encodeFloat32 (float: number): Uint8Array;
    encodeFloat64 (float: number): Uint8Array;
    encodeInt16 (int16: number): Uint8Array;
    encodeInt32 (int32: number): Uint8Array;
    encodeInt64 (int64: number): Uint8Array;
    encodeInt8 (int8: number): Uint8Array;
    encodeString (string: string): Uint8Array;
    encodeTime (time: Date): Uint8Array;
    encodeUint16 (uint16: number): Uint8Array;
    encodeUint32 (uint32: number): Uint8Array;
    encodeUint64 (uint64: number): Uint8Array;
    encodeUint8 (uint8: number): Uint8Array;
    encodeUvarint (uvarint: number): Uint8Array;
    encodeVarint (varint: number): Uint8Array;

    nameToDisfix (name: string): [Uint8Array, Uint8Array];
    getByteSliceSize (bytes: Uint8Array): number;
    getUvarintSize (uvarint: number): number;
    getVarintSize (varint: number): number;
}