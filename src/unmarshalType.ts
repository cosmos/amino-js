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

export function unmarshalMultiStoreProofOp (bytes: Uint8Array, bare: boolean = true): rootmulti.MultiStoreProofOp {
    const json = decodeType.decodeMultiStoreProofOp(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalIAVLAbsenceOp (bytes: Uint8Array, bare: boolean = true): iavl.IAVLAbsenceOp {
    const json = decodeType.decodeIAVLAbsenceOp(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalIAVLValueOp (bytes: Uint8Array, bare: boolean = true): iavl.IAVLValueOp {
    const json = decodeType.decodeIAVLValueOp(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPrivKeyLedgerSecp256k1 (bytes: Uint8Array, bare: boolean = true): crypto.PrivKeyLedgerSecp256k1 {
    const json = decodeType.decodePrivKeyLedgerSecp256k1(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalInfo (bytes: Uint8Array, bare: boolean = true): keys.Info {
    const json = decodeType.decodeInfo(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalBIP44Params (bytes: Uint8Array, bare: boolean = true): keys.BIP44Params {
    const json = decodeType.decodeBIP44Params(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalLocalInfo (bytes: Uint8Array, bare: boolean = true): keys.LocalInfo {
    const json = decodeType.decodeLocalInfo(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalLedgerInfo (bytes: Uint8Array, bare: boolean = true): keys.LedgerInfo {
    const json = decodeType.decodeLedgerInfo(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalOfflineInfo (bytes: Uint8Array, bare: boolean = true): keys.OfflineInfo {
    const json = decodeType.decodeOfflineInfo(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMultiInfo (bytes: Uint8Array, bare: boolean = true): keys.MultiInfo {
    const json = decodeType.decodeMultiInfo(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsg (bytes: Uint8Array, bare: boolean = true): types.Msg {
    const json = decodeType.decodeMsg(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalTx (bytes: Uint8Array, bare: boolean = true): types.Tx {
    const json = decodeType.decodeTx(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalAccount (bytes: Uint8Array, bare: boolean = true): auth.Account {
    const json = decodeType.decodeAccount(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalVestingAccount (bytes: Uint8Array, bare: boolean = true): auth.VestingAccount {
    const json = decodeType.decodeVestingAccount(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalBaseAccount (bytes: Uint8Array, bare: boolean = true): auth.BaseAccount {
    const json = decodeType.decodeBaseAccount(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalBaseVestingAccount (bytes: Uint8Array, bare: boolean = true): auth.BaseVestingAccount {
    const json = decodeType.decodeBaseVestingAccount(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalContinuousVestingAccount (bytes: Uint8Array, bare: boolean = true): auth.ContinuousVestingAccount {
    const json = decodeType.decodeContinuousVestingAccount(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalDelayedVestingAccount (bytes: Uint8Array, bare: boolean = true): auth.DelayedVestingAccount {
    const json = decodeType.decodeDelayedVestingAccount(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalStdTx (bytes: Uint8Array, bare: boolean = true): auth.StdTx {
    const json = decodeType.decodeStdTx(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgSend (bytes: Uint8Array, bare: boolean = true): bank.MsgSend {
    const json = decodeType.decodeMsgSend(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgMultiSend (bytes: Uint8Array, bare: boolean = true): bank.MsgMultiSend {
    const json = decodeType.decodeMsgMultiSend(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgVerifyInvariant (bytes: Uint8Array, bare: boolean = true): crisis.MsgVerifyInvariant {
    const json = decodeType.decodeMsgVerifyInvariant(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgWithdrawDelegatorReward (bytes: Uint8Array, bare: boolean = true): distribution.MsgWithdrawDelegatorReward {
    const json = decodeType.decodeMsgWithdrawDelegatorReward(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgWithdrawValidatorCommission (bytes: Uint8Array, bare: boolean = true): distribution.MsgWithdrawValidatorCommission {
    const json = decodeType.decodeMsgWithdrawValidatorCommission(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgSetWithdrawAddress (bytes: Uint8Array, bare: boolean = true): distribution.MsgSetWithdrawAddress {
    const json = decodeType.decodeMsgSetWithdrawAddress(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalContent (bytes: Uint8Array, bare: boolean = true): gov.Content {
    const json = decodeType.decodeContent(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgSubmitProposal (bytes: Uint8Array, bare: boolean = true): gov.MsgSubmitProposal {
    const json = decodeType.decodeMsgSubmitProposal(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgDeposit (bytes: Uint8Array, bare: boolean = true): gov.MsgDeposit {
    const json = decodeType.decodeMsgDeposit(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgVote (bytes: Uint8Array, bare: boolean = true): gov.MsgVote {
    const json = decodeType.decodeMsgVote(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalTextProposal (bytes: Uint8Array, bare: boolean = true): gov.TextProposal {
    const json = decodeType.decodeTextProposal(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalSoftwareUpgradeProposal (bytes: Uint8Array, bare: boolean = true): gov.SoftwareUpgradeProposal {
    const json = decodeType.decodeSoftwareUpgradeProposal(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgIBCTransfer (bytes: Uint8Array, bare: boolean = true): ibc.MsgIBCTransfer {
    const json = decodeType.decodeMsgIBCTransfer(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgIBCReceive (bytes: Uint8Array, bare: boolean = true): ibc.MsgIBCReceive {
    const json = decodeType.decodeMsgIBCReceive(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalParameterChangeProposal (bytes: Uint8Array, bare: boolean = true): params.ParameterChangeProposal {
    const json = decodeType.decodeParameterChangeProposal(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgUnjail (bytes: Uint8Array, bare: boolean = true): slashing.MsgUnjail {
    const json = decodeType.decodeMsgUnjail(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgCreateValidator (bytes: Uint8Array, bare: boolean = true): staking.MsgCreateValidator {
    const json = decodeType.decodeMsgCreateValidator(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgEditValidator (bytes: Uint8Array, bare: boolean = true): staking.MsgEditValidator {
    const json = decodeType.decodeMsgEditValidator(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgDelegate (bytes: Uint8Array, bare: boolean = true): staking.MsgDelegate {
    const json = decodeType.decodeMsgDelegate(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgUndelegate (bytes: Uint8Array, bare: boolean = true): staking.MsgUndelegate {
    const json = decodeType.decodeMsgUndelegate(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgBeginRedelegate (bytes: Uint8Array, bare: boolean = true): staking.MsgBeginRedelegate {
    const json = decodeType.decodeMsgBeginRedelegate(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalBlockchainMessage (bytes: Uint8Array, bare: boolean = true): blockchain.BlockchainMessage {
    const json = decodeType.decodeBlockchainMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalBcBlockRequestMessage (bytes: Uint8Array, bare: boolean = true): blockchain.BcBlockRequestMessage {
    const json = decodeType.decodeBcBlockRequestMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalBcBlockResponseMessage (bytes: Uint8Array, bare: boolean = true): blockchain.BcBlockResponseMessage {
    const json = decodeType.decodeBcBlockResponseMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalBcNoBlockResponseMessage (bytes: Uint8Array, bare: boolean = true): blockchain.BcNoBlockResponseMessage {
    const json = decodeType.decodeBcNoBlockResponseMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalBcStatusResponseMessage (bytes: Uint8Array, bare: boolean = true): blockchain.BcStatusResponseMessage {
    const json = decodeType.decodeBcStatusResponseMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalBcStatusRequestMessage (bytes: Uint8Array, bare: boolean = true): blockchain.BcStatusRequestMessage {
    const json = decodeType.decodeBcStatusRequestMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalConsensusMessage (bytes: Uint8Array, bare: boolean = true): consensus.ConsensusMessage {
    const json = decodeType.decodeConsensusMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalNewRoundStepMessage (bytes: Uint8Array, bare: boolean = true): consensus.NewRoundStepMessage {
    const json = decodeType.decodeNewRoundStepMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalNewValidBlockMessage (bytes: Uint8Array, bare: boolean = true): consensus.NewValidBlockMessage {
    const json = decodeType.decodeNewValidBlockMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalProposalMessage (bytes: Uint8Array, bare: boolean = true): consensus.ProposalMessage {
    const json = decodeType.decodeProposalMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalProposalPOLMessage (bytes: Uint8Array, bare: boolean = true): consensus.ProposalPOLMessage {
    const json = decodeType.decodeProposalPOLMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalBlockPartMessage (bytes: Uint8Array, bare: boolean = true): consensus.BlockPartMessage {
    const json = decodeType.decodeBlockPartMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalVoteMessage (bytes: Uint8Array, bare: boolean = true): consensus.VoteMessage {
    const json = decodeType.decodeVoteMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalHasVoteMessage (bytes: Uint8Array, bare: boolean = true): consensus.HasVoteMessage {
    const json = decodeType.decodeHasVoteMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalVoteSetMaj23Message (bytes: Uint8Array, bare: boolean = true): consensus.VoteSetMaj23Message {
    const json = decodeType.decodeVoteSetMaj23Message(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalVoteSetBitsMessage (bytes: Uint8Array, bare: boolean = true): consensus.VoteSetBitsMessage {
    const json = decodeType.decodeVoteSetBitsMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalWALMessage (bytes: Uint8Array, bare: boolean = true): consensus.WALMessage {
    const json = decodeType.decodeWALMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMsgInfo (bytes: Uint8Array, bare: boolean = true): consensus.MsgInfo {
    const json = decodeType.decodeMsgInfo(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalTimeoutInfo (bytes: Uint8Array, bare: boolean = true): consensus.TimeoutInfo {
    const json = decodeType.decodeTimeoutInfo(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalEndHeightMessage (bytes: Uint8Array, bare: boolean = true): consensus.EndHeightMessage {
    const json = decodeType.decodeEndHeightMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPubKey (bytes: Uint8Array, bare: boolean = true): crypto.PubKey {
    const json = decodeType.decodePubKey(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPrivKey (bytes: Uint8Array, bare: boolean = true): crypto.PrivKey {
    const json = decodeType.decodePrivKey(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPubKeyEd25519 (bytes: Uint8Array, bare: boolean = true): crypto.PubKeyEd25519 {
    const json = decodeType.decodePubKeyEd25519(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPrivKeyEd25519 (bytes: Uint8Array, bare: boolean = true): crypto.PrivKeyEd25519 {
    const json = decodeType.decodePrivKeyEd25519(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPubKeySecp256k1 (bytes: Uint8Array, bare: boolean = true): crypto.PubKeySecp256k1 {
    const json = decodeType.decodePubKeySecp256k1(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPrivKeySecp256k1 (bytes: Uint8Array, bare: boolean = true): crypto.PrivKeySecp256k1 {
    const json = decodeType.decodePrivKeySecp256k1(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPubKeyMultisigThreshold (bytes: Uint8Array, bare: boolean = true): crypto.PubKeyMultisigThreshold {
    const json = decodeType.decodePubKeyMultisigThreshold(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalEvidenceMessage (bytes: Uint8Array, bare: boolean = true): evidence.EvidenceMessage {
    const json = decodeType.decodeEvidenceMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalEvidenceListMessage (bytes: Uint8Array, bare: boolean = true): evidence.EvidenceListMessage {
    const json = decodeType.decodeEvidenceListMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMempoolMessage (bytes: Uint8Array, bare: boolean = true): mempool.MempoolMessage {
    const json = decodeType.decodeMempoolMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalTxMessage (bytes: Uint8Array, bare: boolean = true): mempool.TxMessage {
    const json = decodeType.decodeTxMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPacket (bytes: Uint8Array, bare: boolean = true): conn.Packet {
    const json = decodeType.decodePacket(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPacketPing (bytes: Uint8Array, bare: boolean = true): conn.PacketPing {
    const json = decodeType.decodePacketPing(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPacketPong (bytes: Uint8Array, bare: boolean = true): conn.PacketPong {
    const json = decodeType.decodePacketPong(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPacketMsg (bytes: Uint8Array, bare: boolean = true): conn.PacketMsg {
    const json = decodeType.decodePacketMsg(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPexMessage (bytes: Uint8Array, bare: boolean = true): pex.PexMessage {
    const json = decodeType.decodePexMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPexRequestMessage (bytes: Uint8Array, bare: boolean = true): pex.PexRequestMessage {
    const json = decodeType.decodePexRequestMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPexAddrsMessage (bytes: Uint8Array, bare: boolean = true): pex.PexAddrsMessage {
    const json = decodeType.decodePexAddrsMessage(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalRemoteSignerMsg (bytes: Uint8Array, bare: boolean = true): privval.RemoteSignerMsg {
    const json = decodeType.decodeRemoteSignerMsg(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPubKeyRequest (bytes: Uint8Array, bare: boolean = true): privval.PubKeyRequest {
    const json = decodeType.decodePubKeyRequest(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPubKeyResponse (bytes: Uint8Array, bare: boolean = true): privval.PubKeyResponse {
    const json = decodeType.decodePubKeyResponse(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalSignVoteRequest (bytes: Uint8Array, bare: boolean = true): privval.SignVoteRequest {
    const json = decodeType.decodeSignVoteRequest(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalSignedVoteResponse (bytes: Uint8Array, bare: boolean = true): privval.SignedVoteResponse {
    const json = decodeType.decodeSignedVoteResponse(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalSignProposalRequest (bytes: Uint8Array, bare: boolean = true): privval.SignProposalRequest {
    const json = decodeType.decodeSignProposalRequest(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalSignedProposalResponse (bytes: Uint8Array, bare: boolean = true): privval.SignedProposalResponse {
    const json = decodeType.decodeSignedProposalResponse(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPingRequest (bytes: Uint8Array, bare: boolean = true): privval.PingRequest {
    const json = decodeType.decodePingRequest(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalPingResponse (bytes: Uint8Array, bare: boolean = true): privval.PingResponse {
    const json = decodeType.decodePingResponse(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalTMEventData (bytes: Uint8Array, bare: boolean = true): events.TMEventData {
    const json = decodeType.decodeTMEventData(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalEventDataNewBlock (bytes: Uint8Array, bare: boolean = true): events.EventDataNewBlock {
    const json = decodeType.decodeEventDataNewBlock(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalEventDataNewBlockHeader (bytes: Uint8Array, bare: boolean = true): events.EventDataNewBlockHeader {
    const json = decodeType.decodeEventDataNewBlockHeader(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalEventDataTx (bytes: Uint8Array, bare: boolean = true): events.EventDataTx {
    const json = decodeType.decodeEventDataTx(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalEventDataRoundState (bytes: Uint8Array, bare: boolean = true): events.EventDataRoundState {
    const json = decodeType.decodeEventDataRoundState(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalEventDataNewRound (bytes: Uint8Array, bare: boolean = true): events.EventDataNewRound {
    const json = decodeType.decodeEventDataNewRound(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalEventDataCompleteProposal (bytes: Uint8Array, bare: boolean = true): events.EventDataCompleteProposal {
    const json = decodeType.decodeEventDataCompleteProposal(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalEventDataVote (bytes: Uint8Array, bare: boolean = true): events.EventDataVote {
    const json = decodeType.decodeEventDataVote(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalEventDataValidatorSetUpdates (bytes: Uint8Array, bare: boolean = true): events.EventDataValidatorSetUpdates {
    const json = decodeType.decodeEventDataValidatorSetUpdates(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalEventDataString (bytes: Uint8Array, bare: boolean = true): events.EventDataString {
    const json = decodeType.decodeEventDataString(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalEvidence (bytes: Uint8Array, bare: boolean = true): evidence.Evidence {
    const json = decodeType.decodeEvidence(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalDuplicateVoteEvidence (bytes: Uint8Array, bare: boolean = true): evidence.DuplicateVoteEvidence {
    const json = decodeType.decodeDuplicateVoteEvidence(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMockGoodEvidence (bytes: Uint8Array, bare: boolean = true): evidence.MockGoodEvidence {
    const json = decodeType.decodeMockGoodEvidence(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMockRandomGoodEvidence (bytes: Uint8Array, bare: boolean = true): evidence.MockRandomGoodEvidence {
    const json = decodeType.decodeMockRandomGoodEvidence(bytes, bare);
    return unmarshalJSON(json);
}

export function unmarshalMockBadEvidence (bytes: Uint8Array, bare: boolean = true): evidence.MockBadEvidence {
    const json = decodeType.decodeMockBadEvidence(bytes, bare);
    return unmarshalJSON(json);
}
