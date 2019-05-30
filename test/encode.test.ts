// @ts-ignore
import * as Amino from '../';

describe('encode', (): void => {
    describe('encodeByte', (): void => {
        it('encodes `0`', (): void => {
            const bytes = Amino.encodeByte(0);
            expect(bytes).toBeBytes([0]);
        });

        it('encodes `1`', (): void => {
            const bytes = Amino.encodeByte(1);
            expect(bytes).toBeBytes([1]);
        });
    });

    describe('encodeByteSlice', (): void => {
        it('encodes `new Uint8Array([0, 0, 0, 0])`', (): void => {
            const bytes = Amino.encodeByteSlice(new Uint8Array([0, 0, 0, 0]));
            expect(bytes).toBeBytes([4, 0, 0, 0, 0]);
        });

        it('encodes `new Uint8Array`', (): void => {
            const bytes = Amino.encodeByteSlice(new Uint8Array);
            expect(bytes).toBeBytes([0]);
        });
    });

    describe('encodeInt8', (): void => {
        // go: math.MaxInt8
        it('encodes `127`', (): void => {
            const bytes = Amino.encodeInt8(127);
            expect(bytes).toBeBytes([254, 1]);
        });

        // go: math.MinInt8
        it('encodes `-128`', (): void => {
            const bytes = Amino.encodeInt8(-128);
            expect(bytes).toBeBytes([255, 1]);
        });

        it('encodes `0`', (): void => {
            const bytes = Amino.encodeInt8(0);
            expect(bytes).toBeBytes([0]);
        });
    });

    describe('encodeInt16', (): void => {
        // go: math.MaxInt16
        it('encodes `32767`', (): void => {
            const bytes = Amino.encodeInt16(32767);
            expect(bytes).toBeBytes([254, 255, 3]);
        });

        // go: math.MinInt16
        it('encodes `-32768`', (): void => {
            const bytes = Amino.encodeInt16(-32768);
            expect(bytes).toBeBytes([255, 255, 3]);
        });

        it('encodes `0`', (): void => {
            const bytes = Amino.encodeInt16(0);
            expect(bytes).toBeBytes([0]);
        });
    });

    describe('encodeInt32', (): void => {
        // go: math.MaxInt32
        it('encodes `2147483647`', (): void => {
            const bytes = Amino.encodeInt32(2147483647);
            expect(bytes).toBeBytes([255, 255, 255, 127]);
        });

        // go: math.MinInt32
        it('encodes `-2147483648`', (): void => {
            const bytes = Amino.encodeInt32(-2147483648);
            expect(bytes).toBeBytes([0, 0, 0, 128]);
        });

        it('encodes `0`', (): void => {
            const bytes = Amino.encodeInt32(0);
            expect(bytes).toBeBytes([0, 0, 0, 0]);
        });
    });

    describe('encodeInt64', (): void => {
        // go: math.MaxInt64
        it.skip('encodes `9223372036854775807`', (): void => {
            const bytes = Amino.encodeInt64(9223372036854775807);
            expect(bytes).toBeBytes([255, 255, 255, 255, 255, 255, 255, 127]);
        });

        // go: math.MinInt64
        it.skip('encodes `-9223372036854775808`', (): void => {
            const bytes = Amino.encodeInt64(-9223372036854775808);
            expect(bytes).toBeBytes([0, 0, 0, 0, 0, 0, 0, 128]);
        });

        it('encodes `Number.MAX_SAFE_INTEGER`', (): void => {
            const bytes = Amino.encodeInt64(Number.MAX_SAFE_INTEGER);
            expect(bytes).toBeBytes([255, 255, 255, 255, 255, 255, 31, 0]);
        });

        it('encodes `Number.MIN_SAFE_INTEGER`', (): void => {
            const bytes = Amino.encodeInt64(Number.MIN_SAFE_INTEGER);
            expect(bytes).toBeBytes([1, 0, 0, 0, 0, 0, 224, 255]);
        });

        it('encodes `0`', (): void => {
            const bytes = Amino.encodeInt64(0);
            expect(bytes).toBeBytes([0, 0, 0, 0, 0, 0, 0, 0]);
        });
    });

    describe('encodeVarint', (): void => {
        // go: math.MaxInt64
        it.skip('encodes `9223372036854775807`', (): void => {
            const bytes = Amino.encodeVarint(9223372036854775807);
            expect(bytes).toBeBytes([254, 255, 255, 255, 255, 255, 255, 255, 255, 1]);
        });

        // go: math.MinInt64
        it.skip('encodes `-9223372036854775808`', (): void => {
            const bytes = Amino.encodeVarint(-9223372036854775808);
            expect(bytes).toBeBytes([255, 255, 255, 255, 255, 255, 255, 255, 255, 1]);
        });

        it('encodes `Number.MAX_SAFE_INTEGER`', (): void => {
            const bytes = Amino.encodeVarint(Number.MAX_SAFE_INTEGER);
            expect(bytes).toBeBytes([254, 255, 255, 255, 255, 255, 255, 31]);
        });

        it('encodes `Number.MIN_SAFE_INTEGER`', (): void => {
            const bytes = Amino.encodeVarint(Number.MIN_SAFE_INTEGER);
            expect(bytes).toBeBytes([253, 255, 255, 255, 255, 255, 255, 31]);
        });

        it('encodes `0`', (): void => {
            const bytes = Amino.encodeVarint(0);
            expect(bytes).toBeBytes([0]);
        });
    });

    describe('encodeUint8', (): void => {
        // go: math.MaxUint8
        it('encodes `255`', (): void => {
            const bytes = Amino.encodeUint8(255);
            expect(bytes).toBeBytes([255, 1]);
        });

        it('encodes `0`', (): void => {
            const bytes = Amino.encodeUint8(0);
            expect(bytes).toBeBytes([0]);
        });
    });

    describe('encodeUint16', (): void => {
        // go: math.MaxUint16
        it('encodes `65535`', (): void => {
            const bytes = Amino.encodeUint16(65535);
            expect(bytes).toBeBytes([255, 255, 3]);
        });

        it('encodes `0`', (): void => {
            const bytes = Amino.encodeUint16(0);
            expect(bytes).toBeBytes([0]);
        });
    });

    describe('encodeUint32', (): void => {
        // go: math.MaxUint32
        it('encodes `4294967295`', (): void => {
            const bytes = Amino.encodeUint32(4294967295);
            expect(bytes).toBeBytes([255, 255, 255, 255]);
        });

        it('encodes `0`', (): void => {
            const bytes = Amino.encodeUint32(0);
            expect(bytes).toBeBytes([0, 0, 0, 0]);
        });
    });

    describe('encodeUint64', (): void => {
        // go: math.MaxUint64
        it.skip('encodes `18446744073709551615`', (): void => {
            const bytes = Amino.encodeUint64(18446744073709551615);
            expect(bytes).toBeBytes([255, 255, 255, 255, 255, 255, 255, 255]);
        });

        it('encodes `Number.MAX_SAFE_INTEGER`', (): void => {
            const bytes = Amino.encodeUint64(Number.MAX_SAFE_INTEGER);
            expect(bytes).toBeBytes([255, 255, 255, 255, 255, 255, 31, 0]);
        });

        it('encodes `0`', (): void => {
            const bytes = Amino.encodeUint64(0);
            expect(bytes).toBeBytes([0, 0, 0, 0, 0, 0, 0, 0]);
        });
    });

    describe('encodeUvarint', (): void => {
        // go: math.MaxUint64
        it.skip('encodes `18446744073709551615`', (): void => {
            const bytes = Amino.encodeUvarint(18446744073709551615);
            expect(bytes).toBeBytes([255, 255, 255, 255, 255, 255, 255, 255, 255, 1]);
        });

        it('encodes `Number.MAX_SAFE_INTEGER`', (): void => {
            const bytes = Amino.encodeUvarint(Number.MAX_SAFE_INTEGER);
            expect(bytes).toBeBytes([255, 255, 255, 255, 255, 255, 255, 15]);
        });

        it('encodes `0`', (): void => {
            const bytes = Amino.encodeUvarint(0);
            expect(bytes).toBeBytes([0]);
        });
    });

    describe('encodeFloat32', (): void => {
        // go: math.MaxFloat32
        it('encodes `3.40282346638528859811704183484516925440e+38`', (): void => {
            const bytes = Amino.encodeFloat32(3.40282346638528859811704183484516925440e+38);
            expect(bytes).toBeBytes([255, 255, 127, 127]);
        });

        // go: math.SmallestNonzeroFloat32
        it('encodes `1.401298464324817070923729583289916131280e-45`', (): void => {
            const bytes = Amino.encodeFloat32(1.401298464324817070923729583289916131280e-45);
            expect(bytes).toBeBytes([1, 0, 0, 0]);
        });

        it('encodes `0`', (): void => {
            const bytes = Amino.encodeFloat32(0);
            expect(bytes).toBeBytes([0, 0, 0, 0]);
        });
    });

    describe('encodeFloat64', (): void => {
        // go: math.MaxFloat64
        it('encodes `1.797693134862315708145274237317043567981e+308`', (): void => {
            const bytes = Amino.encodeFloat64(1.797693134862315708145274237317043567981e+308);
            expect(bytes).toBeBytes([255, 255, 255, 255, 255, 255, 239, 127]);
        });

        // go: math.SmallestNonzeroFloat64
        it('encodes `4.940656458412465441765687928682213723651e-324`', (): void => {
            const bytes = Amino.encodeFloat64(4.940656458412465441765687928682213723651e-324);
            expect(bytes).toBeBytes([1, 0, 0, 0, 0, 0, 0, 0]);
        });

        it('encodes `0`', (): void => {
            const bytes = Amino.encodeFloat64(0);
            expect(bytes).toBeBytes([0, 0, 0, 0, 0, 0, 0, 0]);
        });
    });

    describe('encodeBool', (): void => {
        it('encodes `true`', (): void => {
            const bytes = Amino.encodeBool(true);
            expect(bytes).toBeBytes([1]);
        });

        it('encodes `false`', (): void => {
            const bytes = Amino.encodeBool(false);
            expect(bytes).toBeBytes([0]);
        });
    });

    describe('encodeString', (): void => {
        it('encodes `"hello"`', (): void => {
            const bytes = Amino.encodeString('hello');
            expect(bytes).toBeBytes([5, 104, 101, 108, 108, 111]);
        });
    });

    describe('encodeTime', (): void => {
        // go: time.Date(1970, 1, 1, 0, 0, 0, 0, time.UTC)
        it('encodes `new Date(0)`', (): void => {
            const bytes = Amino.encodeTime(new Date(0));
            expect(bytes).toBeBytes([]);
        });

        // go: time.Date(1970, 1, 1, 0, 0, 1, 0, time.UTC)
        it('encodes `new Date(1000)`', (): void => {
            const bytes = Amino.encodeTime(new Date(1000));
            expect(bytes).toBeBytes([8, 1]);
        });

        // go: time.Date(2000, 1, 1, 0, 0, 0, 0, time.UTC)
        it('encodes `new Date("2000-01-01T00:00:00Z")`', (): void => {
            const bytes = Amino.encodeTime(new Date('2000-01-01T00:00:00Z'));
            expect(bytes).toBeBytes([8, 128, 135, 181, 195, 3]);
        });

        it.todo('encodes nanoseconds');
    });
});
