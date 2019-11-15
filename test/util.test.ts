import * as Amino from '../';

const knownBase64 = 'AA==';
const knownBytes  = [0];
const knownString = '\u0000';
const knownObject = {
    string:  'string',
    boolean: true,
    integer: 0,
    float:   3.14,
    array:   [],
    object:  {},
    null:    null
};
const knownJSON   = [
    123,
    34,
    115,
    116,
    114,
    105,
    110,
    103,
    34,
    58,
    34,
    115,
    116,
    114,
    105,
    110,
    103,
    34,
    44,
    34,
    98,
    111,
    111,
    108,
    101,
    97,
    110,
    34,
    58,
    116,
    114,
    117,
    101,
    44,
    34,
    105,
    110,
    116,
    101,
    103,
    101,
    114,
    34,
    58,
    48,
    44,
    34,
    102,
    108,
    111,
    97,
    116,
    34,
    58,
    51,
    46,
    49,
    52,
    44,
    34,
    97,
    114,
    114,
    97,
    121,
    34,
    58,
    91,
    93,
    44,
    34,
    111,
    98,
    106,
    101,
    99,
    116,
    34,
    58,
    123,
    125,
    44,
    34,
    110,
    117,
    108,
    108,
    34,
    58,
    110,
    117,
    108,
    108,
    125
];

describe('util', () => {
    describe('base64ToBytes', () => {
        it('converts base64 to bytes', () => {
            const bytes = Amino.base64ToBytes(knownBase64);
            expect(bytes).toBeBytes(knownBytes);
        });
    });

    describe('bytesToBase64', () => {
        it('converts bytes to base64', () => {
            const base64 = Amino.bytesToBase64(new Uint8Array(knownBytes));
            expect(base64).toBe(knownBase64);
        });
    });

    describe('bytesToString', () => {
        it('converts bytes to string', () => {
            const string = Amino.bytesToString(new Uint8Array(knownBytes));
            expect(string).toBe(knownString);
        });
    });

    describe('stringToBytes', () => {
        it('converts string to bytes', () => {
            const bytes = Amino.stringToBytes(knownString);
            expect(bytes).toBeBytes(knownBytes);
        });
    });

    describe('jsonToBytes', () => {
        it('encodes object to JSON bytes', () => {
            const json = Amino.jsonToBytes(knownObject);
            expect(json).toBeBytes(knownJSON);
        });
    });

    describe('bytesToJSON', () => {
        it('decodes JSON bytes to object', () => {
            const object = Amino.bytesToJSON(new Uint8Array(knownJSON));
            expect(object).toMatchObject(knownObject);
        });
    });
});
