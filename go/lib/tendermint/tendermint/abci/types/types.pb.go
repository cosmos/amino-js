package types

import (
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto/merkle"
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/libs/common"
	"time"
)

type Request struct {
	Value                isRequest_Value `protobuf_oneof:"value"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

type isRequest_Value interface {
}

type Request_Echo struct {
	Echo *RequestEcho `protobuf:"bytes,2,opt,name=echo,oneof"`
}
type Request_Flush struct {
	Flush *RequestFlush `protobuf:"bytes,3,opt,name=flush,oneof"`
}
type Request_Info struct {
	Info *RequestInfo `protobuf:"bytes,4,opt,name=info,oneof"`
}
type Request_SetOption struct {
	SetOption *RequestSetOption `protobuf:"bytes,5,opt,name=set_option,json=setOption,oneof"`
}
type Request_InitChain struct {
	InitChain *RequestInitChain `protobuf:"bytes,6,opt,name=init_chain,json=initChain,oneof"`
}
type Request_Query struct {
	Query *RequestQuery `protobuf:"bytes,7,opt,name=query,oneof"`
}
type Request_BeginBlock struct {
	BeginBlock *RequestBeginBlock `protobuf:"bytes,8,opt,name=begin_block,json=beginBlock,oneof"`
}
type Request_CheckTx struct {
	CheckTx *RequestCheckTx `protobuf:"bytes,9,opt,name=check_tx,json=checkTx,oneof"`
}
type Request_DeliverTx struct {
	DeliverTx *RequestDeliverTx `protobuf:"bytes,19,opt,name=deliver_tx,json=deliverTx,oneof"`
}
type Request_EndBlock struct {
	EndBlock *RequestEndBlock `protobuf:"bytes,11,opt,name=end_block,json=endBlock,oneof"`
}
type Request_Commit struct {
	Commit *RequestCommit `protobuf:"bytes,12,opt,name=commit,oneof"`
}

type RequestEcho struct {
	Message              string   `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type RequestFlush struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type RequestInfo struct {
	Version              string   `protobuf:"bytes,1,opt,name=version,proto3" json:"version,omitempty"`
	BlockVersion         uint64   `protobuf:"varint,2,opt,name=block_version,json=blockVersion,proto3" json:"block_version,omitempty"`
	P2PVersion           uint64   `protobuf:"varint,3,opt,name=p2p_version,json=p2pVersion,proto3" json:"p2p_version,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type RequestSetOption struct {
	Key                  string   `protobuf:"bytes,1,opt,name=key,proto3" json:"key,omitempty"`
	Value                string   `protobuf:"bytes,2,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type RequestInitChain struct {
	Time                 time.Time         `protobuf:"bytes,1,opt,name=time,stdtime" json:"time"`
	ChainId              string            `protobuf:"bytes,2,opt,name=chain_id,json=chainId,proto3" json:"chain_id,omitempty"`
	ConsensusParams      *ConsensusParams  `protobuf:"bytes,3,opt,name=consensus_params,json=consensusParams" json:"consensus_params,omitempty"`
	Validators           []ValidatorUpdate `protobuf:"bytes,4,rep,name=validators" json:"validators"`
	AppStateBytes        []byte            `protobuf:"bytes,5,opt,name=app_state_bytes,json=appStateBytes,proto3" json:"app_state_bytes,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

type RequestQuery struct {
	Data                 []byte   `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	Path                 string   `protobuf:"bytes,2,opt,name=path,proto3" json:"path,omitempty"`
	Height               int64    `protobuf:"varint,3,opt,name=height,proto3" json:"height,omitempty"`
	Prove                bool     `protobuf:"varint,4,opt,name=prove,proto3" json:"prove,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type RequestBeginBlock struct {
	Hash                 []byte         `protobuf:"bytes,1,opt,name=hash,proto3" json:"hash,omitempty"`
	Header               Header         `protobuf:"bytes,2,opt,name=header" json:"header"`
	LastCommitInfo       LastCommitInfo `protobuf:"bytes,3,opt,name=last_commit_info,json=lastCommitInfo" json:"last_commit_info"`
	ByzantineValidators  []Evidence     `protobuf:"bytes,4,rep,name=byzantine_validators,json=byzantineValidators" json:"byzantine_validators"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

type RequestCheckTx struct {
	Tx                   []byte   `protobuf:"bytes,1,opt,name=tx,proto3" json:"tx,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type RequestDeliverTx struct {
	Tx                   []byte   `protobuf:"bytes,1,opt,name=tx,proto3" json:"tx,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type RequestEndBlock struct {
	Height               int64    `protobuf:"varint,1,opt,name=height,proto3" json:"height,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type RequestCommit struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type Response struct {
	Value                isResponse_Value `protobuf_oneof:"value"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

type isResponse_Value interface {
	isResponse_Value()
}

type Response_Exception struct {
	Exception *ResponseException `protobuf:"bytes,1,opt,name=exception,oneof"`
}
type Response_Echo struct {
	Echo *ResponseEcho `protobuf:"bytes,2,opt,name=echo,oneof"`
}
type Response_Flush struct {
	Flush *ResponseFlush `protobuf:"bytes,3,opt,name=flush,oneof"`
}
type Response_Info struct {
	Info *ResponseInfo `protobuf:"bytes,4,opt,name=info,oneof"`
}
type Response_SetOption struct {
	SetOption *ResponseSetOption `protobuf:"bytes,5,opt,name=set_option,json=setOption,oneof"`
}
type Response_InitChain struct {
	InitChain *ResponseInitChain `protobuf:"bytes,6,opt,name=init_chain,json=initChain,oneof"`
}
type Response_Query struct {
	Query *ResponseQuery `protobuf:"bytes,7,opt,name=query,oneof"`
}
type Response_BeginBlock struct {
	BeginBlock *ResponseBeginBlock `protobuf:"bytes,8,opt,name=begin_block,json=beginBlock,oneof"`
}
type Response_CheckTx struct {
	CheckTx *ResponseCheckTx `protobuf:"bytes,9,opt,name=check_tx,json=checkTx,oneof"`
}
type Response_DeliverTx struct {
	DeliverTx *ResponseDeliverTx `protobuf:"bytes,10,opt,name=deliver_tx,json=deliverTx,oneof"`
}
type Response_EndBlock struct {
	EndBlock *ResponseEndBlock `protobuf:"bytes,11,opt,name=end_block,json=endBlock,oneof"`
}
type Response_Commit struct {
	Commit *ResponseCommit `protobuf:"bytes,12,opt,name=commit,oneof"`
}

type ResponseException struct {
	Error                string   `protobuf:"bytes,1,opt,name=error,proto3" json:"error,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type ResponseEcho struct {
	Message              string   `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type ResponseFlush struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type ResponseInfo struct {
	Data                 string   `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	Version              string   `protobuf:"bytes,2,opt,name=version,proto3" json:"version,omitempty"`
	AppVersion           uint64   `protobuf:"varint,3,opt,name=app_version,json=appVersion,proto3" json:"app_version,omitempty"`
	LastBlockHeight      int64    `protobuf:"varint,4,opt,name=last_block_height,json=lastBlockHeight,proto3" json:"last_block_height,omitempty"`
	LastBlockAppHash     []byte   `protobuf:"bytes,5,opt,name=last_block_app_hash,json=lastBlockAppHash,proto3" json:"last_block_app_hash,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type ResponseSetOption struct {
	Code                 uint32   `protobuf:"varint,1,opt,name=code,proto3" json:"code,omitempty"`
	Log                  string   `protobuf:"bytes,3,opt,name=log,proto3" json:"log,omitempty"`
	Info                 string   `protobuf:"bytes,4,opt,name=info,proto3" json:"info,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type ResponseInitChain struct {
	ConsensusParams      *ConsensusParams  `protobuf:"bytes,1,opt,name=consensus_params,json=consensusParams" json:"consensus_params,omitempty"`
	Validators           []ValidatorUpdate `protobuf:"bytes,2,rep,name=validators" json:"validators"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

type ResponseQuery struct {
	Code                 uint32        `protobuf:"varint,1,opt,name=code,proto3" json:"code,omitempty"`
	Log                  string        `protobuf:"bytes,3,opt,name=log,proto3" json:"log,omitempty"`
	Info                 string        `protobuf:"bytes,4,opt,name=info,proto3" json:"info,omitempty"`
	Index                int64         `protobuf:"varint,5,opt,name=index,proto3" json:"index,omitempty"`
	Key                  []byte        `protobuf:"bytes,6,opt,name=key,proto3" json:"key,omitempty"`
	Value                []byte        `protobuf:"bytes,7,opt,name=value,proto3" json:"value,omitempty"`
	Proof                *merkle.Proof `protobuf:"bytes,8,opt,name=proof" json:"proof,omitempty"`
	Height               int64         `protobuf:"varint,9,opt,name=height,proto3" json:"height,omitempty"`
	Codespace            string        `protobuf:"bytes,10,opt,name=codespace,proto3" json:"codespace,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

type ResponseBeginBlock struct {
	Tags                 []common.KVPair `protobuf:"bytes,1,rep,name=tags" json:"tags,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

type ResponseCheckTx struct {
	Code                 uint32          `protobuf:"varint,1,opt,name=code,proto3" json:"code,omitempty"`
	Data                 []byte          `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	Log                  string          `protobuf:"bytes,3,opt,name=log,proto3" json:"log,omitempty"`
	Info                 string          `protobuf:"bytes,4,opt,name=info,proto3" json:"info,omitempty"`
	GasWanted            int64           `protobuf:"varint,5,opt,name=gas_wanted,json=gasWanted,proto3" json:"gas_wanted,omitempty"`
	GasUsed              int64           `protobuf:"varint,6,opt,name=gas_used,json=gasUsed,proto3" json:"gas_used,omitempty"`
	Tags                 []common.KVPair `protobuf:"bytes,7,rep,name=tags" json:"tags,omitempty"`
	Codespace            string          `protobuf:"bytes,8,opt,name=codespace,proto3" json:"codespace,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

type ResponseDeliverTx struct {
	Code                 uint32          `protobuf:"varint,1,opt,name=code,proto3" json:"code,omitempty"`
	Data                 []byte          `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	Log                  string          `protobuf:"bytes,3,opt,name=log,proto3" json:"log,omitempty"`
	Info                 string          `protobuf:"bytes,4,opt,name=info,proto3" json:"info,omitempty"`
	GasWanted            int64           `protobuf:"varint,5,opt,name=gas_wanted,json=gasWanted,proto3" json:"gas_wanted,omitempty"`
	GasUsed              int64           `protobuf:"varint,6,opt,name=gas_used,json=gasUsed,proto3" json:"gas_used,omitempty"`
	Tags                 []common.KVPair `protobuf:"bytes,7,rep,name=tags" json:"tags,omitempty"`
	Codespace            string          `protobuf:"bytes,8,opt,name=codespace,proto3" json:"codespace,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

type ResponseEndBlock struct {
	ValidatorUpdates      []ValidatorUpdate `protobuf:"bytes,1,rep,name=validator_updates,json=validatorUpdates" json:"validator_updates"`
	ConsensusParamUpdates *ConsensusParams  `protobuf:"bytes,2,opt,name=consensus_param_updates,json=consensusParamUpdates" json:"consensus_param_updates,omitempty"`
	Tags                  []common.KVPair   `protobuf:"bytes,3,rep,name=tags" json:"tags,omitempty"`
	XXX_NoUnkeyedLiteral  struct{}          `json:"-"`
	XXX_unrecognized      []byte            `json:"-"`
	XXX_sizecache         int32             `json:"-"`
}

type ResponseCommit struct {
	Data                 []byte   `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type ConsensusParams struct {
	Block                *BlockParams     `protobuf:"bytes,1,opt,name=block" json:"block,omitempty"`
	Evidence             *EvidenceParams  `protobuf:"bytes,2,opt,name=evidence" json:"evidence,omitempty"`
	Validator            *ValidatorParams `protobuf:"bytes,3,opt,name=validator" json:"validator,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

type BlockParams struct {
	MaxBytes             int64    `protobuf:"varint,1,opt,name=max_bytes,json=maxBytes,proto3" json:"max_bytes,omitempty"`
	MaxGas               int64    `protobuf:"varint,2,opt,name=max_gas,json=maxGas,proto3" json:"max_gas,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type EvidenceParams struct {
	MaxAge               int64    `protobuf:"varint,1,opt,name=max_age,json=maxAge,proto3" json:"max_age,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type ValidatorParams struct {
	PubKeyTypes          []string `protobuf:"bytes,1,rep,name=pub_key_types,json=pubKeyTypes" json:"pub_key_types,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type LastCommitInfo struct {
	Round                int32      `protobuf:"varint,1,opt,name=round,proto3" json:"round,omitempty"`
	Votes                []VoteInfo `protobuf:"bytes,2,rep,name=votes" json:"votes"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

type Header struct {
	Version              Version   `protobuf:"bytes,1,opt,name=version" json:"version"`
	ChainID              string    `protobuf:"bytes,2,opt,name=chain_id,json=chainId,proto3" json:"chain_id,omitempty"`
	Height               int64     `protobuf:"varint,3,opt,name=height,proto3" json:"height,omitempty"`
	Time                 time.Time `protobuf:"bytes,4,opt,name=time,stdtime" json:"time"`
	NumTxs               int64     `protobuf:"varint,5,opt,name=num_txs,json=numTxs,proto3" json:"num_txs,omitempty"`
	TotalTxs             int64     `protobuf:"varint,6,opt,name=total_txs,json=totalTxs,proto3" json:"total_txs,omitempty"`
	LastBlockId          BlockID   `protobuf:"bytes,7,opt,name=last_block_id,json=lastBlockId" json:"last_block_id"`
	LastCommitHash       []byte    `protobuf:"bytes,8,opt,name=last_commit_hash,json=lastCommitHash,proto3" json:"last_commit_hash,omitempty"`
	DataHash             []byte    `protobuf:"bytes,9,opt,name=data_hash,json=dataHash,proto3" json:"data_hash,omitempty"`
	ValidatorsHash       []byte    `protobuf:"bytes,10,opt,name=validators_hash,json=validatorsHash,proto3" json:"validators_hash,omitempty"`
	NextValidatorsHash   []byte    `protobuf:"bytes,11,opt,name=next_validators_hash,json=nextValidatorsHash,proto3" json:"next_validators_hash,omitempty"`
	ConsensusHash        []byte    `protobuf:"bytes,12,opt,name=consensus_hash,json=consensusHash,proto3" json:"consensus_hash,omitempty"`
	AppHash              []byte    `protobuf:"bytes,13,opt,name=app_hash,json=appHash,proto3" json:"app_hash,omitempty"`
	LastResultsHash      []byte    `protobuf:"bytes,14,opt,name=last_results_hash,json=lastResultsHash,proto3" json:"last_results_hash,omitempty"`
	EvidenceHash         []byte    `protobuf:"bytes,15,opt,name=evidence_hash,json=evidenceHash,proto3" json:"evidence_hash,omitempty"`
	ProposerAddress      []byte    `protobuf:"bytes,16,opt,name=proposer_address,json=proposerAddress,proto3" json:"proposer_address,omitempty"`
	XXX_NoUnkeyedLiteral struct{}  `json:"-"`
	XXX_unrecognized     []byte    `json:"-"`
	XXX_sizecache        int32     `json:"-"`
}

type Version struct {
	Block                uint64   `protobuf:"varint,1,opt,name=Block,proto3" json:"Block,omitempty"`
	App                  uint64   `protobuf:"varint,2,opt,name=App,proto3" json:"App,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type BlockID struct {
	Hash                 []byte        `protobuf:"bytes,1,opt,name=hash,proto3" json:"hash,omitempty"`
	PartsHeader          PartSetHeader `protobuf:"bytes,2,opt,name=parts_header,json=partsHeader" json:"parts_header"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

type PartSetHeader struct {
	Total                int32    `protobuf:"varint,1,opt,name=total,proto3" json:"total,omitempty"`
	Hash                 []byte   `protobuf:"bytes,2,opt,name=hash,proto3" json:"hash,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type Validator struct {
	Address              []byte   `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`
	Power                int64    `protobuf:"varint,3,opt,name=power,proto3" json:"power,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type ValidatorUpdate struct {
	PubKey               PubKey   `protobuf:"bytes,1,opt,name=pub_key,json=pubKey" json:"pub_key"`
	Power                int64    `protobuf:"varint,2,opt,name=power,proto3" json:"power,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type VoteInfo struct {
	Validator            Validator `protobuf:"bytes,1,opt,name=validator" json:"validator"`
	SignedLastBlock      bool      `protobuf:"varint,2,opt,name=signed_last_block,json=signedLastBlock,proto3" json:"signed_last_block,omitempty"`
	XXX_NoUnkeyedLiteral struct{}  `json:"-"`
	XXX_unrecognized     []byte    `json:"-"`
	XXX_sizecache        int32     `json:"-"`
}

type PubKey struct {
	Type                 string   `protobuf:"bytes,1,opt,name=type,proto3" json:"type,omitempty"`
	Data                 []byte   `protobuf:"bytes,2,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

type Evidence struct {
	Type                 string    `protobuf:"bytes,1,opt,name=type,proto3" json:"type,omitempty"`
	Validator            Validator `protobuf:"bytes,2,opt,name=validator" json:"validator"`
	Height               int64     `protobuf:"varint,3,opt,name=height,proto3" json:"height,omitempty"`
	Time                 time.Time `protobuf:"bytes,4,opt,name=time,stdtime" json:"time"`
	TotalVotingPower     int64     `protobuf:"varint,5,opt,name=total_voting_power,json=totalVotingPower,proto3" json:"total_voting_power,omitempty"`
	XXX_NoUnkeyedLiteral struct{}  `json:"-"`
	XXX_unrecognized     []byte    `json:"-"`
	XXX_sizecache        int32     `json:"-"`
}

type ABCIApplicationClient interface {
}

type ABCIApplicationServer interface {
}
