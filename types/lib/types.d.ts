import { Bytes } from '@tendermint/types';
/**
 * A `Uint8Array` of Amino data
 */
export declare type AminoBytes = Bytes;
/**
 * A `Uint8Array` of Amino disambiguation data (3 bytes)
 */
export declare type DisambBytes = AminoBytes;
/**
 * A `Uint8Array` of Amino prefix data (4 bytes)
 */
export declare type PrefixBytes = AminoBytes;
