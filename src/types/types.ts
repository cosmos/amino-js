import { StdTx } from './auth';
import { MsgSend, MsgMultiSend } from './bank';

/** @TODO document */
export interface Msg {
    type: string;
    value: MsgSend | MsgMultiSend;
}

/** @TODO document */
export interface Tx {
    type: string;
    value: StdTx;
}

/** @TODO document */
export interface Coin {
    denom: string;
    amount: string;
}
