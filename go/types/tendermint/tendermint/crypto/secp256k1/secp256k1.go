package secp256k1

import (
	"github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/crypto"
)

var _ crypto.PrivKey = PrivKeySecp256k1{}

type PrivKeySecp256k1 [32]byte

var _ crypto.PubKey = PubKeySecp256k1{}

const PubKeySecp256k1Size = 33

type PubKeySecp256k1 [PubKeySecp256k1Size]byte
