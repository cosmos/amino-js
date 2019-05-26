package types

import (
	"math/big"
)

type Dec struct {
	*big.Int `json:"int"`
}
