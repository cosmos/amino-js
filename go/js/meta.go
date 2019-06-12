package main

import (
	"github.com/cosmos/amino-js/go/src"
	"github.com/tendermint/go-amino"
)

func DecodeDisambPrefixBytes(bz []byte) (db amino.DisambBytes, hasDb bool, pb amino.PrefixBytes, hasPb bool, n int) {
	db, hasDb, pb, hasPb, n, err := src.DecodeDisambPrefixBytes(bz)
	if err != nil {
		panic(err)
	}
	return
}

// @formatter:off
var NameToDisfix  = src.NameToDisfix
var ByteSliceSize = src.ByteSliceSize
var UvarintSize   = src.UvarintSize
var VarintSize    = src.VarintSize
// @formatter:on
