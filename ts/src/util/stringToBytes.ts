const encoder = new TextEncoder;

export default function stringToBytes (string: string): Uint8Array {
    return encoder.encode(string);
}
