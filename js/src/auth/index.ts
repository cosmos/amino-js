import * as types from '../types';
import * as crypto from '../crypto';

export interface Account {
}

export interface VestingAccount extends Account {
}

export interface BaseAccount extends Account {
    Address: Uint8Array;
    Coins: Coin[];
    PublicKey: Uint8Array;
    Number: number;
    Sequence: number;
}

export interface Coin {
    Denom: string;
    Amount: number;
}

export interface BaseVestingAccount extends BaseAccount, VestingAccount {
    OriginalVesting: Coin[];
    DelegatedFree: Coin[];
    DelegatedVesting: Coin[];
    EndTime: number;
}

export interface ContinuousVestingAccount extends BaseVestingAccount {
    StartTime: number;
}

export interface DelayedVestingAccount extends BaseVestingAccount {
}

export interface StdTx extends types.Tx {
    Msgs:       types.Msg[];
    Fee:        StdFee;
    Signatures: StdSignature[];
    Memo:       string;
}

export interface StdFee {
    Amount: Coin[];
    Gas: number;
}

export interface StdSignature {
    PubKey: crypto.PubKey;
    Signature: Uint8Array;
}
