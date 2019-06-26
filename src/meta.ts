import * as Amino from '../lib/Amino';
import { AminoBytes, DisambBytes, PrefixBytes } from '../lib/types';

export {
    nameToDisfix,
    byteSliceSize,
    uvarintSize,
    varintSize
} from '../lib/Amino';

/**
 * Decode disambiguation bytes, prefix bytes, and byte length from Amino
 *
 * @param   amino - Amino-encoded bytes
 *
 * @returns tuple of disambiguation bytes (or null if none), prefix bytes (or null if none), and byte length
 * @throws  will throw if decoding fails
 */
export function decodeDisambPrefixBytes (amino: AminoBytes): [DisambBytes | null, PrefixBytes | null, number] {
    const [disamb, hasDisamb, prefix, hasPrefix, length] = Amino.decodeDisambPrefixBytes(amino);
    return [
        hasDisamb ? disamb : null,
        hasPrefix ? prefix : null,
        length
    ];
}
