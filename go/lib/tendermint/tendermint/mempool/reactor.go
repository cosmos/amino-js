package mempool

import (
	"github.com/jordansexton/amino-js/go/lib/tendermint/tendermint/types"
)

type PeerState interface {
}

type MempoolMessage interface{}

type TxMessage struct {
	Tx types.Tx
}
