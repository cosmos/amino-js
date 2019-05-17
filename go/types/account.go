package types

// Account is an interface used to store coins at a given address within state.
// It presumes a notion of sequence numbers for replay protection,
// a notion of account numbers for replay protection for previously pruned accounts,
// and a pubkey for authentication purposes.
//
// Many complex conditions can be used in the concrete struct which implements Account.
type Account interface {
}

// VestingAccount defines an account type that vests coins via a vesting schedule.
type VestingAccount interface {
    Account
}

// AccountDecoder unmarshals account bytes
// TODO: Think about removing
type AccountDecoder func(accountBytes []byte) (Account, error)

//-----------------------------------------------------------------------------
// BaseAccount

var _ Account = (*BaseAccount)(nil)

// BaseAccount - a base account structure.
// This can be extended by embedding within in your AppAccount.
// However one doesn't have to use BaseAccount as long as your struct
// implements Account.
type BaseAccount struct {
    Address       AccAddress `json:"address"`
    Coins         Coins      `json:"coins"`
    PubKey        PubKey     `json:"public_key"`
    AccountNumber uint64     `json:"account_number"`
    Sequence      uint64     `json:"sequence"`
}

//-----------------------------------------------------------------------------
// Base Vesting Account

// BaseVestingAccount implements the VestingAccount interface. It contains all
// the necessary fields needed for any vesting account implementation.
type BaseVestingAccount struct {
    *BaseAccount

    OriginalVesting  sdk.Coins `json:"original_vesting"`  // coins in account upon initialization
    DelegatedFree    sdk.Coins `json:"delegated_free"`    // coins that are vested and delegated
    DelegatedVesting sdk.Coins `json:"delegated_vesting"` // coins that vesting and delegated

    EndTime int64 `json:"end_time"` // when the coins become unlocked
}

//-----------------------------------------------------------------------------
// Continuous Vesting Account

var _ VestingAccount = (*ContinuousVestingAccount)(nil)

// ContinuousVestingAccount implements the VestingAccount interface. It
// continuously vests by unlocking coins linearly with respect to time.
type ContinuousVestingAccount struct {
    *BaseVestingAccount

    StartTime int64 `json:"start_time"` // when the coins start to vest
}

//-----------------------------------------------------------------------------
// Delayed Vesting Account

var _ VestingAccount = (*DelayedVestingAccount)(nil)

// DelayedVestingAccount implements the VestingAccount interface. It vests all
// coins after a specific time, but non prior. In other words, it keeps them
// locked until a specified time.
type DelayedVestingAccount struct {
    *BaseVestingAccount
}