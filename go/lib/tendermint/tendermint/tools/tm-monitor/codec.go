package main

import (
	amino "github.com/tendermint/go-amino"
	ctypes "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/rpc/core/types"
)

var cdc = amino.NewCodec()

func init() {
	ctypes.RegisterAmino(cdc)
}
