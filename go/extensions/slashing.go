package extensions

import (
	"time"

	sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
)

// MsgUnjail - struct for unjailing jailed validator
type MsgUnjail struct {
	ValidatorAddr sdk.ValAddress `json:"address"` // address of the validator operator
}

var _ sdk.Msg = MsgUnjail{}

// ValidatorSigningInfo defines the signing info for a validator
type ValidatorSigningInfo interface {
}

// BaseValidatorSigningInfo defines the signing info for a validator
type BaseValidatorSigningInfo struct {
	Address             sdk.ConsAddress `json:"address" yaml:"address"`                             // validator consensus address
	StartHeight         int64           `json:"start_height" yaml:"start_height"`                   // height at which validator was first a candidate OR was unjailed
	IndexOffset         int64           `json:"index_offset" yaml:"index_offset"`                   // index offset into signed block bit array
	JailedUntil         time.Time       `json:"jailed_until" yaml:"jailed_until"`                   // timestamp validator cannot be unjailed until
	Tombstoned          bool            `json:"tombstoned" yaml:"tombstoned"`                       // whether or not a validator has been tombstoned (killed out of validator set)
	MissedBlocksCounter int64           `json:"missed_blocks_counter" yaml:"missed_blocks_counter"` // missed blocks counter (to avoid scanning the array every time)
}
