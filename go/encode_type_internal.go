package js

import (
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

func encodeMultiStoreProofOp(o rootmulti.MultiStoreProofOp, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeIAVLAbsenceOp(o iavl.IAVLAbsenceOp, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeIAVLValueOp(o iavl.IAVLValueOp, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePrivKeyLedgerSecp256k1(o crypto.PrivKeyLedgerSecp256k1, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeInfo(o keys.Info, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeBIP44Params(o hd.BIP44Params, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeLocalInfo(o keys.LocalInfo, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeLedgerInfo(o keys.LedgerInfo, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeOfflineInfo(o keys.OfflineInfo, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMultiInfo(o keys.MultiInfo, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsg(o types.Msg, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeTx(o types.Tx, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeAccount(o auth.Account, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeVestingAccount(o auth.VestingAccount, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeBaseAccount(o auth.BaseAccount, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeBaseVestingAccount(o auth.BaseVestingAccount, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeContinuousVestingAccount(o auth.ContinuousVestingAccount, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeDelayedVestingAccount(o auth.DelayedVestingAccount, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeStdTx(o auth.StdTx, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgSend(o bank.MsgSend, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgMultiSend(o bank.MsgMultiSend, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgVerifyInvariant(o crisis.MsgVerifyInvariant, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgWithdrawDelegatorReward(o distribution.MsgWithdrawDelegatorReward, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgWithdrawValidatorCommission(o distribution.MsgWithdrawValidatorCommission, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgSetWithdrawAddress(o distribution.MsgSetWithdrawAddress, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeContent(o gov.Content, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgSubmitProposal(o gov.MsgSubmitProposal, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgDeposit(o gov.MsgDeposit, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgVote(o gov.MsgVote, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeTextProposal(o gov.TextProposal, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeSoftwareUpgradeProposal(o gov.SoftwareUpgradeProposal, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgIBCTransfer(o ibc.MsgIBCTransfer, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgIBCReceive(o ibc.MsgIBCReceive, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeParameterChangeProposal(o params.ParameterChangeProposal, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgUnjail(o slashing.MsgUnjail, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgCreateValidator(o staking.MsgCreateValidator, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgEditValidator(o staking.MsgEditValidator, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgDelegate(o staking.MsgDelegate, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgUndelegate(o staking.MsgUndelegate, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgBeginRedelegate(o staking.MsgBeginRedelegate, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeBlockchainMessage(o tm_blockchain.BlockchainMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeBcBlockRequestMessage(o tm_blockchain.BcBlockRequestMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeBcBlockResponseMessage(o tm_blockchain.BcBlockResponseMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeBcNoBlockResponseMessage(o tm_blockchain.BcNoBlockResponseMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeBcStatusResponseMessage(o tm_blockchain.BcStatusResponseMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeBcStatusRequestMessage(o tm_blockchain.BcStatusRequestMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeConsensusMessage(o tm_consensus.ConsensusMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeNewRoundStepMessage(o tm_consensus.NewRoundStepMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeNewValidBlockMessage(o tm_consensus.NewValidBlockMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeProposalMessage(o tm_consensus.ProposalMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeProposalPOLMessage(o tm_consensus.ProposalPOLMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeBlockPartMessage(o tm_consensus.BlockPartMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeVoteMessage(o tm_consensus.VoteMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeHasVoteMessage(o tm_consensus.HasVoteMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeVoteSetMaj23Message(o tm_consensus.VoteSetMaj23Message, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeVoteSetBitsMessage(o tm_consensus.VoteSetBitsMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeWALMessage(o tm_consensus.WALMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMsgInfo(o tm_consensus.MsgInfo, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeTimeoutInfo(o tm_consensus.TimeoutInfo, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeEndHeightMessage(o tm_consensus.EndHeightMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePubKey(o tm_crypto.PubKey, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePrivKey(o tm_crypto.PrivKey, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePubKeyEd25519(o tm_ed25519.PubKeyEd25519, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePrivKeyEd25519(o tm_ed25519.PrivKeyEd25519, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePubKeySecp256k1(o tm_secp256k1.PubKeySecp256k1, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePrivKeySecp256k1(o tm_secp256k1.PrivKeySecp256k1, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePubKeyMultisigThreshold(o tm_multisig.PubKeyMultisigThreshold, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeEvidenceMessage(o tm_evidence.EvidenceMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeEvidenceListMessage(o tm_evidence.EvidenceListMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMempoolMessage(o tm_mempool.MempoolMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeTxMessage(o tm_mempool.TxMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePacket(o tm_conn.Packet, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePacketPing(o tm_conn.PacketPing, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePacketPong(o tm_conn.PacketPong, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePacketMsg(o tm_conn.PacketMsg, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePexMessage(o tm_pex.PexMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePexRequestMessage(o tm_pex.PexRequestMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePexAddrsMessage(o tm_pex.PexAddrsMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeRemoteSignerMsg(o tm_privval.RemoteSignerMsg, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePubKeyRequest(o tm_privval.PubKeyRequest, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePubKeyResponse(o tm_privval.PubKeyResponse, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeSignVoteRequest(o tm_privval.SignVoteRequest, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeSignedVoteResponse(o tm_privval.SignedVoteResponse, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeSignProposalRequest(o tm_privval.SignProposalRequest, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeSignedProposalResponse(o tm_privval.SignedProposalResponse, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePingRequest(o tm_privval.PingRequest, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodePingResponse(o tm_privval.PingResponse, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeTMEventData(o tm_types.TMEventData, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeEventDataNewBlock(o tm_types.EventDataNewBlock, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeEventDataNewBlockHeader(o tm_types.EventDataNewBlockHeader, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeEventDataTx(o tm_types.EventDataTx, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeEventDataRoundState(o tm_types.EventDataRoundState, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeEventDataNewRound(o tm_types.EventDataNewRound, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeEventDataCompleteProposal(o tm_types.EventDataCompleteProposal, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeEventDataVote(o tm_types.EventDataVote, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeEventDataValidatorSetUpdates(o tm_types.EventDataValidatorSetUpdates, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeEventDataString(o tm_types.EventDataString, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeEvidence(o tm_types.Evidence, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeDuplicateVoteEvidence(o tm_types.DuplicateVoteEvidence, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMockGoodEvidence(o tm_types.MockGoodEvidence, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMockRandomGoodEvidence(o tm_types.MockRandomGoodEvidence, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func encodeMockBadEvidence(o tm_types.MockBadEvidence, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}
