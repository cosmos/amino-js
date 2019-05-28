export default function base64ToBytes (base64: string): Uint8Array {
    const string = atob(base64);
    const length = string.length;
    const bytes  = new Uint8Array(new ArrayBuffer(length));

    for (let i = 0; i < length; i++) {
        bytes[i] = string.charCodeAt(i);
    }

    return bytes;
}
