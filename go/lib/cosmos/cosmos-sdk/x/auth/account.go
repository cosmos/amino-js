package auth

import (
	sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto"
)

type Account interface {
}

type VestingAccount interface {
	Account
}

var _ Account = (*BaseAccount)(nil)

type BaseAccount struct {
	Address       sdk.AccAddress `json:"address"`
	Coins         sdk.Coins      `json:"coins"`
	PubKey        crypto.PubKey  `json:"public_key"`
	AccountNumber uint64         `json:"account_number"`
	Sequence      uint64         `json:"sequence"`
}

type BaseVestingAccount struct {
	*BaseAccount

	OriginalVesting  sdk.Coins `json:"original_vesting"`  // coins in account upon initialization
	DelegatedFree    sdk.Coins `json:"delegated_free"`    // coins that are vested and delegated
	DelegatedVesting sdk.Coins `json:"delegated_vesting"` // coins that vesting and delegated
	EndTime          int64     `json:"end_time"`          // when the coins become unlocked
}

var _ VestingAccount = (*ContinuousVestingAccount)(nil)

type ContinuousVestingAccount struct {
	*BaseVestingAccount

	StartTime int64 `json:"start_time"` // when the coins start to vest
}

var _ VestingAccount = (*DelayedVestingAccount)(nil)

type DelayedVestingAccount struct {
	*BaseVestingAccount
}
