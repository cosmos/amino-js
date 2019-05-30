package src

import (
	rootmulti "github.com/jordansexton/amino-js/go/lib/cosmos/cosmos-sdk/store/rootmulti"
	iavl "github.com/jordansexton/amino-js/go/lib/tendermint/iavl"

	crypto "github.com/jordansexton/amino-js/go/lib/cosmos/cosmos-sdk/crypto"
	keys "github.com/jordansexton/amino-js/go/lib/cosmos/cosmos-sdk/crypto/keys"
	hd "github.com/jordansexton/amino-js/go/lib/cosmos/cosmos-sdk/crypto/keys/hd"

	types "github.com/jordansexton/amino-js/go/lib/cosmos/cosmos-sdk/types"

	auth "github.com/jordansexton/amino-js/go/lib/cosmos/cosmos-sdk/x/auth"
	bank "github.com/jordansexton/amino-js/go/lib/cosmos/cosmos-sdk/x/bank"
	crisis "github.com/jordansexton/amino-js/go/lib/cosmos/cosmos-sdk/x/crisis"
	distribution "github.com/jordansexton/amino-js/go/lib/cosmos/cosmos-sdk/x/distribution/types"
	gov "github.com/jordansexton/amino-js/go/lib/cosmos/cosmos-sdk/x/gov/types"
	ibc "github.com/jordansexton/amino-js/go/lib/cosmos/cosmos-sdk/x/ibc"
	params "github.com/jordansexton/amino-js/go/lib/cosmos/cosmos-sdk/x/params/types"
	slashing "github.com/jordansexton/amino-js/go/lib/cosmos/cosmos-sdk/x/slashing"
	staking "github.com/jordansexton/amino-js/go/lib/cosmos/cosmos-sdk/x/staking/types"

	tm_crypto "github.com/jordansexton/amino-js/go/lib/tendermint/tendermint/crypto"
	tm_ed25519 "github.com/jordansexton/amino-js/go/lib/tendermint/tendermint/crypto/ed25519"
	tm_multisig "github.com/jordansexton/amino-js/go/lib/tendermint/tendermint/crypto/multisig"
	tm_secp256k1 "github.com/jordansexton/amino-js/go/lib/tendermint/tendermint/crypto/secp256k1"

	tm_blockchain "github.com/jordansexton/amino-js/go/lib/tendermint/tendermint/blockchain"
	tm_consensus "github.com/jordansexton/amino-js/go/lib/tendermint/tendermint/consensus"
	tm_evidence "github.com/jordansexton/amino-js/go/lib/tendermint/tendermint/evidence"
	tm_mempool "github.com/jordansexton/amino-js/go/lib/tendermint/tendermint/mempool"
	tm_conn "github.com/jordansexton/amino-js/go/lib/tendermint/tendermint/p2p/conn"
	tm_pex "github.com/jordansexton/amino-js/go/lib/tendermint/tendermint/p2p/pex"
	tm_privval "github.com/jordansexton/amino-js/go/lib/tendermint/tendermint/privval"
	tm_types "github.com/jordansexton/amino-js/go/lib/tendermint/tendermint/types"
)

