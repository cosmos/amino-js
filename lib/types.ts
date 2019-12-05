import { Bytes } from '@tendermint/types';

/**
 * A `Uint8Array` of Amino data
 */
export type AminoBytes = Bytes;

/**
 * A `Uint8Array` of Amino disambiguation data (3 bytes)
 */
export type DisambBytes = AminoBytes;

/**
 * A `Uint8Array` of Amino prefix data (4 bytes)
 */
export type PrefixBytes = AminoBytes;
