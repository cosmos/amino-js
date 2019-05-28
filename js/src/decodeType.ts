import { Amino } from './global';

export function decodeMultiStoreProofOp (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMultiStoreProofOp(bytes, bare);
}

export function decodeIAVLAbsenceOp (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeIAVLAbsenceOp(bytes, bare);
}

export function decodeIAVLValueOp (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeIAVLValueOp(bytes, bare);
}

export function decodePrivKeyLedgerSecp256k1 (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePrivKeyLedgerSecp256k1(bytes, bare);
}

export function decodeInfo (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeInfo(bytes, bare);
}

export function decodeBIP44Params (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeBIP44Params(bytes, bare);
}

export function decodeLocalInfo (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeLocalInfo(bytes, bare);
}

export function decodeLedgerInfo (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeLedgerInfo(bytes, bare);
}

export function decodeOfflineInfo (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeOfflineInfo(bytes, bare);
}

export function decodeMultiInfo (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMultiInfo(bytes, bare);
}

export function decodeMsg (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsg(bytes, bare);
}

export function decodeTx (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeTx(bytes, bare);
}

export function decodeAccount (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeAccount(bytes, bare);
}

export function decodeVestingAccount (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeVestingAccount(bytes, bare);
}

export function decodeBaseAccount (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeBaseAccount(bytes, bare);
}

export function decodeBaseVestingAccount (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeBaseVestingAccount(bytes, bare);
}

export function decodeContinuousVestingAccount (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeContinuousVestingAccount(bytes, bare);
}

export function decodeDelayedVestingAccount (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeDelayedVestingAccount(bytes, bare);
}

export function decodeStdTx (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeStdTx(bytes, bare);
}

export function decodeMsgSend (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgSend(bytes, bare);
}

export function decodeMsgMultiSend (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgMultiSend(bytes, bare);
}

export function decodeMsgVerifyInvariant (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgVerifyInvariant(bytes, bare);
}

export function decodeMsgWithdrawDelegatorReward (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgWithdrawDelegatorReward(bytes, bare);
}

export function decodeMsgWithdrawValidatorCommission (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgWithdrawValidatorCommission(bytes, bare);
}

export function decodeMsgSetWithdrawAddress (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgSetWithdrawAddress(bytes, bare);
}

export function decodeContent (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeContent(bytes, bare);
}

export function decodeMsgSubmitProposal (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgSubmitProposal(bytes, bare);
}

export function decodeMsgDeposit (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgDeposit(bytes, bare);
}

export function decodeMsgVote (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgVote(bytes, bare);
}

export function decodeTextProposal (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeTextProposal(bytes, bare);
}

export function decodeSoftwareUpgradeProposal (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeSoftwareUpgradeProposal(bytes, bare);
}

export function decodeMsgIBCTransfer (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgIBCTransfer(bytes, bare);
}

export function decodeMsgIBCReceive (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgIBCReceive(bytes, bare);
}

export function decodeParameterChangeProposal (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeParameterChangeProposal(bytes, bare);
}

export function decodeMsgUnjail (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgUnjail(bytes, bare);
}

export function decodeMsgCreateValidator (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgCreateValidator(bytes, bare);
}

export function decodeMsgEditValidator (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgEditValidator(bytes, bare);
}

export function decodeMsgDelegate (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgDelegate(bytes, bare);
}

export function decodeMsgUndelegate (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgUndelegate(bytes, bare);
}

export function decodeMsgBeginRedelegate (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgBeginRedelegate(bytes, bare);
}

export function decodeBlockchainMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeBlockchainMessage(bytes, bare);
}

export function decodeBcBlockRequestMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeBcBlockRequestMessage(bytes, bare);
}

export function decodeBcBlockResponseMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeBcBlockResponseMessage(bytes, bare);
}

export function decodeBcNoBlockResponseMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeBcNoBlockResponseMessage(bytes, bare);
}

export function decodeBcStatusResponseMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeBcStatusResponseMessage(bytes, bare);
}

export function decodeBcStatusRequestMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeBcStatusRequestMessage(bytes, bare);
}

export function decodeConsensusMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeConsensusMessage(bytes, bare);
}

export function decodeNewRoundStepMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeNewRoundStepMessage(bytes, bare);
}

export function decodeNewValidBlockMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeNewValidBlockMessage(bytes, bare);
}

export function decodeProposalMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeProposalMessage(bytes, bare);
}

export function decodeProposalPOLMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeProposalPOLMessage(bytes, bare);
}

