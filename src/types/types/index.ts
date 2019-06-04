import * as auth from '../auth';
import * as bank from '../bank';

export interface Msg {
    type: string;
    value: bank.MsgSend | bank.MsgMultiSend;
}

export interface Tx {
    type: string;
    value: auth.StdTx;
}

export interface Coin {
    denom: string;
    amount: string;
}
