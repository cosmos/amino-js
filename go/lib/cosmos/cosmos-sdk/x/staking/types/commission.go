package types

import (
	sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
	"time"
)

type Commission struct {
	Rate          sdk.Dec   `json:"rate"`            // the commission rate charged to delegators, as a fraction
	MaxRate       sdk.Dec   `json:"max_rate"`        // maximum commission rate which this validator can ever charge, as a fraction
	MaxChangeRate sdk.Dec   `json:"max_change_rate"` // maximum daily increase of the validator commission, as a fraction
	UpdateTime    time.Time `json:"update_time"`     // the last time the commission rate was changed
}

type CommissionMsg struct {
	Rate          sdk.Dec `json:"rate"`            // the commission rate charged to delegators, as a fraction
	MaxRate       sdk.Dec `json:"max_rate"`        // maximum commission rate which validator can ever charge, as a fraction
	MaxChangeRate sdk.Dec `json:"max_change_rate"` // maximum daily increase of the validator commission, as a fraction
}
