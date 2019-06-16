import * as Amino from '../../lib/Amino.wasm';
import { AminoBytes, Bytes } from '../../lib/bytes';

export function encodeByte (byte: number): AminoBytes {
    const [amino, error] = Amino.encodeByte(byte);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeByteSlice (bytes: Bytes): AminoBytes {
    const [amino, error] = Amino.encodeByteSlice(bytes);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeInt8 (int8: number): AminoBytes {
    const [amino, error] = Amino.encodeInt8(int8);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeInt16 (int16: number): AminoBytes {
    const [amino, error] = Amino.encodeInt16(int16);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeInt32 (int32: number): AminoBytes {
    const [amino, error] = Amino.encodeInt32(int32);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeInt64 (int64: number): AminoBytes {
    const [amino, error] = Amino.encodeInt64(int64);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeVarint (varint: number): AminoBytes {
    const [amino, error] = Amino.encodeVarint(varint);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeUint8 (uint8: number): AminoBytes {
    const [amino, error] = Amino.encodeUint8(uint8);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeUint16 (uint16: number): AminoBytes {
    const [amino, error] = Amino.encodeUint16(uint16);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeUint32 (uint32: number): AminoBytes {
    const [amino, error] = Amino.encodeUint32(uint32);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeUint64 (uint64: number): AminoBytes {
    const [amino, error] = Amino.encodeUint64(uint64);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeUvarint (uvarint: number): AminoBytes {
    const [amino, error] = Amino.encodeUvarint(uvarint);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeFloat32 (float32: number): AminoBytes {
    const [amino, error] = Amino.encodeFloat32(float32);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeFloat64 (float64: number): AminoBytes {
    const [amino, error] = Amino.encodeFloat64(float64);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeBool (boolean: boolean): AminoBytes {
    const [amino, error] = Amino.encodeBool(boolean);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeString (string: string): AminoBytes {
    const [amino, error] = Amino.encodeString(string);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeTime (time: Date): AminoBytes {
    const [amino, error] = Amino.encodeTime(time);
    if (error) {
        throw new Error(error);
    }
    return amino;
}
