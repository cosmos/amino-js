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
} from '../types';
import * as encodeType from './encodeType';
import { marshalJSON } from '../util';
import * as Amino from '../../lib/Amino.wasm';

export function marshalMultiStoreProofOp (object: rootmulti.MultiStoreProofOp, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMultiStoreProofOp(json, lengthPrefixed);
}

export function marshalIAVLAbsenceOp (object: iavl.IAVLAbsenceOp, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeIAVLAbsenceOp(json, lengthPrefixed);
}

export function marshalIAVLValueOp (object: iavl.IAVLValueOp, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeIAVLValueOp(json, lengthPrefixed);
}

export function marshalPrivKeyLedgerSecp256k1 (object: crypto.PrivKeyLedgerSecp256k1, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePrivKeyLedgerSecp256k1(json, lengthPrefixed);
}

export function marshalInfo (object: keys.Info, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeInfo(json, lengthPrefixed);
}

export function marshalBIP44Params (object: keys.BIP44Params, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeBIP44Params(json, lengthPrefixed);
}

export function marshalLocalInfo (object: keys.LocalInfo, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeLocalInfo(json, lengthPrefixed);
}

export function marshalLedgerInfo (object: keys.LedgerInfo, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeLedgerInfo(json, lengthPrefixed);
}

export function marshalOfflineInfo (object: keys.OfflineInfo, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeOfflineInfo(json, lengthPrefixed);
}

export function marshalMultiInfo (object: keys.MultiInfo, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMultiInfo(json, lengthPrefixed);
}

export function marshalMsg (object: types.Msg, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsg(json, lengthPrefixed);
}

export function marshalTx (object: types.Tx, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeTx(json, lengthPrefixed);
}

export function marshalAccount (object: auth.Account, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeAccount(json, lengthPrefixed);
}

export function marshalVestingAccount (object: auth.VestingAccount, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeVestingAccount(json, lengthPrefixed);
}

export function marshalBaseAccount (object: auth.BaseAccount, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeBaseAccount(json, lengthPrefixed);
}

export function marshalBaseVestingAccount (object: auth.BaseVestingAccount, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeBaseVestingAccount(json, lengthPrefixed);
}

export function marshalContinuousVestingAccount (object: auth.ContinuousVestingAccount, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeContinuousVestingAccount(json, lengthPrefixed);
}

export function marshalDelayedVestingAccount (object: auth.DelayedVestingAccount, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeDelayedVestingAccount(json, lengthPrefixed);
}

export function marshalStdTx (object: auth.StdTx, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeStdTx(json, lengthPrefixed);
}

export function marshalMsgSend (object: bank.MsgSend, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgSend(json, lengthPrefixed);
}

export function marshalMsgMultiSend (object: bank.MsgMultiSend, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgMultiSend(json, lengthPrefixed);
}

export function marshalMsgVerifyInvariant (object: crisis.MsgVerifyInvariant, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgVerifyInvariant(json, lengthPrefixed);
}

export function marshalMsgWithdrawDelegatorReward (object: distribution.MsgWithdrawDelegatorReward, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgWithdrawDelegatorReward(json, lengthPrefixed);
}

export function marshalMsgWithdrawValidatorCommission (object: distribution.MsgWithdrawValidatorCommission, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgWithdrawValidatorCommission(json, lengthPrefixed);
}

export function marshalMsgSetWithdrawAddress (object: distribution.MsgSetWithdrawAddress, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgSetWithdrawAddress(json, lengthPrefixed);
}

export function marshalContent (object: gov.Content, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeContent(json, lengthPrefixed);
}

export function marshalMsgSubmitProposal (object: gov.MsgSubmitProposal, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgSubmitProposal(json, lengthPrefixed);
}

export function marshalMsgDeposit (object: gov.MsgDeposit, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgDeposit(json, lengthPrefixed);
}

export function marshalMsgVote (object: gov.MsgVote, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgVote(json, lengthPrefixed);
}

export function marshalTextProposal (object: gov.TextProposal, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeTextProposal(json, lengthPrefixed);
}

export function marshalSoftwareUpgradeProposal (object: gov.SoftwareUpgradeProposal, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeSoftwareUpgradeProposal(json, lengthPrefixed);
}

export function marshalMsgIBCTransfer (object: ibc.MsgIBCTransfer, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgIBCTransfer(json, lengthPrefixed);
}

export function marshalMsgIBCReceive (object: ibc.MsgIBCReceive, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgIBCReceive(json, lengthPrefixed);
}

export function marshalParameterChangeProposal (object: params.ParameterChangeProposal, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeParameterChangeProposal(json, lengthPrefixed);
}

