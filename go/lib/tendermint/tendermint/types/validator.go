package types

import (
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto"
)

type Validator struct {
	Address     Address       `json:"address"`
	PubKey      crypto.PubKey `json:"pub_key"`
	VotingPower int64         `json:"voting_power"`

	ProposerPriority int64 `json:"proposer_priority"`
}
