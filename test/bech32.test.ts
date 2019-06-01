import * as Amino from '../';

const knownBech = 'cosmos164z7wwzv84h4hwn6rvjjkns6j4ht43jv9e3ljy';
const knownHRP  = 'cosmos';
const knownData = [
    213,
    69,
    231,
    56,
    76,
    61,
    111,
    91,
    186,
    122,
    27,
    37,
    43,
    78,
    26,
    149,
    110,
    186,
    198,
    76
];

describe('bech32', () => {
    describe('encodeBech32', () => {
        it(`encodes \`"${ knownBech }"\``, () => {
            const bech = Amino.encodeBech32(knownHRP, new Uint8Array(knownData));
            expect(bech).toBe(knownBech);
        });
    });

    describe('decodeBech32', () => {
        it(`decodes \`"${ knownBech }"\``, () => {
            const [hrp, data] = Amino.decodeBech32(knownBech);
            expect(hrp).toBe(knownHRP);
            expect(data).toBeBytes(knownData);
        });
    });
});
