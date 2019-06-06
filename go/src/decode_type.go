package src

func DecodeMultiStoreProofOp(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMultiStoreProofOp(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeIAVLAbsenceOp(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeIAVLAbsenceOp(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeIAVLValueOp(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeIAVLValueOp(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePrivKeyLedgerSecp256k1(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePrivKeyLedgerSecp256k1(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeInfo(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBIP44Params(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeBIP44Params(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeLocalInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeLocalInfo(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeLedgerInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeLedgerInfo(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeOfflineInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeOfflineInfo(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMultiInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMultiInfo(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsg(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsg(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeTx(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeTx(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeAccount(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeVestingAccount(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBaseAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeBaseAccount(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBaseVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeBaseVestingAccount(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeContinuousVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeContinuousVestingAccount(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeDelayedVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeDelayedVestingAccount(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeStdTx(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeStdTx(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgSend(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgSend(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgMultiSend(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgMultiSend(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgVerifyInvariant(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgVerifyInvariant(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgWithdrawDelegatorReward(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgWithdrawDelegatorReward(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgWithdrawValidatorCommission(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgWithdrawValidatorCommission(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgSetWithdrawAddress(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgSetWithdrawAddress(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeContent(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeContent(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgSubmitProposal(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgSubmitProposal(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgDeposit(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgDeposit(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgVote(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgVote(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeTextProposal(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeTextProposal(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeSoftwareUpgradeProposal(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeSoftwareUpgradeProposal(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgIBCTransfer(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgIBCTransfer(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgIBCReceive(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgIBCReceive(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeParameterChangeProposal(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeParameterChangeProposal(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgUnjail(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgUnjail(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgCreateValidator(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgCreateValidator(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgEditValidator(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgEditValidator(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgDelegate(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgDelegate(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgUndelegate(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgUndelegate(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgBeginRedelegate(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgBeginRedelegate(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBlockchainMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeBlockchainMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBcBlockRequestMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeBcBlockRequestMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBcBlockResponseMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeBcBlockResponseMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBcNoBlockResponseMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeBcNoBlockResponseMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBcStatusResponseMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeBcStatusResponseMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBcStatusRequestMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeBcStatusRequestMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeConsensusMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeConsensusMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeNewRoundStepMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeNewRoundStepMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeNewValidBlockMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeNewValidBlockMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeProposalMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeProposalMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeProposalPOLMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeProposalPOLMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBlockPartMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeBlockPartMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeVoteMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeVoteMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeHasVoteMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeHasVoteMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeVoteSetMaj23Message(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeVoteSetMaj23Message(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeVoteSetBitsMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeVoteSetBitsMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeWALMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeWALMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMsgInfo(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeTimeoutInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeTimeoutInfo(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEndHeightMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeEndHeightMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePubKey(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePubKey(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePrivKey(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePrivKey(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePubKeyEd25519(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePubKeyEd25519(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePrivKeyEd25519(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePrivKeyEd25519(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePubKeySecp256k1(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePubKeySecp256k1(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePrivKeySecp256k1(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePrivKeySecp256k1(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePubKeyMultisigThreshold(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePubKeyMultisigThreshold(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEvidenceMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeEvidenceMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEvidenceListMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeEvidenceListMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMempoolMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMempoolMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeTxMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeTxMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePacket(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePacket(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePacketPing(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePacketPing(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePacketPong(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePacketPong(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePacketMsg(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePacketMsg(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePexMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePexMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePexRequestMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePexRequestMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePexAddrsMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePexAddrsMessage(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeRemoteSignerMsg(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeRemoteSignerMsg(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePubKeyRequest(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePubKeyRequest(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePubKeyResponse(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePubKeyResponse(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeSignVoteRequest(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeSignVoteRequest(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeSignedVoteResponse(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeSignedVoteResponse(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeSignProposalRequest(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeSignProposalRequest(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeSignedProposalResponse(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeSignedProposalResponse(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePingRequest(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePingRequest(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePingResponse(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodePingResponse(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeTMEventData(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeTMEventData(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataNewBlock(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeEventDataNewBlock(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataNewBlockHeader(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeEventDataNewBlockHeader(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataTx(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeEventDataTx(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataRoundState(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeEventDataRoundState(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataNewRound(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeEventDataNewRound(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataCompleteProposal(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeEventDataCompleteProposal(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataVote(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeEventDataVote(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataValidatorSetUpdates(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeEventDataValidatorSetUpdates(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataString(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeEventDataString(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeEvidence(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeDuplicateVoteEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeDuplicateVoteEvidence(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMockGoodEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMockGoodEvidence(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMockRandomGoodEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMockRandomGoodEvidence(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMockBadEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	o, err := decodeMockBadEvidence(bz, lengthPrefixed)
	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}
