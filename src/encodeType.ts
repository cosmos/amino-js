import * as Amino from '../lib/Amino';

export function encodeMultiStoreProofOp (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMultiStoreProofOp(bytes, bare);
}

export function encodeIAVLAbsenceOp (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeIAVLAbsenceOp(bytes, bare);
}

export function encodeIAVLValueOp (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeIAVLValueOp(bytes, bare);
}

export function encodePrivKeyLedgerSecp256k1 (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePrivKeyLedgerSecp256k1(bytes, bare);
}

export function encodeInfo (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeInfo(bytes, bare);
}

export function encodeBIP44Params (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeBIP44Params(bytes, bare);
}

export function encodeLocalInfo (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeLocalInfo(bytes, bare);
}

export function encodeLedgerInfo (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeLedgerInfo(bytes, bare);
}

export function encodeOfflineInfo (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeOfflineInfo(bytes, bare);
}

export function encodeMultiInfo (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMultiInfo(bytes, bare);
}

export function encodeMsg (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsg(bytes, bare);
}

export function encodeTx (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeTx(bytes, bare);
}

export function encodeAccount (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeAccount(bytes, bare);
}

export function encodeVestingAccount (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeVestingAccount(bytes, bare);
}

export function encodeBaseAccount (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeBaseAccount(bytes, bare);
}

export function encodeBaseVestingAccount (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeBaseVestingAccount(bytes, bare);
}

export function encodeContinuousVestingAccount (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeContinuousVestingAccount(bytes, bare);
}

export function encodeDelayedVestingAccount (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeDelayedVestingAccount(bytes, bare);
}

export function encodeStdTx (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeStdTx(bytes, bare);
}

export function encodeMsgSend (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgSend(bytes, bare);
}

export function encodeMsgMultiSend (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgMultiSend(bytes, bare);
}

export function encodeMsgVerifyInvariant (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgVerifyInvariant(bytes, bare);
}

export function encodeMsgWithdrawDelegatorReward (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgWithdrawDelegatorReward(bytes, bare);
}

export function encodeMsgWithdrawValidatorCommission (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgWithdrawValidatorCommission(bytes, bare);
}

export function encodeMsgSetWithdrawAddress (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgSetWithdrawAddress(bytes, bare);
}

export function encodeContent (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeContent(bytes, bare);
}

export function encodeMsgSubmitProposal (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgSubmitProposal(bytes, bare);
}

export function encodeMsgDeposit (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgDeposit(bytes, bare);
}

export function encodeMsgVote (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgVote(bytes, bare);
}

export function encodeTextProposal (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeTextProposal(bytes, bare);
}

export function encodeSoftwareUpgradeProposal (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeSoftwareUpgradeProposal(bytes, bare);
}

export function encodeMsgIBCTransfer (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgIBCTransfer(bytes, bare);
}

export function encodeMsgIBCReceive (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgIBCReceive(bytes, bare);
}

export function encodeParameterChangeProposal (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeParameterChangeProposal(bytes, bare);
}

export function encodeMsgUnjail (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgUnjail(bytes, bare);
}

export function encodeMsgCreateValidator (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgCreateValidator(bytes, bare);
}

export function encodeMsgEditValidator (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgEditValidator(bytes, bare);
}

export function encodeMsgDelegate (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgDelegate(bytes, bare);
}

export function encodeMsgUndelegate (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgUndelegate(bytes, bare);
}

export function encodeMsgBeginRedelegate (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgBeginRedelegate(bytes, bare);
}

export function encodeBlockchainMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeBlockchainMessage(bytes, bare);
}

export function encodeBcBlockRequestMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeBcBlockRequestMessage(bytes, bare);
}

export function encodeBcBlockResponseMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeBcBlockResponseMessage(bytes, bare);
}

export function encodeBcNoBlockResponseMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeBcNoBlockResponseMessage(bytes, bare);
}

export function encodeBcStatusResponseMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeBcStatusResponseMessage(bytes, bare);
}

export function encodeBcStatusRequestMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeBcStatusRequestMessage(bytes, bare);
}

export function encodeConsensusMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeConsensusMessage(bytes, bare);
}

export function encodeNewRoundStepMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeNewRoundStepMessage(bytes, bare);
}

export function encodeNewValidBlockMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeNewValidBlockMessage(bytes, bare);
}

export function encodeProposalMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeProposalMessage(bytes, bare);
}

