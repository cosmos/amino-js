package bech32

import (
	"github.com/btcsuite/btcutil/bech32"
	"github.com/pkg/errors"
)

func ConvertAndEncode(hrp string, data []byte) (string, error) {
	converted, err := bech32.ConvertBits(data, 8, 5, true)
	if err != nil {
		return "", errors.Wrap(err, "encoding bech32 failed")
	}
	return bech32.Encode(hrp, converted)
}

func DecodeAndConvert(bech string) (string, []byte, error) {
	hrp, data, err := bech32.Decode(bech)
	if err != nil {
		return "", nil, errors.Wrap(err, "decoding bech32 failed")
	}
	converted, err := bech32.ConvertBits(data, 5, 8, false)
	if err != nil {
		return "", nil, errors.Wrap(err, "decoding bech32 failed")
	}
	return hrp, converted, nil
}
