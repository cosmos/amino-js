import * as auth from './auth';
import * as bank from './bank';
import * as blockchain from './blockchain';
import * as conn from './conn';
import * as consensus from './consensus';
import * as crisis from './crisis';
import * as crypto from './crypto';
import * as distribution from './distribution';
import * as events from './events';
import * as evidence from './evidence';
import * as gov from './gov';
import * as iavl from './iavl';
import * as ibc from './ibc';
import * as keys from './keys';
import * as mempool from './mempool';
import * as params from './params';
import * as pex from './pex';
import * as privval from './privval';
import * as rootmulti from './rootmulti';
import * as slashing from './slashing';
import * as staking from './staking';
import * as types from './types';

import * as encodeType from './encodeType';
import { marshalJSON } from './util';

export function marshalMultiStoreProofOp (o: rootmulti.MultiStoreProofOp, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMultiStoreProofOp(bytes, bare);
}

export function marshalIAVLAbsenceOp (o: iavl.IAVLAbsenceOp, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeIAVLAbsenceOp(bytes, bare);
}

export function marshalIAVLValueOp (o: iavl.IAVLValueOp, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeIAVLValueOp(bytes, bare);
}

export function marshalPrivKeyLedgerSecp256k1 (o: crypto.PrivKeyLedgerSecp256k1, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePrivKeyLedgerSecp256k1(bytes, bare);
}

export function marshalInfo (o: keys.Info, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeInfo(bytes, bare);
}

export function marshalBIP44Params (o: keys.BIP44Params, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeBIP44Params(bytes, bare);
}

export function marshalLocalInfo (o: keys.LocalInfo, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeLocalInfo(bytes, bare);
}

export function marshalLedgerInfo (o: keys.LedgerInfo, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeLedgerInfo(bytes, bare);
}

export function marshalOfflineInfo (o: keys.OfflineInfo, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeOfflineInfo(bytes, bare);
}

export function marshalMultiInfo (o: keys.MultiInfo, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMultiInfo(bytes, bare);
}

export function marshalMsg (o: types.Msg, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsg(bytes, bare);
}

export function marshalTx (o: types.Tx, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeTx(bytes, bare);
}

export function marshalAccount (o: auth.Account, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeAccount(bytes, bare);
}

export function marshalVestingAccount (o: auth.VestingAccount, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeVestingAccount(bytes, bare);
}

export function marshalBaseAccount (o: auth.BaseAccount, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeBaseAccount(bytes, bare);
}

export function marshalBaseVestingAccount (o: auth.BaseVestingAccount, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeBaseVestingAccount(bytes, bare);
}

export function marshalContinuousVestingAccount (o: auth.ContinuousVestingAccount, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeContinuousVestingAccount(bytes, bare);
}

export function marshalDelayedVestingAccount (o: auth.DelayedVestingAccount, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeDelayedVestingAccount(bytes, bare);
}

export function marshalStdTx (o: auth.StdTx, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeStdTx(bytes, bare);
}

export function marshalMsgSend (o: bank.MsgSend, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgSend(bytes, bare);
}

export function marshalMsgMultiSend (o: bank.MsgMultiSend, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgMultiSend(bytes, bare);
}

export function marshalMsgVerifyInvariant (o: crisis.MsgVerifyInvariant, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgVerifyInvariant(bytes, bare);
}

export function marshalMsgWithdrawDelegatorReward (o: distribution.MsgWithdrawDelegatorReward, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgWithdrawDelegatorReward(bytes, bare);
}

export function marshalMsgWithdrawValidatorCommission (o: distribution.MsgWithdrawValidatorCommission, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgWithdrawValidatorCommission(bytes, bare);
}

export function marshalMsgSetWithdrawAddress (o: distribution.MsgSetWithdrawAddress, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgSetWithdrawAddress(bytes, bare);
}

export function marshalContent (o: gov.Content, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeContent(bytes, bare);
}

export function marshalMsgSubmitProposal (o: gov.MsgSubmitProposal, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgSubmitProposal(bytes, bare);
}

export function marshalMsgDeposit (o: gov.MsgDeposit, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgDeposit(bytes, bare);
}

export function marshalMsgVote (o: gov.MsgVote, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgVote(bytes, bare);
}

export function marshalTextProposal (o: gov.TextProposal, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeTextProposal(bytes, bare);
}

export function marshalSoftwareUpgradeProposal (o: gov.SoftwareUpgradeProposal, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeSoftwareUpgradeProposal(bytes, bare);
}

