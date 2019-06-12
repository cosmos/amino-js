import * as Amino from '../../lib/Amino.wasm';

export function decodeByte (amino: Amino.AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeByte(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeByteSlice (amino: Amino.AminoBytes): [Amino.Bytes, number] {
    const [value, length, error] = Amino.decodeByteSlice(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeInt8 (amino: Amino.AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeInt8(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeInt16 (amino: Amino.AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeInt16(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeInt32 (amino: Amino.AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeInt32(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeInt64 (amino: Amino.AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeInt64(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeUint8 (amino: Amino.AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeUint8(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeUint16 (amino: Amino.AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeUint16(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeUint32 (amino: Amino.AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeUint32(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeUint64 (amino: Amino.AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeUint64(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeVarint (amino: Amino.AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeVarint(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeUvarint (amino: Amino.AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeUvarint(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeFloat32 (amino: Amino.AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeFloat32(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeFloat64 (amino: Amino.AminoBytes): [number, number] {
    const [value, length, error] = Amino.decodeFloat64(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeBool (amino: Amino.AminoBytes): [boolean, number] {
    const [value, length, error] = Amino.decodeBool(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeString (amino: Amino.AminoBytes): [string, number] {
    const [value, length, error] = Amino.decodeString(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}

export function decodeTime (amino: Amino.AminoBytes): [Date, number] {
    const [value, length, error] = Amino.decodeTime(amino);
    if (error) {
        throw new Error(error);
    }
    return [value, length];
}
