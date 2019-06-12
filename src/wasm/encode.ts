import * as Amino from '../../lib/Amino.wasm';

export function encodeByte (byte: number): Amino.AminoBytes {
    const [amino, error] = Amino.encodeByte(byte);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeByteSlice (bytes: Amino.Bytes): Amino.AminoBytes {
    const [amino, error] = Amino.encodeByteSlice(bytes);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeInt8 (int8: number): Amino.AminoBytes {
    const [amino, error] = Amino.encodeInt8(int8);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeInt16 (int16: number): Amino.AminoBytes {
    const [amino, error] = Amino.encodeInt16(int16);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeInt32 (int32: number): Amino.AminoBytes {
    const [amino, error] = Amino.encodeInt32(int32);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeInt64 (int64: number): Amino.AminoBytes {
    const [amino, error] = Amino.encodeInt64(int64);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeVarint (varint: number): Amino.AminoBytes {
    const [amino, error] = Amino.encodeVarint(varint);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeUint8 (uint8: number): Amino.AminoBytes {
    const [amino, error] = Amino.encodeUint8(uint8);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeUint16 (uint16: number): Amino.AminoBytes {
    const [amino, error] = Amino.encodeUint16(uint16);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeUint32 (uint32: number): Amino.AminoBytes {
    const [amino, error] = Amino.encodeUint32(uint32);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeUint64 (uint64: number): Amino.AminoBytes {
    const [amino, error] = Amino.encodeUint64(uint64);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeUvarint (uvarint: number): Amino.AminoBytes {
    const [amino, error] = Amino.encodeUvarint(uvarint);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeFloat32 (float: number): Amino.AminoBytes {
    const [amino, error] = Amino.encodeFloat32(float);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeFloat64 (float: number): Amino.AminoBytes {
    const [amino, error] = Amino.encodeFloat64(float);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeBool (bool: boolean): Amino.AminoBytes {
    const [amino, error] = Amino.encodeBool(bool);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeString (string: string): Amino.AminoBytes {
    const [amino, error] = Amino.encodeString(string);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeTime (time: Date): Amino.AminoBytes {
    const [amino, error] = Amino.encodeTime(time);
    if (error) {
        throw new Error(error);
    }
    return amino;
}
