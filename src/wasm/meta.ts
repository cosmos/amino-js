import * as Amino from '../../lib/Amino.wasm';
import { AminoBytes, DisambBytes, PrefixBytes } from '../../lib/types';

export {
    nameToDisfix,
    byteSliceSize,
    uvarintSize,
    varintSize
} from '../../lib/Amino.wasm';

export function decodeDisambPrefixBytes (amino: AminoBytes): [DisambBytes | null, PrefixBytes | null, number] {
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
