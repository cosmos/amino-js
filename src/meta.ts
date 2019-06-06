import * as Amino from '../lib/Amino';

export function decodeDisambPrefixBytes (amino: Uint8Array): [Uint8Array | null, Uint8Array | null, number] {
    const [disamb, hasDisamb, prefix, hasPrefix, length, error] = Amino.decodeDisambPrefixBytes(amino);
    if (error) {
        throw error;
    }
    return [
        hasDisamb ? disamb : null,
        hasPrefix ? prefix : null,
        length
    ];
}

export function nameToDisfix (name: string): [Uint8Array, Uint8Array] {
    return Amino.nameToDisfix(name);
}

export function byteSliceSize (bytes: Uint8Array): number {
    return Amino.byteSliceSize(bytes);
}

export function uvarintSize (uvarint: number): number {
    return Amino.uvarintSize(uvarint);
}

export function varintSize (varint: number): number {
    return Amino.varintSize(varint);
}
