import './setup';
import * as Amino from '../';

const knownBech = 'iaa164z7wwzv84h4hwn6rvjjkns6j4ht43jv9e3ljy';
const knownHRP  = 'iaa';
const knownData = [];

// describe('bech32', () => {
//     describe('encodeBech32', () => {
//         it(`encodes \`"${ knownBech }"\``, () => {
//             const bech = Amino.encodeBech32(knownHRP, new Uint8Array(knownData));
//             expect(bech).toBe(knownBech);
//         });
//     });

//     describe('decodeBech32', () => {
//         it(`decodes \`"${ knownBech }"\``, () => {
//             const [hrp, data] = Amino.decodeBech32(knownBech);
//             expect(hrp).toBe(knownHRP);
//             expect(data).toBeBytes(knownData);
//         });
//     });
// });
