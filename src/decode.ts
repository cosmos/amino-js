import * as Amino from '../lib/Amino';

export function decodeByte (amino: Uint8Array): [number, number] {
    const [value, length, error] = Amino.decodeByte(amino);
    if (error) {
        throw error;
    }
    return [value, length];
}

export function decodeByteSlice (amino: Uint8Array): [Uint8Array, number] {
    const [value, length, error] = Amino.decodeByteSlice(amino);
    if (error) {
        throw error;
    }
    return [value, length];
}

export function decodeInt8 (amino: Uint8Array): [number, number] {
    const [value, length, error] = Amino.decodeInt8(amino);
    if (error) {
        throw error;
    }
    return [value, length];
}

export function decodeInt16 (amino: Uint8Array): [number, number] {
    const [value, length, error] = Amino.decodeInt16(amino);
    if (error) {
        throw error;
    }
    return [value, length];
}

export function decodeInt32 (amino: Uint8Array): [number, number] {
    const [value, length, error] = Amino.decodeInt32(amino);
    if (error) {
        throw error;
    }
    return [value, length];
}

export function decodeInt64 (amino: Uint8Array): [number, number] {
    const [value, length, error] = Amino.decodeInt64(amino);
    if (error) {
        throw error;
    }
    return [value, length];
}

export function decodeUint8 (amino: Uint8Array): [number, number] {
    const [value, length, error] = Amino.decodeUint8(amino);
    if (error) {
        throw error;
    }
    return [value, length];
}

export function decodeUint16 (amino: Uint8Array): [number, number] {
    const [value, length, error] = Amino.decodeUint16(amino);
    if (error) {
        throw error;
    }
    return [value, length];
}

export function decodeUint32 (amino: Uint8Array): [number, number] {
    const [value, length, error] = Amino.decodeUint32(amino);
    if (error) {
        throw error;
    }
    return [value, length];
}

export function decodeUint64 (amino: Uint8Array): [number, number] {
    const [value, length, error] = Amino.decodeUint64(amino);
    if (error) {
        throw error;
    }
    return [value, length];
}

export function decodeVarint (amino: Uint8Array): [number, number] {
    const [value, length, error] = Amino.decodeVarint(amino);
    if (error) {
        throw error;
    }
    return [value, length];
}

export function decodeUvarint (amino: Uint8Array): [number, number] {
    const [value, length, error] = Amino.decodeUvarint(amino);
    if (error) {
        throw error;
    }
    return [value, length];
}

export function decodeFloat32 (amino: Uint8Array): [number, number] {
    const [value, length, error] = Amino.decodeFloat32(amino);
    if (error) {
        throw error;
    }
    return [value, length];
}

export function decodeFloat64 (amino: Uint8Array): [number, number] {
    const [value, length, error] = Amino.decodeFloat64(amino);
    if (error) {
        throw error;
    }
    return [value, length];
}

export function decodeBool (amino: Uint8Array): [boolean, number] {
    const [value, length, error] = Amino.decodeBool(amino);
    if (error) {
        throw error;
    }
    return [value, length];
}

export function decodeString (amino: Uint8Array): [string, number] {
    const [value, length, error] = Amino.decodeString(amino);
    if (error) {
        throw error;
    }
    return [value, length];
}

export function decodeTime (amino: Uint8Array): [Date, number] {
    const [value, length, error] = Amino.decodeTime(amino);
    if (error) {
        throw error;
    }
    return [value, length];
}
