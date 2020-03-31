package extensions

import (
	sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
)

type Param struct {
	Subspace string `json:"subspace"`
	Key      string `json:"key"`
	Value    string `json:"value"`
}

// MsgSubmitProposal
type MsgSubmitProposal struct {
	Title          string         `json:"title"`           //  Title of the proposal
	Description    string         `json:"description"`     //  Description of the proposal
	ProposalType   byte           `json:"proposal_type"`   //  Type of proposal. Initial set {PlainTextProposal, SoftwareUpgradeProposal}
	Proposer       sdk.AccAddress `json:"proposer"`        //  Address of the proposer
	InitialDeposit sdk.Coins      `json:"initial_deposit"` //  Initial deposit paid by sender. Must be strictly positive.
	Params         []Param        `json:"params"`
}

var _ sdk.Msg = MsgSubmitProposal{}

type MsgSubmitSoftwareUpgradeProposal struct {
	MsgSubmitProposal
	Version      uint64  `json:"version"`
	Software     string  `json:"software"`
	SwitchHeight uint64  `json:"switch_height"`
	Threshold    sdk.Dec `json:"threshold"`
}

var _ sdk.Msg = MsgSubmitSoftwareUpgradeProposal{}

type MsgSubmitCommunityTaxUsageProposal struct {
	MsgSubmitProposal
	Usage       byte           `json:"usage"`
	DestAddress sdk.AccAddress `json:"dest_address"`
	Percent     sdk.Dec        `json:"percent"`
}

var _ sdk.Msg = MsgSubmitCommunityTaxUsageProposal{}

type MsgSubmitTokenAdditionProposal struct {
	MsgSubmitProposal
	Symbol          string `json:"symbol"`
	CanonicalSymbol string `json:"canonical_symbol"`
	Name            string `json:"name"`
	Decimal         uint8  `json:"decimal"`
	MinUnitAlias    string `json:"min_unit_alias"`
}

var _ sdk.Msg = MsgSubmitTokenAdditionProposal{}

// MsgDeposit
type MsgDeposit struct {
	ProposalID uint64         `json:"proposal_id"` // ID of the proposal
	Depositor  sdk.AccAddress `json:"depositor"`   // Address of the depositor
	Amount     sdk.Coins      `json:"amount"`      // Coins to add to the proposal's deposit
}

var _ sdk.Msg = MsgDeposit{}

// MsgVote
type MsgVote struct {
	ProposalID uint64         `json:"proposal_id"` // ID of the proposal
	Voter      sdk.AccAddress `json:"voter"`       //  address of the voter
	Option     byte           `json:"option"`      //  option from OptionSet chosen by the voter
}

var _ sdk.Msg = MsgVote{}
