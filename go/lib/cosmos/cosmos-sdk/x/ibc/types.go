package ibc

import (
	sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
)

type IBCPacket struct {
	SrcAddr   sdk.AccAddress `json:"src_addr"`
	DestAddr  sdk.AccAddress `json:"dest_addr"`
	Coins     sdk.Coins      `json:"coins"`
	SrcChain  string         `json:"src_chain"`
	DestChain string         `json:"dest_chain"`
}

type MsgIBCTransfer struct {
	IBCPacket
}

type MsgIBCReceive struct {
	IBCPacket
	Relayer  sdk.AccAddress
	Sequence uint64
}
