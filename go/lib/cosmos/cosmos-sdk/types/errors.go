package types

import (
	cmn "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/libs/common"
)

type CodeType uint32

type CodespaceType string

type cmnError = cmn.Error

type Error interface {
	cmnError
}
