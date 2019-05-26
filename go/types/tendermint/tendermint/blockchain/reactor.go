package blockchain

import (
	"github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/types"
)

type BlockchainMessage interface {
}

type BcBlockRequestMessage struct {
	Height int64
}

type BcNoBlockResponseMessage struct {
	Height int64
}

type BcBlockResponseMessage struct {
	Block *types.Block
}

type BcStatusRequestMessage struct {
	Height int64
}

type BcStatusResponseMessage struct {
	Height int64
}
