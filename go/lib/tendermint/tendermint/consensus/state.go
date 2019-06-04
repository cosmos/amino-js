package consensus

import (
	"time"

	cstypes "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/consensus/types"
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/p2p"
)

type MsgInfo struct {
	Msg    ConsensusMessage `json:"msg"`
	PeerID p2p.ID           `json:"peer_key"`
}

type TimeoutInfo struct {
	Duration time.Duration         `json:"duration"`
	Height   int64                 `json:"height"`
	Round    int                   `json:"round"`
	Step     cstypes.RoundStepType `json:"step"`
}
