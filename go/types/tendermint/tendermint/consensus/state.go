package consensus

import (
	"time"

	cstypes "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/consensus/types"
	"github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/p2p"
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
