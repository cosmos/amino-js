package src

import (
	"github.com/cosmos/amino-js/go/extensions"
	"github.com/cosmos/amino-js/go/lib"
	"github.com/tendermint/go-amino"
)

var codec *amino.Codec

func init() {
	codec = amino.NewCodec()
	lib.RegisterCodec(codec)
	extensions.RegisterCodec(codec)
	codec.Seal()
}
