import * as types from '../types';

export interface MsgSend {
    from_address: string;
    to_address: string;
    amount: types.Coin[];
}

export interface MsgMultiSend {
    inputs: Input[];
    outputs: Output[];
}

export interface InputOutput {
    address: string;
    coins: types.Coin[];
}

export interface Input extends InputOutput {
}

export interface Output extends InputOutput {
}
