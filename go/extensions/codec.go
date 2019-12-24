package extensions

import (
	amino "github.com/tendermint/go-amino"
)

// RegisterCodec Register Codec
func RegisterCodec(codec *amino.Codec) {
	codec.RegisterConcrete(TxCreateMarket{}, "microtick/CreateMarket", nil)

	codec.RegisterConcrete(&Params{}, "irishub/Auth/Params", nil)

	codec.RegisterInterface((*Account)(nil), nil)
	codec.RegisterConcrete(&BaseAccount{}, "irishub/bank/Account", nil)
	codec.RegisterConcrete(StdTx{}, "irishub/bank/StdTx", nil)
	codec.RegisterConcrete(&MsgSend{}, "irishub/bank/Send", nil)
}
