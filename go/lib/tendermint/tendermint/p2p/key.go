package p2p

import (
	"github.com/jordansexton/amino-js/go/lib/tendermint/tendermint/crypto"
)

type ID string

type NodeKey struct {
	PrivKey crypto.PrivKey `json:"priv_key"` // our priv key
}
