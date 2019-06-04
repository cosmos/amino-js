package types

import (
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto"
	"time"
)

type ErrVoteConflictingVotes struct {
	*DuplicateVoteEvidence
}

type Address = crypto.Address

type Vote struct {
	Type             SignedMsgType `json:"type"`
	Height           int64         `json:"height"`
	Round            int           `json:"round"`
	BlockID          BlockID       `json:"block_id"` // zero if vote is nil.
	Timestamp        time.Time     `json:"timestamp"`
	ValidatorAddress Address       `json:"validator_address"`
	ValidatorIndex   int           `json:"validator_index"`
	Signature        []byte        `json:"signature"`
}
