package types

import (
	sdk "github.com/jordansexton/amino-js/go/lib/cosmos/cosmos-sdk/types"
	"time"
)

type Proposal struct {
	Content `json:"content"` // Proposal content interface

	ProposalID       uint64         `json:"id"`                 //  ID of the proposal
	Status           ProposalStatus `json:"proposal_status"`    // Status of the Proposal {Pending, Active, Passed, Rejected}
	FinalTallyResult TallyResult    `json:"final_tally_result"` // Result of Tallys

	SubmitTime     time.Time `json:"submit_time"`      // Time of the block where TxGovSubmitProposal was included
	DepositEndTime time.Time `json:"deposit_end_time"` // Time that the Proposal would expire if deposit amount isn't met
	TotalDeposit   sdk.Coins `json:"total_deposit"`    // Current deposit on this proposal. Initial value is set at InitialDeposit

	VotingStartTime time.Time `json:"voting_start_time"` // Time of the block where MinDeposit was reached. -1 if MinDeposit is not reached
	VotingEndTime   time.Time `json:"voting_end_time"`   // Time that the VotingPeriod for this proposal will end and votes will be tallied
}

type (
	Proposals []Proposal
	ProposalQueue []uint64
	ProposalStatus byte
)

type TallyResult struct {
	Yes        sdk.Int `json:"yes"`
	Abstain    sdk.Int `json:"abstain"`
	No         sdk.Int `json:"no"`
	NoWithVeto sdk.Int `json:"no_with_veto"`
}

type TextProposal struct {
	Title       string `json:"title"`
	Description string `json:"description"`
}

var _ Content = TextProposal{}

type SoftwareUpgradeProposal struct {
	Title       string `json:"title"`
	Description string `json:"description"`
}

var _ Content = SoftwareUpgradeProposal{}
