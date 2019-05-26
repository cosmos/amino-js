package main

import (
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

func DecodeIAVLAbsenceOp(bz []byte, bare bool) (o *iavl.IAVLAbsenceOp, err error) {
	if bare {
		cdc.MustUnmarshalBinaryBare(bz, &o)
	} else {
		cdc.MustUnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeIAVLValueOp(bz []byte, bare bool) (o *iavl.IAVLValueOp, err error) {
	if bare {
		cdc.MustUnmarshalBinaryBare(bz, &o)
	} else {
		cdc.MustUnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePrivKeyLedgerSecp256k1(bz []byte, bare bool) (o *crypto.PrivKeyLedgerSecp256k1, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeInfo(bz []byte, bare bool) (o *keys.Info, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeBIP44Params(bz []byte, bare bool) (o *hd.BIP44Params, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeLocalInfo(bz []byte, bare bool) (o *keys.LocalInfo, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeLedgerInfo(bz []byte, bare bool) (o *keys.LedgerInfo, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeOfflineInfo(bz []byte, bare bool) (o *keys.OfflineInfo, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMultiInfo(bz []byte, bare bool) (o *keys.MultiInfo, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsg(bz []byte, bare bool) (o *types.Msg, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeTx(bz []byte, bare bool) (o *types.Tx, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeAccount(bz []byte, bare bool) (o *auth.Account, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeVestingAccount(bz []byte, bare bool) (o *auth.VestingAccount, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeBaseAccount(bz []byte, bare bool) (o *auth.BaseAccount, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeBaseVestingAccount(bz []byte, bare bool) (o *auth.BaseVestingAccount, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeContinuousVestingAccount(bz []byte, bare bool) (o *auth.ContinuousVestingAccount, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeDelayedVestingAccount(bz []byte, bare bool) (o *auth.DelayedVestingAccount, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeStdTx(bz []byte, bare bool) (o *auth.StdTx, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgSend(bz []byte, bare bool) (o *bank.MsgSend, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgMultiSend(bz []byte, bare bool) (o *bank.MsgMultiSend, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgVerifyInvariant(bz []byte, bare bool) (o *crisis.MsgVerifyInvariant, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgWithdrawDelegatorReward(bz []byte, bare bool) (o *distribution.MsgWithdrawDelegatorReward, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgWithdrawValidatorCommission(bz []byte, bare bool) (o *distribution.MsgWithdrawValidatorCommission, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgSetWithdrawAddress(bz []byte, bare bool) (o *distribution.MsgSetWithdrawAddress, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeContent(bz []byte, bare bool) (o *gov.Content, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgSubmitProposal(bz []byte, bare bool) (o *gov.MsgSubmitProposal, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgDeposit(bz []byte, bare bool) (o *gov.MsgDeposit, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgVote(bz []byte, bare bool) (o *gov.MsgVote, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeTextProposal(bz []byte, bare bool) (o *gov.TextProposal, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeSoftwareUpgradeProposal(bz []byte, bare bool) (o *gov.SoftwareUpgradeProposal, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgIBCTransfer(bz []byte, bare bool) (o *ibc.MsgIBCTransfer, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgIBCReceive(bz []byte, bare bool) (o *ibc.MsgIBCReceive, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeParameterChangeProposal(bz []byte, bare bool) (o *params.ParameterChangeProposal, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgUnjail(bz []byte, bare bool) (o *slashing.MsgUnjail, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgCreateValidator(bz []byte, bare bool) (o *staking.MsgCreateValidator, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgEditValidator(bz []byte, bare bool) (o *staking.MsgEditValidator, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgDelegate(bz []byte, bare bool) (o *staking.MsgDelegate, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgUndelegate(bz []byte, bare bool) (o *staking.MsgUndelegate, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgBeginRedelegate(bz []byte, bare bool) (o *staking.MsgBeginRedelegate, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeBlockchainMessage(bz []byte, bare bool) (o *tm_blockchain.BlockchainMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeBcBlockRequestMessage(bz []byte, bare bool) (o *tm_blockchain.BcBlockRequestMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeBcBlockResponseMessage(bz []byte, bare bool) (o *tm_blockchain.BcBlockResponseMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeBcNoBlockResponseMessage(bz []byte, bare bool) (o *tm_blockchain.BcNoBlockResponseMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeBcStatusResponseMessage(bz []byte, bare bool) (o *tm_blockchain.BcStatusResponseMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeBcStatusRequestMessage(bz []byte, bare bool) (o *tm_blockchain.BcStatusRequestMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeConsensusMessage(bz []byte, bare bool) (o *tm_consensus.ConsensusMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeNewRoundStepMessage(bz []byte, bare bool) (o *tm_consensus.NewRoundStepMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeNewValidBlockMessage(bz []byte, bare bool) (o *tm_consensus.NewValidBlockMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeProposalMessage(bz []byte, bare bool) (o *tm_consensus.ProposalMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeProposalPOLMessage(bz []byte, bare bool) (o *tm_consensus.ProposalPOLMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeBlockPartMessage(bz []byte, bare bool) (o *tm_consensus.BlockPartMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeVoteMessage(bz []byte, bare bool) (o *tm_consensus.VoteMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeHasVoteMessage(bz []byte, bare bool) (o *tm_consensus.HasVoteMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeVoteSetMaj23Message(bz []byte, bare bool) (o *tm_consensus.VoteSetMaj23Message, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeVoteSetBitsMessage(bz []byte, bare bool) (o *tm_consensus.VoteSetBitsMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeWALMessage(bz []byte, bare bool) (o *tm_consensus.WALMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMsgInfo(bz []byte, bare bool) (o *tm_consensus.MsgInfo, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeTimeoutInfo(bz []byte, bare bool) (o *tm_consensus.TimeoutInfo, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeEndHeightMessage(bz []byte, bare bool) (o *tm_consensus.EndHeightMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePubKey(bz []byte, bare bool) (o *tm_crypto.PubKey, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePrivKey(bz []byte, bare bool) (o *tm_crypto.PrivKey, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePubKeyEd25519(bz []byte, bare bool) (o *tm_ed25519.PubKeyEd25519, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePrivKeyEd25519(bz []byte, bare bool) (o *tm_ed25519.PrivKeyEd25519, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePubKeySecp256k1(bz []byte, bare bool) (o *tm_secp256k1.PubKeySecp256k1, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePrivKeySecp256k1(bz []byte, bare bool) (o *tm_secp256k1.PrivKeySecp256k1, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePubKeyMultisigThreshold(bz []byte, bare bool) (o *tm_multisig.PubKeyMultisigThreshold, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeEvidenceMessage(bz []byte, bare bool) (o *tm_evidence.EvidenceMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeEvidenceListMessage(bz []byte, bare bool) (o *tm_evidence.EvidenceListMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMempoolMessage(bz []byte, bare bool) (o *tm_mempool.MempoolMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeTxMessage(bz []byte, bare bool) (o *tm_mempool.TxMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePacket(bz []byte, bare bool) (o *tm_conn.Packet, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePacketPing(bz []byte, bare bool) (o *tm_conn.PacketPing, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePacketPong(bz []byte, bare bool) (o *tm_conn.PacketPong, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePacketMsg(bz []byte, bare bool) (o *tm_conn.PacketMsg, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePexMessage(bz []byte, bare bool) (o *tm_pex.PexMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePexRequestMessage(bz []byte, bare bool) (o *tm_pex.PexRequestMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePexAddrsMessage(bz []byte, bare bool) (o *tm_pex.PexAddrsMessage, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeRemoteSignerMsg(bz []byte, bare bool) (o *tm_privval.RemoteSignerMsg, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePubKeyRequest(bz []byte, bare bool) (o *tm_privval.PubKeyRequest, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePubKeyResponse(bz []byte, bare bool) (o *tm_privval.PubKeyResponse, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeSignVoteRequest(bz []byte, bare bool) (o *tm_privval.SignVoteRequest, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeSignedVoteResponse(bz []byte, bare bool) (o *tm_privval.SignedVoteResponse, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeSignProposalRequest(bz []byte, bare bool) (o *tm_privval.SignProposalRequest, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeSignedProposalResponse(bz []byte, bare bool) (o *tm_privval.SignedProposalResponse, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePingRequest(bz []byte, bare bool) (o *tm_privval.PingRequest, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodePingResponse(bz []byte, bare bool) (o *tm_privval.PingResponse, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeTMEventData(bz []byte, bare bool) (o *tm_types.TMEventData, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeEventDataNewBlock(bz []byte, bare bool) (o *tm_types.EventDataNewBlock, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeEventDataNewBlockHeader(bz []byte, bare bool) (o *tm_types.EventDataNewBlockHeader, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeEventDataTx(bz []byte, bare bool) (o *tm_types.EventDataTx, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeEventDataRoundState(bz []byte, bare bool) (o *tm_types.EventDataRoundState, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeEventDataNewRound(bz []byte, bare bool) (o *tm_types.EventDataNewRound, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeEventDataCompleteProposal(bz []byte, bare bool) (o *tm_types.EventDataCompleteProposal, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeEventDataVote(bz []byte, bare bool) (o *tm_types.EventDataVote, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeEventDataValidatorSetUpdates(bz []byte, bare bool) (o *tm_types.EventDataValidatorSetUpdates, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeEventDataString(bz []byte, bare bool) (o *tm_types.EventDataString, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeEvidence(bz []byte, bare bool) (o *tm_types.Evidence, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeDuplicateVoteEvidence(bz []byte, bare bool) (o *tm_types.DuplicateVoteEvidence, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMockGoodEvidence(bz []byte, bare bool) (o *tm_types.MockGoodEvidence, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMockRandomGoodEvidence(bz []byte, bare bool) (o *tm_types.MockRandomGoodEvidence, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}

func DecodeMockBadEvidence(bz []byte, bare bool) (o *tm_types.MockBadEvidence, err error) {
	if bare {
		err = cdc.UnmarshalBinaryBare(bz, &o)
	} else {
		err = cdc.UnmarshalBinaryLengthPrefixed(bz, &o)
	}
	return
}