export function marshalMsgUnjail (object: slashing.MsgUnjail, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgUnjail(json, lengthPrefixed);
}

export function marshalMsgCreateValidator (object: staking.MsgCreateValidator, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgCreateValidator(json, lengthPrefixed);
}

export function marshalMsgEditValidator (object: staking.MsgEditValidator, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgEditValidator(json, lengthPrefixed);
}

export function marshalMsgDelegate (object: staking.MsgDelegate, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgDelegate(json, lengthPrefixed);
}

export function marshalMsgUndelegate (object: staking.MsgUndelegate, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgUndelegate(json, lengthPrefixed);
}

export function marshalMsgBeginRedelegate (object: staking.MsgBeginRedelegate, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgBeginRedelegate(json, lengthPrefixed);
}

export function marshalBlockchainMessage (object: blockchain.BlockchainMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeBlockchainMessage(json, lengthPrefixed);
}

export function marshalBcBlockRequestMessage (object: blockchain.BcBlockRequestMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeBcBlockRequestMessage(json, lengthPrefixed);
}

export function marshalBcBlockResponseMessage (object: blockchain.BcBlockResponseMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeBcBlockResponseMessage(json, lengthPrefixed);
}

export function marshalBcNoBlockResponseMessage (object: blockchain.BcNoBlockResponseMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeBcNoBlockResponseMessage(json, lengthPrefixed);
}

export function marshalBcStatusResponseMessage (object: blockchain.BcStatusResponseMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeBcStatusResponseMessage(json, lengthPrefixed);
}

export function marshalBcStatusRequestMessage (object: blockchain.BcStatusRequestMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeBcStatusRequestMessage(json, lengthPrefixed);
}

export function marshalConsensusMessage (object: consensus.ConsensusMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeConsensusMessage(json, lengthPrefixed);
}

export function marshalNewRoundStepMessage (object: consensus.NewRoundStepMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeNewRoundStepMessage(json, lengthPrefixed);
}

export function marshalNewValidBlockMessage (object: consensus.NewValidBlockMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeNewValidBlockMessage(json, lengthPrefixed);
}

export function marshalProposalMessage (object: consensus.ProposalMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeProposalMessage(json, lengthPrefixed);
}

export function marshalProposalPOLMessage (object: consensus.ProposalPOLMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeProposalPOLMessage(json, lengthPrefixed);
}

export function marshalBlockPartMessage (object: consensus.BlockPartMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeBlockPartMessage(json, lengthPrefixed);
}

export function marshalVoteMessage (object: consensus.VoteMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeVoteMessage(json, lengthPrefixed);
}

export function marshalHasVoteMessage (object: consensus.HasVoteMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeHasVoteMessage(json, lengthPrefixed);
}

export function marshalVoteSetMaj23Message (object: consensus.VoteSetMaj23Message, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeVoteSetMaj23Message(json, lengthPrefixed);
}

export function marshalVoteSetBitsMessage (object: consensus.VoteSetBitsMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeVoteSetBitsMessage(json, lengthPrefixed);
}

export function marshalWALMessage (object: consensus.WALMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeWALMessage(json, lengthPrefixed);
}

export function marshalMsgInfo (object: consensus.MsgInfo, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgInfo(json, lengthPrefixed);
}

export function marshalTimeoutInfo (object: consensus.TimeoutInfo, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeTimeoutInfo(json, lengthPrefixed);
}

export function marshalEndHeightMessage (object: consensus.EndHeightMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeEndHeightMessage(json, lengthPrefixed);
}

export function marshalPubKey (object: crypto.PubKey, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePubKey(json, lengthPrefixed);
}

export function marshalPrivKey (object: crypto.PrivKey, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePrivKey(json, lengthPrefixed);
}

export function marshalPubKeyEd25519 (object: crypto.PubKeyEd25519, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePubKeyEd25519(json, lengthPrefixed);
}

export function marshalPrivKeyEd25519 (object: crypto.PrivKeyEd25519, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePrivKeyEd25519(json, lengthPrefixed);
}

export function marshalPubKeySecp256k1 (object: crypto.PubKeySecp256k1, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePubKeySecp256k1(json, lengthPrefixed);
}

export function marshalPrivKeySecp256k1 (object: crypto.PrivKeySecp256k1, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePrivKeySecp256k1(json, lengthPrefixed);
}

export function marshalPubKeyMultisigThreshold (object: crypto.PubKeyMultisigThreshold, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePubKeyMultisigThreshold(json, lengthPrefixed);
}

