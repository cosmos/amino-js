package crisis

import (
	sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
)

type MsgVerifyInvariant struct {
	Sender              sdk.AccAddress `json:"sender"`
	InvariantModuleName string         `json:"invariant_module_name"`
	InvariantRoute      string         `json:"invariant_route"`
}

var _ sdk.Msg = &MsgVerifyInvariant{}
