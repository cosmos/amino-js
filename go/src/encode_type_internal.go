package src

import (
	rootmulti "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/store/rootmulti"
	iavl "github.com/cosmos/amino-js/go/lib/tendermint/iavl"

	crypto "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/crypto"
	keys "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/crypto/keys"
	hd "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/crypto/keys/hd"

	types "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"

	auth "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/auth"
	bank "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/bank"
	crisis "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/crisis"
	distribution "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/distribution/types"
	gov "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/gov/types"
	ibc "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/ibc"
	params "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/params/types"
	slashing "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/slashing"
	staking "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/staking/types"

	tm_crypto "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto"
	tm_ed25519 "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto/ed25519"
	tm_multisig "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto/multisig"
	tm_secp256k1 "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto/secp256k1"

	tm_blockchain "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/blockchain"
	tm_consensus "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/consensus"
	tm_evidence "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/evidence"
	tm_mempool "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/mempool"
	tm_conn "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/p2p/conn"
	tm_pex "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/p2p/pex"
	tm_privval "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/privval"
	tm_types "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/types"
)

func encodeMultiStoreProofOp(o rootmulti.MultiStoreProofOp, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeIAVLAbsenceOp(o iavl.IAVLAbsenceOp, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeIAVLValueOp(o iavl.IAVLValueOp, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePrivKeyLedgerSecp256k1(o crypto.PrivKeyLedgerSecp256k1, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeInfo(o keys.Info, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeBIP44Params(o hd.BIP44Params, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeLocalInfo(o keys.LocalInfo, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeLedgerInfo(o keys.LedgerInfo, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeOfflineInfo(o keys.OfflineInfo, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMultiInfo(o keys.MultiInfo, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsg(o types.Msg, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeTx(o types.Tx, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeAccount(o auth.Account, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeVestingAccount(o auth.VestingAccount, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeBaseAccount(o auth.BaseAccount, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeBaseVestingAccount(o auth.BaseVestingAccount, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeContinuousVestingAccount(o auth.ContinuousVestingAccount, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeDelayedVestingAccount(o auth.DelayedVestingAccount, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeStdTx(o auth.StdTx, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgSend(o bank.MsgSend, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgMultiSend(o bank.MsgMultiSend, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgVerifyInvariant(o crisis.MsgVerifyInvariant, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgWithdrawDelegatorReward(o distribution.MsgWithdrawDelegatorReward, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgWithdrawValidatorCommission(o distribution.MsgWithdrawValidatorCommission, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgSetWithdrawAddress(o distribution.MsgSetWithdrawAddress, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeContent(o gov.Content, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgSubmitProposal(o gov.MsgSubmitProposal, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgDeposit(o gov.MsgDeposit, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgVote(o gov.MsgVote, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeTextProposal(o gov.TextProposal, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeSoftwareUpgradeProposal(o gov.SoftwareUpgradeProposal, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgIBCTransfer(o ibc.MsgIBCTransfer, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgIBCReceive(o ibc.MsgIBCReceive, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeParameterChangeProposal(o params.ParameterChangeProposal, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgUnjail(o slashing.MsgUnjail, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgCreateValidator(o staking.MsgCreateValidator, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgEditValidator(o staking.MsgEditValidator, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgDelegate(o staking.MsgDelegate, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgUndelegate(o staking.MsgUndelegate, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgBeginRedelegate(o staking.MsgBeginRedelegate, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeBlockchainMessage(o tm_blockchain.BlockchainMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeBcBlockRequestMessage(o tm_blockchain.BcBlockRequestMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeBcBlockResponseMessage(o tm_blockchain.BcBlockResponseMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeBcNoBlockResponseMessage(o tm_blockchain.BcNoBlockResponseMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeBcStatusResponseMessage(o tm_blockchain.BcStatusResponseMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeBcStatusRequestMessage(o tm_blockchain.BcStatusRequestMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeConsensusMessage(o tm_consensus.ConsensusMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeNewRoundStepMessage(o tm_consensus.NewRoundStepMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeNewValidBlockMessage(o tm_consensus.NewValidBlockMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeProposalMessage(o tm_consensus.ProposalMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeProposalPOLMessage(o tm_consensus.ProposalPOLMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeBlockPartMessage(o tm_consensus.BlockPartMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeVoteMessage(o tm_consensus.VoteMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeHasVoteMessage(o tm_consensus.HasVoteMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeVoteSetMaj23Message(o tm_consensus.VoteSetMaj23Message, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeVoteSetBitsMessage(o tm_consensus.VoteSetBitsMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeWALMessage(o tm_consensus.WALMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMsgInfo(o tm_consensus.MsgInfo, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeTimeoutInfo(o tm_consensus.TimeoutInfo, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeEndHeightMessage(o tm_consensus.EndHeightMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePubKey(o tm_crypto.PubKey, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePrivKey(o tm_crypto.PrivKey, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePubKeyEd25519(o tm_ed25519.PubKeyEd25519, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePrivKeyEd25519(o tm_ed25519.PrivKeyEd25519, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePubKeySecp256k1(o tm_secp256k1.PubKeySecp256k1, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePrivKeySecp256k1(o tm_secp256k1.PrivKeySecp256k1, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePubKeyMultisigThreshold(o tm_multisig.PubKeyMultisigThreshold, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeEvidenceMessage(o tm_evidence.EvidenceMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeEvidenceListMessage(o tm_evidence.EvidenceListMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMempoolMessage(o tm_mempool.MempoolMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeTxMessage(o tm_mempool.TxMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePacket(o tm_conn.Packet, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePacketPing(o tm_conn.PacketPing, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePacketPong(o tm_conn.PacketPong, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePacketMsg(o tm_conn.PacketMsg, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePexMessage(o tm_pex.PexMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePexRequestMessage(o tm_pex.PexRequestMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePexAddrsMessage(o tm_pex.PexAddrsMessage, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeRemoteSignerMsg(o tm_privval.RemoteSignerMsg, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePubKeyRequest(o tm_privval.PubKeyRequest, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePubKeyResponse(o tm_privval.PubKeyResponse, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeSignVoteRequest(o tm_privval.SignVoteRequest, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeSignedVoteResponse(o tm_privval.SignedVoteResponse, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeSignProposalRequest(o tm_privval.SignProposalRequest, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeSignedProposalResponse(o tm_privval.SignedProposalResponse, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePingRequest(o tm_privval.PingRequest, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodePingResponse(o tm_privval.PingResponse, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeTMEventData(o tm_types.TMEventData, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeEventDataNewBlock(o tm_types.EventDataNewBlock, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeEventDataNewBlockHeader(o tm_types.EventDataNewBlockHeader, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeEventDataTx(o tm_types.EventDataTx, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeEventDataRoundState(o tm_types.EventDataRoundState, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeEventDataNewRound(o tm_types.EventDataNewRound, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeEventDataCompleteProposal(o tm_types.EventDataCompleteProposal, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeEventDataVote(o tm_types.EventDataVote, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeEventDataValidatorSetUpdates(o tm_types.EventDataValidatorSetUpdates, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeEventDataString(o tm_types.EventDataString, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeEvidence(o tm_types.Evidence, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeDuplicateVoteEvidence(o tm_types.DuplicateVoteEvidence, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMockGoodEvidence(o tm_types.MockGoodEvidence, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMockRandomGoodEvidence(o tm_types.MockRandomGoodEvidence, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}

func encodeMockBadEvidence(o tm_types.MockBadEvidence, lengthPrefixed bool) (bz []byte, err error) {
	if lengthPrefixed {
		bz, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz, err = codec.MarshalBinaryBare(o)
	}
	return
}
