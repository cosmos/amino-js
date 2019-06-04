package crypto

import (
	cmn "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/libs/common"
)

type Address = cmn.HexBytes

type PubKey interface {
}

type PrivKey interface {
}

type Symmetric interface {
}
