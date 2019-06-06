package types

import (
	"time"
	cmn "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/libs/common"
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/version"
)

type Block struct {
	Header     `json:"header"`
	Data       `json:"data"`
	Evidence   EvidenceData `json:"evidence"`
	LastCommit *Commit      `json:"last_commit"`
}

type Header struct {
	Version  version.Consensus `json:"version"`
	ChainID  string            `json:"chain_id"`
	Height   int64             `json:"height"`
	Time     time.Time         `json:"time"`
	NumTxs   int64             `json:"num_txs"`
	TotalTxs int64             `json:"total_txs"`

	LastBlockID BlockID `json:"last_block_id"`

	LastCommitHash cmn.HexBytes `json:"last_commit_hash"` // commit from validators from the last block
	DataHash       cmn.HexBytes `json:"data_hash"`        // transactions

	ValidatorsHash     cmn.HexBytes `json:"validators_hash"`      // validators for the current block
	NextValidatorsHash cmn.HexBytes `json:"next_validators_hash"` // validators for the next block
	ConsensusHash      cmn.HexBytes `json:"consensus_hash"`       // consensus params for current block
	AppHash            cmn.HexBytes `json:"app_hash"`             // state after txs from the previous block
	LastResultsHash    cmn.HexBytes `json:"last_results_hash"`    // root hash of all results from the txs from the previous block

	EvidenceHash    cmn.HexBytes `json:"evidence_hash"`    // evidence included in the block
	ProposerAddress Address      `json:"proposer_address"` // original proposer of the block
}

type CommitSig Vote

type Commit struct {
	BlockID    BlockID      `json:"block_id"`
	Precommits []*CommitSig `json:"precommits"`

	height   int64
	round    int
	hash     cmn.HexBytes
	bitArray *cmn.BitArray
}

type SignedHeader struct {
	*Header `json:"header"`
	Commit  *Commit `json:"commit"`
}

type Data struct {
	Txs Txs `json:"txs"`

	hash cmn.HexBytes
}

type EvidenceData struct {
	Evidence EvidenceList `json:"evidence"`

	hash cmn.HexBytes
}

type BlockID struct {
	Hash        cmn.HexBytes  `json:"hash"`
	PartsHeader PartSetHeader `json:"parts"`
}
