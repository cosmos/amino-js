/**
 * A `Uint8Array` of binary data
 */
export type Bytes = Uint8Array;

/**
 * A `Uint8Array` of Amino disambiguation data (3 bytes)
 */
export type DisambBytes = AminoBytes;

/**
 * A `Uint8Array` of Amino prefix data (4 bytes)
 */
export type PrefixBytes = AminoBytes;

/**
 * A `Uint8Array` of JSON data
 */
export type JSONBytes = Bytes;

/**
 * A `Uint8Array` of Amino data
 */
export type AminoBytes = Bytes;

/**
 * Base64-encoded string
 */
export type Base64String = string;

/**
 * Bech32-encoded string
 */
export type Bech32String = string;

/**
 * Binary-encoded string
 */
export type BinaryString = string;

/**
 * Hex-encoded string
 */
export type HexString = string;

/**
 * Unicode Scalar Values-encoded string
 */
export type USVString = string;
