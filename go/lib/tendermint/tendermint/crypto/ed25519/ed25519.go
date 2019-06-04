package ed25519

import (
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto"
)

var _ crypto.PrivKey = PrivKeyEd25519{}

const (
	PrivKeyAminoName = "tendermint/PrivKeyEd25519"
	PubKeyAminoName  = "tendermint/PubKeyEd25519"
)

type PrivKeyEd25519 [64]byte

var _ crypto.PubKey = PubKeyEd25519{}

const PubKeyEd25519Size = 32

type PubKeyEd25519 [PubKeyEd25519Size]byte
