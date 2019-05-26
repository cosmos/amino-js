package iavl

import (
	"github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/crypto/merkle"
)

const ProofOpIAVLValue = "iavl:v"

type IAVLValueOp struct {
	key   []byte
	Proof *RangeProof `json:"proof"`
}

var _ merkle.ProofOperator = IAVLValueOp{}
