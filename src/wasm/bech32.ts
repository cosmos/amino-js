import * as Amino from '../../lib/Amino.wasm';
import { Bech32String, Bytes } from '../../lib/types';

export function encodeBech32 (hrp: string, data: Bytes): Bech32String {
    const [bech, error] = Amino.encodeBech32(hrp, data);
    if (error) {
        throw new Error(error);
    }
    return bech;
}

export function decodeBech32 (bech: Bech32String): [string, Bytes] {
    const [hrp, data, error] = Amino.decodeBech32(bech);
    if (error) {
        throw new Error(error);
    }
    return [hrp, data];
}
