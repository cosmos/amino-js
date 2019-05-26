package merkle

import (
	cmn "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/libs/common"
)

type simpleMap struct {
	kvs    cmn.KVPairs
	sorted bool
}

type KVPair cmn.KVPair
