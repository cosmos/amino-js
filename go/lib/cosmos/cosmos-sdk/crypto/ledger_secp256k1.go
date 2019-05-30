package crypto

import (
	"github.com/jordansexton/amino-js/go/lib/cosmos/cosmos-sdk/crypto/keys/hd"
	tmcrypto "github.com/jordansexton/amino-js/go/lib/tendermint/tendermint/crypto"
)

type PrivKeyLedgerSecp256k1 struct {
	CachedPubKey tmcrypto.PubKey
	Path         hd.BIP44Params
}
