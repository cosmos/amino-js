import Amino from '../src';

describe('Decode', () => {
    describe('DecodeByte', () => {
        it('decodes `0`', () => {
            const [value, length, error] = Amino.DecodeByte(new Uint8Array([0]));
            expect(error).toBeNull();
            expect(length).toBe(1);
            expect(value).toBe(0);
        });

        it('decodes `1`', () => {
            const [value, length, error] = Amino.DecodeByte(new Uint8Array([1]));
            expect(error).toBeNull();
            expect(length).toBe(1);
            expect(value).toBe(1);
        });
    });

    describe('DecodeByteSlice', () => {
        it('decodes `new Uint8Array([0, 0, 0, 0])`', () => {
            const [value, length, error] = Amino.DecodeByteSlice(new Uint8Array([4, 0, 0, 0, 0]));
            expect(error).toBeNull();
            expect(length).toBe(5);
            expect(value).toBeBytes([0, 0, 0, 0]);
        });

        it('decodes `new Uint8Array`', () => {
            const [value, length, error] = Amino.DecodeByteSlice(new Uint8Array([0]));
            expect(error).toBeNull();
            expect(length).toBe(1);
            expect(value).toBeBytes([]);
        });
    });

    describe('DecodeInt8', () => {
        // go: math.MaxInt8
        it('decodes `127`', () => {
            const [value, length, error] = Amino.DecodeInt8(new Uint8Array([254, 1]));
            expect(error).toBeNull();
            expect(length).toBe(2);
            expect(value).toBe(127);
        });

        // go: math.MinInt8
        it('decodes `-128`', () => {
            const [value, length, error] = Amino.DecodeInt8(new Uint8Array([255, 1]));
            expect(error).toBeNull();
            expect(length).toBe(2);
            expect(value).toBe(-128);
        });

        it('decodes `0`', () => {
            const [value, length, error] = Amino.DecodeInt8(new Uint8Array([0]));
            expect(error).toBeNull();
            expect(length).toBe(1);
            expect(value).toBe(0);
        });
    });

    describe('DecodeInt16', () => {
        // go: math.MaxInt16
        it('decodes `32767`', () => {
            const [value, length, error] = Amino.DecodeInt16(new Uint8Array([254, 255, 3]));
            expect(error).toBeNull();
            expect(length).toBe(3);
            expect(value).toBe(32767);
        });

        // go: math.MinInt16
        it('decodes `-32768`', () => {
            const [value, length, error] = Amino.DecodeInt16(new Uint8Array([255, 255, 3]));
            expect(error).toBeNull();
            expect(length).toBe(3);
            expect(value).toBe(-32768);
        });

        it('decodes `0`', () => {
            const [value, length, error] = Amino.DecodeInt16(new Uint8Array([0]));
            expect(error).toBeNull();
            expect(length).toBe(1);
            expect(value).toBe(0);
        });
    });

    describe('DecodeInt32', () => {
        // go: math.MaxInt32
        it('decodes `2147483647`', () => {
            const [value, length, error] = Amino.DecodeInt32(new Uint8Array([255, 255, 255, 127]));
            expect(error).toBeNull();
            expect(length).toBe(4);
            expect(value).toBe(2147483647);
        });

        // go: math.MinInt32
        it('decodes `-2147483648`', () => {
            const [value, length, error] = Amino.DecodeInt32(new Uint8Array([0, 0, 0, 128]));
            expect(error).toBeNull();
            expect(length).toBe(4);
            expect(value).toBe(-2147483648);
        });

        it('decodes `0`', () => {
            const [value, length, error] = Amino.DecodeInt32(new Uint8Array([0, 0, 0, 0]));
            expect(error).toBeNull();
            expect(length).toBe(4);
            expect(value).toBe(0);
        });
    });

    describe('DecodeInt64', () => {
        // go: math.MaxInt64
        it.skip('decodes `9223372036854775807`', () => {
            const [value, length, error] = Amino.DecodeInt64(new Uint8Array([255, 255, 255, 255, 255, 255, 255, 127]));
            expect(error).toBeNull();
            expect(length).toBe(8);
            expect(value).toBe(9223372036854775807);
        });

        // go: math.MinInt64
        it.skip('decodes `-9223372036854775808`', () => {
            const [value, length, error] = Amino.DecodeInt64(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 128]));
            expect(error).toBeNull();
            expect(length).toBe(8);
            expect(value).toBe(-9223372036854775808);
        });

        it('decodes `Number.MAX_SAFE_INTEGER`', () => {
            const [value, length, error] = Amino.DecodeInt64(new Uint8Array([255, 255, 255, 255, 255, 255, 31, 0]));
            expect(error).toBeNull();
            expect(length).toBe(8);
            expect(value).toBe(Number.MAX_SAFE_INTEGER);
        });

        it('decodes `Number.MIN_SAFE_INTEGER`', () => {
            const [value, length, error] = Amino.DecodeInt64(new Uint8Array([1, 0, 0, 0, 0, 0, 224, 255]));
            expect(error).toBeNull();
            expect(length).toBe(8);
            expect(value).toBe(Number.MIN_SAFE_INTEGER);
        });

        it('decodes `0`', () => {
            const [value, length, error] = Amino.DecodeInt64(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]));
            expect(error).toBeNull();
            expect(length).toBe(8);
            expect(value).toBe(0);
        });
    });

    describe('DecodeVarint', () => {
        // go: math.MaxInt64
        it.skip('decodes `9223372036854775807`', () => {
            const [value, length, error] = Amino.DecodeVarint(new Uint8Array([254, 255, 255, 255, 255, 255, 255, 255, 255, 1]));
            expect(error).toBeNull();
            expect(length).toBe(10);
            expect(value).toBe(9223372036854775807);
        });

        // go: math.MinInt64
        it.skip('decodes `-9223372036854775808`', () => {
            const [value, length, error] = Amino.DecodeVarint(new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255, 255, 1]));
            expect(error).toBeNull();
            expect(length).toBe(10);
            expect(value).toBe(-9223372036854775808);
        });

        it('decodes `Number.MAX_SAFE_INTEGER`', () => {
            const [value, length, error] = Amino.DecodeVarint(new Uint8Array([254, 255, 255, 255, 255, 255, 255, 31]));
            expect(error).toBeNull();
            expect(length).toBe(8);
            expect(value).toBe(Number.MAX_SAFE_INTEGER);
        });

        it('decodes `Number.MIN_SAFE_INTEGER`', () => {
            const [value, length, error] = Amino.DecodeVarint(new Uint8Array([253, 255, 255, 255, 255, 255, 255, 31]));
            expect(error).toBeNull();
            expect(length).toBe(8);
            expect(value).toBe(Number.MIN_SAFE_INTEGER);
        });

        it('decodes `0`', () => {
            const [value, length, error] = Amino.DecodeVarint(new Uint8Array([0]));
            expect(error).toBeNull();
            expect(length).toBe(1);
            expect(value).toBe(0);
        });
    });

    describe('DecodeUint8', () => {
        // go: math.MaxUint8
        it('decodes `255`', () => {
            const [value, length, error] = Amino.DecodeUint8(new Uint8Array([255, 1]));
            expect(error).toBeNull();
            expect(length).toBe(2);
            expect(value).toBe(255);
        });

        it('decodes `0`', () => {
            const [value, length, error] = Amino.DecodeUint8(new Uint8Array([0]));
            expect(error).toBeNull();
            expect(length).toBe(1);
            expect(value).toBe(0);
        });
    });

    describe('DecodeUint16', () => {
        // go: math.MaxUint16
        it('decodes `65535`', () => {
            const [value, length, error] = Amino.DecodeUint16(new Uint8Array([255, 255, 3]));
            expect(error).toBeNull();
            expect(length).toBe(3);
            expect(value).toBe(65535);
        });

        it('decodes `0`', () => {
            const [value, length, error] = Amino.DecodeUint16(new Uint8Array([0]));
            expect(error).toBeNull();
            expect(length).toBe(1);
            expect(value).toBe(0);
        });
    });

    describe('DecodeUint32', () => {
        // go: math.MaxUint32
        it('decodes `4294967295`', () => {
            const [value, length, error] = Amino.DecodeUint32(new Uint8Array([255, 255, 255, 255]));
            expect(error).toBeNull();
            expect(length).toBe(4);
            expect(value).toBe(4294967295);
        });

        it('decodes `0`', () => {
            const [value, length, error] = Amino.DecodeUint32(new Uint8Array([0, 0, 0, 0]));
            expect(error).toBeNull();
            expect(length).toBe(4);
            expect(value).toBe(0);
        });
    });

    describe('DecodeUint64', () => {
        // go: math.MaxUint64
        it.skip('decodes `18446744073709551615`', () => {
            const [value, length, error] = Amino.DecodeUint64(new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255]));
            expect(error).toBeNull();
            expect(length).toBe(8);
            expect(value).toBe(18446744073709551615);
        });

        it('decodes `Number.MAX_SAFE_INTEGER`', () => {
            const [value, length, error] = Amino.DecodeUint64(new Uint8Array([255, 255, 255, 255, 255, 255, 31, 0]));
            expect(error).toBeNull();
            expect(length).toBe(8);
            expect(value).toBe(Number.MAX_SAFE_INTEGER);
        });

        it('decodes `0`', () => {
            const [value, length, error] = Amino.DecodeUint64(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]));
            expect(error).toBeNull();
            expect(length).toBe(8);
            expect(value).toBe(0);
        });
    });

    describe('DecodeUvarint', () => {
        // go: math.MaxUint64
        it.skip('decodes `18446744073709551615`', () => {
            const [value, length, error] = Amino.DecodeUvarint(new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255, 255, 1]));
            expect(error).toBeNull();
            expect(length).toBe(10);
            expect(value).toBe(18446744073709551615);
        });

        it('decodes `Number.MAX_SAFE_INTEGER`', () => {
            const [value, length, error] = Amino.DecodeUvarint(new Uint8Array([255, 255, 255, 255, 255, 255, 255, 15]));
            expect(error).toBeNull();
            expect(length).toBe(8);
            expect(value).toBe(Number.MAX_SAFE_INTEGER);
        });

        it('decodes `0`', () => {
            const [value, length, error] = Amino.DecodeUvarint(new Uint8Array([0]));
            expect(error).toBeNull();
            expect(length).toBe(1);
            expect(value).toBe(0);
        });
    });

    describe('DecodeFloat32', () => {
        // go: math.MaxFloat32
        it('decodes `3.40282346638528859811704183484516925440e+38`', () => {
            const [value, length, error] = Amino.DecodeFloat32(new Uint8Array([255, 255, 127, 127]));
            expect(error).toBeNull();
            expect(length).toBe(4);
            expect(value).toBe(3.40282346638528859811704183484516925440e+38);
        });

        // go: math.SmallestNonzeroFloat32
        it('decodes `1.401298464324817070923729583289916131280e-45`', () => {
            const [value, length, error] = Amino.DecodeFloat32(new Uint8Array([1, 0, 0, 0]));
            expect(error).toBeNull();
            expect(length).toBe(4);
            expect(value).toBe(1.401298464324817070923729583289916131280e-45);
        });

        it('decodes `0`', () => {
            const [value, length, error] = Amino.DecodeFloat32(new Uint8Array([0, 0, 0, 0]));
            expect(error).toBeNull();
            expect(length).toBe(4);
            expect(value).toBe(0);
        });
    });

    describe('DecodeFloat64', () => {
        // go: math.MaxFloat64
        it('decodes `1.797693134862315708145274237317043567981e+308`', () => {
            const [value, length, error] = Amino.DecodeFloat64(new Uint8Array([255, 255, 255, 255, 255, 255, 239, 127]));
            expect(error).toBeNull();
            expect(length).toBe(8);
            expect(value).toBe(1.797693134862315708145274237317043567981e+308);
        });

        // go: math.SmallestNonzeroFloat64
        it('decodes `4.940656458412465441765687928682213723651e-324`', () => {
            const [value, length, error] = Amino.DecodeFloat64(new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0]));
            expect(error).toBeNull();
            expect(length).toBe(8);
            expect(value).toBe(4.940656458412465441765687928682213723651e-324);
        });

        it('decodes `0`', () => {
            const [value, length, error] = Amino.DecodeFloat64(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]));
            expect(error).toBeNull();
            expect(length).toBe(8);
            expect(value).toBe(0);
        });
    });

    describe('DecodeBool', () => {
        it('decodes `true`', () => {
            const [value, length, error] = Amino.DecodeBool(new Uint8Array([1]));
            expect(error).toBeNull();
            expect(length).toBe(1);
            expect(value).toBe(true);
        });

        it('decodes `false`', () => {
            const [value, length, error] = Amino.DecodeBool(new Uint8Array([0]));
            expect(error).toBeNull();
            expect(length).toBe(1);
            expect(value).toBe(false);
        });
    });

    describe('DecodeString', () => {
        it('encodes `"hello"`', () => {
            const [value, length, error] = Amino.DecodeString(new Uint8Array([5, 104, 101, 108, 108, 111]));
            expect(error).toBeNull();
            expect(length).toBe(6);
            expect(value).toBe('hello');
        });
    });

    describe.only('DecodeTime', () => {
        // go: time.Date(1970, 1, 1, 0, 0, 0, 0, time.UTC)
        it('decodes `new Date(0)`', () => {
            const [value, length, error] = Amino.DecodeTime(new Uint8Array([]));
            expect(error).toBeNull();
            expect(length).toBe(0);
            expect(value).toBeDate(new Date(0));
        });

        // go: time.Date(1970, 1, 1, 0, 0, 1, 0, time.UTC)
        it('decodes `new Date(1000)`', () => {
            const [value, length, error] = Amino.DecodeTime(new Uint8Array([8, 1]));
            expect(error).toBeNull();
            expect(length).toBe(2);
            expect(value).toBeDate(new Date(1000));
        });

        // go: time.Date(2000, 1, 1, 0, 0, 0, 0, time.UTC)
        it('decodes `new Date("2000-01-01T00:00:00Z")`', () => {
            const [value, length, error] = Amino.DecodeTime(new Uint8Array([8, 128, 135, 181, 195, 3]));
            expect(error).toBeNull();
            expect(length).toBe(6);
            expect(value).toBeDate(new Date('2000-01-01T00:00:00Z'));
        });

        it.todo('decodes nanoseconds');
    });
});
