import { Amino } from './global';

export function encodeByte (byte: number): Uint8Array {
    return Amino.encodeByte(byte);
}

export function encodeByteSlice (bytes: Uint8Array): Uint8Array {
    return Amino.encodeByteSlice(bytes);
}

export function encodeInt8 (int8: number): Uint8Array {
    return Amino.encodeInt8(int8);
}

export function encodeInt16 (int16: number): Uint8Array {
    return Amino.encodeInt16(int16);
}

export function encodeInt32 (int32: number): Uint8Array {
    return Amino.encodeInt32(int32);
}

export function encodeInt64 (int64: number): Uint8Array {
    return Amino.encodeInt64(int64);
}

export function encodeVarint (varint: number): Uint8Array {
    return Amino.encodeVarint(varint);
}

export function encodeUint8 (uint8: number): Uint8Array {
    return Amino.encodeUint8(uint8);
}

export function encodeUint16 (uint16: number): Uint8Array {
    return Amino.encodeUint16(uint16);
}

export function encodeUint32 (uint32: number): Uint8Array {
    return Amino.encodeUint32(uint32);
}

export function encodeUint64 (uint64: number): Uint8Array {
    return Amino.encodeUint64(uint64);
}

export function encodeUvarint (uvarint: number): Uint8Array {
    return Amino.encodeUvarint(uvarint);
}

export function encodeFloat32 (float: number): Uint8Array {
    return Amino.encodeFloat32(float);
}

export function encodeFloat64 (float: number): Uint8Array {
    return Amino.encodeFloat64(float);
}

export function encodeBool (bool: boolean): Uint8Array {
    return Amino.encodeBool(bool);
}

export function encodeString (string: string): Uint8Array {
    return Amino.encodeString(string);
}

export function encodeTime (time: Date): Uint8Array {
    return Amino.encodeTime(time);
}
