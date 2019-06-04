package consensus

import (
	cstypes "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/consensus/types"
	cmn "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/libs/common"
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/types"
)

type ConsensusMessage interface {
}

type NewRoundStepMessage struct {
	Height                int64
	Round                 int
	Step                  cstypes.RoundStepType
	SecondsSinceStartTime int
	LastCommitRound       int
}

type NewValidBlockMessage struct {
	Height           int64
	Round            int
	BlockPartsHeader types.PartSetHeader
	BlockParts       *cmn.BitArray
	IsCommit         bool
}

type ProposalMessage struct {
	Proposal *types.Proposal
}

type ProposalPOLMessage struct {
	Height           int64
	ProposalPOLRound int
	ProposalPOL      *cmn.BitArray
}

type BlockPartMessage struct {
	Height int64
	Round  int
	Part   *types.Part
}

type VoteMessage struct {
	Vote *types.Vote
}

type HasVoteMessage struct {
	Height int64
	Round  int
	Type   types.SignedMsgType
	Index  int
}

type VoteSetMaj23Message struct {
	Height  int64
	Round   int
	Type    types.SignedMsgType
	BlockID types.BlockID
}

type VoteSetBitsMessage struct {
	Height  int64
	Round   int
	Type    types.SignedMsgType
	BlockID types.BlockID
	Votes   *cmn.BitArray
}
