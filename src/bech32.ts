import * as Amino from '../lib/Amino';

export function encodeBech32 (hrp: string, data: Uint8Array): string {
    const [bech, error] = Amino.encodeBech32(hrp, data);
    if (error) {
        throw error;
    }
    return bech;
}

export function decodeBech32 (bech: string): [string, Uint8Array] {
    const [hrp, data, error] = Amino.decodeBech32(bech);
    if (error) {
        throw error;
    }
    return [hrp, data];
}
