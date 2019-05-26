import { Msg, Tx } from '../types';
import { PubKey } from '../crypto';

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
    Denomination: string;
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

export interface StdTx extends Tx {
    Msgs:       Msg[];
    Fee:        StdFee;
    Signatures: StdSignature[];
    Memo:       string;
}

export interface StdFee {
    Amount: Coin[];
    Gas: number;
}

export interface StdSignature {
    PubKey: PubKey;
    Signature: Uint8Array;
}
