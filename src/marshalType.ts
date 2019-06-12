import {
    auth,
    bank,
    blockchain,
    conn,
    consensus,
    crisis,
    crypto,
    distribution,
    events,
    evidence,
    gov,
    iavl,
    ibc,
    keys,
    mempool,
    params,
    pex,
    privval,
    rootmulti,
    slashing,
    staking,
    types
} from './types';
import * as encodeType from './encodeType';
import { marshalJSON } from './util';
import * as Amino from '../lib/Amino'

export function marshalMultiStoreProofOp (o: rootmulti.MultiStoreProofOp, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMultiStoreProofOp(json, lengthPrefixed);
}

export function marshalIAVLAbsenceOp (o: iavl.IAVLAbsenceOp, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeIAVLAbsenceOp(json, lengthPrefixed);
}

export function marshalIAVLValueOp (o: iavl.IAVLValueOp, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeIAVLValueOp(json, lengthPrefixed);
}

export function marshalPrivKeyLedgerSecp256k1 (o: crypto.PrivKeyLedgerSecp256k1, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePrivKeyLedgerSecp256k1(json, lengthPrefixed);
}

export function marshalInfo (o: keys.Info, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeInfo(json, lengthPrefixed);
}

export function marshalBIP44Params (o: keys.BIP44Params, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBIP44Params(json, lengthPrefixed);
}

export function marshalLocalInfo (o: keys.LocalInfo, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeLocalInfo(json, lengthPrefixed);
}

export function marshalLedgerInfo (o: keys.LedgerInfo, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeLedgerInfo(json, lengthPrefixed);
}

export function marshalOfflineInfo (o: keys.OfflineInfo, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeOfflineInfo(json, lengthPrefixed);
}

export function marshalMultiInfo (o: keys.MultiInfo, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMultiInfo(json, lengthPrefixed);
}

export function marshalMsg (o: types.Msg, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsg(json, lengthPrefixed);
}

export function marshalTx (o: types.Tx, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeTx(json, lengthPrefixed);
}

export function marshalAccount (o: auth.Account, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeAccount(json, lengthPrefixed);
}

export function marshalVestingAccount (o: auth.VestingAccount, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeVestingAccount(json, lengthPrefixed);
}

export function marshalBaseAccount (o: auth.BaseAccount, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBaseAccount(json, lengthPrefixed);
}

export function marshalBaseVestingAccount (o: auth.BaseVestingAccount, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBaseVestingAccount(json, lengthPrefixed);
}

export function marshalContinuousVestingAccount (o: auth.ContinuousVestingAccount, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeContinuousVestingAccount(json, lengthPrefixed);
}

export function marshalDelayedVestingAccount (o: auth.DelayedVestingAccount, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeDelayedVestingAccount(json, lengthPrefixed);
}

export function marshalStdTx (o: auth.StdTx, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeStdTx(json, lengthPrefixed);
}

export function marshalMsgSend (o: bank.MsgSend, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgSend(json, lengthPrefixed);
}

export function marshalMsgMultiSend (o: bank.MsgMultiSend, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgMultiSend(json, lengthPrefixed);
}

export function marshalMsgVerifyInvariant (o: crisis.MsgVerifyInvariant, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgVerifyInvariant(json, lengthPrefixed);
}

export function marshalMsgWithdrawDelegatorReward (o: distribution.MsgWithdrawDelegatorReward, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgWithdrawDelegatorReward(json, lengthPrefixed);
}

export function marshalMsgWithdrawValidatorCommission (o: distribution.MsgWithdrawValidatorCommission, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgWithdrawValidatorCommission(json, lengthPrefixed);
}

export function marshalMsgSetWithdrawAddress (o: distribution.MsgSetWithdrawAddress, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgSetWithdrawAddress(json, lengthPrefixed);
}

export function marshalContent (o: gov.Content, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeContent(json, lengthPrefixed);
}

export function marshalMsgSubmitProposal (o: gov.MsgSubmitProposal, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgSubmitProposal(json, lengthPrefixed);
}

export function marshalMsgDeposit (o: gov.MsgDeposit, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgDeposit(json, lengthPrefixed);
}

export function marshalMsgVote (o: gov.MsgVote, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgVote(json, lengthPrefixed);
}

export function marshalTextProposal (o: gov.TextProposal, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeTextProposal(json, lengthPrefixed);
}

export function marshalSoftwareUpgradeProposal (o: gov.SoftwareUpgradeProposal, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeSoftwareUpgradeProposal(json, lengthPrefixed);
}

export function marshalMsgIBCTransfer (o: ibc.MsgIBCTransfer, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgIBCTransfer(json, lengthPrefixed);
}

