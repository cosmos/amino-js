package rootmulti

import (
	"github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/store/types"
)

type storeInfo struct {
	Name string
	Core storeCore
}

type storeCore struct {
	CommitID types.CommitID
}