export function marshalMsgIBCTransfer (o: ibc.MsgIBCTransfer, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgIBCTransfer(bytes, bare);
}

export function marshalMsgIBCReceive (o: ibc.MsgIBCReceive, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgIBCReceive(bytes, bare);
}

export function marshalParameterChangeProposal (o: params.ParameterChangeProposal, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeParameterChangeProposal(bytes, bare);
}

export function marshalMsgUnjail (o: slashing.MsgUnjail, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgUnjail(bytes, bare);
}

export function marshalMsgCreateValidator (o: staking.MsgCreateValidator, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgCreateValidator(bytes, bare);
}

export function marshalMsgEditValidator (o: staking.MsgEditValidator, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgEditValidator(bytes, bare);
}

export function marshalMsgDelegate (o: staking.MsgDelegate, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgDelegate(bytes, bare);
}

export function marshalMsgUndelegate (o: staking.MsgUndelegate, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgUndelegate(bytes, bare);
}

export function marshalMsgBeginRedelegate (o: staking.MsgBeginRedelegate, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgBeginRedelegate(bytes, bare);
}

export function marshalBlockchainMessage (o: blockchain.BlockchainMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeBlockchainMessage(bytes, bare);
}

export function marshalBcBlockRequestMessage (o: blockchain.BcBlockRequestMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeBcBlockRequestMessage(bytes, bare);
}

export function marshalBcBlockResponseMessage (o: blockchain.BcBlockResponseMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeBcBlockResponseMessage(bytes, bare);
}

export function marshalBcNoBlockResponseMessage (o: blockchain.BcNoBlockResponseMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeBcNoBlockResponseMessage(bytes, bare);
}

export function marshalBcStatusResponseMessage (o: blockchain.BcStatusResponseMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeBcStatusResponseMessage(bytes, bare);
}

export function marshalBcStatusRequestMessage (o: blockchain.BcStatusRequestMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeBcStatusRequestMessage(bytes, bare);
}

export function marshalConsensusMessage (o: consensus.ConsensusMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeConsensusMessage(bytes, bare);
}

export function marshalNewRoundStepMessage (o: consensus.NewRoundStepMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeNewRoundStepMessage(bytes, bare);
}

export function marshalNewValidBlockMessage (o: consensus.NewValidBlockMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeNewValidBlockMessage(bytes, bare);
}

export function marshalProposalMessage (o: consensus.ProposalMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeProposalMessage(bytes, bare);
}

export function marshalProposalPOLMessage (o: consensus.ProposalPOLMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeProposalPOLMessage(bytes, bare);
}

export function marshalBlockPartMessage (o: consensus.BlockPartMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeBlockPartMessage(bytes, bare);
}

export function marshalVoteMessage (o: consensus.VoteMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeVoteMessage(bytes, bare);
}

export function marshalHasVoteMessage (o: consensus.HasVoteMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeHasVoteMessage(bytes, bare);
}

export function marshalVoteSetMaj23Message (o: consensus.VoteSetMaj23Message, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeVoteSetMaj23Message(bytes, bare);
}

export function marshalVoteSetBitsMessage (o: consensus.VoteSetBitsMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeVoteSetBitsMessage(bytes, bare);
}

export function marshalWALMessage (o: consensus.WALMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeWALMessage(bytes, bare);
}

export function marshalMsgInfo (o: consensus.MsgInfo, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMsgInfo(bytes, bare);
}

export function marshalTimeoutInfo (o: consensus.TimeoutInfo, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeTimeoutInfo(bytes, bare);
}

export function marshalEndHeightMessage (o: consensus.EndHeightMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeEndHeightMessage(bytes, bare);
}

export function marshalPubKey (o: crypto.PubKey, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePubKey(bytes, bare);
}

export function marshalPrivKey (o: crypto.PrivKey, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePrivKey(bytes, bare);
}

export function marshalPubKeyEd25519 (o: crypto.PubKeyEd25519, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePubKeyEd25519(bytes, bare);
}

export function marshalPrivKeyEd25519 (o: crypto.PrivKeyEd25519, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePrivKeyEd25519(bytes, bare);
}

export function marshalPubKeySecp256k1 (o: crypto.PubKeySecp256k1, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePubKeySecp256k1(bytes, bare);
}

export function marshalPrivKeySecp256k1 (o: crypto.PrivKeySecp256k1, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePrivKeySecp256k1(bytes, bare);
}

