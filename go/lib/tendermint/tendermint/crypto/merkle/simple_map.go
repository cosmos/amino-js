package merkle

import (
	cmn "github.com/jordansexton/amino-js/go/lib/tendermint/tendermint/libs/common"
)

type simpleMap struct {
	kvs    cmn.KVPairs
	sorted bool
}

type KVPair cmn.KVPair
