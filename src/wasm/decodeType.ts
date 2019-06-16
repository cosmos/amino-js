import * as Amino from '../../lib/Amino.wasm';
import { AminoBytes, JSONBytes } from '../../lib/bytes';

export function decodeMultiStoreProofOp (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMultiStoreProofOp(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeIAVLAbsenceOp (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeIAVLAbsenceOp(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeIAVLValueOp (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeIAVLValueOp(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePrivKeyLedgerSecp256k1 (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePrivKeyLedgerSecp256k1(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeInfo (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeInfo(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeBIP44Params (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeBIP44Params(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeLocalInfo (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeLocalInfo(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeLedgerInfo (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeLedgerInfo(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeOfflineInfo (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeOfflineInfo(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMultiInfo (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMultiInfo(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsg (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsg(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeTx (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeTx(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeAccount (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeAccount(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeVestingAccount (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeVestingAccount(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeBaseAccount (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeBaseAccount(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeBaseVestingAccount (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeBaseVestingAccount(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeContinuousVestingAccount (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeContinuousVestingAccount(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeDelayedVestingAccount (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeDelayedVestingAccount(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeStdTx (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeStdTx(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgSend (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgSend(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgMultiSend (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgMultiSend(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgVerifyInvariant (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgVerifyInvariant(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgWithdrawDelegatorReward (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgWithdrawDelegatorReward(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgWithdrawValidatorCommission (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgWithdrawValidatorCommission(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgSetWithdrawAddress (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgSetWithdrawAddress(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeContent (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeContent(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgSubmitProposal (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgSubmitProposal(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgDeposit (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgDeposit(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgVote (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgVote(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeTextProposal (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeTextProposal(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeSoftwareUpgradeProposal (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeSoftwareUpgradeProposal(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgIBCTransfer (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgIBCTransfer(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgIBCReceive (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgIBCReceive(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeParameterChangeProposal (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeParameterChangeProposal(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgUnjail (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgUnjail(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgCreateValidator (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgCreateValidator(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgEditValidator (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgEditValidator(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgDelegate (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgDelegate(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgUndelegate (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgUndelegate(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgBeginRedelegate (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgBeginRedelegate(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeBlockchainMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeBlockchainMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeBcBlockRequestMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeBcBlockRequestMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeBcBlockResponseMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeBcBlockResponseMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeBcNoBlockResponseMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeBcNoBlockResponseMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeBcStatusResponseMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeBcStatusResponseMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeBcStatusRequestMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeBcStatusRequestMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeConsensusMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeConsensusMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeNewRoundStepMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeNewRoundStepMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeNewValidBlockMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeNewValidBlockMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeProposalMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeProposalMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeProposalPOLMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeProposalPOLMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeBlockPartMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeBlockPartMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeVoteMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeVoteMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeHasVoteMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeHasVoteMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeVoteSetMaj23Message (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeVoteSetMaj23Message(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeVoteSetBitsMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeVoteSetBitsMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeWALMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeWALMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMsgInfo (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMsgInfo(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeTimeoutInfo (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeTimeoutInfo(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeEndHeightMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeEndHeightMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePubKey (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePubKey(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePrivKey (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePrivKey(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePubKeyEd25519 (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePubKeyEd25519(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePrivKeyEd25519 (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePrivKeyEd25519(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePubKeySecp256k1 (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePubKeySecp256k1(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePrivKeySecp256k1 (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePrivKeySecp256k1(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePubKeyMultisigThreshold (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePubKeyMultisigThreshold(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeEvidenceMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeEvidenceMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeEvidenceListMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeEvidenceListMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMempoolMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMempoolMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeTxMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeTxMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePacket (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePacket(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePacketPing (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePacketPing(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePacketPong (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePacketPong(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePacketMsg (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePacketMsg(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePexMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePexMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePexRequestMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePexRequestMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePexAddrsMessage (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePexAddrsMessage(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeRemoteSignerMsg (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeRemoteSignerMsg(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePubKeyRequest (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePubKeyRequest(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePubKeyResponse (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePubKeyResponse(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeSignVoteRequest (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeSignVoteRequest(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeSignedVoteResponse (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeSignedVoteResponse(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeSignProposalRequest (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeSignProposalRequest(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeSignedProposalResponse (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeSignedProposalResponse(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePingRequest (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePingRequest(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodePingResponse (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodePingResponse(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeTMEventData (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeTMEventData(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeEventDataNewBlock (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeEventDataNewBlock(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeEventDataNewBlockHeader (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeEventDataNewBlockHeader(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeEventDataTx (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeEventDataTx(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeEventDataRoundState (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeEventDataRoundState(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeEventDataNewRound (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeEventDataNewRound(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeEventDataCompleteProposal (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeEventDataCompleteProposal(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeEventDataVote (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeEventDataVote(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeEventDataValidatorSetUpdates (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeEventDataValidatorSetUpdates(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeEventDataString (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeEventDataString(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeEvidence (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeEvidence(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeDuplicateVoteEvidence (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeDuplicateVoteEvidence(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMockGoodEvidence (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMockGoodEvidence(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMockRandomGoodEvidence (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMockRandomGoodEvidence(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}

export function decodeMockBadEvidence (amino: AminoBytes, lengthPrefixed: boolean = true): JSONBytes {
    const [json, error] = Amino.decodeMockBadEvidence(amino, lengthPrefixed);
    if (error) {
        throw new Error(error);
    }
    return json;
}
