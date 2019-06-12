import * as Amino from '../../lib/Amino.wasm';

export function decodeDisambPrefixBytes (amino: Amino.AminoBytes): [Amino.DisambBytes | null, Amino.PrefixBytes | null, number] {
    const [disamb, hasDisamb, prefix, hasPrefix, length, error] = Amino.decodeDisambPrefixBytes(amino);
    if (error) {
        throw new Error(error);
    }
    return [
        hasDisamb ? disamb : null,
        hasPrefix ? prefix : null,
        length
    ];
}

export function nameToDisfix (name: string): [Amino.DisambBytes, Amino.PrefixBytes] {
    return Amino.nameToDisfix(name);
}

export function byteSliceSize (bytes: Amino.Bytes): number {
    return Amino.byteSliceSize(bytes);
}

export function uvarintSize (uvarint: number): number {
    return Amino.uvarintSize(uvarint);
}

export function varintSize (varint: number): number {
    return Amino.varintSize(varint);
}
