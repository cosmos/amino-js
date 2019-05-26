package types

import (
	cmn "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/libs/common"
)

type CodeType uint32

type CodespaceType string

type cmnError = cmn.Error

type Error interface {
	cmnError
}
