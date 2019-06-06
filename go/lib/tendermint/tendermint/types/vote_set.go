package types

import (
	cmn "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/libs/common"
)

type P2PID string

type VoteSet struct {
	chainID string
	height  int64
	round   int
	type_   SignedMsgType
	valSet  *ValidatorSet

	votesBitArray *cmn.BitArray
	votes         []*Vote                // Primary votes to share
	sum           int64                  // Sum of voting power for seen votes, discounting conflicts
	maj23         *BlockID               // First 2/3 majority seen
	votesByBlock  map[string]*blockVotes // string(blockHash|blockParts) -> blockVotes
	peerMaj23s    map[P2PID]BlockID      // Maj23 for each peer
}

type VoteSetJSON struct {
	Votes         []string          `json:"votes"`
	VotesBitArray string            `json:"votes_bit_array"`
	PeerMaj23s    map[P2PID]BlockID `json:"peer_maj_23s"`
}

type blockVotes struct {
	peerMaj23 bool          // peer claims to have maj23
	bitArray  *cmn.BitArray // valIndex -> hasVote?
	votes     []*Vote       // valIndex -> *Vote
	sum       int64         // vote sum
}

type VoteSetReader interface {
}
