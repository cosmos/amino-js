package iavl

import (
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto/merkle"
)

const ProofOpIAVLAbsence = "iavl:a"

type IAVLAbsenceOp struct {
	key   []byte
	Proof *RangeProof `json:"proof"`
}

var _ merkle.ProofOperator = IAVLAbsenceOp{}
