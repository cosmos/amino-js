package types

import "encoding/json"

// Transactions messages must fulfill the Msg
type Msg interface {
}

//__________________________________________________________

// Transactions objects must fulfill the Tx
type Tx interface {
}

// StdTx is a standard way to wrap a Msg with Fee and Signatures.
// NOTE: the first signature is the    fee payer (Signatures must not be nil).
type StdTx struct {
    Msgs       []Msg          `json:"msg"`
    Fee        StdFee         `json:"fee"`
    Signatures []StdSignature `json:"signatures"`
    Memo       string         `json:"memo"`
}

//__________________________________________________________

// StdFee includes the amount of coins paid in fees and the maximum
// gas to be used by the transaction. The ratio yields an effective "gasprice",
// which must be above some miminum to be accepted into the mempool.
type StdFee struct {
    Amount Coins  `json:"amount"`
    Gas    uint64 `json:"gas"`
}

//__________________________________________________________

// StdSignDoc is replay-prevention structure.
// It includes the result of msg.GetSignBytes(),
// as well as the ChainID (prevent cross chain replay)
// and the Sequence numbers for each signature (prevent
// inchain replay and enforce tx ordering per account).
type StdSignDoc struct {
    AccountNumber uint64            `json:"account_number"`
    ChainID       string            `json:"chain_id"`
    Fee           json.RawMessage   `json:"fee"`
    Memo          string            `json:"memo"`
    Msgs          []json.RawMessage `json:"msgs"`
    Sequence      uint64            `json:"sequence"`
}

// StdSignature represents a sig
type StdSignature struct {
    PubKey     `json:"pub_key"` // optional
    Signature  []byte           `json:"signature"`
}
