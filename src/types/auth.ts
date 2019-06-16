import { PubKey } from './crypto';
import { Coin, Msg } from './types';

/** @TODO document */
export interface Account {
    type: string;
    value: BaseAccount | BaseVestingAccount | ContinuousVestingAccount | DelayedVestingAccount;
}

/** @TODO document */
export interface BaseAccount {
    /** Bech32 account address */
    address: string;
    coins: Coin[];
    public_key: PubKey;
    account_number: string;
    sequence: string;
}

/** @TODO document */
export interface VestingAccount {
}

/** @TODO document */
export interface BaseVestingAccount {
    BaseAccount: BaseAccount;
    original_vesting: Coin[];
    delegated_free: Coin[];
    delegated_vesting: Coin[];
    end_time: string;
}

/** @TODO document */
export interface ContinuousVestingAccount {
    BaseVestingAccount: BaseVestingAccount;
    start_time: string;
}

/** @TODO document */
export interface DelayedVestingAccount {
    BaseVestingAccount: BaseVestingAccount;
}

/** @TODO document */
export interface StdTx {
    msg: Msg[];
    fee: StdFee;
    signatures: StdSignature[];
    memo: string;
}

/** @TODO document */
export interface StdFee {
    amount: Coin[];
    gas: string;
}

/** @TODO document */
export interface StdSignature {
    pub_key: PubKey;
    signature: string;
}