export function marshalMsgIBCReceive (o: ibc.MsgIBCReceive, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgIBCReceive(json, lengthPrefixed);
}

export function marshalParameterChangeProposal (o: params.ParameterChangeProposal, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeParameterChangeProposal(json, lengthPrefixed);
}

export function marshalMsgUnjail (o: slashing.MsgUnjail, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgUnjail(json, lengthPrefixed);
}

export function marshalMsgCreateValidator (o: staking.MsgCreateValidator, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgCreateValidator(json, lengthPrefixed);
}

export function marshalMsgEditValidator (o: staking.MsgEditValidator, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgEditValidator(json, lengthPrefixed);
}

export function marshalMsgDelegate (o: staking.MsgDelegate, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgDelegate(json, lengthPrefixed);
}

export function marshalMsgUndelegate (o: staking.MsgUndelegate, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgUndelegate(json, lengthPrefixed);
}

export function marshalMsgBeginRedelegate (o: staking.MsgBeginRedelegate, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgBeginRedelegate(json, lengthPrefixed);
}

export function marshalBlockchainMessage (o: blockchain.BlockchainMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBlockchainMessage(json, lengthPrefixed);
}

export function marshalBcBlockRequestMessage (o: blockchain.BcBlockRequestMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBcBlockRequestMessage(json, lengthPrefixed);
}

export function marshalBcBlockResponseMessage (o: blockchain.BcBlockResponseMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBcBlockResponseMessage(json, lengthPrefixed);
}

export function marshalBcNoBlockResponseMessage (o: blockchain.BcNoBlockResponseMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBcNoBlockResponseMessage(json, lengthPrefixed);
}

export function marshalBcStatusResponseMessage (o: blockchain.BcStatusResponseMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBcStatusResponseMessage(json, lengthPrefixed);
}

export function marshalBcStatusRequestMessage (o: blockchain.BcStatusRequestMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBcStatusRequestMessage(json, lengthPrefixed);
}

export function marshalConsensusMessage (o: consensus.ConsensusMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeConsensusMessage(json, lengthPrefixed);
}

export function marshalNewRoundStepMessage (o: consensus.NewRoundStepMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeNewRoundStepMessage(json, lengthPrefixed);
}

export function marshalNewValidBlockMessage (o: consensus.NewValidBlockMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeNewValidBlockMessage(json, lengthPrefixed);
}

export function marshalProposalMessage (o: consensus.ProposalMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeProposalMessage(json, lengthPrefixed);
}

export function marshalProposalPOLMessage (o: consensus.ProposalPOLMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeProposalPOLMessage(json, lengthPrefixed);
}

export function marshalBlockPartMessage (o: consensus.BlockPartMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBlockPartMessage(json, lengthPrefixed);
}

export function marshalVoteMessage (o: consensus.VoteMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeVoteMessage(json, lengthPrefixed);
}

export function marshalHasVoteMessage (o: consensus.HasVoteMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeHasVoteMessage(json, lengthPrefixed);
}

export function marshalVoteSetMaj23Message (o: consensus.VoteSetMaj23Message, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeVoteSetMaj23Message(json, lengthPrefixed);
}

export function marshalVoteSetBitsMessage (o: consensus.VoteSetBitsMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeVoteSetBitsMessage(json, lengthPrefixed);
}

export function marshalWALMessage (o: consensus.WALMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeWALMessage(json, lengthPrefixed);
}

export function marshalMsgInfo (o: consensus.MsgInfo, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgInfo(json, lengthPrefixed);
}

export function marshalTimeoutInfo (o: consensus.TimeoutInfo, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeTimeoutInfo(json, lengthPrefixed);
}

export function marshalEndHeightMessage (o: consensus.EndHeightMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEndHeightMessage(json, lengthPrefixed);
}

export function marshalPubKey (o: crypto.PubKey, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePubKey(json, lengthPrefixed);
}

export function marshalPrivKey (o: crypto.PrivKey, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePrivKey(json, lengthPrefixed);
}

export function marshalPubKeyEd25519 (o: crypto.PubKeyEd25519, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePubKeyEd25519(json, lengthPrefixed);
}

export function marshalPrivKeyEd25519 (o: crypto.PrivKeyEd25519, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePrivKeyEd25519(json, lengthPrefixed);
}

export function marshalPubKeySecp256k1 (o: crypto.PubKeySecp256k1, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePubKeySecp256k1(json, lengthPrefixed);
}

export function marshalPrivKeySecp256k1 (o: crypto.PrivKeySecp256k1, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePrivKeySecp256k1(json, lengthPrefixed);
}

