import * as crypto from '../crypto';
import * as types from '../types';

export interface Account {
    type: string;
    value: BaseAccount | BaseVestingAccount | ContinuousVestingAccount | DelayedVestingAccount;
}

export interface BaseAccount {
    address: string;
    coins: types.Coin[];
    public_key: crypto.PubKey;
    account_number: string;
    sequence: string;
}

export interface VestingAccount {
}

export interface BaseVestingAccount {
    BaseAccount: BaseAccount;
    original_vesting: types.Coin[];
    delegated_free: types.Coin[];
    delegated_vesting: types.Coin[];
    end_time: string;
}

export interface ContinuousVestingAccount {
    BaseVestingAccount: BaseVestingAccount;
    start_time: string;
}

export interface DelayedVestingAccount {
    BaseVestingAccount: BaseVestingAccount;
}

export interface StdTx {
    msg: types.Msg[];
    fee: StdFee;
    signatures: StdSignature[];
    memo: string;
}

export interface StdFee {
    amount: types.Coin[];
    gas: string;
}

export interface StdSignature {
    pub_key: crypto.PubKey;
    signature: string;
}