export function marshalEvidenceMessage (object: evidence.EvidenceMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeEvidenceMessage(json, lengthPrefixed);
}

export function marshalEvidenceListMessage (object: evidence.EvidenceListMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeEvidenceListMessage(json, lengthPrefixed);
}

export function marshalMempoolMessage (object: mempool.MempoolMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMempoolMessage(json, lengthPrefixed);
}

export function marshalTxMessage (object: mempool.TxMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeTxMessage(json, lengthPrefixed);
}

export function marshalPacket (object: conn.Packet, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePacket(json, lengthPrefixed);
}

export function marshalPacketPing (object: conn.PacketPing, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePacketPing(json, lengthPrefixed);
}

export function marshalPacketPong (object: conn.PacketPong, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePacketPong(json, lengthPrefixed);
}

export function marshalPacketMsg (object: conn.PacketMsg, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePacketMsg(json, lengthPrefixed);
}

export function marshalPexMessage (object: pex.PexMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePexMessage(json, lengthPrefixed);
}

export function marshalPexRequestMessage (object: pex.PexRequestMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePexRequestMessage(json, lengthPrefixed);
}

export function marshalPexAddrsMessage (object: pex.PexAddrsMessage, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePexAddrsMessage(json, lengthPrefixed);
}

export function marshalRemoteSignerMsg (object: privval.RemoteSignerMsg, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeRemoteSignerMsg(json, lengthPrefixed);
}

export function marshalPubKeyRequest (object: privval.PubKeyRequest, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePubKeyRequest(json, lengthPrefixed);
}

export function marshalPubKeyResponse (object: privval.PubKeyResponse, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePubKeyResponse(json, lengthPrefixed);
}

export function marshalSignVoteRequest (object: privval.SignVoteRequest, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeSignVoteRequest(json, lengthPrefixed);
}

export function marshalSignedVoteResponse (object: privval.SignedVoteResponse, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeSignedVoteResponse(json, lengthPrefixed);
}

export function marshalSignProposalRequest (object: privval.SignProposalRequest, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeSignProposalRequest(json, lengthPrefixed);
}

export function marshalSignedProposalResponse (object: privval.SignedProposalResponse, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeSignedProposalResponse(json, lengthPrefixed);
}

export function marshalPingRequest (object: privval.PingRequest, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePingRequest(json, lengthPrefixed);
}

export function marshalPingResponse (object: privval.PingResponse, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodePingResponse(json, lengthPrefixed);
}

export function marshalTMEventData (object: events.TMEventData, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeTMEventData(json, lengthPrefixed);
}

export function marshalEventDataNewBlock (object: events.EventDataNewBlock, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataNewBlock(json, lengthPrefixed);
}

export function marshalEventDataNewBlockHeader (object: events.EventDataNewBlockHeader, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataNewBlockHeader(json, lengthPrefixed);
}

export function marshalEventDataTx (object: events.EventDataTx, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataTx(json, lengthPrefixed);
}

export function marshalEventDataRoundState (object: events.EventDataRoundState, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataRoundState(json, lengthPrefixed);
}

export function marshalEventDataNewRound (object: events.EventDataNewRound, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataNewRound(json, lengthPrefixed);
}

export function marshalEventDataCompleteProposal (object: events.EventDataCompleteProposal, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataCompleteProposal(json, lengthPrefixed);
}

export function marshalEventDataVote (object: events.EventDataVote, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataVote(json, lengthPrefixed);
}

export function marshalEventDataValidatorSetUpdates (object: events.EventDataValidatorSetUpdates, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataValidatorSetUpdates(json, lengthPrefixed);
}

export function marshalEventDataString (object: events.EventDataString, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataString(json, lengthPrefixed);
}

export function marshalEvidence (object: evidence.Evidence, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeEvidence(json, lengthPrefixed);
}

export function marshalDuplicateVoteEvidence (object: evidence.DuplicateVoteEvidence, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeDuplicateVoteEvidence(json, lengthPrefixed);
}

export function marshalMockGoodEvidence (object: evidence.MockGoodEvidence, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMockGoodEvidence(json, lengthPrefixed);
}

export function marshalMockRandomGoodEvidence (object: evidence.MockRandomGoodEvidence, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMockRandomGoodEvidence(json, lengthPrefixed);
}

export function marshalMockBadEvidence (object: evidence.MockBadEvidence, lengthPrefixed: boolean = true): Amino.Bytes {
    const json = marshalJSON(object);
    return encodeType.encodeMockBadEvidence(json, lengthPrefixed);
}
