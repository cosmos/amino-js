import { Base64String, BinaryString, Bytes, JSONBytes, USVString } from '../lib/types';

let TextDecoder: { new (): { decode (bytes: Bytes): USVString } };
let TextEncoder: { new (): { encode (string: USVString): Bytes } };
let atob: (base64: Base64String) => BinaryString;
let btoa: (binary: BinaryString) => Base64String;

if (typeof process !== 'undefined' && process.versions && process.versions.node) {
    ({ TextDecoder, TextEncoder } = require('util'));
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { Buffer } = require('buffer');

    atob = function (base64: Base64String): BinaryString {
        return Buffer.from(base64, 'base64').toString('binary');
    };
    btoa = function (binary: BinaryString): Base64String {
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
 * @typeparam T      - type of encoded value
 * @param     base64 - string to decode
 *
 * @returns   bytes from Base64-encoded string
 * @throws    will throw if decoding fails
 */
export function base64ToBytes (base64: Base64String): Bytes {
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
 * @typeparam T     - type of encoded value
 * @param     bytes - bytes to encode
 *
 * @returns   Base64-encoded string from bytes
 * @throws    will throw if encoding fails
 */
export function bytesToBase64 (bytes: Bytes): Base64String {
    const binary = String.fromCharCode(...bytes);
    return btoa(binary);
}

/**
 * Decode a string from bytes
 *
 * @typeparam T     - type of encoded value
 * @param     bytes - bytes to decode
 *
 * @returns   string decoded from bytes
 * @throws    will throw if decoding fails
 */
export function bytesToString (bytes: Bytes): USVString {
    return decoder.decode(bytes);
}

/**
 * Encode a string as bytes
 *
 * @typeparam T      - type of encoded value
 * @param     string - string to encode
 *
 * @returns   bytes encoded from string
 * @throws    will throw if encoding fails
 */
export function stringToBytes (string: USVString): Bytes {
    return encoder.encode(string);
}

/**
 * Encode a value as JSON bytes
 *
 * @typeparam T     - type of encoded value
 * @param     value - value to encode
 *
 * @returns   JSON bytes
 * @throws    will throw if `JSON.stringify` fails (e.g. on circular reference)
 */
export function jsonToBytes<T> (value: T): JSONBytes {
    return stringToBytes(JSON.stringify(value));
}

/**
 * Decode a value from JSON bytes
 *
 * @typeparam T    - type of encoded value
 * @param     json - JSON bytes to decode
 *
 * @returns   value decoded from JSON bytes
 * @throws    will throw if `JSON.parse` fails (e.g. on malformed JSON)
 */
export function bytesToJSON<T> (json: JSONBytes): T {
    return JSON.parse(bytesToString(json));
}
