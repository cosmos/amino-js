import * as Amino from '../lib/Amino';

export function decodeByte (bytes: Uint8Array): [number, number] {
    return Amino.decodeByte(bytes);
}

export function decodeByteSlice (bytes: Uint8Array): [Uint8Array, number] {
    return Amino.decodeByteSlice(bytes);
}

export function decodeInt8 (bytes: Uint8Array): [number, number] {
    return Amino.decodeInt8(bytes);
}

export function decodeInt16 (bytes: Uint8Array): [number, number] {
    return Amino.decodeInt16(bytes);
}

export function decodeInt32 (bytes: Uint8Array): [number, number] {
    return Amino.decodeInt32(bytes);
}

export function decodeInt64 (bytes: Uint8Array): [number, number] {
    return Amino.decodeInt64(bytes);
}

export function decodeUint8 (bytes: Uint8Array): [number, number] {
    return Amino.decodeUint8(bytes);
}

export function decodeUint16 (bytes: Uint8Array): [number, number] {
    return Amino.decodeUint16(bytes);
}

export function decodeUint32 (bytes: Uint8Array): [number, number] {
    return Amino.decodeUint32(bytes);
}

export function decodeUint64 (bytes: Uint8Array): [number, number] {
    return Amino.decodeUint64(bytes);
}

export function decodeVarint (bytes: Uint8Array): [number, number] {
    return Amino.decodeVarint(bytes);
}

export function decodeUvarint (bytes: Uint8Array): [number, number] {
    return Amino.decodeUvarint(bytes);
}

export function decodeFloat32 (bytes: Uint8Array): [number, number] {
    return Amino.decodeFloat32(bytes);
}

export function decodeFloat64 (bytes: Uint8Array): [number, number] {
    return Amino.decodeFloat64(bytes);
}

export function decodeBool (bytes: Uint8Array): [boolean, number] {
    return Amino.decodeBool(bytes);
}

export function decodeString (bytes: Uint8Array): [string, number] {
    return Amino.decodeString(bytes);
}

export function decodeTime (bytes: Uint8Array): [Date, number] {
    return Amino.decodeTime(bytes);
}
