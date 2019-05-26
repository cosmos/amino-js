package iavl

import (
	"github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/crypto/merkle"
)

const ProofOpIAVLAbsence = "iavl:a"

type IAVLAbsenceOp struct {
	key   []byte
	Proof *RangeProof `json:"proof"`
}

var _ merkle.ProofOperator = IAVLAbsenceOp{}
