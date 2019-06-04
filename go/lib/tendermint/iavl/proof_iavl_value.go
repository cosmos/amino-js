package iavl

import (
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto/merkle"
)

const ProofOpIAVLValue = "iavl:v"

type IAVLValueOp struct {
	key   []byte
	Proof *RangeProof `json:"proof"`
}

var _ merkle.ProofOperator = IAVLValueOp{}
