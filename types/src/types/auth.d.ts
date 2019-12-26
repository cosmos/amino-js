import { PubKey } from './crypto';
import { Coin, Msg, TxValue } from './types';
/** @TODO document */
export interface Account {
    type: string;
    value: AccountValue;
}
/** @TODO document */
export interface AccountValue {
}
/** @TODO document */
export interface BaseAccount extends AccountValue {
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
export interface BaseVestingAccount extends AccountValue {
    BaseAccount: BaseAccount;
    original_vesting: Coin[];
    delegated_free: Coin[];
    delegated_vesting: Coin[];
    end_time: string;
}
/** @TODO document */
export interface ContinuousVestingAccount extends AccountValue {
    BaseVestingAccount: BaseVestingAccount;
    start_time: string;
}
/** @TODO document */
export interface DelayedVestingAccount extends AccountValue {
    BaseVestingAccount: BaseVestingAccount;
}
/** @TODO document */
export interface StdTx extends TxValue {
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
