import '../../dist/main';

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeBytes (bytes: number[]): R;

            toBeDate (date: Date): R;
        }
    }
}

expect.extend({
    toBeBytes (received: Uint8Array, expected: number[]) {
        if (!(received instanceof Uint8Array)) {
            return {
                message: () => `expected ${ received } to be a Uint8Array`,
                pass:    false
            };
        }

        if (received.length !== expected.length) {
            return {
                message: () => `expected ${ expected.length } bytes, received ${ received.length } bytes`,
                pass:    false
            };
        }

        for (let i = 0; i < received.length; i++) {
            if (received[i] !== expected[i]) {
                return {
                    message: () => `expected byte at index ${ i } to be ${ expected[i] }, received ${ received[i] }`,
                    pass:    false
                };
            }
        }

        return {
            message: () => `expected ${ received } to be ${ expected }`,
            pass:    true
        };
    },
    toBeDate (received: Date, expected: Date) {
        if (!(received instanceof Date)) {
            return {
                message: () => `expected ${ received } to be a Date`,
                pass:    false
            };
        }

        if (received.getTime() !== expected.getTime()) {
            return {
                message: () => `expected ${ expected }, received ${ received }`,
                pass:    false
            };
        }

        return {
            message: () => `expected ${ received } to be ${ expected }`,
            pass:    true
        };
    }
});
