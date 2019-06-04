package rootmulti

import (
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto/merkle"
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
