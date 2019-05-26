export default function base64toBytes(base64: string): Uint8Array {
    const raw    = atob(base64);
    const length = raw.length;
    const bytes  = new Uint8Array(new ArrayBuffer(length));

    for (let i = 0; i < length; i++) {
        bytes[i] = raw.charCodeAt(i);
    }

    return bytes;
}
