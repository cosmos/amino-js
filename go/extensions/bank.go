package extensions

import (
	sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
	"github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/bank"
)

// MsgSend - high level transaction of the coin module
type MsgSend struct {
	Inputs  []bank.Input  `json:"inputs"`
	Outputs []bank.Output `json:"outputs"`
}

var _ sdk.Msg = MsgSend{}
