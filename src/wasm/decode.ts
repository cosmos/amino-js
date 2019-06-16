import * as Amino from '../../lib/Amino.wasm';
import { Bytes, AminoBytes } from '../../lib/types';

export function decodeByte (amino: AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeByte(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeByteSlice (amino: AminoBytes): [Bytes, number] {
    const [value, length, error] = Amino.decodeByteSlice(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeInt8 (amino: AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeInt8(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeInt16 (amino: AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeInt16(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeInt32 (amino: AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeInt32(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeInt64 (amino: AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeInt64(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeUint8 (amino: AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeUint8(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeUint16 (amino: AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeUint16(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeUint32 (amino: AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeUint32(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeUint64 (amino: AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeUint64(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeVarint (amino: AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeVarint(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeUvarint (amino: AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeUvarint(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeFloat32 (amino: AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeFloat32(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeFloat64 (amino: AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeFloat64(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeBool (amino: AminoBytes): [boolean, number] {
    const [value, length, error] = Amino.decodeBool(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeString (amino: AminoBytes): [string, number] {
    const [value, length, error] = Amino.decodeString(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeTime (amino: AminoBytes): [Date, number] {
    const [value, length, error] = Amino.decodeTime(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}
