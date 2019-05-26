package privval

import (
	"github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/crypto"
	"github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/types"
)

type RemoteSignerMsg interface{}

type PubKeyRequest struct{}

type PubKeyResponse struct {
	PubKey crypto.PubKey
	Error  *RemoteSignerError
}

type SignVoteRequest struct {
	Vote *types.Vote
}

type SignedVoteResponse struct {
	Vote  *types.Vote
	Error *RemoteSignerError
}

type SignProposalRequest struct {
	Proposal *types.Proposal
}

type SignedProposalResponse struct {
	Proposal *types.Proposal
	Error    *RemoteSignerError
}

type PingRequest struct {
}

type PingResponse struct {
}
