package lib

import (
	"encoding/json"
)

func DecodeMultiStoreProofOp(bz []byte, bare bool) []byte {
	o, err := decodeMultiStoreProofOp(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeIAVLAbsenceOp(bz []byte, bare bool) []byte {
	o, err := decodeIAVLAbsenceOp(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeIAVLValueOp(bz []byte, bare bool) []byte {
	o, err := decodeIAVLValueOp(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePrivKeyLedgerSecp256k1(bz []byte, bare bool) []byte {
	o, err := decodePrivKeyLedgerSecp256k1(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeInfo(bz []byte, bare bool) []byte {
	o, err := decodeInfo(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeBIP44Params(bz []byte, bare bool) []byte {
	o, err := decodeBIP44Params(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeLocalInfo(bz []byte, bare bool) []byte {
	o, err := decodeLocalInfo(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeLedgerInfo(bz []byte, bare bool) []byte {
	o, err := decodeLedgerInfo(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeOfflineInfo(bz []byte, bare bool) []byte {
	o, err := decodeOfflineInfo(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMultiInfo(bz []byte, bare bool) []byte {
	o, err := decodeMultiInfo(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsg(bz []byte, bare bool) []byte {
	o, err := decodeMsg(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeTx(bz []byte, bare bool) []byte {
	o, err := decodeTx(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeAccount(bz []byte, bare bool) []byte {
	o, err := decodeAccount(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeVestingAccount(bz []byte, bare bool) []byte {
	o, err := decodeVestingAccount(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeBaseAccount(bz []byte, bare bool) []byte {
	o, err := decodeBaseAccount(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeBaseVestingAccount(bz []byte, bare bool) []byte {
	o, err := decodeBaseVestingAccount(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeContinuousVestingAccount(bz []byte, bare bool) []byte {
	o, err := decodeContinuousVestingAccount(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeDelayedVestingAccount(bz []byte, bare bool) []byte {
	o, err := decodeDelayedVestingAccount(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeStdTx(bz []byte, bare bool) []byte {
	o, err := decodeStdTx(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgSend(bz []byte, bare bool) []byte {
	o, err := decodeMsgSend(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgMultiSend(bz []byte, bare bool) []byte {
	o, err := decodeMsgMultiSend(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgVerifyInvariant(bz []byte, bare bool) []byte {
	o, err := decodeMsgVerifyInvariant(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgWithdrawDelegatorReward(bz []byte, bare bool) []byte {
	o, err := decodeMsgWithdrawDelegatorReward(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgWithdrawValidatorCommission(bz []byte, bare bool) []byte {
	o, err := decodeMsgWithdrawValidatorCommission(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgSetWithdrawAddress(bz []byte, bare bool) []byte {
	o, err := decodeMsgSetWithdrawAddress(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeContent(bz []byte, bare bool) []byte {
	o, err := decodeContent(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgSubmitProposal(bz []byte, bare bool) []byte {
	o, err := decodeMsgSubmitProposal(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgDeposit(bz []byte, bare bool) []byte {
	o, err := decodeMsgDeposit(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgVote(bz []byte, bare bool) []byte {
	o, err := decodeMsgVote(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeTextProposal(bz []byte, bare bool) []byte {
	o, err := decodeTextProposal(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeSoftwareUpgradeProposal(bz []byte, bare bool) []byte {
	o, err := decodeSoftwareUpgradeProposal(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgIBCTransfer(bz []byte, bare bool) []byte {
	o, err := decodeMsgIBCTransfer(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgIBCReceive(bz []byte, bare bool) []byte {
	o, err := decodeMsgIBCReceive(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeParameterChangeProposal(bz []byte, bare bool) []byte {
	o, err := decodeParameterChangeProposal(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgUnjail(bz []byte, bare bool) []byte {
	o, err := decodeMsgUnjail(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgCreateValidator(bz []byte, bare bool) []byte {
	o, err := decodeMsgCreateValidator(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgEditValidator(bz []byte, bare bool) []byte {
	o, err := decodeMsgEditValidator(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgDelegate(bz []byte, bare bool) []byte {
	o, err := decodeMsgDelegate(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgUndelegate(bz []byte, bare bool) []byte {
	o, err := decodeMsgUndelegate(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgBeginRedelegate(bz []byte, bare bool) []byte {
	o, err := decodeMsgBeginRedelegate(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeBlockchainMessage(bz []byte, bare bool) []byte {
	o, err := decodeBlockchainMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeBcBlockRequestMessage(bz []byte, bare bool) []byte {
	o, err := decodeBcBlockRequestMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeBcBlockResponseMessage(bz []byte, bare bool) []byte {
	o, err := decodeBcBlockResponseMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeBcNoBlockResponseMessage(bz []byte, bare bool) []byte {
	o, err := decodeBcNoBlockResponseMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeBcStatusResponseMessage(bz []byte, bare bool) []byte {
	o, err := decodeBcStatusResponseMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeBcStatusRequestMessage(bz []byte, bare bool) []byte {
	o, err := decodeBcStatusRequestMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeConsensusMessage(bz []byte, bare bool) []byte {
	o, err := decodeConsensusMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeNewRoundStepMessage(bz []byte, bare bool) []byte {
	o, err := decodeNewRoundStepMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeNewValidBlockMessage(bz []byte, bare bool) []byte {
	o, err := decodeNewValidBlockMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeProposalMessage(bz []byte, bare bool) []byte {
	o, err := decodeProposalMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeProposalPOLMessage(bz []byte, bare bool) []byte {
	o, err := decodeProposalPOLMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeBlockPartMessage(bz []byte, bare bool) []byte {
	o, err := decodeBlockPartMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeVoteMessage(bz []byte, bare bool) []byte {
	o, err := decodeVoteMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeHasVoteMessage(bz []byte, bare bool) []byte {
	o, err := decodeHasVoteMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeVoteSetMaj23Message(bz []byte, bare bool) []byte {
	o, err := decodeVoteSetMaj23Message(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeVoteSetBitsMessage(bz []byte, bare bool) []byte {
	o, err := decodeVoteSetBitsMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeWALMessage(bz []byte, bare bool) []byte {
	o, err := decodeWALMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMsgInfo(bz []byte, bare bool) []byte {
	o, err := decodeMsgInfo(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeTimeoutInfo(bz []byte, bare bool) []byte {
	o, err := decodeTimeoutInfo(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeEndHeightMessage(bz []byte, bare bool) []byte {
	o, err := decodeEndHeightMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePubKey(bz []byte, bare bool) []byte {
	o, err := decodePubKey(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePrivKey(bz []byte, bare bool) []byte {
	o, err := decodePrivKey(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePubKeyEd25519(bz []byte, bare bool) []byte {
	o, err := decodePubKeyEd25519(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePrivKeyEd25519(bz []byte, bare bool) []byte {
	o, err := decodePrivKeyEd25519(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePubKeySecp256k1(bz []byte, bare bool) []byte {
	o, err := decodePubKeySecp256k1(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePrivKeySecp256k1(bz []byte, bare bool) []byte {
	o, err := decodePrivKeySecp256k1(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePubKeyMultisigThreshold(bz []byte, bare bool) []byte {
	o, err := decodePubKeyMultisigThreshold(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeEvidenceMessage(bz []byte, bare bool) []byte {
	o, err := decodeEvidenceMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeEvidenceListMessage(bz []byte, bare bool) []byte {
	o, err := decodeEvidenceListMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMempoolMessage(bz []byte, bare bool) []byte {
	o, err := decodeMempoolMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeTxMessage(bz []byte, bare bool) []byte {
	o, err := decodeTxMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePacket(bz []byte, bare bool) []byte {
	o, err := decodePacket(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePacketPing(bz []byte, bare bool) []byte {
	o, err := decodePacketPing(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePacketPong(bz []byte, bare bool) []byte {
	o, err := decodePacketPong(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePacketMsg(bz []byte, bare bool) []byte {
	o, err := decodePacketMsg(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePexMessage(bz []byte, bare bool) []byte {
	o, err := decodePexMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePexRequestMessage(bz []byte, bare bool) []byte {
	o, err := decodePexRequestMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePexAddrsMessage(bz []byte, bare bool) []byte {
	o, err := decodePexAddrsMessage(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeRemoteSignerMsg(bz []byte, bare bool) []byte {
	o, err := decodeRemoteSignerMsg(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePubKeyRequest(bz []byte, bare bool) []byte {
	o, err := decodePubKeyRequest(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePubKeyResponse(bz []byte, bare bool) []byte {
	o, err := decodePubKeyResponse(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeSignVoteRequest(bz []byte, bare bool) []byte {
	o, err := decodeSignVoteRequest(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeSignedVoteResponse(bz []byte, bare bool) []byte {
	o, err := decodeSignedVoteResponse(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeSignProposalRequest(bz []byte, bare bool) []byte {
	o, err := decodeSignProposalRequest(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeSignedProposalResponse(bz []byte, bare bool) []byte {
	o, err := decodeSignedProposalResponse(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePingRequest(bz []byte, bare bool) []byte {
	o, err := decodePingRequest(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodePingResponse(bz []byte, bare bool) []byte {
	o, err := decodePingResponse(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeTMEventData(bz []byte, bare bool) []byte {
	o, err := decodeTMEventData(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeEventDataNewBlock(bz []byte, bare bool) []byte {
	o, err := decodeEventDataNewBlock(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeEventDataNewBlockHeader(bz []byte, bare bool) []byte {
	o, err := decodeEventDataNewBlockHeader(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeEventDataTx(bz []byte, bare bool) []byte {
	o, err := decodeEventDataTx(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeEventDataRoundState(bz []byte, bare bool) []byte {
	o, err := decodeEventDataRoundState(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeEventDataNewRound(bz []byte, bare bool) []byte {
	o, err := decodeEventDataNewRound(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeEventDataCompleteProposal(bz []byte, bare bool) []byte {
	o, err := decodeEventDataCompleteProposal(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeEventDataVote(bz []byte, bare bool) []byte {
	o, err := decodeEventDataVote(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeEventDataValidatorSetUpdates(bz []byte, bare bool) []byte {
	o, err := decodeEventDataValidatorSetUpdates(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeEventDataString(bz []byte, bare bool) []byte {
	o, err := decodeEventDataString(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeEvidence(bz []byte, bare bool) []byte {
	o, err := decodeEvidence(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeDuplicateVoteEvidence(bz []byte, bare bool) []byte {
	o, err := decodeDuplicateVoteEvidence(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMockGoodEvidence(bz []byte, bare bool) []byte {
	o, err := decodeMockGoodEvidence(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMockRandomGoodEvidence(bz []byte, bare bool) []byte {
	o, err := decodeMockRandomGoodEvidence(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}

func DecodeMockBadEvidence(bz []byte, bare bool) []byte {
	o, err := decodeMockBadEvidence(bz, bare)
	if err != nil {
		panic(err)
	}

	bz2, err := json.Marshal(&o)
	if err != nil {
		panic(err)
	}

	return bz2
}
