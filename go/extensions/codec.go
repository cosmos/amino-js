package extensions

import (
	amino "github.com/tendermint/go-amino"
)

func RegisterCodec(codec *amino.Codec) {
	codec.RegisterConcrete(TxCreateMarket{}, "microtick/CreateMarket", nil)
}
