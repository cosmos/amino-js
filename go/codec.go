package js

import (
	"github.com/jordansexton/go-amino-js/go/types"
	"github.com/tendermint/go-amino"
)

var codec *amino.Codec

func init() {
	codec = amino.NewCodec()
	types.RegisterCodec(codec)
	codec.Seal()
}
