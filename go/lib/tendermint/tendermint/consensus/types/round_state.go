package types

import (
	"encoding/json"
	"time"

	cmn "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/libs/common"
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/types"
)

type RoundStepType uint8 // These must be numeric, ordered.

type RoundState struct {
	Height                    int64               `json:"height"` // Height we are working on
	Round                     int                 `json:"round"`
	Step                      RoundStepType       `json:"step"`
	StartTime                 time.Time           `json:"start_time"`
	CommitTime                time.Time           `json:"commit_time"` // Subjective time when +2/3 precommits for Block at Round were found
	Validators                *types.ValidatorSet `json:"validators"`
	Proposal                  *types.Proposal     `json:"proposal"`
	ProposalBlock             *types.Block        `json:"proposal_block"`
	ProposalBlockParts        *types.PartSet      `json:"proposal_block_parts"`
	LockedRound               int                 `json:"locked_round"`
	LockedBlock               *types.Block        `json:"locked_block"`
	LockedBlockParts          *types.PartSet      `json:"locked_block_parts"`
	ValidRound                int                 `json:"valid_round"`       // Last known round with POL for non-nil valid block.
	ValidBlock                *types.Block        `json:"valid_block"`       // Last known block of POL mentioned above.
	ValidBlockParts           *types.PartSet      `json:"valid_block_parts"` // Last known block parts of POL metnioned above.
	Votes                     *HeightVoteSet      `json:"votes"`
	CommitRound               int                 `json:"commit_round"` //
	LastCommit                *types.VoteSet      `json:"last_commit"`  // Last precommits at Height-1
	LastValidators            *types.ValidatorSet `json:"last_validators"`
	TriggeredTimeoutPrecommit bool                `json:"triggered_timeout_precommit"`
}

type RoundStateSimple struct {
	HeightRoundStep   string          `json:"height/round/step"`
	StartTime         time.Time       `json:"start_time"`
	ProposalBlockHash cmn.HexBytes    `json:"proposal_block_hash"`
	LockedBlockHash   cmn.HexBytes    `json:"locked_block_hash"`
	ValidBlockHash    cmn.HexBytes    `json:"valid_block_hash"`
	Votes             json.RawMessage `json:"height_vote_set"`
}
