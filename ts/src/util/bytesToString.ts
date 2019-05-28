const decoder = new TextDecoder;

export default function bytesToString (bytes: Uint8Array): string {
    return decoder.decode(bytes);
}
