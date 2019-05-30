package types

type Address interface {
}

var _ Address = AccAddress{}
var _ Address = ValAddress{}
var _ Address = ConsAddress{}

type AccAddress []byte

type ValAddress []byte

type ConsAddress []byte