export function decodeBlockPartMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeBlockPartMessage(bytes, bare);
}

export function decodeVoteMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeVoteMessage(bytes, bare);
}

export function decodeHasVoteMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeHasVoteMessage(bytes, bare);
}

export function decodeVoteSetMaj23Message (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeVoteSetMaj23Message(bytes, bare);
}

export function decodeVoteSetBitsMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeVoteSetBitsMessage(bytes, bare);
}

export function decodeWALMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeWALMessage(bytes, bare);
}

export function decodeMsgInfo (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMsgInfo(bytes, bare);
}

export function decodeTimeoutInfo (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeTimeoutInfo(bytes, bare);
}

export function decodeEndHeightMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeEndHeightMessage(bytes, bare);
}

export function decodePubKey (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePubKey(bytes, bare);
}

export function decodePrivKey (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePrivKey(bytes, bare);
}

export function decodePubKeyEd25519 (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePubKeyEd25519(bytes, bare);
}

export function decodePrivKeyEd25519 (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePrivKeyEd25519(bytes, bare);
}

export function decodePubKeySecp256k1 (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePubKeySecp256k1(bytes, bare);
}

export function decodePrivKeySecp256k1 (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePrivKeySecp256k1(bytes, bare);
}

export function decodePubKeyMultisigThreshold (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePubKeyMultisigThreshold(bytes, bare);
}

export function decodeEvidenceMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeEvidenceMessage(bytes, bare);
}

export function decodeEvidenceListMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeEvidenceListMessage(bytes, bare);
}

export function decodeMempoolMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMempoolMessage(bytes, bare);
}

export function decodeTxMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeTxMessage(bytes, bare);
}

export function decodePacket (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePacket(bytes, bare);
}

export function decodePacketPing (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePacketPing(bytes, bare);
}

export function decodePacketPong (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePacketPong(bytes, bare);
}

export function decodePacketMsg (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePacketMsg(bytes, bare);
}

export function decodePexMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePexMessage(bytes, bare);
}

export function decodePexRequestMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePexRequestMessage(bytes, bare);
}

export function decodePexAddrsMessage (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePexAddrsMessage(bytes, bare);
}

export function decodeRemoteSignerMsg (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeRemoteSignerMsg(bytes, bare);
}

export function decodePubKeyRequest (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePubKeyRequest(bytes, bare);
}

export function decodePubKeyResponse (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePubKeyResponse(bytes, bare);
}

export function decodeSignVoteRequest (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeSignVoteRequest(bytes, bare);
}

export function decodeSignedVoteResponse (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeSignedVoteResponse(bytes, bare);
}

export function decodeSignProposalRequest (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeSignProposalRequest(bytes, bare);
}

export function decodeSignedProposalResponse (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeSignedProposalResponse(bytes, bare);
}

export function decodePingRequest (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePingRequest(bytes, bare);
}

export function decodePingResponse (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodePingResponse(bytes, bare);
}

export function decodeTMEventData (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeTMEventData(bytes, bare);
}

export function decodeEventDataNewBlock (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeEventDataNewBlock(bytes, bare);
}

export function decodeEventDataNewBlockHeader (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeEventDataNewBlockHeader(bytes, bare);
}

export function decodeEventDataTx (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeEventDataTx(bytes, bare);
}

export function decodeEventDataRoundState (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeEventDataRoundState(bytes, bare);
}

export function decodeEventDataNewRound (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeEventDataNewRound(bytes, bare);
}

export function decodeEventDataCompleteProposal (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeEventDataCompleteProposal(bytes, bare);
}

export function decodeEventDataVote (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeEventDataVote(bytes, bare);
}

export function decodeEventDataValidatorSetUpdates (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeEventDataValidatorSetUpdates(bytes, bare);
}

export function decodeEventDataString (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeEventDataString(bytes, bare);
}

export function decodeEvidence (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeEvidence(bytes, bare);
}

export function decodeDuplicateVoteEvidence (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeDuplicateVoteEvidence(bytes, bare);
}

export function decodeMockGoodEvidence (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMockGoodEvidence(bytes, bare);
}

export function decodeMockRandomGoodEvidence (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMockRandomGoodEvidence(bytes, bare);
}

export function decodeMockBadEvidence (bytes: Uint8Array, bare: boolean = true): Uint8Array {
    return Amino.decodeMockBadEvidence(bytes, bare);
}
