package types

import (
	amino "github.com/tendermint/go-amino"
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/types"
)

var cdc = amino.NewCodec()

func init() {
	types.RegisterBlockAmino(cdc)
}
