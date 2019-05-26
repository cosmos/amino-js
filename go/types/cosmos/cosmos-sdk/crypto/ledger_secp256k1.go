package crypto

import (
	"github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/crypto/keys/hd"
	tmcrypto "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/crypto"
)

type PrivKeyLedgerSecp256k1 struct {
	CachedPubKey tmcrypto.PubKey
	Path         hd.BIP44Params
}
