package extensions

import (
	sdk "github.com/cosmos/amino-js/go/lib/panacea/panacea-sdk/types"
)

var (
	_ sdk.Msg = MsgCreateTopic{}
	_ sdk.Msg = MsgAddWriter{}
	_ sdk.Msg = MsgDeleteWriter{}
	_ sdk.Msg = MsgAddRecord{}
)

type MsgCreateTopic struct {
	TopicName    string         `json:"topic_name"`
	Description  string         `json:"description"`
	OwnerAddress sdk.AccAddress `json:"owner_address"`
}

type MsgAddWriter struct {
	TopicName     string         `json:"topic_name"`
	Moniker       string         `json:"moniker"`
	Description   string         `json:"description"`
	WriterAddress sdk.AccAddress `json:"writer_address"`
	OwnerAddress  sdk.AccAddress `json:"owner_address"`
}

type MsgDeleteWriter struct {
	TopicName     string         `json:"topic_name"`
	WriterAddress sdk.AccAddress `json:"writer_address"`
	OwnerAddress  sdk.AccAddress `json:"owner_address"`
}

// MsgAddRecord for add record message
type MsgAddRecord struct {
	TopicName       string         `json:"topic_name"`
	Key             []byte         `json:"key"`
	Value           []byte         `json:"value"`
	WriterAddress   sdk.AccAddress `json:"writer_address"`
	OwnerAddress    sdk.AccAddress `json:"owner_address"`
	FeePayerAddress sdk.AccAddress `json:"fee_payer_address"`
}
