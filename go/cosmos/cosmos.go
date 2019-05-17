package cosmos

import (
    "github.com/cosmos/cosmos-sdk/x/auth"
    "github.com/tendermint/go-amino"
)

var cdc = amino.NewCodec()

func init() {
    cdc.RegisterConcrete(auth.StdTx{}, "auth/StdTx", nil)
}
