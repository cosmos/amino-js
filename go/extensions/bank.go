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

// MsgBurn - high level transaction of the coin module
type MsgBurn struct {
	Owner sdk.AccAddress `json:"owner"`
	Coins sdk.Coins      `json:"coins"`
}

var _ sdk.Msg = MsgBurn{}
