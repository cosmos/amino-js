import * as Amino from '../../lib/Amino.wasm';

export function encodeMultiStoreProofOp (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMultiStoreProofOp(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeIAVLAbsenceOp (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeIAVLAbsenceOp(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeIAVLValueOp (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeIAVLValueOp(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePrivKeyLedgerSecp256k1 (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePrivKeyLedgerSecp256k1(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeInfo (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeInfo(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeBIP44Params (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeBIP44Params(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeLocalInfo (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeLocalInfo(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeLedgerInfo (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeLedgerInfo(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeOfflineInfo (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeOfflineInfo(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMultiInfo (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMultiInfo(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsg (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsg(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeTx (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeTx(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeAccount (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeAccount(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeVestingAccount (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeVestingAccount(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeBaseAccount (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeBaseAccount(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeBaseVestingAccount (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeBaseVestingAccount(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeContinuousVestingAccount (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeContinuousVestingAccount(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeDelayedVestingAccount (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeDelayedVestingAccount(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeStdTx (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeStdTx(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgSend (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgSend(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgMultiSend (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgMultiSend(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgVerifyInvariant (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgVerifyInvariant(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgWithdrawDelegatorReward (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgWithdrawDelegatorReward(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgWithdrawValidatorCommission (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgWithdrawValidatorCommission(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgSetWithdrawAddress (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgSetWithdrawAddress(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeContent (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeContent(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgSubmitProposal (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgSubmitProposal(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgDeposit (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgDeposit(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgVote (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgVote(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeTextProposal (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeTextProposal(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeSoftwareUpgradeProposal (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeSoftwareUpgradeProposal(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgIBCTransfer (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgIBCTransfer(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgIBCReceive (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgIBCReceive(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeParameterChangeProposal (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeParameterChangeProposal(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgUnjail (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgUnjail(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgCreateValidator (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgCreateValidator(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgEditValidator (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgEditValidator(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgDelegate (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgDelegate(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgUndelegate (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgUndelegate(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgBeginRedelegate (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgBeginRedelegate(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeBlockchainMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeBlockchainMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeBcBlockRequestMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeBcBlockRequestMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeBcBlockResponseMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeBcBlockResponseMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeBcNoBlockResponseMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeBcNoBlockResponseMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeBcStatusResponseMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeBcStatusResponseMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeBcStatusRequestMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeBcStatusRequestMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeConsensusMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeConsensusMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeNewRoundStepMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeNewRoundStepMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeNewValidBlockMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeNewValidBlockMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeProposalMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeProposalMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeProposalPOLMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeProposalPOLMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeBlockPartMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeBlockPartMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeVoteMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeVoteMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeHasVoteMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeHasVoteMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeVoteSetMaj23Message (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeVoteSetMaj23Message(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeVoteSetBitsMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeVoteSetBitsMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeWALMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeWALMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMsgInfo (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMsgInfo(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeTimeoutInfo (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeTimeoutInfo(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeEndHeightMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeEndHeightMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePubKey (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePubKey(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePrivKey (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePrivKey(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePubKeyEd25519 (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePubKeyEd25519(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePrivKeyEd25519 (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePrivKeyEd25519(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePubKeySecp256k1 (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePubKeySecp256k1(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePrivKeySecp256k1 (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePrivKeySecp256k1(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePubKeyMultisigThreshold (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePubKeyMultisigThreshold(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeEvidenceMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeEvidenceMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeEvidenceListMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeEvidenceListMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMempoolMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMempoolMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeTxMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeTxMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePacket (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePacket(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePacketPing (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePacketPing(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePacketPong (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePacketPong(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePacketMsg (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePacketMsg(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePexMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePexMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePexRequestMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePexRequestMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePexAddrsMessage (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePexAddrsMessage(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeRemoteSignerMsg (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeRemoteSignerMsg(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePubKeyRequest (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePubKeyRequest(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePubKeyResponse (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePubKeyResponse(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeSignVoteRequest (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeSignVoteRequest(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeSignedVoteResponse (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeSignedVoteResponse(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeSignProposalRequest (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeSignProposalRequest(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeSignedProposalResponse (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeSignedProposalResponse(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePingRequest (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePingRequest(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodePingResponse (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodePingResponse(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeTMEventData (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeTMEventData(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeEventDataNewBlock (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeEventDataNewBlock(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeEventDataNewBlockHeader (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeEventDataNewBlockHeader(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeEventDataTx (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeEventDataTx(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeEventDataRoundState (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeEventDataRoundState(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeEventDataNewRound (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeEventDataNewRound(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeEventDataCompleteProposal (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeEventDataCompleteProposal(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeEventDataVote (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeEventDataVote(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeEventDataValidatorSetUpdates (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeEventDataValidatorSetUpdates(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeEventDataString (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeEventDataString(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeEvidence (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeEvidence(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeDuplicateVoteEvidence (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeDuplicateVoteEvidence(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMockGoodEvidence (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMockGoodEvidence(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMockRandomGoodEvidence (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMockRandomGoodEvidence(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}

export function encodeMockBadEvidence (json: Amino.JSONBytes, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const [amino, error] = Amino.encodeMockBadEvidence(json, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return amino;
}
