import './setup';
import * as Amino from '../';

const knownBech = "faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7";
const knownHRP  = 'faa';
const knownData = [];

describe('bech32', () => {
    // describe('encodeBech32', () => {
    //     it(`encodes \`"${ knownBech }"\``, () => {
    //         const bech = Amino.encodeBech32(knownHRP, new Uint8Array(knownData));
    //         expect(bech).toBe(knownBech);
    //     });
    // });

    describe('decodeBech32', () => {
        it(`decodes \`"${ knownBech }"\``, () => {
            const [hrp, data] = Amino.decodeBech32(knownBech);
            console.log(hrp);
            console.log(Amino.encodeBech32("fva", data));
        });
    });
});
