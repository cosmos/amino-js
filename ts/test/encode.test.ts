import Amino from '../src';

describe('Encode', () => {
    describe('EncodeByte', () => {
        it('encodes `0`', () => {
            const [bytes, error] = Amino.EncodeByte(0);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([0]);
        });

        it('encodes `1`', () => {
            const [bytes, error] = Amino.EncodeByte(1);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([1]);
        });
    });

    describe('EncodeByteSlice', () => {
        it('encodes `new Uint8Array([0, 0, 0, 0])`', () => {
            const [bytes, error] = Amino.EncodeByteSlice(new Uint8Array([0, 0, 0, 0]));
            expect(error).toBeNull();
            expect(bytes).toBeBytes([4, 0, 0, 0, 0]);
        });

        it('encodes `new Uint8Array`', () => {
            const [bytes, error] = Amino.EncodeByteSlice(new Uint8Array);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([0]);
        });
    });

    describe('EncodeInt8', () => {
        // go: math.MaxInt8
        it('encodes `127`', () => {
            const [bytes, error] = Amino.EncodeInt8(127);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([254, 1]);
        });

        // go: math.MinInt8
        it('encodes `-128`', () => {
            const [bytes, error] = Amino.EncodeInt8(-128);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([255, 1]);
        });

        it('encodes `0`', () => {
            const [bytes, error] = Amino.EncodeInt8(0);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([0]);
        });
    });

    describe('EncodeInt16', () => {
        // go: math.MaxInt16
        it('encodes `32767`', () => {
            const [bytes, error] = Amino.EncodeInt16(32767);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([254, 255, 3]);
        });

        // go: math.MinInt16
        it('encodes `-32768`', () => {
            const [bytes, error] = Amino.EncodeInt16(-32768);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([255, 255, 3]);
        });

        it('encodes `0`', () => {
            const [bytes, error] = Amino.EncodeInt16(0);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([0]);
        });
    });

    describe('EncodeInt32', () => {
        // go: math.MaxInt32
        it('encodes `2147483647`', () => {
            const [bytes, error] = Amino.EncodeInt32(2147483647);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([255, 255, 255, 127]);
        });

        // go: math.MinInt32
        it('encodes `-2147483648`', () => {
            const [bytes, error] = Amino.EncodeInt32(-2147483648);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([0, 0, 0, 128]);
        });

        it('encodes `0`', () => {
            const [bytes, error] = Amino.EncodeInt32(0);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([0, 0, 0, 0]);
        });
    });

    describe('EncodeInt64', () => {
        // go: math.MaxInt64
        it.skip('encodes `9223372036854775807`', () => {
            const [bytes, error] = Amino.EncodeInt64(9223372036854775807);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([255, 255, 255, 255, 255, 255, 255, 127]);
        });

        // go: math.MinInt64
        it.skip('encodes `-9223372036854775808`', () => {
            const [bytes, error] = Amino.EncodeInt64(-9223372036854775808);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([0, 0, 0, 0, 0, 0, 0, 128]);
        });

        it('encodes `Number.MAX_SAFE_INTEGER`', () => {
            const [bytes, error] = Amino.EncodeInt64(Number.MAX_SAFE_INTEGER);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([255, 255, 255, 255, 255, 255, 31, 0]);
        });

        it('encodes `Number.MIN_SAFE_INTEGER`', () => {
            const [bytes, error] = Amino.EncodeInt64(Number.MIN_SAFE_INTEGER);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([1, 0, 0, 0, 0, 0, 224, 255]);
        });

        it('encodes `0`', () => {
            const [bytes, error] = Amino.EncodeInt64(0);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([0, 0, 0, 0, 0, 0, 0, 0]);
        });
    });

    describe('EncodeVarint', () => {
        // go: math.MaxInt64
        it.skip('encodes `9223372036854775807`', () => {
            const [bytes, error] = Amino.EncodeVarint(9223372036854775807);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([254, 255, 255, 255, 255, 255, 255, 255, 255, 1]);
        });

        // go: math.MinInt64
        it.skip('encodes `-9223372036854775808`', () => {
            const [bytes, error] = Amino.EncodeVarint(-9223372036854775808);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([255, 255, 255, 255, 255, 255, 255, 255, 255, 1]);
        });

        it('encodes `Number.MAX_SAFE_INTEGER`', () => {
            const [bytes, error] = Amino.EncodeVarint(Number.MAX_SAFE_INTEGER);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([254, 255, 255, 255, 255, 255, 255, 31]);
        });

        it('encodes `Number.MIN_SAFE_INTEGER`', () => {
            const [bytes, error] = Amino.EncodeVarint(Number.MIN_SAFE_INTEGER);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([253, 255, 255, 255, 255, 255, 255, 31]);
        });

        it('encodes `0`', () => {
            const [bytes, error] = Amino.EncodeVarint(0);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([0]);
        });
    });

    describe('EncodeUint8', () => {
        // go: math.MaxUint8
        it('encodes `255`', () => {
            const [bytes, error] = Amino.EncodeUint8(255);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([255, 1]);
        });

        it('encodes `0`', () => {
            const [bytes, error] = Amino.EncodeUint8(0);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([0]);
        });
    });

    describe('EncodeUint16', () => {
        // go: math.MaxUint16
        it('encodes `65535`', () => {
            const [bytes, error] = Amino.EncodeUint16(65535);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([255, 255, 3]);
        });

        it('encodes `0`', () => {
            const [bytes, error] = Amino.EncodeUint16(0);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([0]);
        });
    });

    describe('EncodeUint32', () => {
        // go: math.MaxUint32
        it('encodes `4294967295`', () => {
            const [bytes, error] = Amino.EncodeUint32(4294967295);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([255, 255, 255, 255]);
        });

        it('encodes `0`', () => {
            const [bytes, error] = Amino.EncodeUint32(0);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([0, 0, 0, 0]);
        });
    });

    describe('EncodeUint64', () => {
        // go: math.MaxUint64
        it.skip('encodes `18446744073709551615`', () => {
            const [bytes, error] = Amino.EncodeUint64(18446744073709551615);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([255, 255, 255, 255, 255, 255, 255, 255]);
        });

        it('encodes `Number.MAX_SAFE_INTEGER`', () => {
            const [bytes, error] = Amino.EncodeUint64(Number.MAX_SAFE_INTEGER);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([255, 255, 255, 255, 255, 255, 31, 0]);
        });

        it('encodes `0`', () => {
            const [bytes, error] = Amino.EncodeUint64(0);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([0, 0, 0, 0, 0, 0, 0, 0]);
        });
    });

    describe('EncodeUvarint', () => {
        // go: math.MaxUint64
        it.skip('encodes `18446744073709551615`', () => {
            const [bytes, error] = Amino.EncodeUvarint(18446744073709551615);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([255, 255, 255, 255, 255, 255, 255, 255, 255, 1]);
        });

        it('encodes `Number.MAX_SAFE_INTEGER`', () => {
            const [bytes, error] = Amino.EncodeUvarint(Number.MAX_SAFE_INTEGER);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([255, 255, 255, 255, 255, 255, 255, 15]);
        });

        it('encodes `0`', () => {
            const [bytes, error] = Amino.EncodeUvarint(0);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([0]);
        });
    });

    describe('EncodeFloat32', () => {
        // go: math.MaxFloat32
        it('encodes `3.40282346638528859811704183484516925440e+38`', () => {
            const [bytes, error] = Amino.EncodeFloat32(3.40282346638528859811704183484516925440e+38);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([255, 255, 127, 127]);
        });

        // go: math.SmallestNonzeroFloat32
        it('encodes `1.401298464324817070923729583289916131280e-45`', () => {
            const [bytes, error] = Amino.EncodeFloat32(1.401298464324817070923729583289916131280e-45);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([1, 0, 0, 0]);
        });

        it('encodes `0`', () => {
            const [bytes, error] = Amino.EncodeFloat32(0);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([0, 0, 0, 0]);
        });
    });

    describe('EncodeFloat64', () => {
        // go: math.MaxFloat64
        it('encodes `1.797693134862315708145274237317043567981e+308`', () => {
            const [bytes, error] = Amino.EncodeFloat64(1.797693134862315708145274237317043567981e+308);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([255, 255, 255, 255, 255, 255, 239, 127]);
        });

        // go: math.SmallestNonzeroFloat64
        it('encodes `4.940656458412465441765687928682213723651e-324`', () => {
            const [bytes, error] = Amino.EncodeFloat64(4.940656458412465441765687928682213723651e-324);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([1, 0, 0, 0, 0, 0, 0, 0]);
        });

        it('encodes `0`', () => {
            const [bytes, error] = Amino.EncodeFloat64(0);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([0, 0, 0, 0, 0, 0, 0, 0]);
        });
    });

    describe('EncodeBool', () => {
        it('encodes `true`', () => {
            const [bytes, error] = Amino.EncodeBool(true);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([1]);
        });

        it('encodes `false`', () => {
            const [bytes, error] = Amino.EncodeBool(false);
            expect(error).toBeNull();
            expect(bytes).toBeBytes([0]);
        });
    });

    describe('EncodeString', () => {
        it('encodes `"hello"`', () => {
            const [bytes, error] = Amino.EncodeString('hello');
            expect(error).toBeNull();
            expect(bytes).toBeBytes([5, 104, 101, 108, 108, 111]);
        });
    });

    describe('EncodeTime', () => {
        // go: time.Date(1970, 1, 1, 0, 0, 0, 0, time.UTC)
        it('encodes `new Date(0)`', () => {
            const [bytes, error] = Amino.EncodeTime(new Date(0));
            expect(error).toBeNull();
            expect(bytes).toBeBytes([]);
        });

        // go: time.Date(1970, 1, 1, 0, 0, 1, 0, time.UTC)
        it('encodes `new Date(1000)`', () => {
            const [bytes, error] = Amino.EncodeTime(new Date(1000));
            expect(error).toBeNull();
            expect(bytes).toBeBytes([8, 1]);
        });

        // go: time.Date(2000, 1, 1, 0, 0, 0, 0, time.UTC)
        it('encodes `new Date("2000-01-01T00:00:00Z")`', () => {
            const [bytes, error] = Amino.EncodeTime(new Date('2000-01-01T00:00:00Z'));
            expect(error).toBeNull();
            expect(bytes).toBeBytes([8, 128, 135, 181, 195, 3]);
        });

        it.todo('encodes nanoseconds');
    });
});
