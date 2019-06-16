import { Bytes, JSONBytes } from '../lib/types';

let TextDecoder: { new (): { decode (bytes: Bytes): string } };
let TextEncoder: { new (): { encode (string: string): Bytes } };
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

/**
 * Decode bytes from Base64
 *
 * @param   base64 - string to decode
 *
 * @returns bytes from Base64-encoded string
 */
export function base64ToBytes (base64: string): Bytes {
    const binary = atob(base64);
    const length = binary.length;
    const bytes  = new Uint8Array(new ArrayBuffer(length));

    for (let i = 0; i < length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }

    return bytes;
}

/**
 * Encode bytes as Base64
 *
 * @param   bytes - bytes to encode
 *
 * @returns Base64-encoded string from bytes
 */
export function bytesToBase64 (bytes: Bytes): string {
    const binary = String.fromCharCode(...bytes);
    return btoa(binary);
}

/**
 * Decode a string from bytes
 *
 * @param   bytes - bytes to decode as a string
 *
 * @returns string decoded from bytes
 * @throws  will throw if decoding fails
 */
export function bytesToString (bytes: Bytes): string {
    return decoder.decode(bytes);
}

/**
 * Encode a string as bytes
 *
 * @param   string - string to encode as bytes
 *
 * @returns bytes encoded from string
 * @throws  will throw if encoding fails
 */
export function stringToBytes (string: string): Bytes {
    return encoder.encode(string);
}

/**
 * Encode an object as JSON bytes
 *
 * @param   object - object to encode as binary JSON bytes
 *
 * @returns JSON-encoded bytes
 * @throws  will throw if `JSON.stringify` fails (e.g. on circular reference)
 */
export function marshalJSON<T> (object: T): JSONBytes {
    return stringToBytes(JSON.stringify(object));
}

/**
 * Decode an object from JSON bytes
 *
 * @param   json - binary JSON bytes to decode
 *
 * @returns JSON-decoded object
 * @throws  will throw if `JSON.parse` fails (e.g. on malformed JSON)
 */
export function unmarshalJSON<T> (json: JSONBytes): T {
    return JSON.parse(bytesToString(json));
}
