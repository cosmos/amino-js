package extensions

import (
	sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
)

var (
	_ sdk.Msg = MsgCreateTopic{}
	_ sdk.Msg = MsgAddWriter{}
	_ sdk.Msg = MsgDeleteWriter{}
	_ sdk.Msg = MsgAddRecord{}
)

type MsgCreateTopic struct {
	TopicName    string
	Description  string
	OwnerAddress sdk.AccAddress
}

type MsgAddWriter struct {
	TopicName     string
	Moniker       string
	Description   string
	WriterAddress sdk.AccAddress
	OwnerAddress  sdk.AccAddress
}

type MsgDeleteWriter struct {
	TopicName     string
	WriterAddress sdk.AccAddress
	OwnerAddress  sdk.AccAddress
}

// MsgAddRecord for add record message
type MsgAddRecord struct {
	TopicName       string
	Key             []byte
	Value           []byte
	WriterAddress   sdk.AccAddress
	OwnerAddress    sdk.AccAddress
	FeePayerAddress sdk.AccAddress
}
