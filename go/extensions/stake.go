package extensions

import (
	sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
)

// MsgDelegate - struct for bonding transactions
type MsgDelegate struct {
	DelegatorAddr sdk.AccAddress `json:"delegator_addr"`
	ValidatorAddr sdk.ValAddress `json:"validator_addr"`
	Delegation    sdk.Coin       `json:"delegation"`
}

var _ sdk.Msg = MsgDelegate{}

// MsgBeginUnbonding - struct for unbonding transactions
type MsgBeginUnbonding struct {
	DelegatorAddr sdk.AccAddress `json:"delegator_addr"`
	ValidatorAddr sdk.ValAddress `json:"validator_addr"`
	SharesAmount  sdk.Dec        `json:"shares_amount"`
}

var _ sdk.Msg = MsgBeginUnbonding{}

// MsgBeginRedelegate - struct for bonding transactions
type MsgBeginRedelegate struct {
	DelegatorAddr    sdk.AccAddress `json:"delegator_addr"`
	ValidatorSrcAddr sdk.ValAddress `json:"validator_src_addr"`
	ValidatorDstAddr sdk.ValAddress `json:"validator_dst_addr"`
	SharesAmount     sdk.Dec        `json:"shares_amount"`
}

var _ sdk.Msg = MsgBeginRedelegate{}
