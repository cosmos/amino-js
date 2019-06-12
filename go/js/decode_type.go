package main

import (
	"github.com/cosmos/amino-js/go/src"
)

func DecodeMultiStoreProofOp(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMultiStoreProofOp(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeIAVLAbsenceOp(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeIAVLAbsenceOp(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeIAVLValueOp(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeIAVLValueOp(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePrivKeyLedgerSecp256k1(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePrivKeyLedgerSecp256k1(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeInfo(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeInfo(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeBIP44Params(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeBIP44Params(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeLocalInfo(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeLocalInfo(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeLedgerInfo(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeLedgerInfo(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeOfflineInfo(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeOfflineInfo(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMultiInfo(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMultiInfo(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsg(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsg(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeTx(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeTx(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeAccount(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeAccount(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeVestingAccount(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeBaseAccount(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeBaseAccount(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeBaseVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeBaseVestingAccount(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeContinuousVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeContinuousVestingAccount(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeDelayedVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeDelayedVestingAccount(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeStdTx(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeStdTx(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgSend(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgSend(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgMultiSend(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgMultiSend(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgVerifyInvariant(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgVerifyInvariant(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgWithdrawDelegatorReward(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgWithdrawDelegatorReward(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgWithdrawValidatorCommission(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgWithdrawValidatorCommission(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgSetWithdrawAddress(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgSetWithdrawAddress(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeContent(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeContent(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgSubmitProposal(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgSubmitProposal(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgDeposit(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgDeposit(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgVote(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgVote(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeTextProposal(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeTextProposal(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeSoftwareUpgradeProposal(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeSoftwareUpgradeProposal(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgIBCTransfer(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgIBCTransfer(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgIBCReceive(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgIBCReceive(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeParameterChangeProposal(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeParameterChangeProposal(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgUnjail(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgUnjail(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgCreateValidator(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgCreateValidator(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgEditValidator(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgEditValidator(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgDelegate(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgDelegate(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgUndelegate(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgUndelegate(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgBeginRedelegate(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgBeginRedelegate(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeBlockchainMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeBlockchainMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeBcBlockRequestMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeBcBlockRequestMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeBcBlockResponseMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeBcBlockResponseMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeBcNoBlockResponseMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeBcNoBlockResponseMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeBcStatusResponseMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeBcStatusResponseMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeBcStatusRequestMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeBcStatusRequestMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeConsensusMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeConsensusMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeNewRoundStepMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeNewRoundStepMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeNewValidBlockMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeNewValidBlockMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeProposalMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeProposalMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeProposalPOLMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeProposalPOLMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeBlockPartMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeBlockPartMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeVoteMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeVoteMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeHasVoteMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeHasVoteMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeVoteSetMaj23Message(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeVoteSetMaj23Message(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeVoteSetBitsMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeVoteSetBitsMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeWALMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeWALMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMsgInfo(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMsgInfo(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeTimeoutInfo(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeTimeoutInfo(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeEndHeightMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeEndHeightMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePubKey(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePubKey(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePrivKey(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePrivKey(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePubKeyEd25519(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePubKeyEd25519(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePrivKeyEd25519(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePrivKeyEd25519(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePubKeySecp256k1(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePubKeySecp256k1(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePrivKeySecp256k1(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePrivKeySecp256k1(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePubKeyMultisigThreshold(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePubKeyMultisigThreshold(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeEvidenceMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeEvidenceMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeEvidenceListMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeEvidenceListMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMempoolMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMempoolMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeTxMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeTxMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePacket(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePacket(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePacketPing(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePacketPing(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePacketPong(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePacketPong(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePacketMsg(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePacketMsg(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePexMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePexMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePexRequestMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePexRequestMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePexAddrsMessage(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePexAddrsMessage(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeRemoteSignerMsg(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeRemoteSignerMsg(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePubKeyRequest(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePubKeyRequest(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePubKeyResponse(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePubKeyResponse(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeSignVoteRequest(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeSignVoteRequest(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeSignedVoteResponse(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeSignedVoteResponse(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeSignProposalRequest(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeSignProposalRequest(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeSignedProposalResponse(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeSignedProposalResponse(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePingRequest(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePingRequest(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodePingResponse(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodePingResponse(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeTMEventData(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeTMEventData(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeEventDataNewBlock(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeEventDataNewBlock(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeEventDataNewBlockHeader(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeEventDataNewBlockHeader(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeEventDataTx(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeEventDataTx(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeEventDataRoundState(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeEventDataRoundState(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeEventDataNewRound(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeEventDataNewRound(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeEventDataCompleteProposal(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeEventDataCompleteProposal(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeEventDataVote(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeEventDataVote(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeEventDataValidatorSetUpdates(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeEventDataValidatorSetUpdates(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeEventDataString(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeEventDataString(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeEvidence(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeDuplicateVoteEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeDuplicateVoteEvidence(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMockGoodEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMockGoodEvidence(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMockRandomGoodEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMockRandomGoodEvidence(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}

func DecodeMockBadEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte) {
	bz2, err := src.DecodeMockBadEvidence(bz, lengthPrefixed)
	if err != nil {
		panic(err)
	}
	return
}
