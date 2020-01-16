package extensions

import (
	amino "github.com/tendermint/go-amino"
)

// RegisterCodec Register Codec
func RegisterCodec(codec *amino.Codec) {
	codec.RegisterConcrete(&Params{}, "irishub/Auth/Params", nil)

	codec.RegisterInterface((*Account)(nil), nil)
	codec.RegisterConcrete(&BaseAccount{}, "irishub/bank/Account", nil)
	codec.RegisterConcrete(StdTx{}, "irishub/bank/StdTx", nil)
	codec.RegisterConcrete(&MsgSend{}, "irishub/bank/Send", nil)
	codec.RegisterConcrete(&MsgBurn{}, "irishub/bank/Burn", nil)
	codec.RegisterConcrete(&MsgSetMemoRegexp{}, "irishub/bank/SetMemoRegexp", nil)
	codec.RegisterConcrete(&MsgDelegate{}, "irishub/stake/MsgDelegate", nil)
	codec.RegisterConcrete(&MsgBeginUnbonding{}, "irishub/stake/BeginUnbonding", nil)
	codec.RegisterConcrete(&MsgBeginRedelegate{}, "irishub/stake/BeginRedelegate", nil)
}
