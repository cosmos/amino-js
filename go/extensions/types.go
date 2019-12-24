package extensions

import (
    sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
)

var _ sdk.Msg = (*TxCreateMarket)(nil)

type TxCreateMarket struct {
   Account sdk.AccAddress
   Market string
}
