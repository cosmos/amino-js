package types

import (
	crypto "github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/crypto"
	keys "github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/crypto/keys"
	hd "github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/crypto/keys/hd"

	types "github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/types"

	auth "github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/x/auth"
	bank "github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/x/bank"
	crisis "github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/x/crisis"
	distribution "github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/x/distribution/types"
	gov "github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/x/gov/types"
	ibc "github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/x/ibc"
	params "github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/x/params/types"
	slashing "github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/x/slashing"
	staking "github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/x/staking/types"

	tm_crypto "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/crypto"
	tm_ed25519 "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/crypto/ed25519"
	tm_multisig "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/crypto/multisig"
	tm_secp256k1 "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/crypto/secp256k1"

	tm_blockchain "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/blockchain"
	tm_consensus "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/consensus"
	tm_evidence "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/evidence"
	tm_mempool "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/mempool"
	tm_conn "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/p2p/conn"
	tm_pex "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/p2p/pex"
	tm_privval "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/privval"
	tm_types "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/types"

	amino "github.com/tendermint/go-amino"
)

var Codec = amino.NewCodec()

func init () {
	// cosmos/cosmos-sdk/crypto/amino.go

	Codec.RegisterConcrete(crypto.PrivKeyLedgerSecp256k1{}, TendermintPrivKeyLedgerSecp256k1, nil)

	// cosmos/cosmos-sdk/crypto/keys/codec.go

	Codec.RegisterInterface((*keys.Info)(nil), nil)
	Codec.RegisterConcrete(hd.BIP44Params{}, CryptoKeysHdBIP44Params, nil)
	Codec.RegisterConcrete(keys.LocalInfo{}, CryptoKeysLocalInfo, nil)
	Codec.RegisterConcrete(keys.LedgerInfo{}, CryptoKeysLedgerInfo, nil)
	Codec.RegisterConcrete(keys.OfflineInfo{}, CryptoKeysOfflineInfo, nil)
	Codec.RegisterConcrete(keys.MultiInfo{}, CryptoKeysMultiInfo, nil)

	// cosmos/cosmos-sdk/types/codec.go

	Codec.RegisterInterface((*types.Msg)(nil), nil)
	Codec.RegisterInterface((*types.Tx)(nil), nil)

	// cosmos/cosmos-sdk/x/auth/codec.go

	Codec.RegisterInterface((*auth.Account)(nil), nil)
	Codec.RegisterInterface((*auth.VestingAccount)(nil), nil)

	Codec.RegisterConcrete(&auth.BaseAccount{}, AuthAccount, nil)
	Codec.RegisterConcrete(&auth.BaseVestingAccount{}, AuthBaseVestingAccount, nil)
	Codec.RegisterConcrete(&auth.ContinuousVestingAccount{}, AuthContinuousVestingAccount, nil)
	Codec.RegisterConcrete(&auth.DelayedVestingAccount{}, AuthDelayedVestingAccount, nil)
	Codec.RegisterConcrete(auth.StdTx{}, AuthStdTx, nil)

	//Codec.RegisterConcrete(&auth.BaseAccount{}, CosmosSdkBaseAccount, nil)
	//Codec.RegisterConcrete(&auth.BaseVestingAccount{}, CosmosSdkBaseVestingAccount, nil)
	//Codec.RegisterConcrete(&auth.ContinuousVestingAccount{}, CosmosSdkContinuousVestingAccount, nil)
	//Codec.RegisterConcrete(&auth.DelayedVestingAccount{}, CosmosSdkDelayedVestingAccount, nil)

	// cosmos/cosmos-sdk/x/bank/codec.go

	Codec.RegisterConcrete(bank.MsgSend{}, CosmosSdkMsgSend, nil)
	Codec.RegisterConcrete(bank.MsgMultiSend{}, CosmosSdkMsgMultiSend, nil)

	// cosmos/cosmos-sdk/x/crisis/codec.go

	Codec.RegisterConcrete(crisis.MsgVerifyInvariant{}, CosmosSdkMsgVerifyInvariant, nil)

	// cosmos/cosmos-sdk/x/distribution/types/codec.go

	Codec.RegisterConcrete(distribution.MsgWithdrawDelegatorReward{}, CosmosSdkMsgWithdrawDelegationReward, nil)
	Codec.RegisterConcrete(distribution.MsgWithdrawValidatorCommission{}, CosmosSdkMsgWithdrawValidatorCommission, nil)
	Codec.RegisterConcrete(distribution.MsgSetWithdrawAddress{}, CosmosSdkMsgModifyWithdrawAddress, nil)

	// cosmos/cosmos-sdk/x/gov/types/codec.go

	Codec.RegisterInterface((*gov.Content)(nil), nil)

	Codec.RegisterConcrete(gov.MsgSubmitProposal{}, CosmosSdkMsgSubmitProposal, nil)
	Codec.RegisterConcrete(gov.MsgDeposit{}, CosmosSdkMsgDeposit, nil)
	Codec.RegisterConcrete(gov.MsgVote{}, CosmosSdkMsgVote, nil)

	Codec.RegisterConcrete(gov.TextProposal{}, CosmosSdkTextProposal, nil)
	Codec.RegisterConcrete(gov.SoftwareUpgradeProposal{}, CosmosSdkSoftwareUpgradeProposal, nil)

	// cosmos/cosmos-sdk/x/ibc/codec.go

	Codec.RegisterConcrete(ibc.MsgIBCTransfer{}, CosmosSdkMsgIBCTransfer, nil)
	Codec.RegisterConcrete(ibc.MsgIBCReceive{}, CosmosSdkMsgIBCReceive, nil)

	// cosmos/cosmos-sdk/x/params/types/codec.go

	Codec.RegisterConcrete(params.ParameterChangeProposal{}, CosmosSdkParameterChangeProposal, nil)

	// cosmos/cosmos-sdk/x/slashing/codec.go

	Codec.RegisterConcrete(slashing.MsgUnjail{}, CosmosSdkMsgUnjail, nil)

	// cosmos/cosmos-sdk/x/staking/types/codec.go

	Codec.RegisterConcrete(staking.MsgCreateValidator{}, CosmosSdkMsgCreateValidator, nil)
	Codec.RegisterConcrete(staking.MsgEditValidator{}, CosmosSdkMsgEditValidator, nil)
	Codec.RegisterConcrete(staking.MsgDelegate{}, CosmosSdkMsgDelegate, nil)
	Codec.RegisterConcrete(staking.MsgUndelegate{}, CosmosSdkMsgUndelegate, nil)
	Codec.RegisterConcrete(staking.MsgBeginRedelegate{}, CosmosSdkMsgBeginRedelegate, nil)

	// tendermint/tendermint/blockchain/reactor.go

	Codec.RegisterInterface((*tm_blockchain.BlockchainMessage)(nil), nil)
	Codec.RegisterConcrete(&tm_blockchain.BcBlockRequestMessage{}, TendermintBlockchainBlockRequest, nil)
	Codec.RegisterConcrete(&tm_blockchain.BcBlockResponseMessage{}, TendermintBlockchainBlockResponse, nil)
	Codec.RegisterConcrete(&tm_blockchain.BcNoBlockResponseMessage{}, TendermintBlockchainNoBlockResponse, nil)
	Codec.RegisterConcrete(&tm_blockchain.BcStatusResponseMessage{}, TendermintBlockchainStatusResponse, nil)
	Codec.RegisterConcrete(&tm_blockchain.BcStatusRequestMessage{}, TendermintBlockchainStatusRequest, nil)

	// tendermint/tendermint/consensus/reactor.go

	Codec.RegisterInterface((*tm_consensus.ConsensusMessage)(nil), nil)
	Codec.RegisterConcrete(&tm_consensus.NewRoundStepMessage{}, TendermintNewRoundStepMessage, nil)
	Codec.RegisterConcrete(&tm_consensus.NewValidBlockMessage{}, TendermintNewValidBlockMessage, nil)
	Codec.RegisterConcrete(&tm_consensus.ProposalMessage{}, TendermintProposal, nil)
	Codec.RegisterConcrete(&tm_consensus.ProposalPOLMessage{}, TendermintProposalPOL, nil)
	Codec.RegisterConcrete(&tm_consensus.BlockPartMessage{}, TendermintBlockPart, nil)
	Codec.RegisterConcrete(&tm_consensus.VoteMessage{}, TendermintVote, nil)
	Codec.RegisterConcrete(&tm_consensus.HasVoteMessage{}, TendermintHasVote, nil)
	Codec.RegisterConcrete(&tm_consensus.VoteSetMaj23Message{}, TendermintVoteSetMaj23, nil)
	Codec.RegisterConcrete(&tm_consensus.VoteSetBitsMessage{}, TendermintVoteSetBits, nil)

	// tendermint/tendermint/consensus/wal.go

	Codec.RegisterInterface((*tm_consensus.WALMessage)(nil), nil)
	//Codec.RegisterConcrete(tm_types.EventDataRoundState{}, TendermintWalEventDataRoundState, nil)
	Codec.RegisterConcrete(tm_consensus.MsgInfo{}, TendermintWalMsgInfo, nil)
	Codec.RegisterConcrete(tm_consensus.TimeoutInfo{}, TendermintWalTimeoutInfo, nil)
	Codec.RegisterConcrete(tm_consensus.EndHeightMessage{}, TendermintWalEndHeightMessage, nil)

	// tendermint/tendermint/crypto/encoding/amino/amino.go

	Codec.RegisterInterface((*tm_crypto.PubKey)(nil), nil)
	Codec.RegisterInterface((*tm_crypto.PrivKey)(nil), nil)
	Codec.RegisterConcrete(tm_ed25519.PubKeyEd25519{}, TendermintPubKeyEd25519, nil)
	Codec.RegisterConcrete(tm_ed25519.PrivKeyEd25519{}, TendermintPrivKeyEd25519, nil)
	Codec.RegisterConcrete(tm_secp256k1.PubKeySecp256k1{}, TendermintPubKeySecp256k1, nil)
	Codec.RegisterConcrete(tm_secp256k1.PrivKeySecp256k1{}, TendermintPrivKeySecp256k1, nil)
	Codec.RegisterConcrete(tm_multisig.PubKeyMultisigThreshold{}, TendermintPubKeyMultisigThreshold, nil)

	// tendermint/tendermint/evidence/reactor.go

	Codec.RegisterInterface((*tm_evidence.EvidenceMessage)(nil), nil)
	Codec.RegisterConcrete(&tm_evidence.EvidenceListMessage{}, TendermintEvidenceEvidenceListMessage, nil)

	// tendermint/tendermint/mempool/reactor.go

	Codec.RegisterInterface((*tm_mempool.MempoolMessage)(nil), nil)
	Codec.RegisterConcrete(&tm_mempool.TxMessage{}, TendermintMempoolTxMessage, nil)

	// tendermint/tendermint/p2p/conn/connection.go

	Codec.RegisterInterface((*tm_conn.Packet)(nil), nil)
	Codec.RegisterConcrete(tm_conn.PacketPing{}, TendermintP2pPacketPing, nil)
	Codec.RegisterConcrete(tm_conn.PacketPong{}, TendermintP2pPacketPong, nil)
	Codec.RegisterConcrete(tm_conn.PacketMsg{}, TendermintP2pPacketMsg, nil)

	// tendermint/tendermint/p2p/pex/pex_reactor.go

	Codec.RegisterInterface((*tm_pex.PexMessage)(nil), nil)
	Codec.RegisterConcrete(&tm_pex.PexRequestMessage{}, TendermintP2pPexRequestMessage, nil)
	Codec.RegisterConcrete(&tm_pex.PexAddrsMessage{}, TendermintP2pPexAddrsMessage, nil)

	// tendermint/tendermint/privval/messages.go

	Codec.RegisterInterface((*tm_privval.RemoteSignerMsg)(nil), nil)
	Codec.RegisterConcrete(&tm_privval.PubKeyRequest{}, TendermintRemotesignerPubKeyRequest, nil)
	Codec.RegisterConcrete(&tm_privval.PubKeyResponse{}, TendermintRemotesignerPubKeyResponse, nil)
	Codec.RegisterConcrete(&tm_privval.SignVoteRequest{}, TendermintRemotesignerSignVoteRequest, nil)
	Codec.RegisterConcrete(&tm_privval.SignedVoteResponse{}, TendermintRemotesignerSignedVoteResponse, nil)
	Codec.RegisterConcrete(&tm_privval.SignProposalRequest{}, TendermintRemotesignerSignProposalRequest, nil)
	Codec.RegisterConcrete(&tm_privval.SignedProposalResponse{}, TendermintRemotesignerSignedProposalResponse, nil)
	Codec.RegisterConcrete(&tm_privval.PingRequest{}, TendermintRemotesignerPingRequest, nil)
	Codec.RegisterConcrete(&tm_privval.PingResponse{}, TendermintRemotesignerPingResponse, nil)

	// tendermint/tendermint/types/events.go

	Codec.RegisterInterface((*tm_types.TMEventData)(nil), nil)
	Codec.RegisterConcrete(tm_types.EventDataNewBlock{}, TendermintEventNewBlock, nil)
	Codec.RegisterConcrete(tm_types.EventDataNewBlockHeader{}, TendermintEventNewBlockHeader, nil)
	Codec.RegisterConcrete(tm_types.EventDataTx{}, TendermintEventTx, nil)
	Codec.RegisterConcrete(tm_types.EventDataRoundState{}, TendermintEventRoundState, nil)
	Codec.RegisterConcrete(tm_types.EventDataNewRound{}, TendermintEventNewRound, nil)
	Codec.RegisterConcrete(tm_types.EventDataCompleteProposal{}, TendermintEventCompleteProposal, nil)
	Codec.RegisterConcrete(tm_types.EventDataVote{}, TendermintEventVote, nil)
	Codec.RegisterConcrete(tm_types.EventDataValidatorSetUpdates{}, TendermintEventValidatorSetUpdates, nil)
	Codec.RegisterConcrete(tm_types.EventDataString(""), TendermintEventProposalString, nil)

	// tendermint/tendermint/types/evidence.go

	Codec.RegisterInterface((*tm_types.Evidence)(nil), nil)
	Codec.RegisterConcrete(&tm_types.DuplicateVoteEvidence{}, TendermintDuplicateVoteEvidence, nil)
	Codec.RegisterConcrete(tm_types.MockGoodEvidence{}, TendermintMockGoodEvidence, nil)
	Codec.RegisterConcrete(tm_types.MockRandomGoodEvidence{}, TendermintMockRandomGoodEvidence, nil)
	Codec.RegisterConcrete(tm_types.MockBadEvidence{}, TendermintMockBadEvidence, nil)

	//// tendermint/tendermint/crypto/ed25519/ed25519.go
	//
	//Codec.RegisterInterface((*tm_crypto.PubKey)(nil), nil)
	//Codec.RegisterConcrete(tm_ed25519.PubKeyEd25519{}, tm_ed25519.PubKeyAminoName, nil)
	//
	//Codec.RegisterInterface((*tm_crypto.PrivKey)(nil), nil)
	//Codec.RegisterConcrete(tm_ed25519.PrivKeyEd25519{}, tm_ed25519.PrivKeyAminoName, nil)
	//
	//// tendermint/tendermint/crypto/secp256k1/secp256k1.go
	//
	//Codec.RegisterInterface((*tm_crypto.PubKey)(nil), nil)
	//Codec.RegisterConcrete(tm_secp256k1.PubKeySecp256k1{}, tm_secp256k1.PubKeyAminoName, nil)
	//
	//Codec.RegisterInterface((*tm_crypto.PrivKey)(nil), nil)
	//Codec.RegisterConcrete(tm_secp256k1.PrivKeySecp256k1{}, tm_secp256k1.PrivKeyAminoName, nil)
	//
	//// tendermint/tendermint/crypto/multisig/wire.go
	//
	//Codec.RegisterInterface((*tm_crypto.PubKey)(nil), nil)
	//Codec.RegisterConcrete(tm_multisig.PubKeyMultisigThreshold{}, tm_multisig.PubKeyMultisigThresholdAminoRoute, nil)
	//
	//Codec.RegisterConcrete(tm_ed25519.PubKeyEd25519{}, tm_ed25519.PubKeyAminoName, nil)
	//Codec.RegisterConcrete(tm_secp256k1.PubKeySecp256k1{}, tm_secp256k1.PubKeyAminoName, nil)

	Codec.Seal()
}
