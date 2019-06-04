package types

import (
	abci "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/abci/types"
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto/merkle"
	cmn "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/libs/common"
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
