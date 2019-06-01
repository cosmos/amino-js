export interface Key {
    type: string;
    value: string;
}

export interface PubKey extends Key {
}

export interface PrivKey extends Key {
}

export interface PubKeyEd25519 {
}

export interface PrivKeyEd25519 {
}

export interface PubKeySecp256k1 {
}

export interface PrivKeySecp256k1 {
}

export interface PubKeyMultisigThreshold {
}

export interface PrivKeyLedgerSecp256k1 {
}
