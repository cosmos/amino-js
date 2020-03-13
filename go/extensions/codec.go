package extensions

import (
	amino "github.com/tendermint/go-amino"
)

func RegisterCodec(codec *amino.Codec) {
	codec.RegisterConcrete(MsgCreateTopic{},  "aol/MsgCreateTopic", nil)
	codec.RegisterConcrete(MsgAddWriter{},    "aol/MsgAddWriter", nil)
	codec.RegisterConcrete(MsgDeleteWriter{}, "aol/MsgDeleteWriter", nil)
	codec.RegisterConcrete(MsgAddRecord{},    "aol/MsgAddRecord", nil)
}
