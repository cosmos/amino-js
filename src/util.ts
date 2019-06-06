let TextDecoder: { new (): { decode (bytes: Uint8Array): string } };
let TextEncoder: { new (): { encode (string: string): Uint8Array } };
let atob: (base64: string) => string;
let btoa: (binary: string) => string;

if (typeof process !== 'undefined' && process.versions && process.versions.node) {
    ({ TextDecoder, TextEncoder } = require('util'));
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { Buffer } = require('buffer');

    atob = function (base64: string): string {
        return Buffer.from(base64, 'base64').toString('binary');
    };
    btoa = function (binary: string): string {
        return Buffer.from(binary, 'binary').toString('base64');
    };
}
else {
    ({ atob, btoa, TextDecoder, TextEncoder } = window);
}

const decoder = new TextDecoder;
const encoder = new TextEncoder;

export function base64ToBytes (base64: string): Uint8Array {
    const binary = atob(base64);
    const length = binary.length;
    const bytes  = new Uint8Array(new ArrayBuffer(length));

    for (let i = 0; i < length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }

    return bytes;
}

export function bytesToBase64 (bytes: Uint8Array): string {
    const binary = String.fromCharCode(...bytes);
    return btoa(binary);
}

export function bytesToString (bytes: Uint8Array): string {
    return decoder.decode(bytes);
}

export function stringToBytes (string: string): Uint8Array {
    return encoder.encode(string);
}

export function marshalJSON<T> (object: T): Uint8Array {
    return stringToBytes(JSON.stringify(object));
}

export function unmarshalJSON<T> (json: Uint8Array): T {
    return JSON.parse(bytesToString(json));
}
