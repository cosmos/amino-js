package main

import (
	"github.com/cosmos/amino-js/go/src"
)

func EncodeMultiStoreProofOp(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMultiStoreProofOp(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeIAVLAbsenceOp(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeIAVLAbsenceOp(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeIAVLValueOp(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeIAVLValueOp(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePrivKeyLedgerSecp256k1(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePrivKeyLedgerSecp256k1(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeInfo(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeInfo(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeBIP44Params(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeBIP44Params(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeLocalInfo(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeLocalInfo(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeLedgerInfo(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeLedgerInfo(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeOfflineInfo(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeOfflineInfo(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMultiInfo(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMultiInfo(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsg(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsg(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeTx(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeTx(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeAccount(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeAccount(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeVestingAccount(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeBaseAccount(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeBaseAccount(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeBaseVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeBaseVestingAccount(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeContinuousVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeContinuousVestingAccount(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeDelayedVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeDelayedVestingAccount(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeStdTx(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeStdTx(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgSend(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgSend(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgMultiSend(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgMultiSend(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgVerifyInvariant(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgVerifyInvariant(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgWithdrawDelegatorReward(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgWithdrawDelegatorReward(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgWithdrawValidatorCommission(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgWithdrawValidatorCommission(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgSetWithdrawAddress(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgSetWithdrawAddress(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeContent(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeContent(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgSubmitProposal(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgSubmitProposal(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgDeposit(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgDeposit(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgVote(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgVote(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeTextProposal(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeTextProposal(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeSoftwareUpgradeProposal(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeSoftwareUpgradeProposal(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgIBCTransfer(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgIBCTransfer(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgIBCReceive(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgIBCReceive(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeParameterChangeProposal(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeParameterChangeProposal(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgUnjail(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgUnjail(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgCreateValidator(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgCreateValidator(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgEditValidator(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgEditValidator(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgDelegate(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgDelegate(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgUndelegate(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgUndelegate(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgBeginRedelegate(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgBeginRedelegate(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeBlockchainMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeBlockchainMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeBcBlockRequestMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeBcBlockRequestMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeBcBlockResponseMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeBcBlockResponseMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeBcNoBlockResponseMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeBcNoBlockResponseMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeBcStatusResponseMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeBcStatusResponseMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeBcStatusRequestMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeBcStatusRequestMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeConsensusMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeConsensusMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeNewRoundStepMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeNewRoundStepMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeNewValidBlockMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeNewValidBlockMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeProposalMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeProposalMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeProposalPOLMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeProposalPOLMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeBlockPartMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeBlockPartMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeVoteMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeVoteMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeHasVoteMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeHasVoteMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeVoteSetMaj23Message(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeVoteSetMaj23Message(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeVoteSetBitsMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeVoteSetBitsMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeWALMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeWALMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMsgInfo(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMsgInfo(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeTimeoutInfo(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeTimeoutInfo(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeEndHeightMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeEndHeightMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePubKey(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePubKey(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePrivKey(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePrivKey(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePubKeyEd25519(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePubKeyEd25519(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePrivKeyEd25519(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePrivKeyEd25519(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePubKeySecp256k1(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePubKeySecp256k1(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePrivKeySecp256k1(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePrivKeySecp256k1(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePubKeyMultisigThreshold(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePubKeyMultisigThreshold(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeEvidenceMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeEvidenceMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeEvidenceListMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeEvidenceListMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMempoolMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMempoolMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeTxMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeTxMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePacket(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePacket(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePacketPing(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePacketPing(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePacketPong(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePacketPong(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePacketMsg(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePacketMsg(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePexMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePexMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePexRequestMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePexRequestMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePexAddrsMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePexAddrsMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeRemoteSignerMsg(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeRemoteSignerMsg(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePubKeyRequest(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePubKeyRequest(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePubKeyResponse(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePubKeyResponse(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeSignVoteRequest(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeSignVoteRequest(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeSignedVoteResponse(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeSignedVoteResponse(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeSignProposalRequest(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeSignProposalRequest(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeSignedProposalResponse(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeSignedProposalResponse(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePingRequest(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePingRequest(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodePingResponse(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodePingResponse(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeTMEventData(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeTMEventData(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeEventDataNewBlock(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeEventDataNewBlock(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeEventDataNewBlockHeader(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeEventDataNewBlockHeader(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeEventDataTx(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeEventDataTx(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeEventDataRoundState(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeEventDataRoundState(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeEventDataNewRound(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeEventDataNewRound(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeEventDataCompleteProposal(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeEventDataCompleteProposal(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeEventDataVote(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeEventDataVote(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeEventDataValidatorSetUpdates(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeEventDataValidatorSetUpdates(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeEventDataString(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeEventDataString(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeEvidence(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeDuplicateVoteEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeDuplicateVoteEvidence(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMockGoodEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMockGoodEvidence(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMockRandomGoodEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMockRandomGoodEvidence(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func EncodeMockBadEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.EncodeMockBadEvidence(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}
