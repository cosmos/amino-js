package types

import (
	"sync"

	"github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/p2p"
	"github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/types"
)

type RoundVoteSet struct {
	Prevotes   *types.VoteSet
	Precommits *types.VoteSet
}

type HeightVoteSet struct {
	chainID string
	height  int64
	valSet  *types.ValidatorSet

	mtx               sync.Mutex
	round             int                  // max tracked round
	roundVoteSets     map[int]RoundVoteSet // keys: [0...round]
	peerCatchupRounds map[p2p.ID][]int     // keys: peer.ID; values: at most 2 rounds
}