func EncodeMultiStoreProofOp(bz []byte, bare bool) []byte {
	var o rootmulti.MultiStoreProofOp
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMultiStoreProofOp(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeIAVLAbsenceOp(bz []byte, bare bool) []byte {
	var o iavl.IAVLAbsenceOp
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeIAVLAbsenceOp(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeIAVLValueOp(bz []byte, bare bool) []byte {
	var o iavl.IAVLValueOp
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeIAVLValueOp(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePrivKeyLedgerSecp256k1(bz []byte, bare bool) []byte {
	var o crypto.PrivKeyLedgerSecp256k1
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePrivKeyLedgerSecp256k1(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeInfo(bz []byte, bare bool) []byte {
	var o keys.Info
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeInfo(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeBIP44Params(bz []byte, bare bool) []byte {
	var o hd.BIP44Params
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeBIP44Params(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeLocalInfo(bz []byte, bare bool) []byte {
	var o keys.LocalInfo
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeLocalInfo(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeLedgerInfo(bz []byte, bare bool) []byte {
	var o keys.LedgerInfo
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeLedgerInfo(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeOfflineInfo(bz []byte, bare bool) []byte {
	var o keys.OfflineInfo
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeOfflineInfo(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMultiInfo(bz []byte, bare bool) []byte {
	var o keys.MultiInfo
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMultiInfo(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsg(bz []byte, bare bool) []byte {
	var o types.Msg
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsg(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeTx(bz []byte, bare bool) []byte {
	var o types.Tx
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeTx(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeAccount(bz []byte, bare bool) []byte {
	var o auth.Account
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeAccount(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeVestingAccount(bz []byte, bare bool) []byte {
	var o auth.VestingAccount
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeVestingAccount(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeBaseAccount(bz []byte, bare bool) []byte {
	var o auth.BaseAccount
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeBaseAccount(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeBaseVestingAccount(bz []byte, bare bool) []byte {
	var o auth.BaseVestingAccount
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeBaseVestingAccount(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeContinuousVestingAccount(bz []byte, bare bool) []byte {
	var o auth.ContinuousVestingAccount
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeContinuousVestingAccount(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeDelayedVestingAccount(bz []byte, bare bool) []byte {
	var o auth.DelayedVestingAccount
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeDelayedVestingAccount(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeStdTx(bz []byte, bare bool) []byte {
	var o auth.StdTx
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeStdTx(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgSend(bz []byte, bare bool) []byte {
	var o bank.MsgSend
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgSend(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgMultiSend(bz []byte, bare bool) []byte {
	var o bank.MsgMultiSend
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgMultiSend(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgVerifyInvariant(bz []byte, bare bool) []byte {
	var o crisis.MsgVerifyInvariant
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgVerifyInvariant(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgWithdrawDelegatorReward(bz []byte, bare bool) []byte {
	var o distribution.MsgWithdrawDelegatorReward
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgWithdrawDelegatorReward(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgWithdrawValidatorCommission(bz []byte, bare bool) []byte {
	var o distribution.MsgWithdrawValidatorCommission
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgWithdrawValidatorCommission(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgSetWithdrawAddress(bz []byte, bare bool) []byte {
	var o distribution.MsgSetWithdrawAddress
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgSetWithdrawAddress(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeContent(bz []byte, bare bool) []byte {
	var o gov.Content
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeContent(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgSubmitProposal(bz []byte, bare bool) []byte {
	var o gov.MsgSubmitProposal
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgSubmitProposal(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgDeposit(bz []byte, bare bool) []byte {
	var o gov.MsgDeposit
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgDeposit(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgVote(bz []byte, bare bool) []byte {
	var o gov.MsgVote
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgVote(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeTextProposal(bz []byte, bare bool) []byte {
	var o gov.TextProposal
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeTextProposal(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeSoftwareUpgradeProposal(bz []byte, bare bool) []byte {
	var o gov.SoftwareUpgradeProposal
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeSoftwareUpgradeProposal(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgIBCTransfer(bz []byte, bare bool) []byte {
	var o ibc.MsgIBCTransfer
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgIBCTransfer(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgIBCReceive(bz []byte, bare bool) []byte {
	var o ibc.MsgIBCReceive
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgIBCReceive(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeParameterChangeProposal(bz []byte, bare bool) []byte {
	var o params.ParameterChangeProposal
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeParameterChangeProposal(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgUnjail(bz []byte, bare bool) []byte {
	var o slashing.MsgUnjail
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgUnjail(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgCreateValidator(bz []byte, bare bool) []byte {
	var o staking.MsgCreateValidator
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgCreateValidator(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgEditValidator(bz []byte, bare bool) []byte {
	var o staking.MsgEditValidator
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgEditValidator(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgDelegate(bz []byte, bare bool) []byte {
	var o staking.MsgDelegate
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgDelegate(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgUndelegate(bz []byte, bare bool) []byte {
	var o staking.MsgUndelegate
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgUndelegate(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgBeginRedelegate(bz []byte, bare bool) []byte {
	var o staking.MsgBeginRedelegate
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgBeginRedelegate(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeBlockchainMessage(bz []byte, bare bool) []byte {
	var o tm_blockchain.BlockchainMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeBlockchainMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeBcBlockRequestMessage(bz []byte, bare bool) []byte {
	var o tm_blockchain.BcBlockRequestMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeBcBlockRequestMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeBcBlockResponseMessage(bz []byte, bare bool) []byte {
	var o tm_blockchain.BcBlockResponseMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeBcBlockResponseMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeBcNoBlockResponseMessage(bz []byte, bare bool) []byte {
	var o tm_blockchain.BcNoBlockResponseMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeBcNoBlockResponseMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeBcStatusResponseMessage(bz []byte, bare bool) []byte {
	var o tm_blockchain.BcStatusResponseMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeBcStatusResponseMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeBcStatusRequestMessage(bz []byte, bare bool) []byte {
	var o tm_blockchain.BcStatusRequestMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeBcStatusRequestMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeConsensusMessage(bz []byte, bare bool) []byte {
	var o tm_consensus.ConsensusMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeConsensusMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeNewRoundStepMessage(bz []byte, bare bool) []byte {
	var o tm_consensus.NewRoundStepMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeNewRoundStepMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeNewValidBlockMessage(bz []byte, bare bool) []byte {
	var o tm_consensus.NewValidBlockMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeNewValidBlockMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeProposalMessage(bz []byte, bare bool) []byte {
	var o tm_consensus.ProposalMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeProposalMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeProposalPOLMessage(bz []byte, bare bool) []byte {
	var o tm_consensus.ProposalPOLMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeProposalPOLMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeBlockPartMessage(bz []byte, bare bool) []byte {
	var o tm_consensus.BlockPartMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeBlockPartMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeVoteMessage(bz []byte, bare bool) []byte {
	var o tm_consensus.VoteMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeVoteMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeHasVoteMessage(bz []byte, bare bool) []byte {
	var o tm_consensus.HasVoteMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeHasVoteMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeVoteSetMaj23Message(bz []byte, bare bool) []byte {
	var o tm_consensus.VoteSetMaj23Message
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeVoteSetMaj23Message(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeVoteSetBitsMessage(bz []byte, bare bool) []byte {
	var o tm_consensus.VoteSetBitsMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeVoteSetBitsMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeWALMessage(bz []byte, bare bool) []byte {
	var o tm_consensus.WALMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeWALMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMsgInfo(bz []byte, bare bool) []byte {
	var o tm_consensus.MsgInfo
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMsgInfo(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeTimeoutInfo(bz []byte, bare bool) []byte {
	var o tm_consensus.TimeoutInfo
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeTimeoutInfo(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeEndHeightMessage(bz []byte, bare bool) []byte {
	var o tm_consensus.EndHeightMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeEndHeightMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePubKey(bz []byte, bare bool) []byte {
	var o tm_crypto.PubKey
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePubKey(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePrivKey(bz []byte, bare bool) []byte {
	var o tm_crypto.PrivKey
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePrivKey(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePubKeyEd25519(bz []byte, bare bool) []byte {
	var o tm_ed25519.PubKeyEd25519
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePubKeyEd25519(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePrivKeyEd25519(bz []byte, bare bool) []byte {
	var o tm_ed25519.PrivKeyEd25519
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePrivKeyEd25519(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePubKeySecp256k1(bz []byte, bare bool) []byte {
	var o tm_secp256k1.PubKeySecp256k1
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePubKeySecp256k1(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePrivKeySecp256k1(bz []byte, bare bool) []byte {
	var o tm_secp256k1.PrivKeySecp256k1
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePrivKeySecp256k1(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePubKeyMultisigThreshold(bz []byte, bare bool) []byte {
	var o tm_multisig.PubKeyMultisigThreshold
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePubKeyMultisigThreshold(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeEvidenceMessage(bz []byte, bare bool) []byte {
	var o tm_evidence.EvidenceMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeEvidenceMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeEvidenceListMessage(bz []byte, bare bool) []byte {
	var o tm_evidence.EvidenceListMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeEvidenceListMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMempoolMessage(bz []byte, bare bool) []byte {
	var o tm_mempool.MempoolMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMempoolMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeTxMessage(bz []byte, bare bool) []byte {
	var o tm_mempool.TxMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeTxMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePacket(bz []byte, bare bool) []byte {
	var o tm_conn.Packet
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePacket(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePacketPing(bz []byte, bare bool) []byte {
	var o tm_conn.PacketPing
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePacketPing(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePacketPong(bz []byte, bare bool) []byte {
	var o tm_conn.PacketPong
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePacketPong(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePacketMsg(bz []byte, bare bool) []byte {
	var o tm_conn.PacketMsg
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePacketMsg(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePexMessage(bz []byte, bare bool) []byte {
	var o tm_pex.PexMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePexMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePexRequestMessage(bz []byte, bare bool) []byte {
	var o tm_pex.PexRequestMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePexRequestMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePexAddrsMessage(bz []byte, bare bool) []byte {
	var o tm_pex.PexAddrsMessage
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePexAddrsMessage(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeRemoteSignerMsg(bz []byte, bare bool) []byte {
	var o tm_privval.RemoteSignerMsg
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeRemoteSignerMsg(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePubKeyRequest(bz []byte, bare bool) []byte {
	var o tm_privval.PubKeyRequest
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePubKeyRequest(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePubKeyResponse(bz []byte, bare bool) []byte {
	var o tm_privval.PubKeyResponse
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePubKeyResponse(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeSignVoteRequest(bz []byte, bare bool) []byte {
	var o tm_privval.SignVoteRequest
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeSignVoteRequest(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeSignedVoteResponse(bz []byte, bare bool) []byte {
	var o tm_privval.SignedVoteResponse
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeSignedVoteResponse(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeSignProposalRequest(bz []byte, bare bool) []byte {
	var o tm_privval.SignProposalRequest
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeSignProposalRequest(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeSignedProposalResponse(bz []byte, bare bool) []byte {
	var o tm_privval.SignedProposalResponse
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeSignedProposalResponse(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePingRequest(bz []byte, bare bool) []byte {
	var o tm_privval.PingRequest
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePingRequest(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodePingResponse(bz []byte, bare bool) []byte {
	var o tm_privval.PingResponse
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodePingResponse(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeTMEventData(bz []byte, bare bool) []byte {
	var o tm_types.TMEventData
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeTMEventData(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeEventDataNewBlock(bz []byte, bare bool) []byte {
	var o tm_types.EventDataNewBlock
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeEventDataNewBlock(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeEventDataNewBlockHeader(bz []byte, bare bool) []byte {
	var o tm_types.EventDataNewBlockHeader
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeEventDataNewBlockHeader(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeEventDataTx(bz []byte, bare bool) []byte {
	var o tm_types.EventDataTx
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeEventDataTx(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeEventDataRoundState(bz []byte, bare bool) []byte {
	var o tm_types.EventDataRoundState
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeEventDataRoundState(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeEventDataNewRound(bz []byte, bare bool) []byte {
	var o tm_types.EventDataNewRound
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeEventDataNewRound(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeEventDataCompleteProposal(bz []byte, bare bool) []byte {
	var o tm_types.EventDataCompleteProposal
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeEventDataCompleteProposal(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeEventDataVote(bz []byte, bare bool) []byte {
	var o tm_types.EventDataVote
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeEventDataVote(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeEventDataValidatorSetUpdates(bz []byte, bare bool) []byte {
	var o tm_types.EventDataValidatorSetUpdates
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeEventDataValidatorSetUpdates(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeEventDataString(bz []byte, bare bool) []byte {
	var o tm_types.EventDataString
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeEventDataString(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeEvidence(bz []byte, bare bool) []byte {
	var o tm_types.Evidence
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeEvidence(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeDuplicateVoteEvidence(bz []byte, bare bool) []byte {
	var o tm_types.DuplicateVoteEvidence
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeDuplicateVoteEvidence(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMockGoodEvidence(bz []byte, bare bool) []byte {
	var o tm_types.MockGoodEvidence
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMockGoodEvidence(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMockRandomGoodEvidence(bz []byte, bare bool) []byte {
	var o tm_types.MockRandomGoodEvidence
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMockRandomGoodEvidence(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}

func EncodeMockBadEvidence(bz []byte, bare bool) []byte {
	var o tm_types.MockBadEvidence
	err := codec.UnmarshalJSON(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMockBadEvidence(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}
