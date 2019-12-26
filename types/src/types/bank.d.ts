import { Coin } from './types';
/** @TODO document */
export interface MsgSend {
    /** Bech32 account address */
    from_address: string;
    /** Bech32 account address */
    to_address: string;
    amount: Coin[];
}
/** @TODO document */
export interface MsgMultiSend {
    inputs: Input[];
    outputs: Output[];
}
/** @TODO document */
interface InputOutput {
    /** Bech32 account address */
    address: string;
    coins: Coin[];
}
/** @TODO document */
export interface Input extends InputOutput {
}
/** @TODO document */
export interface Output extends InputOutput {
}
export {};
