package rootmulti

import (
	"github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/crypto/merkle"
)

type MultiStoreProof struct {
	StoreInfos []storeInfo
}

var _ merkle.ProofOperator = MultiStoreProofOp{}

const ProofOpMultiStore = "multistore"

type MultiStoreProofOp struct {
	key   []byte
	Proof *MultiStoreProof `json:"proof"`
}