export function marshalPubKeyMultisigThreshold (o: crypto.PubKeyMultisigThreshold, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePubKeyMultisigThreshold(bytes, bare);
}

export function marshalEvidenceMessage (o: evidence.EvidenceMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeEvidenceMessage(bytes, bare);
}

export function marshalEvidenceListMessage (o: evidence.EvidenceListMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeEvidenceListMessage(bytes, bare);
}

export function marshalMempoolMessage (o: mempool.MempoolMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMempoolMessage(bytes, bare);
}

export function marshalTxMessage (o: mempool.TxMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeTxMessage(bytes, bare);
}

export function marshalPacket (o: conn.Packet, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePacket(bytes, bare);
}

export function marshalPacketPing (o: conn.PacketPing, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePacketPing(bytes, bare);
}

export function marshalPacketPong (o: conn.PacketPong, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePacketPong(bytes, bare);
}

export function marshalPacketMsg (o: conn.PacketMsg, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePacketMsg(bytes, bare);
}

export function marshalPexMessage (o: pex.PexMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePexMessage(bytes, bare);
}

export function marshalPexRequestMessage (o: pex.PexRequestMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePexRequestMessage(bytes, bare);
}

export function marshalPexAddrsMessage (o: pex.PexAddrsMessage, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePexAddrsMessage(bytes, bare);
}

export function marshalRemoteSignerMsg (o: privval.RemoteSignerMsg, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeRemoteSignerMsg(bytes, bare);
}

export function marshalPubKeyRequest (o: privval.PubKeyRequest, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePubKeyRequest(bytes, bare);
}

export function marshalPubKeyResponse (o: privval.PubKeyResponse, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePubKeyResponse(bytes, bare);
}

export function marshalSignVoteRequest (o: privval.SignVoteRequest, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeSignVoteRequest(bytes, bare);
}

export function marshalSignedVoteResponse (o: privval.SignedVoteResponse, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeSignedVoteResponse(bytes, bare);
}

export function marshalSignProposalRequest (o: privval.SignProposalRequest, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeSignProposalRequest(bytes, bare);
}

export function marshalSignedProposalResponse (o: privval.SignedProposalResponse, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeSignedProposalResponse(bytes, bare);
}

export function marshalPingRequest (o: privval.PingRequest, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePingRequest(bytes, bare);
}

export function marshalPingResponse (o: privval.PingResponse, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodePingResponse(bytes, bare);
}

export function marshalTMEventData (o: events.TMEventData, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeTMEventData(bytes, bare);
}

export function marshalEventDataNewBlock (o: events.EventDataNewBlock, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeEventDataNewBlock(bytes, bare);
}

export function marshalEventDataNewBlockHeader (o: events.EventDataNewBlockHeader, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeEventDataNewBlockHeader(bytes, bare);
}

export function marshalEventDataTx (o: events.EventDataTx, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeEventDataTx(bytes, bare);
}

export function marshalEventDataRoundState (o: events.EventDataRoundState, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeEventDataRoundState(bytes, bare);
}

export function marshalEventDataNewRound (o: events.EventDataNewRound, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeEventDataNewRound(bytes, bare);
}

export function marshalEventDataCompleteProposal (o: events.EventDataCompleteProposal, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeEventDataCompleteProposal(bytes, bare);
}

export function marshalEventDataVote (o: events.EventDataVote, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeEventDataVote(bytes, bare);
}

export function marshalEventDataValidatorSetUpdates (o: events.EventDataValidatorSetUpdates, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeEventDataValidatorSetUpdates(bytes, bare);
}

export function marshalEventDataString (o: events.EventDataString, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeEventDataString(bytes, bare);
}

export function marshalEvidence (o: evidence.Evidence, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeEvidence(bytes, bare);
}

export function marshalDuplicateVoteEvidence (o: evidence.DuplicateVoteEvidence, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeDuplicateVoteEvidence(bytes, bare);
}

export function marshalMockGoodEvidence (o: evidence.MockGoodEvidence, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMockGoodEvidence(bytes, bare);
}

export function marshalMockRandomGoodEvidence (o: evidence.MockRandomGoodEvidence, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMockRandomGoodEvidence(bytes, bare);
}

export function marshalMockBadEvidence (o: evidence.MockBadEvidence, bare: boolean = true): Uint8Array {
    const bytes = marshalJSON(o);
    return encodeType.encodeMockBadEvidence(bytes, bare);
}


