import * as Amino from '../lib/Amino';

export {
    nameToDisfix,
    byteSliceSize,
    uvarintSize,
    varintSize
} from '../lib/Amino';

export function decodeDisambPrefixBytes (amino: Amino.AminoBytes): [Amino.DisambBytes | null, Amino.PrefixBytes | null, number] {
    const [disamb, hasDisamb, prefix, hasPrefix, length] = Amino.decodeDisambPrefixBytes(amino);
    return [
        hasDisamb ? disamb : null,
        hasPrefix ? prefix : null,
        length
    ];
}