export function encodeProposalPOLMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeProposalPOLMessage(bytes, bare);
}

export function encodeBlockPartMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeBlockPartMessage(bytes, bare);
}

export function encodeVoteMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeVoteMessage(bytes, bare);
}

export function encodeHasVoteMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeHasVoteMessage(bytes, bare);
}

export function encodeVoteSetMaj23Message (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeVoteSetMaj23Message(bytes, bare);
}

export function encodeVoteSetBitsMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeVoteSetBitsMessage(bytes, bare);
}

export function encodeWALMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeWALMessage(bytes, bare);
}

export function encodeMsgInfo (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMsgInfo(bytes, bare);
}

export function encodeTimeoutInfo (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeTimeoutInfo(bytes, bare);
}

export function encodeEndHeightMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeEndHeightMessage(bytes, bare);
}

export function encodePubKey (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePubKey(bytes, bare);
}

export function encodePrivKey (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePrivKey(bytes, bare);
}

export function encodePubKeyEd25519 (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePubKeyEd25519(bytes, bare);
}

export function encodePrivKeyEd25519 (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePrivKeyEd25519(bytes, bare);
}

export function encodePubKeySecp256k1 (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePubKeySecp256k1(bytes, bare);
}

export function encodePrivKeySecp256k1 (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePrivKeySecp256k1(bytes, bare);
}

export function encodePubKeyMultisigThreshold (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePubKeyMultisigThreshold(bytes, bare);
}

export function encodeEvidenceMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeEvidenceMessage(bytes, bare);
}

export function encodeEvidenceListMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeEvidenceListMessage(bytes, bare);
}

export function encodeMempoolMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMempoolMessage(bytes, bare);
}

export function encodeTxMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeTxMessage(bytes, bare);
}

export function encodePacket (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePacket(bytes, bare);
}

export function encodePacketPing (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePacketPing(bytes, bare);
}

export function encodePacketPong (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePacketPong(bytes, bare);
}

export function encodePacketMsg (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePacketMsg(bytes, bare);
}

export function encodePexMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePexMessage(bytes, bare);
}

export function encodePexRequestMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePexRequestMessage(bytes, bare);
}

export function encodePexAddrsMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePexAddrsMessage(bytes, bare);
}

export function encodeRemoteSignerMsg (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeRemoteSignerMsg(bytes, bare);
}

export function encodePubKeyRequest (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePubKeyRequest(bytes, bare);
}

export function encodePubKeyResponse (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePubKeyResponse(bytes, bare);
}

export function encodeSignVoteRequest (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeSignVoteRequest(bytes, bare);
}

export function encodeSignedVoteResponse (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeSignedVoteResponse(bytes, bare);
}

export function encodeSignProposalRequest (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeSignProposalRequest(bytes, bare);
}

export function encodeSignedProposalResponse (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeSignedProposalResponse(bytes, bare);
}

export function encodePingRequest (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePingRequest(bytes, bare);
}

export function encodePingResponse (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodePingResponse(bytes, bare);
}

export function encodeTMEventData (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeTMEventData(bytes, bare);
}

export function encodeEventDataNewBlock (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeEventDataNewBlock(bytes, bare);
}

export function encodeEventDataNewBlockHeader (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeEventDataNewBlockHeader(bytes, bare);
}

export function encodeEventDataTx (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeEventDataTx(bytes, bare);
}

export function encodeEventDataRoundState (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeEventDataRoundState(bytes, bare);
}

export function encodeEventDataNewRound (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeEventDataNewRound(bytes, bare);
}

export function encodeEventDataCompleteProposal (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeEventDataCompleteProposal(bytes, bare);
}

export function encodeEventDataVote (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeEventDataVote(bytes, bare);
}

export function encodeEventDataValidatorSetUpdates (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeEventDataValidatorSetUpdates(bytes, bare);
}

export function encodeEventDataString (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeEventDataString(bytes, bare);
}

export function encodeEvidence (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeEvidence(bytes, bare);
}

export function encodeDuplicateVoteEvidence (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeDuplicateVoteEvidence(bytes, bare);
}

export function encodeMockGoodEvidence (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMockGoodEvidence(bytes, bare);
}

export function encodeMockRandomGoodEvidence (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMockRandomGoodEvidence(bytes, bare);
}

export function encodeMockBadEvidence (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.encodeMockBadEvidence(bytes, bare);
}

