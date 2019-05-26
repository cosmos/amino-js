package mempool

import (
	"github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/types"
)

type PeerState interface {
}

type MempoolMessage interface{}

type TxMessage struct {
	Tx types.Tx
}
