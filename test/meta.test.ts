import * as Amino from '../';

describe('meta', () => {
    describe('nameToDisfix', () => {
        it('gets disfix for empty name', () => {
            const [disambBytes, prefixBytes] = Amino.nameToDisfix('');
            expect(disambBytes).toBeBytes([227, 176, 196]);
            expect(prefixBytes).toBeBytes([66, 152, 252, 28]);
        });

        it('gets disfix for `"auth/StdTx"`', () => {
            const [disambBytes, prefixBytes] = Amino.nameToDisfix('auth/StdTx');
            expect(disambBytes).toBeBytes([142, 254, 71]);
            expect(prefixBytes).toBeBytes([240, 98, 93, 238]);
        });
    });

    describe('byteSliceSize', () => {
        it('gets size of empty byte slice', () => {
            const size = Amino.byteSliceSize(new Uint8Array);
            expect(size).toBe(1);
        });

        it('gets size of 4 byte slice', () => {
            const size = Amino.byteSliceSize(new Uint8Array([0, 0, 0, 0]));
            expect(size).toBe(5);
        });
    });

    describe('uvarintSize', () => {
        it('gets size of `0`', () => {
            const size = Amino.uvarintSize(0);
            expect(size).toBe(1);
        });

        // go: math.MaxUint8
        it('gets size of `255`', () => {
            const size = Amino.uvarintSize(255);
            expect(size).toBe(2);
        });

        // go: math.MaxUint16
        it('gets size of `65535`', () => {
            const size = Amino.uvarintSize(65535);
            expect(size).toBe(3);
        });

        // go: math.MaxUint32
        it('gets size of `4294967295`', () => {
            const size = Amino.uvarintSize(4294967295);
            expect(size).toBe(5);
        });

        it('gets size of `Number.MAX_SAFE_INTEGER`', () => {
            const size = Amino.uvarintSize(Number.MAX_SAFE_INTEGER);
            expect(size).toBe(8);
        });

        // go: math.MaxUint64
        it.skip('gets size of `18446744073709551615`', () => {
            const size = Amino.uvarintSize(18446744073709551615);
            expect(size).toBe(10);
        });
    });

    describe('varintSize', () => {
        it('gets size of `0`', () => {
            const size = Amino.varintSize(0);
            expect(size).toBe(1);
        });

        // go: math.MaxInt8
        it('gets size of `127`', () => {
            const size = Amino.varintSize(127);
            expect(size).toBe(2);
        });

        // go: math.MinInt8
        it('gets size of `-128`', () => {
            const size = Amino.varintSize(-128);
            expect(size).toBe(2);
        });

        // go: math.MaxInt16
        it('gets size of `32767`', () => {
            const size = Amino.varintSize(32767);
            expect(size).toBe(3);
        });

        // go: math.MinInt16
        it('gets size of `-32768`', () => {
            const size = Amino.varintSize(-32768);
            expect(size).toBe(3);
        });

        // go: math.MaxInt32
        it('gets size of `2147483647`', () => {
            const size = Amino.varintSize(2147483647);
            expect(size).toBe(5);
        });

        // go: math.MinInt32
        it('gets size of `-2147483648`', () => {
            const size = Amino.varintSize(-2147483648);
            expect(size).toBe(5);
        });

        it('gets size of `Number.MAX_SAFE_INTEGER`', () => {
            const size = Amino.varintSize(Number.MAX_SAFE_INTEGER);
            expect(size).toBe(8);
        });

        it('gets size of `Number.MIN_SAFE_INTEGER`', () => {
            const size = Amino.varintSize(Number.MIN_SAFE_INTEGER);
            expect(size).toBe(8);
        });

        // go: math.MaxInt64
        it.skip('gets size of `9223372036854775807`', () => {
            const size = Amino.varintSize(9223372036854775807);
            expect(size).toBe(10);
        });

        // go: math.MinInt64
        it.skip('gets size of `-9223372036854775808`', () => {
            const size = Amino.varintSize(-9223372036854775808);
            expect(size).toBe(10);
        });
    });
});
