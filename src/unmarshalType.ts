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
import * as decodeType from './decodeType';
import { unmarshalJSON } from './util';

export function unmarshalMultiStoreProofOp (amino: Uint8Array, lengthPrefixed: boolean = true): rootmulti.MultiStoreProofOp {
    const json = decodeType.decodeMultiStoreProofOp(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalIAVLAbsenceOp (amino: Uint8Array, lengthPrefixed: boolean = true): iavl.IAVLAbsenceOp {
    const json = decodeType.decodeIAVLAbsenceOp(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalIAVLValueOp (amino: Uint8Array, lengthPrefixed: boolean = true): iavl.IAVLValueOp {
    const json = decodeType.decodeIAVLValueOp(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPrivKeyLedgerSecp256k1 (amino: Uint8Array, lengthPrefixed: boolean = true): crypto.PrivKeyLedgerSecp256k1 {
    const json = decodeType.decodePrivKeyLedgerSecp256k1(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalInfo (amino: Uint8Array, lengthPrefixed: boolean = true): keys.Info {
    const json = decodeType.decodeInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBIP44Params (amino: Uint8Array, lengthPrefixed: boolean = true): keys.BIP44Params {
    const json = decodeType.decodeBIP44Params(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalLocalInfo (amino: Uint8Array, lengthPrefixed: boolean = true): keys.LocalInfo {
    const json = decodeType.decodeLocalInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalLedgerInfo (amino: Uint8Array, lengthPrefixed: boolean = true): keys.LedgerInfo {
    const json = decodeType.decodeLedgerInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalOfflineInfo (amino: Uint8Array, lengthPrefixed: boolean = true): keys.OfflineInfo {
    const json = decodeType.decodeOfflineInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMultiInfo (amino: Uint8Array, lengthPrefixed: boolean = true): keys.MultiInfo {
    const json = decodeType.decodeMultiInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsg (amino: Uint8Array, lengthPrefixed: boolean = true): types.Msg {
    const json = decodeType.decodeMsg(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalTx (amino: Uint8Array, lengthPrefixed: boolean = true): types.Tx {
    const json = decodeType.decodeTx(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalAccount (amino: Uint8Array, lengthPrefixed: boolean = true): auth.Account {
    const json = decodeType.decodeAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalVestingAccount (amino: Uint8Array, lengthPrefixed: boolean = true): auth.VestingAccount {
    const json = decodeType.decodeVestingAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBaseAccount (amino: Uint8Array, lengthPrefixed: boolean = true): auth.BaseAccount {
    const json = decodeType.decodeBaseAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBaseVestingAccount (amino: Uint8Array, lengthPrefixed: boolean = true): auth.BaseVestingAccount {
    const json = decodeType.decodeBaseVestingAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalContinuousVestingAccount (amino: Uint8Array, lengthPrefixed: boolean = true): auth.ContinuousVestingAccount {
    const json = decodeType.decodeContinuousVestingAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalDelayedVestingAccount (amino: Uint8Array, lengthPrefixed: boolean = true): auth.DelayedVestingAccount {
    const json = decodeType.decodeDelayedVestingAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalStdTx (amino: Uint8Array, lengthPrefixed: boolean = true): auth.StdTx {
    const json = decodeType.decodeStdTx(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgSend (amino: Uint8Array, lengthPrefixed: boolean = true): bank.MsgSend {
    const json = decodeType.decodeMsgSend(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgMultiSend (amino: Uint8Array, lengthPrefixed: boolean = true): bank.MsgMultiSend {
    const json = decodeType.decodeMsgMultiSend(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgVerifyInvariant (amino: Uint8Array, lengthPrefixed: boolean = true): crisis.MsgVerifyInvariant {
    const json = decodeType.decodeMsgVerifyInvariant(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgWithdrawDelegatorReward (amino: Uint8Array, lengthPrefixed: boolean = true): distribution.MsgWithdrawDelegatorReward {
    const json = decodeType.decodeMsgWithdrawDelegatorReward(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgWithdrawValidatorCommission (amino: Uint8Array, lengthPrefixed: boolean = true): distribution.MsgWithdrawValidatorCommission {
    const json = decodeType.decodeMsgWithdrawValidatorCommission(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgSetWithdrawAddress (amino: Uint8Array, lengthPrefixed: boolean = true): distribution.MsgSetWithdrawAddress {
    const json = decodeType.decodeMsgSetWithdrawAddress(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalContent (amino: Uint8Array, lengthPrefixed: boolean = true): gov.Content {
    const json = decodeType.decodeContent(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgSubmitProposal (amino: Uint8Array, lengthPrefixed: boolean = true): gov.MsgSubmitProposal {
    const json = decodeType.decodeMsgSubmitProposal(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgDeposit (amino: Uint8Array, lengthPrefixed: boolean = true): gov.MsgDeposit {
    const json = decodeType.decodeMsgDeposit(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgVote (amino: Uint8Array, lengthPrefixed: boolean = true): gov.MsgVote {
    const json = decodeType.decodeMsgVote(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalTextProposal (amino: Uint8Array, lengthPrefixed: boolean = true): gov.TextProposal {
    const json = decodeType.decodeTextProposal(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalSoftwareUpgradeProposal (amino: Uint8Array, lengthPrefixed: boolean = true): gov.SoftwareUpgradeProposal {
    const json = decodeType.decodeSoftwareUpgradeProposal(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgIBCTransfer (amino: Uint8Array, lengthPrefixed: boolean = true): ibc.MsgIBCTransfer {
    const json = decodeType.decodeMsgIBCTransfer(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgIBCReceive (amino: Uint8Array, lengthPrefixed: boolean = true): ibc.MsgIBCReceive {
    const json = decodeType.decodeMsgIBCReceive(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalParameterChangeProposal (amino: Uint8Array, lengthPrefixed: boolean = true): params.ParameterChangeProposal {
    const json = decodeType.decodeParameterChangeProposal(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgUnjail (amino: Uint8Array, lengthPrefixed: boolean = true): slashing.MsgUnjail {
    const json = decodeType.decodeMsgUnjail(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgCreateValidator (amino: Uint8Array, lengthPrefixed: boolean = true): staking.MsgCreateValidator {
    const json = decodeType.decodeMsgCreateValidator(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgEditValidator (amino: Uint8Array, lengthPrefixed: boolean = true): staking.MsgEditValidator {
    const json = decodeType.decodeMsgEditValidator(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgDelegate (amino: Uint8Array, lengthPrefixed: boolean = true): staking.MsgDelegate {
    const json = decodeType.decodeMsgDelegate(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgUndelegate (amino: Uint8Array, lengthPrefixed: boolean = true): staking.MsgUndelegate {
    const json = decodeType.decodeMsgUndelegate(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgBeginRedelegate (amino: Uint8Array, lengthPrefixed: boolean = true): staking.MsgBeginRedelegate {
    const json = decodeType.decodeMsgBeginRedelegate(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBlockchainMessage (amino: Uint8Array, lengthPrefixed: boolean = true): blockchain.BlockchainMessage {
    const json = decodeType.decodeBlockchainMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBcBlockRequestMessage (amino: Uint8Array, lengthPrefixed: boolean = true): blockchain.BcBlockRequestMessage {
    const json = decodeType.decodeBcBlockRequestMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBcBlockResponseMessage (amino: Uint8Array, lengthPrefixed: boolean = true): blockchain.BcBlockResponseMessage {
    const json = decodeType.decodeBcBlockResponseMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBcNoBlockResponseMessage (amino: Uint8Array, lengthPrefixed: boolean = true): blockchain.BcNoBlockResponseMessage {
    const json = decodeType.decodeBcNoBlockResponseMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBcStatusResponseMessage (amino: Uint8Array, lengthPrefixed: boolean = true): blockchain.BcStatusResponseMessage {
    const json = decodeType.decodeBcStatusResponseMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBcStatusRequestMessage (amino: Uint8Array, lengthPrefixed: boolean = true): blockchain.BcStatusRequestMessage {
    const json = decodeType.decodeBcStatusRequestMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalConsensusMessage (amino: Uint8Array, lengthPrefixed: boolean = true): consensus.ConsensusMessage {
    const json = decodeType.decodeConsensusMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalNewRoundStepMessage (amino: Uint8Array, lengthPrefixed: boolean = true): consensus.NewRoundStepMessage {
    const json = decodeType.decodeNewRoundStepMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalNewValidBlockMessage (amino: Uint8Array, lengthPrefixed: boolean = true): consensus.NewValidBlockMessage {
    const json = decodeType.decodeNewValidBlockMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalProposalMessage (amino: Uint8Array, lengthPrefixed: boolean = true): consensus.ProposalMessage {
    const json = decodeType.decodeProposalMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalProposalPOLMessage (amino: Uint8Array, lengthPrefixed: boolean = true): consensus.ProposalPOLMessage {
    const json = decodeType.decodeProposalPOLMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBlockPartMessage (amino: Uint8Array, lengthPrefixed: boolean = true): consensus.BlockPartMessage {
    const json = decodeType.decodeBlockPartMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalVoteMessage (amino: Uint8Array, lengthPrefixed: boolean = true): consensus.VoteMessage {
    const json = decodeType.decodeVoteMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalHasVoteMessage (amino: Uint8Array, lengthPrefixed: boolean = true): consensus.HasVoteMessage {
    const json = decodeType.decodeHasVoteMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalVoteSetMaj23Message (amino: Uint8Array, lengthPrefixed: boolean = true): consensus.VoteSetMaj23Message {
    const json = decodeType.decodeVoteSetMaj23Message(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalVoteSetBitsMessage (amino: Uint8Array, lengthPrefixed: boolean = true): consensus.VoteSetBitsMessage {
    const json = decodeType.decodeVoteSetBitsMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalWALMessage (amino: Uint8Array, lengthPrefixed: boolean = true): consensus.WALMessage {
    const json = decodeType.decodeWALMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgInfo (amino: Uint8Array, lengthPrefixed: boolean = true): consensus.MsgInfo {
    const json = decodeType.decodeMsgInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalTimeoutInfo (amino: Uint8Array, lengthPrefixed: boolean = true): consensus.TimeoutInfo {
    const json = decodeType.decodeTimeoutInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEndHeightMessage (amino: Uint8Array, lengthPrefixed: boolean = true): consensus.EndHeightMessage {
    const json = decodeType.decodeEndHeightMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPubKey (amino: Uint8Array, lengthPrefixed: boolean = true): crypto.PubKey {
    const json = decodeType.decodePubKey(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPrivKey (amino: Uint8Array, lengthPrefixed: boolean = true): crypto.PrivKey {
    const json = decodeType.decodePrivKey(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPubKeyEd25519 (amino: Uint8Array, lengthPrefixed: boolean = true): crypto.PubKeyEd25519 {
    const json = decodeType.decodePubKeyEd25519(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPrivKeyEd25519 (amino: Uint8Array, lengthPrefixed: boolean = true): crypto.PrivKeyEd25519 {
    const json = decodeType.decodePrivKeyEd25519(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPubKeySecp256k1 (amino: Uint8Array, lengthPrefixed: boolean = true): crypto.PubKeySecp256k1 {
    const json = decodeType.decodePubKeySecp256k1(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPrivKeySecp256k1 (amino: Uint8Array, lengthPrefixed: boolean = true): crypto.PrivKeySecp256k1 {
    const json = decodeType.decodePrivKeySecp256k1(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPubKeyMultisigThreshold (amino: Uint8Array, lengthPrefixed: boolean = true): crypto.PubKeyMultisigThreshold {
    const json = decodeType.decodePubKeyMultisigThreshold(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEvidenceMessage (amino: Uint8Array, lengthPrefixed: boolean = true): evidence.EvidenceMessage {
    const json = decodeType.decodeEvidenceMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEvidenceListMessage (amino: Uint8Array, lengthPrefixed: boolean = true): evidence.EvidenceListMessage {
    const json = decodeType.decodeEvidenceListMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMempoolMessage (amino: Uint8Array, lengthPrefixed: boolean = true): mempool.MempoolMessage {
    const json = decodeType.decodeMempoolMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalTxMessage (amino: Uint8Array, lengthPrefixed: boolean = true): mempool.TxMessage {
    const json = decodeType.decodeTxMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPacket (amino: Uint8Array, lengthPrefixed: boolean = true): conn.Packet {
    const json = decodeType.decodePacket(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPacketPing (amino: Uint8Array, lengthPrefixed: boolean = true): conn.PacketPing {
    const json = decodeType.decodePacketPing(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPacketPong (amino: Uint8Array, lengthPrefixed: boolean = true): conn.PacketPong {
    const json = decodeType.decodePacketPong(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPacketMsg (amino: Uint8Array, lengthPrefixed: boolean = true): conn.PacketMsg {
    const json = decodeType.decodePacketMsg(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPexMessage (amino: Uint8Array, lengthPrefixed: boolean = true): pex.PexMessage {
    const json = decodeType.decodePexMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPexRequestMessage (amino: Uint8Array, lengthPrefixed: boolean = true): pex.PexRequestMessage {
    const json = decodeType.decodePexRequestMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPexAddrsMessage (amino: Uint8Array, lengthPrefixed: boolean = true): pex.PexAddrsMessage {
    const json = decodeType.decodePexAddrsMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalRemoteSignerMsg (amino: Uint8Array, lengthPrefixed: boolean = true): privval.RemoteSignerMsg {
    const json = decodeType.decodeRemoteSignerMsg(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPubKeyRequest (amino: Uint8Array, lengthPrefixed: boolean = true): privval.PubKeyRequest {
    const json = decodeType.decodePubKeyRequest(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPubKeyResponse (amino: Uint8Array, lengthPrefixed: boolean = true): privval.PubKeyResponse {
    const json = decodeType.decodePubKeyResponse(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalSignVoteRequest (amino: Uint8Array, lengthPrefixed: boolean = true): privval.SignVoteRequest {
    const json = decodeType.decodeSignVoteRequest(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalSignedVoteResponse (amino: Uint8Array, lengthPrefixed: boolean = true): privval.SignedVoteResponse {
    const json = decodeType.decodeSignedVoteResponse(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalSignProposalRequest (amino: Uint8Array, lengthPrefixed: boolean = true): privval.SignProposalRequest {
    const json = decodeType.decodeSignProposalRequest(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalSignedProposalResponse (amino: Uint8Array, lengthPrefixed: boolean = true): privval.SignedProposalResponse {
    const json = decodeType.decodeSignedProposalResponse(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPingRequest (amino: Uint8Array, lengthPrefixed: boolean = true): privval.PingRequest {
    const json = decodeType.decodePingRequest(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPingResponse (amino: Uint8Array, lengthPrefixed: boolean = true): privval.PingResponse {
    const json = decodeType.decodePingResponse(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalTMEventData (amino: Uint8Array, lengthPrefixed: boolean = true): events.TMEventData {
    const json = decodeType.decodeTMEventData(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataNewBlock (amino: Uint8Array, lengthPrefixed: boolean = true): events.EventDataNewBlock {
    const json = decodeType.decodeEventDataNewBlock(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataNewBlockHeader (amino: Uint8Array, lengthPrefixed: boolean = true): events.EventDataNewBlockHeader {
    const json = decodeType.decodeEventDataNewBlockHeader(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataTx (amino: Uint8Array, lengthPrefixed: boolean = true): events.EventDataTx {
    const json = decodeType.decodeEventDataTx(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataRoundState (amino: Uint8Array, lengthPrefixed: boolean = true): events.EventDataRoundState {
    const json = decodeType.decodeEventDataRoundState(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataNewRound (amino: Uint8Array, lengthPrefixed: boolean = true): events.EventDataNewRound {
    const json = decodeType.decodeEventDataNewRound(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataCompleteProposal (amino: Uint8Array, lengthPrefixed: boolean = true): events.EventDataCompleteProposal {
    const json = decodeType.decodeEventDataCompleteProposal(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataVote (amino: Uint8Array, lengthPrefixed: boolean = true): events.EventDataVote {
    const json = decodeType.decodeEventDataVote(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataValidatorSetUpdates (amino: Uint8Array, lengthPrefixed: boolean = true): events.EventDataValidatorSetUpdates {
    const json = decodeType.decodeEventDataValidatorSetUpdates(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataString (amino: Uint8Array, lengthPrefixed: boolean = true): events.EventDataString {
    const json = decodeType.decodeEventDataString(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEvidence (amino: Uint8Array, lengthPrefixed: boolean = true): evidence.Evidence {
    const json = decodeType.decodeEvidence(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalDuplicateVoteEvidence (amino: Uint8Array, lengthPrefixed: boolean = true): evidence.DuplicateVoteEvidence {
    const json = decodeType.decodeDuplicateVoteEvidence(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMockGoodEvidence (amino: Uint8Array, lengthPrefixed: boolean = true): evidence.MockGoodEvidence {
    const json = decodeType.decodeMockGoodEvidence(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMockRandomGoodEvidence (amino: Uint8Array, lengthPrefixed: boolean = true): evidence.MockRandomGoodEvidence {
    const json = decodeType.decodeMockRandomGoodEvidence(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMockBadEvidence (amino: Uint8Array, lengthPrefixed: boolean = true): evidence.MockBadEvidence {
    const json = decodeType.decodeMockBadEvidence(amino, lengthPrefixed);
    return unmarshalJSON(json);
}
