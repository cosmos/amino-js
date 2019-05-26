package p2p

import (
	"github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/crypto"
)

type ID string

type NodeKey struct {
	PrivKey crypto.PrivKey `json:"priv_key"` // our priv key
}
