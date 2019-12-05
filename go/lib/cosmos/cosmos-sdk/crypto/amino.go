package crypto

import (
	amino "github.com/tendermint/go-amino"
	cryptoAmino "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto/encoding/amino"
)

var cdc = amino.NewCodec()

func init() {
	RegisterAmino(cdc)
	cryptoAmino.RegisterAmino(cdc)
}

// RegisterAmino registers all go-crypto related types in the given (amino) codec.
func RegisterAmino(cdc *amino.Codec) {
	cdc.RegisterConcrete(PrivKeyLedgerSecp256k1{},
		"tendermint/PrivKeyLedgerSecp256k1", nil)
}
