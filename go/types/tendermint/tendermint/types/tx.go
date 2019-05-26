package types

import (
	abci "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/abci/types"
	"github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/crypto/merkle"
	cmn "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/libs/common"
)

type Tx []byte

type Txs []Tx

type TxProof struct {
	RootHash cmn.HexBytes
	Data     Tx
	Proof    merkle.SimpleProof
}

type TxResult struct {
	Height int64                  `json:"height"`
	Index  uint32                 `json:"index"`
	Tx     Tx                     `json:"tx"`
	Result abci.ResponseDeliverTx `json:"result"`
}
