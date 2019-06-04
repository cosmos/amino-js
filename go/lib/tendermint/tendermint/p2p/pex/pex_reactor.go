package pex

import (
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/p2p"
)

type PexMessage interface{}

type PexRequestMessage struct {
}

type PexAddrsMessage struct {
	Addrs []*p2p.NetAddress
}
