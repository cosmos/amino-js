package extensions

import (
	sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
)

// MsgSetWithdrawAddress msg struct for changing the withdraw address for a delegator (or validator self-delegation)
type MsgSetWithdrawAddress struct {
	DelegatorAddr sdk.AccAddress `json:"delegator_addr"`
	WithdrawAddr  sdk.AccAddress `json:"withdraw_addr"`
}

// MsgWithdrawDelegatorRewardsAll msg struct for delegation withdraw for all of the delegator's delegations
type MsgWithdrawDelegatorRewardsAll struct {
	DelegatorAddr sdk.AccAddress `json:"delegator_addr"`
}

// MsgWithdrawDelegatorReward msg struct for delegation withdraw from a single validator
type MsgWithdrawDelegatorReward struct {
	DelegatorAddr sdk.AccAddress `json:"delegator_addr"`
	ValidatorAddr sdk.ValAddress `json:"validator_addr"`
}

// MsgWithdrawValidatorRewardsAll msg struct for validator withdraw
type MsgWithdrawValidatorRewardsAll struct {
	ValidatorAddr sdk.ValAddress `json:"validator_addr"`
}