export function marshalPubKeyMultisigThreshold (o: crypto.PubKeyMultisigThreshold, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePubKeyMultisigThreshold(json, lengthPrefixed);
}

export function marshalEvidenceMessage (o: evidence.EvidenceMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEvidenceMessage(json, lengthPrefixed);
}

export function marshalEvidenceListMessage (o: evidence.EvidenceListMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEvidenceListMessage(json, lengthPrefixed);
}

export function marshalMempoolMessage (o: mempool.MempoolMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMempoolMessage(json, lengthPrefixed);
}

export function marshalTxMessage (o: mempool.TxMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeTxMessage(json, lengthPrefixed);
}

export function marshalPacket (o: conn.Packet, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePacket(json, lengthPrefixed);
}

export function marshalPacketPing (o: conn.PacketPing, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePacketPing(json, lengthPrefixed);
}

export function marshalPacketPong (o: conn.PacketPong, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePacketPong(json, lengthPrefixed);
}

export function marshalPacketMsg (o: conn.PacketMsg, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePacketMsg(json, lengthPrefixed);
}

export function marshalPexMessage (o: pex.PexMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePexMessage(json, lengthPrefixed);
}

export function marshalPexRequestMessage (o: pex.PexRequestMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePexRequestMessage(json, lengthPrefixed);
}

export function marshalPexAddrsMessage (o: pex.PexAddrsMessage, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePexAddrsMessage(json, lengthPrefixed);
}

export function marshalRemoteSignerMsg (o: privval.RemoteSignerMsg, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeRemoteSignerMsg(json, lengthPrefixed);
}

export function marshalPubKeyRequest (o: privval.PubKeyRequest, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePubKeyRequest(json, lengthPrefixed);
}

export function marshalPubKeyResponse (o: privval.PubKeyResponse, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePubKeyResponse(json, lengthPrefixed);
}

export function marshalSignVoteRequest (o: privval.SignVoteRequest, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeSignVoteRequest(json, lengthPrefixed);
}

export function marshalSignedVoteResponse (o: privval.SignedVoteResponse, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeSignedVoteResponse(json, lengthPrefixed);
}

export function marshalSignProposalRequest (o: privval.SignProposalRequest, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeSignProposalRequest(json, lengthPrefixed);
}

export function marshalSignedProposalResponse (o: privval.SignedProposalResponse, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeSignedProposalResponse(json, lengthPrefixed);
}

export function marshalPingRequest (o: privval.PingRequest, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePingRequest(json, lengthPrefixed);
}

export function marshalPingResponse (o: privval.PingResponse, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePingResponse(json, lengthPrefixed);
}

export function marshalTMEventData (o: events.TMEventData, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeTMEventData(json, lengthPrefixed);
}

export function marshalEventDataNewBlock (o: events.EventDataNewBlock, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataNewBlock(json, lengthPrefixed);
}

export function marshalEventDataNewBlockHeader (o: events.EventDataNewBlockHeader, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataNewBlockHeader(json, lengthPrefixed);
}

export function marshalEventDataTx (o: events.EventDataTx, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataTx(json, lengthPrefixed);
}

export function marshalEventDataRoundState (o: events.EventDataRoundState, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataRoundState(json, lengthPrefixed);
}

export function marshalEventDataNewRound (o: events.EventDataNewRound, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataNewRound(json, lengthPrefixed);
}

export function marshalEventDataCompleteProposal (o: events.EventDataCompleteProposal, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataCompleteProposal(json, lengthPrefixed);
}

export function marshalEventDataVote (o: events.EventDataVote, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataVote(json, lengthPrefixed);
}

export function marshalEventDataValidatorSetUpdates (o: events.EventDataValidatorSetUpdates, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataValidatorSetUpdates(json, lengthPrefixed);
}

export function marshalEventDataString (o: events.EventDataString, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataString(json, lengthPrefixed);
}

export function marshalEvidence (o: evidence.Evidence, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEvidence(json, lengthPrefixed);
}

export function marshalDuplicateVoteEvidence (o: evidence.DuplicateVoteEvidence, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeDuplicateVoteEvidence(json, lengthPrefixed);
}

export function marshalMockGoodEvidence (o: evidence.MockGoodEvidence, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMockGoodEvidence(json, lengthPrefixed);
}

export function marshalMockRandomGoodEvidence (o: evidence.MockRandomGoodEvidence, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMockRandomGoodEvidence(json, lengthPrefixed);
}

export function marshalMockBadEvidence (o: evidence.MockBadEvidence, lengthPrefixed: boolean = true): Amino.AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMockBadEvidence(json, lengthPrefixed);
}
