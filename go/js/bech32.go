package main

import (
	"github.com/cosmos/amino-js/go/src"
)

func EncodeBech32 (hrp string, data []byte) (bech string) {
	bech, err := src.EncodeBech32(hrp, data)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeBech32 (bech string) (hrp string, data []byte) {
	hrp, data, err := src.DecodeBech32(bech)
	if err != nil {
		panic(err)
	}
	return
}
