package extensions

import (
    sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
)

var _ sdk.Msg = MsgAddRecord{}

// MsgAddRecord for add record message
type MsgAddRecord struct {
	TopicName       string
	Key             []byte
	Value           []byte
	WriterAddress   sdk.AccAddress
	OwnerAddress    sdk.AccAddress
	FeePayerAddress sdk.AccAddress
}