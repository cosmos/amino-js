package multisig

import (
	"github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/crypto/multisig/bitarray"
)

type Multisignature struct {
	BitArray *bitarray.CompactBitArray
	Sigs     [][]byte
}
