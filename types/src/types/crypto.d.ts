/** @TODO document */
interface Key {
    /** Amino registered name, e.g. `"tendermint/PubKeySecp256k1"` */
    type: string;
    /** Base64-encoded key bytes */
    value: string;
}
/** @TODO document */
export interface PubKey extends Key {
}
/** @TODO document */
export interface PrivKey extends Key {
}
/** @TODO document */
export interface PubKeyEd25519 {
}
/** @TODO document */
export interface PrivKeyEd25519 {
}
/** @TODO document */
export interface PubKeySecp256k1 {
}
/** @TODO document */
export interface PrivKeySecp256k1 {
}
/** @TODO document */
export interface PubKeyMultisigThreshold {
}
/** @TODO document */
export interface PrivKeyLedgerSecp256k1 {
}
export {};
