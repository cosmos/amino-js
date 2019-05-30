// @ts-ignore
import * as Amino from '../';

describe('decode', (): void => {
    describe('decodeByte', (): void => {
        it('decodes `0`', (): void => {
            const [value, length] = Amino.decodeByte(new Uint8Array([0]));
            expect(length).toBe(1);
            expect(value).toBe(0);
        });

        it('decodes `1`', (): void => {
            const [value, length] = Amino.decodeByte(new Uint8Array([1]));
            expect(length).toBe(1);
            expect(value).toBe(1);
        });
    });

    describe('decodeByteSlice', (): void => {
        it('decodes `new Uint8Array([0, 0, 0, 0])`', (): void => {
            const [value, length] = Amino.decodeByteSlice(new Uint8Array([4, 0, 0, 0, 0]));
            expect(length).toBe(5);
            expect(value).toBeBytes([0, 0, 0, 0]);
        });

        it('decodes `new Uint8Array`', (): void => {
            const [value, length] = Amino.decodeByteSlice(new Uint8Array([0]));
            expect(length).toBe(1);
            expect(value).toBeBytes([]);
        });
    });

    describe('decodeInt8', (): void => {
        // go: math.MaxInt8
        it('decodes `127`', (): void => {
            const [value, length] = Amino.decodeInt8(new Uint8Array([254, 1]));
            expect(length).toBe(2);
            expect(value).toBe(127);
        });

        // go: math.MinInt8
        it('decodes `-128`', (): void => {
            const [value, length] = Amino.decodeInt8(new Uint8Array([255, 1]));
            expect(length).toBe(2);
            expect(value).toBe(-128);
        });

        it('decodes `0`', (): void => {
            const [value, length] = Amino.decodeInt8(new Uint8Array([0]));
            expect(length).toBe(1);
            expect(value).toBe(0);
        });
    });

    describe('decodeInt16', (): void => {
        // go: math.MaxInt16
        it('decodes `32767`', (): void => {
            const [value, length] = Amino.decodeInt16(new Uint8Array([254, 255, 3]));
            expect(length).toBe(3);
            expect(value).toBe(32767);
        });

        // go: math.MinInt16
        it('decodes `-32768`', (): void => {
            const [value, length] = Amino.decodeInt16(new Uint8Array([255, 255, 3]));
            expect(length).toBe(3);
            expect(value).toBe(-32768);
        });

        it('decodes `0`', (): void => {
            const [value, length] = Amino.decodeInt16(new Uint8Array([0]));
            expect(length).toBe(1);
            expect(value).toBe(0);
        });
    });

    describe('decodeInt32', (): void => {
        // go: math.MaxInt32
        it('decodes `2147483647`', (): void => {
            const [value, length] = Amino.decodeInt32(new Uint8Array([255, 255, 255, 127]));
            expect(length).toBe(4);
            expect(value).toBe(2147483647);
        });

        // go: math.MinInt32
        it('decodes `-2147483648`', (): void => {
            const [value, length] = Amino.decodeInt32(new Uint8Array([0, 0, 0, 128]));
            expect(length).toBe(4);
            expect(value).toBe(-2147483648);
        });

        it('decodes `0`', (): void => {
            const [value, length] = Amino.decodeInt32(new Uint8Array([0, 0, 0, 0]));
            expect(length).toBe(4);
            expect(value).toBe(0);
        });
    });

    describe('decodeInt64', (): void => {
        // go: math.MaxInt64
        it.skip('decodes `9223372036854775807`', (): void => {
            const [value, length] = Amino.decodeInt64(new Uint8Array([255, 255, 255, 255, 255, 255, 255, 127]));
            expect(length).toBe(8);
            expect(value).toBe(9223372036854775807);
        });

        // go: math.MinInt64
        it.skip('decodes `-9223372036854775808`', (): void => {
            const [value, length] = Amino.decodeInt64(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 128]));
            expect(length).toBe(8);
            expect(value).toBe(-9223372036854775808);
        });

        it('decodes `Number.MAX_SAFE_INTEGER`', (): void => {
            const [value, length] = Amino.decodeInt64(new Uint8Array([255, 255, 255, 255, 255, 255, 31, 0]));
            expect(length).toBe(8);
            expect(value).toBe(Number.MAX_SAFE_INTEGER);
        });

        it('decodes `Number.MIN_SAFE_INTEGER`', (): void => {
            const [value, length] = Amino.decodeInt64(new Uint8Array([1, 0, 0, 0, 0, 0, 224, 255]));
            expect(length).toBe(8);
            expect(value).toBe(Number.MIN_SAFE_INTEGER);
        });

        it('decodes `0`', (): void => {
            const [value, length] = Amino.decodeInt64(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]));
            expect(length).toBe(8);
            expect(value).toBe(0);
        });
    });

    describe('decodeVarint', (): void => {
        // go: math.MaxInt64
        it.skip('decodes `9223372036854775807`', (): void => {
            const [value, length] = Amino.decodeVarint(new Uint8Array([254, 255, 255, 255, 255, 255, 255, 255, 255, 1]));
            expect(length).toBe(10);
            expect(value).toBe(9223372036854775807);
        });

        // go: math.MinInt64
        it.skip('decodes `-9223372036854775808`', (): void => {
            const [value, length] = Amino.decodeVarint(new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255, 255, 1]));
            expect(length).toBe(10);
            expect(value).toBe(-9223372036854775808);
        });

        it('decodes `Number.MAX_SAFE_INTEGER`', (): void => {
            const [value, length] = Amino.decodeVarint(new Uint8Array([254, 255, 255, 255, 255, 255, 255, 31]));
            expect(length).toBe(8);
            expect(value).toBe(Number.MAX_SAFE_INTEGER);
        });

        it('decodes `Number.MIN_SAFE_INTEGER`', (): void => {
            const [value, length] = Amino.decodeVarint(new Uint8Array([253, 255, 255, 255, 255, 255, 255, 31]));
            expect(length).toBe(8);
            expect(value).toBe(Number.MIN_SAFE_INTEGER);
        });

        it('decodes `0`', (): void => {
            const [value, length] = Amino.decodeVarint(new Uint8Array([0]));
            expect(length).toBe(1);
            expect(value).toBe(0);
        });
    });

    describe('decodeUint8', (): void => {
        // go: math.MaxUint8
        it('decodes `255`', (): void => {
            const [value, length] = Amino.decodeUint8(new Uint8Array([255, 1]));
            expect(length).toBe(2);
            expect(value).toBe(255);
        });

        it('decodes `0`', (): void => {
            const [value, length] = Amino.decodeUint8(new Uint8Array([0]));
            expect(length).toBe(1);
            expect(value).toBe(0);
        });
    });

    describe('decodeUint16', (): void => {
        // go: math.MaxUint16
        it('decodes `65535`', (): void => {
            const [value, length] = Amino.decodeUint16(new Uint8Array([255, 255, 3]));
            expect(length).toBe(3);
            expect(value).toBe(65535);
        });

        it('decodes `0`', (): void => {
            const [value, length] = Amino.decodeUint16(new Uint8Array([0]));
            expect(length).toBe(1);
            expect(value).toBe(0);
        });
    });

    describe('decodeUint32', (): void => {
        // go: math.MaxUint32
        it('decodes `4294967295`', (): void => {
            const [value, length] = Amino.decodeUint32(new Uint8Array([255, 255, 255, 255]));
            expect(length).toBe(4);
            expect(value).toBe(4294967295);
        });

        it('decodes `0`', (): void => {
            const [value, length] = Amino.decodeUint32(new Uint8Array([0, 0, 0, 0]));
            expect(length).toBe(4);
            expect(value).toBe(0);
        });
    });

    describe('decodeUint64', (): void => {
        // go: math.MaxUint64
        it.skip('decodes `18446744073709551615`', (): void => {
            const [value, length] = Amino.decodeUint64(new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255]));
            expect(length).toBe(8);
            expect(value).toBe(18446744073709551615);
        });

        it('decodes `Number.MAX_SAFE_INTEGER`', (): void => {
            const [value, length] = Amino.decodeUint64(new Uint8Array([255, 255, 255, 255, 255, 255, 31, 0]));
            expect(length).toBe(8);
            expect(value).toBe(Number.MAX_SAFE_INTEGER);
        });

        it('decodes `0`', (): void => {
            const [value, length] = Amino.decodeUint64(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]));
            expect(length).toBe(8);
            expect(value).toBe(0);
        });
    });

    describe('decodeUvarint', (): void => {
        // go: math.MaxUint64
        it.skip('decodes `18446744073709551615`', (): void => {
            const [value, length] = Amino.decodeUvarint(new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255, 255, 1]));
            expect(length).toBe(10);
            expect(value).toBe(18446744073709551615);
        });

        it('decodes `Number.MAX_SAFE_INTEGER`', (): void => {
            const [value, length] = Amino.decodeUvarint(new Uint8Array([255, 255, 255, 255, 255, 255, 255, 15]));
            expect(length).toBe(8);
            expect(value).toBe(Number.MAX_SAFE_INTEGER);
        });

        it('decodes `0`', (): void => {
            const [value, length] = Amino.decodeUvarint(new Uint8Array([0]));
            expect(length).toBe(1);
            expect(value).toBe(0);
        });
    });

    describe('decodeFloat32', (): void => {
        // go: math.MaxFloat32
        it('decodes `3.40282346638528859811704183484516925440e+38`', (): void => {
            const [value, length] = Amino.decodeFloat32(new Uint8Array([255, 255, 127, 127]));
            expect(length).toBe(4);
            expect(value).toBe(3.40282346638528859811704183484516925440e+38);
        });

        // go: math.SmallestNonzeroFloat32
        it('decodes `1.401298464324817070923729583289916131280e-45`', (): void => {
            const [value, length] = Amino.decodeFloat32(new Uint8Array([1, 0, 0, 0]));
            expect(length).toBe(4);
            expect(value).toBe(1.401298464324817070923729583289916131280e-45);
        });

        it('decodes `0`', (): void => {
            const [value, length] = Amino.decodeFloat32(new Uint8Array([0, 0, 0, 0]));
            expect(length).toBe(4);
            expect(value).toBe(0);
        });
    });

    describe('decodeFloat64', (): void => {
        // go: math.MaxFloat64
        it('decodes `1.797693134862315708145274237317043567981e+308`', (): void => {
            const [value, length] = Amino.decodeFloat64(new Uint8Array([255, 255, 255, 255, 255, 255, 239, 127]));
            expect(length).toBe(8);
            expect(value).toBe(1.797693134862315708145274237317043567981e+308);
        });

        // go: math.SmallestNonzeroFloat64
        it('decodes `4.940656458412465441765687928682213723651e-324`', (): void => {
            const [value, length] = Amino.decodeFloat64(new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0]));
            expect(length).toBe(8);
            expect(value).toBe(4.940656458412465441765687928682213723651e-324);
        });

        it('decodes `0`', (): void => {
            const [value, length] = Amino.decodeFloat64(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]));
            expect(length).toBe(8);
            expect(value).toBe(0);
        });
    });

    describe('decodeBool', (): void => {
        it('decodes `true`', (): void => {
            const [value, length] = Amino.decodeBool(new Uint8Array([1]));
            expect(length).toBe(1);
            expect(value).toBe(true);
        });

        it('decodes `false`', (): void => {
            const [value, length] = Amino.decodeBool(new Uint8Array([0]));
            expect(length).toBe(1);
            expect(value).toBe(false);
        });
    });

    describe('decodeString', (): void => {
        it('encodes `"hello"`', (): void => {
            const [value, length] = Amino.decodeString(new Uint8Array([5, 104, 101, 108, 108, 111]));
            expect(length).toBe(6);
            expect(value).toBe('hello');
        });
    });

    describe('decodeTime', (): void => {
        // go: time.Date(1970, 1, 1, 0, 0, 0, 0, time.UTC)
        it('decodes `new Date(0)`', (): void => {
            const [value, length] = Amino.decodeTime(new Uint8Array([]));
            expect(length).toBe(0);
            expect(value).toBeDate(new Date(0));
        });

        // go: time.Date(1970, 1, 1, 0, 0, 1, 0, time.UTC)
        it('decodes `new Date(1000)`', (): void => {
            const [value, length] = Amino.decodeTime(new Uint8Array([8, 1]));
            expect(length).toBe(2);
            expect(value).toBeDate(new Date(1000));
        });

        // go: time.Date(2000, 1, 1, 0, 0, 0, 0, time.UTC)
        it('decodes `new Date("2000-01-01T00:00:00Z")`', (): void => {
            const [value, length] = Amino.decodeTime(new Uint8Array([8, 128, 135, 181, 195, 3]));
            expect(length).toBe(6);
            expect(value).toBeDate(new Date('2000-01-01T00:00:00Z'));
        });

        it.todo('decodes nanoseconds');
    });
});
