package types

import (
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto"
)

type ErrEvidenceInvalid struct {
	Evidence   Evidence
	ErrorValue error
}

type ErrEvidenceOverflow struct {
	MaxNum int64
	GotNum int64
}

type Evidence interface {
}

type DuplicateVoteEvidence struct {
	PubKey crypto.PubKey
	VoteA  *Vote
	VoteB  *Vote
}

var _ Evidence = &DuplicateVoteEvidence{}

type MockRandomGoodEvidence struct {
	MockGoodEvidence
	randBytes []byte
}

var _ Evidence = &MockRandomGoodEvidence{}

type MockGoodEvidence struct {
	Height_  int64
	Address_ []byte
}

var _ Evidence = &MockGoodEvidence{}

type MockBadEvidence struct {
	MockGoodEvidence
}

type EvidenceList []Evidence
