import { StdFee, StdSignature } from './auth';
import { MsgSend, MsgMultiSend } from './bank';

/** @TODO document */
export interface Msg {
    type: string;
    value: MsgSend | MsgMultiSend;
}

/** @TODO document */
export interface Tx {
    type: string;
    value: TxValue;
}

/** @TODO document */
export interface TxValue {
    msg: Msg[];
    fee: StdFee;
    signatures: StdSignature[];
    memo: string;
}

/** @TODO document */
export interface Coin {
    denom: string;
    amount: string;
}
