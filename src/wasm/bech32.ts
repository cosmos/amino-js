import * as Amino from '../../lib/Amino.wasm';
import { Bytes } from '../../lib/types';

export function encodeBech32 (hrp: string, data: Bytes): string {
    const [bech, error] = Amino.encodeBech32(hrp, data);
    if (error) {
        throw new Error(error);
    }
    return bech;
}

export function decodeBech32 (bech: string): [string, Bytes] {
    const [hrp, data, error] = Amino.decodeBech32(bech);
    if (error) {
        throw new Error(error);
    }
    return [hrp, data];
}
