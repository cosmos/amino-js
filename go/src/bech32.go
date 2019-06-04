package src

import (
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/libs/bech32"
)

func EncodeBech32(hrp string, data []byte) (bech string) {
	bech, err := bech32.ConvertAndEncode(hrp, data)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeBech32(bech string) (hrp string, data []byte) {
	hrp, data, err := bech32.DecodeAndConvert(bech)
	if err != nil {
		panic(err)
	}
	return
}
