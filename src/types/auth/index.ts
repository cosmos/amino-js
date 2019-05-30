import * as types from '../types';
import * as crypto from '../crypto';

export interface Account {
}

export interface VestingAccount extends Account {
}

export interface BaseAccount extends Account {
    address: Uint8Array;
    coins: Coin[];
    publicKey: Uint8Array;
    accountNumber: number;
    sequence: number;
}

export interface Coin {
    denom: string;
    amount: number;
}

export interface BaseVestingAccount extends BaseAccount, VestingAccount {
    originalVesting: Coin[];
    delegatedFree: Coin[];
    delegatedVesting: Coin[];
    endTime: number;
}

export interface ContinuousVestingAccount extends BaseVestingAccount {
    startTime: number;
}

export interface DelayedVestingAccount extends BaseVestingAccount {
}

export interface StdTx extends types.Tx {
    messages:   types.Msg[];
    fee:        StdFee;
    signatures: StdSignature[];
    memo:       string;
}

export interface StdFee {
    amount: Coin[];
    gas: number;
}

export interface StdSignature {
    publicKey: crypto.PubKey;
    signature: Uint8Array;
}
