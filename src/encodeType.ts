import * as Amino from '../lib/Amino';

export function encodeMultiStoreProofOp (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMultiStoreProofOp(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeIAVLAbsenceOp (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeIAVLAbsenceOp(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeIAVLValueOp (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeIAVLValueOp(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePrivKeyLedgerSecp256k1 (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePrivKeyLedgerSecp256k1(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeInfo (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeInfo(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeBIP44Params (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeBIP44Params(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeLocalInfo (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeLocalInfo(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeLedgerInfo (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeLedgerInfo(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeOfflineInfo (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeOfflineInfo(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMultiInfo (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMultiInfo(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsg (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsg(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeTx (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeTx(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeAccount (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeAccount(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeVestingAccount (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeVestingAccount(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeBaseAccount (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeBaseAccount(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeBaseVestingAccount (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeBaseVestingAccount(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeContinuousVestingAccount (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeContinuousVestingAccount(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeDelayedVestingAccount (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeDelayedVestingAccount(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeStdTx (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeStdTx(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgSend (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgSend(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgMultiSend (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgMultiSend(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgVerifyInvariant (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgVerifyInvariant(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgWithdrawDelegatorReward (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgWithdrawDelegatorReward(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgWithdrawValidatorCommission (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgWithdrawValidatorCommission(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgSetWithdrawAddress (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgSetWithdrawAddress(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeContent (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeContent(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgSubmitProposal (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgSubmitProposal(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgDeposit (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgDeposit(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgVote (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgVote(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeTextProposal (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeTextProposal(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeSoftwareUpgradeProposal (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeSoftwareUpgradeProposal(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgIBCTransfer (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgIBCTransfer(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgIBCReceive (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgIBCReceive(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeParameterChangeProposal (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeParameterChangeProposal(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgUnjail (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgUnjail(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgCreateValidator (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgCreateValidator(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgEditValidator (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgEditValidator(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgDelegate (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgDelegate(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgUndelegate (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgUndelegate(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgBeginRedelegate (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgBeginRedelegate(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeBlockchainMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeBlockchainMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeBcBlockRequestMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeBcBlockRequestMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeBcBlockResponseMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeBcBlockResponseMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeBcNoBlockResponseMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeBcNoBlockResponseMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeBcStatusResponseMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeBcStatusResponseMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeBcStatusRequestMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeBcStatusRequestMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeConsensusMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeConsensusMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeNewRoundStepMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeNewRoundStepMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeNewValidBlockMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeNewValidBlockMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeProposalMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeProposalMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeProposalPOLMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeProposalPOLMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeBlockPartMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeBlockPartMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeVoteMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeVoteMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeHasVoteMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeHasVoteMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeVoteSetMaj23Message (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeVoteSetMaj23Message(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeVoteSetBitsMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeVoteSetBitsMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeWALMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeWALMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMsgInfo (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMsgInfo(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeTimeoutInfo (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeTimeoutInfo(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeEndHeightMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeEndHeightMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePubKey (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePubKey(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePrivKey (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePrivKey(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePubKeyEd25519 (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePubKeyEd25519(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePrivKeyEd25519 (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePrivKeyEd25519(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePubKeySecp256k1 (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePubKeySecp256k1(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePrivKeySecp256k1 (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePrivKeySecp256k1(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePubKeyMultisigThreshold (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePubKeyMultisigThreshold(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeEvidenceMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeEvidenceMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeEvidenceListMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeEvidenceListMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMempoolMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMempoolMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeTxMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeTxMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePacket (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePacket(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePacketPing (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePacketPing(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePacketPong (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePacketPong(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePacketMsg (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePacketMsg(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePexMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePexMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePexRequestMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePexRequestMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePexAddrsMessage (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePexAddrsMessage(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeRemoteSignerMsg (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeRemoteSignerMsg(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePubKeyRequest (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePubKeyRequest(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePubKeyResponse (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePubKeyResponse(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeSignVoteRequest (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeSignVoteRequest(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeSignedVoteResponse (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeSignedVoteResponse(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeSignProposalRequest (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeSignProposalRequest(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeSignedProposalResponse (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeSignedProposalResponse(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePingRequest (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePingRequest(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodePingResponse (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodePingResponse(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeTMEventData (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeTMEventData(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeEventDataNewBlock (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeEventDataNewBlock(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeEventDataNewBlockHeader (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeEventDataNewBlockHeader(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeEventDataTx (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeEventDataTx(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeEventDataRoundState (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeEventDataRoundState(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeEventDataNewRound (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeEventDataNewRound(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeEventDataCompleteProposal (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeEventDataCompleteProposal(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeEventDataVote (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeEventDataVote(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeEventDataValidatorSetUpdates (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeEventDataValidatorSetUpdates(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeEventDataString (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeEventDataString(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeEvidence (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeEvidence(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeDuplicateVoteEvidence (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeDuplicateVoteEvidence(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMockGoodEvidence (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMockGoodEvidence(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMockRandomGoodEvidence (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMockRandomGoodEvidence(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}

export function encodeMockBadEvidence (json: Uint8Array, lengthPrefixed: boolean = true): Uint8Array {
    const [amino, error] = Amino.encodeMockBadEvidence(json, lengthPrefixed);
    if (error) {
        throw error;
    }
    return amino;
}
