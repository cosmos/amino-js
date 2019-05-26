package crypto

import (
	cmn "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/libs/common"
)

type Address = cmn.HexBytes

type PubKey interface {
}

type PrivKey interface {
}

type Symmetric interface {
}
