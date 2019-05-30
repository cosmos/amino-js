package multisig

import (
	"github.com/jordansexton/amino-js/go/lib/tendermint/tendermint/crypto/multisig/bitarray"
)

type Multisignature struct {
	BitArray *bitarray.CompactBitArray
	Sigs     [][]byte
}
