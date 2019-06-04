package types

import (
	sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto"
	"time"
)

type Validator struct {
	OperatorAddress         sdk.ValAddress `json:"operator_address"`    // address of the validator's operator; bech encoded in JSON
	ConsPubKey              crypto.PubKey  `json:"consensus_pubkey"`    // the consensus public key of the validator; bech encoded in JSON
	Jailed                  bool           `json:"jailed"`              // has the validator been jailed from bonded status?
	Status                  sdk.BondStatus `json:"status"`              // validator status (bonded/unbonding/unbonded)
	Tokens                  sdk.Int        `json:"tokens"`              // delegated tokens (incl. self-delegation)
	DelegatorShares         sdk.Dec        `json:"delegator_shares"`    // total shares issued to a validator's delegators
	Description             Description    `json:"description"`         // description terms for the validator
	UnbondingHeight         int64          `json:"unbonding_height"`    // if unbonding, height at which this validator has begun unbonding
	UnbondingCompletionTime time.Time      `json:"unbonding_time"`      // if unbonding, min time for the validator to complete unbonding
	Commission              Commission     `json:"commission"`          // commission parameters
	MinSelfDelegation       sdk.Int        `json:"min_self_delegation"` // validator's self declared minimum self delegation
}

type Validators []Validator

type Description struct {
	Moniker  string `json:"moniker"`  // name
	Identity string `json:"identity"` // optional identity signature (ex. UPort or Keybase)
	Website  string `json:"website"`  // optional website link
	Details  string `json:"details"`  // optional details
}

var _ sdk.Validator = Validator{}
