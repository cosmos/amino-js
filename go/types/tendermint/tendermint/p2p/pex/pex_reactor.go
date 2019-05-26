package pex

import (
	"github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/p2p"
)

type PexMessage interface{}

type PexRequestMessage struct {
}

type PexAddrsMessage struct {
	Addrs []*p2p.NetAddress
}
