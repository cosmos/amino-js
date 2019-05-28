package js

import (
	"encoding/json"
	rootmulti "github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/store/rootmulti"
	iavl "github.com/jordansexton/go-amino-js/go/types/tendermint/iavl"

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
)

func EncodeMultiStoreProofOp(bz []byte, bare bool) []byte {
	var o rootmulti.MultiStoreProofOp
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
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
	err := json.Unmarshal(bz, &o)
	if err != nil {
		panic(err)
	}

	bz2, err := encodeMockBadEvidence(o, bare)
	if err != nil {
		panic(err)
	}

	return bz2
}
