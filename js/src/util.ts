const decoder = new TextDecoder;
const encoder = new TextEncoder;

export function base64ToBytes (base64: string): Uint8Array {
    const raw    = atob(base64);
    const length = raw.length;
    const bytes  = new Uint8Array(new ArrayBuffer(length));

    for (let i = 0; i < length; i++) {
        bytes[i] = raw.charCodeAt(i);
    }

    return bytes;
}

export function bytesToBase64 (bytes: Uint8Array): string {
    const raw = String.fromCharCode(...bytes);
    return btoa(raw);
}

export function bytesToString (bytes: Uint8Array): string {
    return decoder.decode(bytes);
}

export function stringToBytes (string: string): Uint8Array {
    return encoder.encode(string);
}

export function marshalJSON<T> (o: T): Uint8Array {
    return stringToBytes(JSON.stringify(o));
}

export function unmarshalJSON<T> (bytes: Uint8Array): T {
    return JSON.parse(bytesToString(bytes));
}
