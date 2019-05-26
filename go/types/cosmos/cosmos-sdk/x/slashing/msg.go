package slashing

import (
	sdk "github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/types"
)

var _ sdk.Msg = &MsgUnjail{}

type MsgUnjail struct {
	ValidatorAddr sdk.ValAddress `json:"address"` // address of the validator operator
}
