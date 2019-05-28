package js

import (
	"github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/store/rootmulti"
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

func EncodeMultiStoreProofOp(o rootmulti.MultiStoreProofOp, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeIAVLAbsenceOp(o iavl.IAVLAbsenceOp, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeIAVLValueOp(o iavl.IAVLValueOp, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePrivKeyLedgerSecp256k1(o crypto.PrivKeyLedgerSecp256k1, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeInfo(o keys.Info, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeBIP44Params(o hd.BIP44Params, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeLocalInfo(o keys.LocalInfo, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeLedgerInfo(o keys.LedgerInfo, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeOfflineInfo(o keys.OfflineInfo, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMultiInfo(o keys.MultiInfo, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsg(o types.Msg, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeTx(o types.Tx, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeAccount(o auth.Account, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeVestingAccount(o auth.VestingAccount, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeBaseAccount(o auth.BaseAccount, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeBaseVestingAccount(o auth.BaseVestingAccount, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeContinuousVestingAccount(o auth.ContinuousVestingAccount, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeDelayedVestingAccount(o auth.DelayedVestingAccount, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeStdTx(o auth.StdTx, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgSend(o bank.MsgSend, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgMultiSend(o bank.MsgMultiSend, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgVerifyInvariant(o crisis.MsgVerifyInvariant, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgWithdrawDelegatorReward(o distribution.MsgWithdrawDelegatorReward, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgWithdrawValidatorCommission(o distribution.MsgWithdrawValidatorCommission, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgSetWithdrawAddress(o distribution.MsgSetWithdrawAddress, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeContent(o gov.Content, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgSubmitProposal(o gov.MsgSubmitProposal, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgDeposit(o gov.MsgDeposit, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgVote(o gov.MsgVote, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeTextProposal(o gov.TextProposal, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeSoftwareUpgradeProposal(o gov.SoftwareUpgradeProposal, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgIBCTransfer(o ibc.MsgIBCTransfer, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgIBCReceive(o ibc.MsgIBCReceive, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeParameterChangeProposal(o params.ParameterChangeProposal, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgUnjail(o slashing.MsgUnjail, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgCreateValidator(o staking.MsgCreateValidator, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgEditValidator(o staking.MsgEditValidator, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgDelegate(o staking.MsgDelegate, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgUndelegate(o staking.MsgUndelegate, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgBeginRedelegate(o staking.MsgBeginRedelegate, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeBlockchainMessage(o tm_blockchain.BlockchainMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeBcBlockRequestMessage(o tm_blockchain.BcBlockRequestMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeBcBlockResponseMessage(o tm_blockchain.BcBlockResponseMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeBcNoBlockResponseMessage(o tm_blockchain.BcNoBlockResponseMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeBcStatusResponseMessage(o tm_blockchain.BcStatusResponseMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeBcStatusRequestMessage(o tm_blockchain.BcStatusRequestMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeConsensusMessage(o tm_consensus.ConsensusMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeNewRoundStepMessage(o tm_consensus.NewRoundStepMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeNewValidBlockMessage(o tm_consensus.NewValidBlockMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeProposalMessage(o tm_consensus.ProposalMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeProposalPOLMessage(o tm_consensus.ProposalPOLMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeBlockPartMessage(o tm_consensus.BlockPartMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeVoteMessage(o tm_consensus.VoteMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeHasVoteMessage(o tm_consensus.HasVoteMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeVoteSetMaj23Message(o tm_consensus.VoteSetMaj23Message, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeVoteSetBitsMessage(o tm_consensus.VoteSetBitsMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeWALMessage(o tm_consensus.WALMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMsgInfo(o tm_consensus.MsgInfo, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeTimeoutInfo(o tm_consensus.TimeoutInfo, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeEndHeightMessage(o tm_consensus.EndHeightMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePubKey(o tm_crypto.PubKey, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePrivKey(o tm_crypto.PrivKey, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePubKeyEd25519(o tm_ed25519.PubKeyEd25519, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePrivKeyEd25519(o tm_ed25519.PrivKeyEd25519, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePubKeySecp256k1(o tm_secp256k1.PubKeySecp256k1, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePrivKeySecp256k1(o tm_secp256k1.PrivKeySecp256k1, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePubKeyMultisigThreshold(o tm_multisig.PubKeyMultisigThreshold, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeEvidenceMessage(o tm_evidence.EvidenceMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeEvidenceListMessage(o tm_evidence.EvidenceListMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMempoolMessage(o tm_mempool.MempoolMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeTxMessage(o tm_mempool.TxMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePacket(o tm_conn.Packet, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePacketPing(o tm_conn.PacketPing, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePacketPong(o tm_conn.PacketPong, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePacketMsg(o tm_conn.PacketMsg, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePexMessage(o tm_pex.PexMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePexRequestMessage(o tm_pex.PexRequestMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePexAddrsMessage(o tm_pex.PexAddrsMessage, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeRemoteSignerMsg(o tm_privval.RemoteSignerMsg, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePubKeyRequest(o tm_privval.PubKeyRequest, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePubKeyResponse(o tm_privval.PubKeyResponse, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeSignVoteRequest(o tm_privval.SignVoteRequest, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeSignedVoteResponse(o tm_privval.SignedVoteResponse, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeSignProposalRequest(o tm_privval.SignProposalRequest, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeSignedProposalResponse(o tm_privval.SignedProposalResponse, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePingRequest(o tm_privval.PingRequest, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodePingResponse(o tm_privval.PingResponse, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeTMEventData(o tm_types.TMEventData, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeEventDataNewBlock(o tm_types.EventDataNewBlock, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeEventDataNewBlockHeader(o tm_types.EventDataNewBlockHeader, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeEventDataTx(o tm_types.EventDataTx, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeEventDataRoundState(o tm_types.EventDataRoundState, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeEventDataNewRound(o tm_types.EventDataNewRound, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeEventDataCompleteProposal(o tm_types.EventDataCompleteProposal, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeEventDataVote(o tm_types.EventDataVote, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeEventDataValidatorSetUpdates(o tm_types.EventDataValidatorSetUpdates, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeEventDataString(o tm_types.EventDataString, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeEvidence(o tm_types.Evidence, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeDuplicateVoteEvidence(o tm_types.DuplicateVoteEvidence, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMockGoodEvidence(o tm_types.MockGoodEvidence, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMockRandomGoodEvidence(o tm_types.MockRandomGoodEvidence, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}

func EncodeMockBadEvidence(o tm_types.MockBadEvidence, bare bool) (bz []byte, err error) {
	if bare {
		bz, err = codec.MarshalBinaryBare(&o)
	} else {
		bz, err = codec.MarshalBinaryLengthPrefixed(&o)
	}
	return
}
