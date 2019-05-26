package evidence

import (
	"github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/types"
)

type PeerState interface {
}

type EvidenceMessage interface {
}

type EvidenceListMessage struct {
	Evidence []types.Evidence
}
