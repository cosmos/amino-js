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

func RegisterCodec(codec *amino.Codec) {
	// cosmos/cosmos-sdk/crypto/amino.go

	codec.RegisterConcrete(crypto.PrivKeyLedgerSecp256k1{}, TendermintPrivKeyLedgerSecp256k1, nil)

	// cosmos/cosmos-sdk/crypto/keys/codec.go

	codec.RegisterInterface((*keys.Info)(nil), nil)
	codec.RegisterConcrete(hd.BIP44Params{}, CryptoKeysHdBIP44Params, nil)
	codec.RegisterConcrete(keys.LocalInfo{}, CryptoKeysLocalInfo, nil)
	codec.RegisterConcrete(keys.LedgerInfo{}, CryptoKeysLedgerInfo, nil)
	codec.RegisterConcrete(keys.OfflineInfo{}, CryptoKeysOfflineInfo, nil)
	codec.RegisterConcrete(keys.MultiInfo{}, CryptoKeysMultiInfo, nil)

	// cosmos/cosmos-sdk/types/codec.go

	codec.RegisterInterface((*types.Msg)(nil), nil)
	codec.RegisterInterface((*types.Tx)(nil), nil)

	// cosmos/cosmos-sdk/x/auth/codec.go

	codec.RegisterInterface((*auth.Account)(nil), nil)
	codec.RegisterInterface((*auth.VestingAccount)(nil), nil)

	codec.RegisterConcrete(&auth.BaseAccount{}, AuthAccount, nil)
	codec.RegisterConcrete(&auth.BaseVestingAccount{}, AuthBaseVestingAccount, nil)
	codec.RegisterConcrete(&auth.ContinuousVestingAccount{}, AuthContinuousVestingAccount, nil)
	codec.RegisterConcrete(&auth.DelayedVestingAccount{}, AuthDelayedVestingAccount, nil)
	codec.RegisterConcrete(auth.StdTx{}, AuthStdTx, nil)

	//codec.RegisterConcrete(&auth.BaseAccount{}, CosmosSdkBaseAccount, nil)
	//codec.RegisterConcrete(&auth.BaseVestingAccount{}, CosmosSdkBaseVestingAccount, nil)
	//codec.RegisterConcrete(&auth.ContinuousVestingAccount{}, CosmosSdkContinuousVestingAccount, nil)
	//codec.RegisterConcrete(&auth.DelayedVestingAccount{}, CosmosSdkDelayedVestingAccount, nil)

	// cosmos/cosmos-sdk/x/bank/codec.go

	codec.RegisterConcrete(bank.MsgSend{}, CosmosSdkMsgSend, nil)
	codec.RegisterConcrete(bank.MsgMultiSend{}, CosmosSdkMsgMultiSend, nil)

	// cosmos/cosmos-sdk/x/crisis/codec.go

	codec.RegisterConcrete(crisis.MsgVerifyInvariant{}, CosmosSdkMsgVerifyInvariant, nil)

	// cosmos/cosmos-sdk/x/distribution/types/codec.go

	codec.RegisterConcrete(distribution.MsgWithdrawDelegatorReward{}, CosmosSdkMsgWithdrawDelegationReward, nil)
	codec.RegisterConcrete(distribution.MsgWithdrawValidatorCommission{}, CosmosSdkMsgWithdrawValidatorCommission, nil)
	codec.RegisterConcrete(distribution.MsgSetWithdrawAddress{}, CosmosSdkMsgModifyWithdrawAddress, nil)

	// cosmos/cosmos-sdk/x/gov/types/codec.go

	codec.RegisterInterface((*gov.Content)(nil), nil)

	codec.RegisterConcrete(gov.MsgSubmitProposal{}, CosmosSdkMsgSubmitProposal, nil)
	codec.RegisterConcrete(gov.MsgDeposit{}, CosmosSdkMsgDeposit, nil)
	codec.RegisterConcrete(gov.MsgVote{}, CosmosSdkMsgVote, nil)

	codec.RegisterConcrete(gov.TextProposal{}, CosmosSdkTextProposal, nil)
	codec.RegisterConcrete(gov.SoftwareUpgradeProposal{}, CosmosSdkSoftwareUpgradeProposal, nil)

	// cosmos/cosmos-sdk/x/ibc/codec.go

	codec.RegisterConcrete(ibc.MsgIBCTransfer{}, CosmosSdkMsgIBCTransfer, nil)
	codec.RegisterConcrete(ibc.MsgIBCReceive{}, CosmosSdkMsgIBCReceive, nil)

	// cosmos/cosmos-sdk/x/params/types/codec.go

	codec.RegisterConcrete(params.ParameterChangeProposal{}, CosmosSdkParameterChangeProposal, nil)

	// cosmos/cosmos-sdk/x/slashing/codec.go

	codec.RegisterConcrete(slashing.MsgUnjail{}, CosmosSdkMsgUnjail, nil)

	// cosmos/cosmos-sdk/x/staking/types/codec.go

	codec.RegisterConcrete(staking.MsgCreateValidator{}, CosmosSdkMsgCreateValidator, nil)
	codec.RegisterConcrete(staking.MsgEditValidator{}, CosmosSdkMsgEditValidator, nil)
	codec.RegisterConcrete(staking.MsgDelegate{}, CosmosSdkMsgDelegate, nil)
	codec.RegisterConcrete(staking.MsgUndelegate{}, CosmosSdkMsgUndelegate, nil)
	codec.RegisterConcrete(staking.MsgBeginRedelegate{}, CosmosSdkMsgBeginRedelegate, nil)

	// tendermint/tendermint/blockchain/reactor.go

	codec.RegisterInterface((*tm_blockchain.BlockchainMessage)(nil), nil)
	codec.RegisterConcrete(&tm_blockchain.BcBlockRequestMessage{}, TendermintBlockchainBlockRequest, nil)
	codec.RegisterConcrete(&tm_blockchain.BcBlockResponseMessage{}, TendermintBlockchainBlockResponse, nil)
	codec.RegisterConcrete(&tm_blockchain.BcNoBlockResponseMessage{}, TendermintBlockchainNoBlockResponse, nil)
	codec.RegisterConcrete(&tm_blockchain.BcStatusResponseMessage{}, TendermintBlockchainStatusResponse, nil)
	codec.RegisterConcrete(&tm_blockchain.BcStatusRequestMessage{}, TendermintBlockchainStatusRequest, nil)

	// tendermint/tendermint/consensus/reactor.go

	codec.RegisterInterface((*tm_consensus.ConsensusMessage)(nil), nil)
	codec.RegisterConcrete(&tm_consensus.NewRoundStepMessage{}, TendermintNewRoundStepMessage, nil)
	codec.RegisterConcrete(&tm_consensus.NewValidBlockMessage{}, TendermintNewValidBlockMessage, nil)
	codec.RegisterConcrete(&tm_consensus.ProposalMessage{}, TendermintProposal, nil)
	codec.RegisterConcrete(&tm_consensus.ProposalPOLMessage{}, TendermintProposalPOL, nil)
	codec.RegisterConcrete(&tm_consensus.BlockPartMessage{}, TendermintBlockPart, nil)
	codec.RegisterConcrete(&tm_consensus.VoteMessage{}, TendermintVote, nil)
	codec.RegisterConcrete(&tm_consensus.HasVoteMessage{}, TendermintHasVote, nil)
	codec.RegisterConcrete(&tm_consensus.VoteSetMaj23Message{}, TendermintVoteSetMaj23, nil)
	codec.RegisterConcrete(&tm_consensus.VoteSetBitsMessage{}, TendermintVoteSetBits, nil)

	// tendermint/tendermint/consensus/wal.go

	codec.RegisterInterface((*tm_consensus.WALMessage)(nil), nil)
	//codec.RegisterConcrete(tm_types.EventDataRoundState{}, TendermintWalEventDataRoundState, nil)
	codec.RegisterConcrete(tm_consensus.MsgInfo{}, TendermintWalMsgInfo, nil)
	codec.RegisterConcrete(tm_consensus.TimeoutInfo{}, TendermintWalTimeoutInfo, nil)
	codec.RegisterConcrete(tm_consensus.EndHeightMessage{}, TendermintWalEndHeightMessage, nil)

	// tendermint/tendermint/crypto/encoding/amino/amino.go

	codec.RegisterInterface((*tm_crypto.PubKey)(nil), nil)
	codec.RegisterInterface((*tm_crypto.PrivKey)(nil), nil)
	codec.RegisterConcrete(tm_ed25519.PubKeyEd25519{}, TendermintPubKeyEd25519, nil)
	codec.RegisterConcrete(tm_ed25519.PrivKeyEd25519{}, TendermintPrivKeyEd25519, nil)
	codec.RegisterConcrete(tm_secp256k1.PubKeySecp256k1{}, TendermintPubKeySecp256k1, nil)
	codec.RegisterConcrete(tm_secp256k1.PrivKeySecp256k1{}, TendermintPrivKeySecp256k1, nil)
	codec.RegisterConcrete(tm_multisig.PubKeyMultisigThreshold{}, TendermintPubKeyMultisigThreshold, nil)

	// tendermint/tendermint/evidence/reactor.go

	codec.RegisterInterface((*tm_evidence.EvidenceMessage)(nil), nil)
	codec.RegisterConcrete(&tm_evidence.EvidenceListMessage{}, TendermintEvidenceEvidenceListMessage, nil)

	// tendermint/tendermint/mempool/reactor.go

	codec.RegisterInterface((*tm_mempool.MempoolMessage)(nil), nil)
	codec.RegisterConcrete(&tm_mempool.TxMessage{}, TendermintMempoolTxMessage, nil)

	// tendermint/tendermint/p2p/conn/connection.go

	codec.RegisterInterface((*tm_conn.Packet)(nil), nil)
	codec.RegisterConcrete(tm_conn.PacketPing{}, TendermintP2pPacketPing, nil)
	codec.RegisterConcrete(tm_conn.PacketPong{}, TendermintP2pPacketPong, nil)
	codec.RegisterConcrete(tm_conn.PacketMsg{}, TendermintP2pPacketMsg, nil)

	// tendermint/tendermint/p2p/pex/pex_reactor.go

	codec.RegisterInterface((*tm_pex.PexMessage)(nil), nil)
	codec.RegisterConcrete(&tm_pex.PexRequestMessage{}, TendermintP2pPexRequestMessage, nil)
	codec.RegisterConcrete(&tm_pex.PexAddrsMessage{}, TendermintP2pPexAddrsMessage, nil)

	// tendermint/tendermint/privval/messages.go

	codec.RegisterInterface((*tm_privval.RemoteSignerMsg)(nil), nil)
	codec.RegisterConcrete(&tm_privval.PubKeyRequest{}, TendermintRemotesignerPubKeyRequest, nil)
	codec.RegisterConcrete(&tm_privval.PubKeyResponse{}, TendermintRemotesignerPubKeyResponse, nil)
	codec.RegisterConcrete(&tm_privval.SignVoteRequest{}, TendermintRemotesignerSignVoteRequest, nil)
	codec.RegisterConcrete(&tm_privval.SignedVoteResponse{}, TendermintRemotesignerSignedVoteResponse, nil)
	codec.RegisterConcrete(&tm_privval.SignProposalRequest{}, TendermintRemotesignerSignProposalRequest, nil)
	codec.RegisterConcrete(&tm_privval.SignedProposalResponse{}, TendermintRemotesignerSignedProposalResponse, nil)
	codec.RegisterConcrete(&tm_privval.PingRequest{}, TendermintRemotesignerPingRequest, nil)
	codec.RegisterConcrete(&tm_privval.PingResponse{}, TendermintRemotesignerPingResponse, nil)

	// tendermint/tendermint/types/events.go

	codec.RegisterInterface((*tm_types.TMEventData)(nil), nil)
	codec.RegisterConcrete(tm_types.EventDataNewBlock{}, TendermintEventNewBlock, nil)
	codec.RegisterConcrete(tm_types.EventDataNewBlockHeader{}, TendermintEventNewBlockHeader, nil)
	codec.RegisterConcrete(tm_types.EventDataTx{}, TendermintEventTx, nil)
	codec.RegisterConcrete(tm_types.EventDataRoundState{}, TendermintEventRoundState, nil)
	codec.RegisterConcrete(tm_types.EventDataNewRound{}, TendermintEventNewRound, nil)
	codec.RegisterConcrete(tm_types.EventDataCompleteProposal{}, TendermintEventCompleteProposal, nil)
	codec.RegisterConcrete(tm_types.EventDataVote{}, TendermintEventVote, nil)
	codec.RegisterConcrete(tm_types.EventDataValidatorSetUpdates{}, TendermintEventValidatorSetUpdates, nil)
	codec.RegisterConcrete(tm_types.EventDataString(""), TendermintEventProposalString, nil)

	// tendermint/tendermint/types/evidence.go

	codec.RegisterInterface((*tm_types.Evidence)(nil), nil)
	codec.RegisterConcrete(&tm_types.DuplicateVoteEvidence{}, TendermintDuplicateVoteEvidence, nil)
	codec.RegisterConcrete(tm_types.MockGoodEvidence{}, TendermintMockGoodEvidence, nil)
	codec.RegisterConcrete(tm_types.MockRandomGoodEvidence{}, TendermintMockRandomGoodEvidence, nil)
	codec.RegisterConcrete(tm_types.MockBadEvidence{}, TendermintMockBadEvidence, nil)

	//// tendermint/tendermint/crypto/ed25519/ed25519.go
	//
	//codec.RegisterInterface((*tm_crypto.PubKey)(nil), nil)
	//codec.RegisterConcrete(tm_ed25519.PubKeyEd25519{}, tm_ed25519.PubKeyAminoName, nil)
	//
	//codec.RegisterInterface((*tm_crypto.PrivKey)(nil), nil)
	//codec.RegisterConcrete(tm_ed25519.PrivKeyEd25519{}, tm_ed25519.PrivKeyAminoName, nil)
	//
	//// tendermint/tendermint/crypto/secp256k1/secp256k1.go
	//
	//codec.RegisterInterface((*tm_crypto.PubKey)(nil), nil)
	//codec.RegisterConcrete(tm_secp256k1.PubKeySecp256k1{}, tm_secp256k1.PubKeyAminoName, nil)
	//
	//codec.RegisterInterface((*tm_crypto.PrivKey)(nil), nil)
	//codec.RegisterConcrete(tm_secp256k1.PrivKeySecp256k1{}, tm_secp256k1.PrivKeyAminoName, nil)
	//
	//// tendermint/tendermint/crypto/multisig/wire.go
	//
	//codec.RegisterInterface((*tm_crypto.PubKey)(nil), nil)
	//codec.RegisterConcrete(tm_multisig.PubKeyMultisigThreshold{}, tm_multisig.PubKeyMultisigThresholdAminoRoute, nil)
	//
	//codec.RegisterConcrete(tm_ed25519.PubKeyEd25519{}, tm_ed25519.PubKeyAminoName, nil)
	//codec.RegisterConcrete(tm_secp256k1.PubKeySecp256k1{}, tm_secp256k1.PubKeyAminoName, nil)
}
