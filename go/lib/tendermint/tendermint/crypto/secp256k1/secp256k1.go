package secp256k1

import (
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto"
)

const (
	PrivKeyAminoName = "tendermint/PrivKeySecp256k1"
	PubKeyAminoName  = "tendermint/PubKeySecp256k1"
)

var _ crypto.PrivKey = PrivKeySecp256k1{}

type PrivKeySecp256k1 [32]byte

var _ crypto.PubKey = PubKeySecp256k1{}

const PubKeySecp256k1Size = 33

type PubKeySecp256k1 [PubKeySecp256k1Size]byte
