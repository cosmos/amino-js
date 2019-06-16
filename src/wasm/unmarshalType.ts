import { AminoBytes } from '../../lib/bytes';
import {
    Account,
    BaseAccount,
    BaseVestingAccount,
    BcBlockRequestMessage,
    BcBlockResponseMessage,
    BcNoBlockResponseMessage,
    BcStatusRequestMessage,
    BcStatusResponseMessage,
    BIP44Params,
    BlockchainMessage,
    BlockPartMessage,
    ConsensusMessage,
    Content,
    ContinuousVestingAccount,
    DelayedVestingAccount,
    DuplicateVoteEvidence,
    EndHeightMessage,
    EventDataCompleteProposal,
    EventDataNewBlock,
    EventDataNewBlockHeader,
    EventDataNewRound,
    EventDataRoundState,
    EventDataString,
    EventDataTx,
    EventDataValidatorSetUpdates,
    EventDataVote,
    Evidence,
    EvidenceListMessage,
    EvidenceMessage,
    HasVoteMessage,
    IAVLAbsenceOp,
    IAVLValueOp,
    Info,
    LedgerInfo,
    LocalInfo,
    MempoolMessage,
    MockBadEvidence,
    MockGoodEvidence,
    MockRandomGoodEvidence,
    Msg,
    MsgBeginRedelegate,
    MsgCreateValidator,
    MsgDelegate,
    MsgDeposit,
    MsgEditValidator,
    MsgIBCReceive,
    MsgIBCTransfer,
    MsgInfo,
    MsgMultiSend,
    MsgSend,
    MsgSetWithdrawAddress,
    MsgSubmitProposal,
    MsgUndelegate,
    MsgUnjail,
    MsgVerifyInvariant,
    MsgVote,
    MsgWithdrawDelegatorReward,
    MsgWithdrawValidatorCommission,
    MultiInfo,
    MultiStoreProofOp,
    NewRoundStepMessage,
    NewValidBlockMessage,
    OfflineInfo,
    Packet,
    PacketMsg,
    PacketPing,
    PacketPong,
    ParameterChangeProposal,
    PexAddrsMessage,
    PexMessage,
    PexRequestMessage,
    PingRequest,
    PingResponse,
    PrivKey,
    PrivKeyEd25519,
    PrivKeyLedgerSecp256k1,
    PrivKeySecp256k1,
    ProposalMessage,
    ProposalPOLMessage,
    PubKey,
    PubKeyEd25519,
    PubKeyMultisigThreshold,
    PubKeyRequest,
    PubKeyResponse,
    PubKeySecp256k1,
    RemoteSignerMsg,
    SignedProposalResponse,
    SignedVoteResponse,
    SignProposalRequest,
    SignVoteRequest,
    SoftwareUpgradeProposal,
    StdTx,
    TextProposal,
    TimeoutInfo,
    TMEventData,
    Tx,
    TxMessage,
    VestingAccount,
    VoteMessage,
    VoteSetBitsMessage,
    VoteSetMaj23Message,
    WALMessage
} from '../types';
import { unmarshalJSON } from '../util';
import * as decodeType from './decodeType';

export function unmarshalMultiStoreProofOp (amino: AminoBytes, lengthPrefixed: boolean = true): MultiStoreProofOp {
    const json = decodeType.decodeMultiStoreProofOp(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalIAVLAbsenceOp (amino: AminoBytes, lengthPrefixed: boolean = true): IAVLAbsenceOp {
    const json = decodeType.decodeIAVLAbsenceOp(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalIAVLValueOp (amino: AminoBytes, lengthPrefixed: boolean = true): IAVLValueOp {
    const json = decodeType.decodeIAVLValueOp(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPrivKeyLedgerSecp256k1 (amino: AminoBytes, lengthPrefixed: boolean = true): PrivKeyLedgerSecp256k1 {
    const json = decodeType.decodePrivKeyLedgerSecp256k1(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalInfo (amino: AminoBytes, lengthPrefixed: boolean = true): Info {
    const json = decodeType.decodeInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBIP44Params (amino: AminoBytes, lengthPrefixed: boolean = true): BIP44Params {
    const json = decodeType.decodeBIP44Params(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalLocalInfo (amino: AminoBytes, lengthPrefixed: boolean = true): LocalInfo {
    const json = decodeType.decodeLocalInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalLedgerInfo (amino: AminoBytes, lengthPrefixed: boolean = true): LedgerInfo {
    const json = decodeType.decodeLedgerInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalOfflineInfo (amino: AminoBytes, lengthPrefixed: boolean = true): OfflineInfo {
    const json = decodeType.decodeOfflineInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMultiInfo (amino: AminoBytes, lengthPrefixed: boolean = true): MultiInfo {
    const json = decodeType.decodeMultiInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsg (amino: AminoBytes, lengthPrefixed: boolean = true): Msg {
    const json = decodeType.decodeMsg(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalTx (amino: AminoBytes, lengthPrefixed: boolean = true): Tx {
    const json = decodeType.decodeTx(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalAccount (amino: AminoBytes, lengthPrefixed: boolean = true): Account {
    const json = decodeType.decodeAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalVestingAccount (amino: AminoBytes, lengthPrefixed: boolean = true): VestingAccount {
    const json = decodeType.decodeVestingAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBaseAccount (amino: AminoBytes, lengthPrefixed: boolean = true): BaseAccount {
    const json = decodeType.decodeBaseAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBaseVestingAccount (amino: AminoBytes, lengthPrefixed: boolean = true): BaseVestingAccount {
    const json = decodeType.decodeBaseVestingAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalContinuousVestingAccount (amino: AminoBytes, lengthPrefixed: boolean = true): ContinuousVestingAccount {
    const json = decodeType.decodeContinuousVestingAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalDelayedVestingAccount (amino: AminoBytes, lengthPrefixed: boolean = true): DelayedVestingAccount {
    const json = decodeType.decodeDelayedVestingAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalStdTx (amino: AminoBytes, lengthPrefixed: boolean = true): StdTx {
    const json = decodeType.decodeStdTx(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgSend (amino: AminoBytes, lengthPrefixed: boolean = true): MsgSend {
    const json = decodeType.decodeMsgSend(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgMultiSend (amino: AminoBytes, lengthPrefixed: boolean = true): MsgMultiSend {
    const json = decodeType.decodeMsgMultiSend(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgVerifyInvariant (amino: AminoBytes, lengthPrefixed: boolean = true): MsgVerifyInvariant {
    const json = decodeType.decodeMsgVerifyInvariant(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgWithdrawDelegatorReward (amino: AminoBytes, lengthPrefixed: boolean = true): MsgWithdrawDelegatorReward {
    const json = decodeType.decodeMsgWithdrawDelegatorReward(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgWithdrawValidatorCommission (amino: AminoBytes, lengthPrefixed: boolean = true): MsgWithdrawValidatorCommission {
    const json = decodeType.decodeMsgWithdrawValidatorCommission(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgSetWithdrawAddress (amino: AminoBytes, lengthPrefixed: boolean = true): MsgSetWithdrawAddress {
    const json = decodeType.decodeMsgSetWithdrawAddress(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalContent (amino: AminoBytes, lengthPrefixed: boolean = true): Content {
    const json = decodeType.decodeContent(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgSubmitProposal (amino: AminoBytes, lengthPrefixed: boolean = true): MsgSubmitProposal {
    const json = decodeType.decodeMsgSubmitProposal(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgDeposit (amino: AminoBytes, lengthPrefixed: boolean = true): MsgDeposit {
    const json = decodeType.decodeMsgDeposit(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgVote (amino: AminoBytes, lengthPrefixed: boolean = true): MsgVote {
    const json = decodeType.decodeMsgVote(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalTextProposal (amino: AminoBytes, lengthPrefixed: boolean = true): TextProposal {
    const json = decodeType.decodeTextProposal(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalSoftwareUpgradeProposal (amino: AminoBytes, lengthPrefixed: boolean = true): SoftwareUpgradeProposal {
    const json = decodeType.decodeSoftwareUpgradeProposal(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgIBCTransfer (amino: AminoBytes, lengthPrefixed: boolean = true): MsgIBCTransfer {
    const json = decodeType.decodeMsgIBCTransfer(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgIBCReceive (amino: AminoBytes, lengthPrefixed: boolean = true): MsgIBCReceive {
    const json = decodeType.decodeMsgIBCReceive(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalParameterChangeProposal (amino: AminoBytes, lengthPrefixed: boolean = true): ParameterChangeProposal {
    const json = decodeType.decodeParameterChangeProposal(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgUnjail (amino: AminoBytes, lengthPrefixed: boolean = true): MsgUnjail {
    const json = decodeType.decodeMsgUnjail(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgCreateValidator (amino: AminoBytes, lengthPrefixed: boolean = true): MsgCreateValidator {
    const json = decodeType.decodeMsgCreateValidator(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgEditValidator (amino: AminoBytes, lengthPrefixed: boolean = true): MsgEditValidator {
    const json = decodeType.decodeMsgEditValidator(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgDelegate (amino: AminoBytes, lengthPrefixed: boolean = true): MsgDelegate {
    const json = decodeType.decodeMsgDelegate(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgUndelegate (amino: AminoBytes, lengthPrefixed: boolean = true): MsgUndelegate {
    const json = decodeType.decodeMsgUndelegate(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgBeginRedelegate (amino: AminoBytes, lengthPrefixed: boolean = true): MsgBeginRedelegate {
    const json = decodeType.decodeMsgBeginRedelegate(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBlockchainMessage (amino: AminoBytes, lengthPrefixed: boolean = true): BlockchainMessage {
    const json = decodeType.decodeBlockchainMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBcBlockRequestMessage (amino: AminoBytes, lengthPrefixed: boolean = true): BcBlockRequestMessage {
    const json = decodeType.decodeBcBlockRequestMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBcBlockResponseMessage (amino: AminoBytes, lengthPrefixed: boolean = true): BcBlockResponseMessage {
    const json = decodeType.decodeBcBlockResponseMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBcNoBlockResponseMessage (amino: AminoBytes, lengthPrefixed: boolean = true): BcNoBlockResponseMessage {
    const json = decodeType.decodeBcNoBlockResponseMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBcStatusResponseMessage (amino: AminoBytes, lengthPrefixed: boolean = true): BcStatusResponseMessage {
    const json = decodeType.decodeBcStatusResponseMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBcStatusRequestMessage (amino: AminoBytes, lengthPrefixed: boolean = true): BcStatusRequestMessage {
    const json = decodeType.decodeBcStatusRequestMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalConsensusMessage (amino: AminoBytes, lengthPrefixed: boolean = true): ConsensusMessage {
    const json = decodeType.decodeConsensusMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalNewRoundStepMessage (amino: AminoBytes, lengthPrefixed: boolean = true): NewRoundStepMessage {
    const json = decodeType.decodeNewRoundStepMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalNewValidBlockMessage (amino: AminoBytes, lengthPrefixed: boolean = true): NewValidBlockMessage {
    const json = decodeType.decodeNewValidBlockMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalProposalMessage (amino: AminoBytes, lengthPrefixed: boolean = true): ProposalMessage {
    const json = decodeType.decodeProposalMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalProposalPOLMessage (amino: AminoBytes, lengthPrefixed: boolean = true): ProposalPOLMessage {
    const json = decodeType.decodeProposalPOLMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalBlockPartMessage (amino: AminoBytes, lengthPrefixed: boolean = true): BlockPartMessage {
    const json = decodeType.decodeBlockPartMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalVoteMessage (amino: AminoBytes, lengthPrefixed: boolean = true): VoteMessage {
    const json = decodeType.decodeVoteMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalHasVoteMessage (amino: AminoBytes, lengthPrefixed: boolean = true): HasVoteMessage {
    const json = decodeType.decodeHasVoteMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalVoteSetMaj23Message (amino: AminoBytes, lengthPrefixed: boolean = true): VoteSetMaj23Message {
    const json = decodeType.decodeVoteSetMaj23Message(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalVoteSetBitsMessage (amino: AminoBytes, lengthPrefixed: boolean = true): VoteSetBitsMessage {
    const json = decodeType.decodeVoteSetBitsMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalWALMessage (amino: AminoBytes, lengthPrefixed: boolean = true): WALMessage {
    const json = decodeType.decodeWALMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMsgInfo (amino: AminoBytes, lengthPrefixed: boolean = true): MsgInfo {
    const json = decodeType.decodeMsgInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalTimeoutInfo (amino: AminoBytes, lengthPrefixed: boolean = true): TimeoutInfo {
    const json = decodeType.decodeTimeoutInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEndHeightMessage (amino: AminoBytes, lengthPrefixed: boolean = true): EndHeightMessage {
    const json = decodeType.decodeEndHeightMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPubKey (amino: AminoBytes, lengthPrefixed: boolean = true): PubKey {
    const json = decodeType.decodePubKey(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPrivKey (amino: AminoBytes, lengthPrefixed: boolean = true): PrivKey {
    const json = decodeType.decodePrivKey(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPubKeyEd25519 (amino: AminoBytes, lengthPrefixed: boolean = true): PubKeyEd25519 {
    const json = decodeType.decodePubKeyEd25519(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPrivKeyEd25519 (amino: AminoBytes, lengthPrefixed: boolean = true): PrivKeyEd25519 {
    const json = decodeType.decodePrivKeyEd25519(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPubKeySecp256k1 (amino: AminoBytes, lengthPrefixed: boolean = true): PubKeySecp256k1 {
    const json = decodeType.decodePubKeySecp256k1(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPrivKeySecp256k1 (amino: AminoBytes, lengthPrefixed: boolean = true): PrivKeySecp256k1 {
    const json = decodeType.decodePrivKeySecp256k1(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPubKeyMultisigThreshold (amino: AminoBytes, lengthPrefixed: boolean = true): PubKeyMultisigThreshold {
    const json = decodeType.decodePubKeyMultisigThreshold(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEvidenceMessage (amino: AminoBytes, lengthPrefixed: boolean = true): EvidenceMessage {
    const json = decodeType.decodeEvidenceMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEvidenceListMessage (amino: AminoBytes, lengthPrefixed: boolean = true): EvidenceListMessage {
    const json = decodeType.decodeEvidenceListMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMempoolMessage (amino: AminoBytes, lengthPrefixed: boolean = true): MempoolMessage {
    const json = decodeType.decodeMempoolMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalTxMessage (amino: AminoBytes, lengthPrefixed: boolean = true): TxMessage {
    const json = decodeType.decodeTxMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPacket (amino: AminoBytes, lengthPrefixed: boolean = true): Packet {
    const json = decodeType.decodePacket(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPacketPing (amino: AminoBytes, lengthPrefixed: boolean = true): PacketPing {
    const json = decodeType.decodePacketPing(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPacketPong (amino: AminoBytes, lengthPrefixed: boolean = true): PacketPong {
    const json = decodeType.decodePacketPong(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPacketMsg (amino: AminoBytes, lengthPrefixed: boolean = true): PacketMsg {
    const json = decodeType.decodePacketMsg(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPexMessage (amino: AminoBytes, lengthPrefixed: boolean = true): PexMessage {
    const json = decodeType.decodePexMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPexRequestMessage (amino: AminoBytes, lengthPrefixed: boolean = true): PexRequestMessage {
    const json = decodeType.decodePexRequestMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPexAddrsMessage (amino: AminoBytes, lengthPrefixed: boolean = true): PexAddrsMessage {
    const json = decodeType.decodePexAddrsMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalRemoteSignerMsg (amino: AminoBytes, lengthPrefixed: boolean = true): RemoteSignerMsg {
    const json = decodeType.decodeRemoteSignerMsg(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPubKeyRequest (amino: AminoBytes, lengthPrefixed: boolean = true): PubKeyRequest {
    const json = decodeType.decodePubKeyRequest(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPubKeyResponse (amino: AminoBytes, lengthPrefixed: boolean = true): PubKeyResponse {
    const json = decodeType.decodePubKeyResponse(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalSignVoteRequest (amino: AminoBytes, lengthPrefixed: boolean = true): SignVoteRequest {
    const json = decodeType.decodeSignVoteRequest(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalSignedVoteResponse (amino: AminoBytes, lengthPrefixed: boolean = true): SignedVoteResponse {
    const json = decodeType.decodeSignedVoteResponse(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalSignProposalRequest (amino: AminoBytes, lengthPrefixed: boolean = true): SignProposalRequest {
    const json = decodeType.decodeSignProposalRequest(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalSignedProposalResponse (amino: AminoBytes, lengthPrefixed: boolean = true): SignedProposalResponse {
    const json = decodeType.decodeSignedProposalResponse(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPingRequest (amino: AminoBytes, lengthPrefixed: boolean = true): PingRequest {
    const json = decodeType.decodePingRequest(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalPingResponse (amino: AminoBytes, lengthPrefixed: boolean = true): PingResponse {
    const json = decodeType.decodePingResponse(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalTMEventData (amino: AminoBytes, lengthPrefixed: boolean = true): TMEventData {
    const json = decodeType.decodeTMEventData(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataNewBlock (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataNewBlock {
    const json = decodeType.decodeEventDataNewBlock(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataNewBlockHeader (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataNewBlockHeader {
    const json = decodeType.decodeEventDataNewBlockHeader(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataTx (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataTx {
    const json = decodeType.decodeEventDataTx(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataRoundState (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataRoundState {
    const json = decodeType.decodeEventDataRoundState(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataNewRound (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataNewRound {
    const json = decodeType.decodeEventDataNewRound(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataCompleteProposal (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataCompleteProposal {
    const json = decodeType.decodeEventDataCompleteProposal(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataVote (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataVote {
    const json = decodeType.decodeEventDataVote(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataValidatorSetUpdates (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataValidatorSetUpdates {
    const json = decodeType.decodeEventDataValidatorSetUpdates(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEventDataString (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataString {
    const json = decodeType.decodeEventDataString(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalEvidence (amino: AminoBytes, lengthPrefixed: boolean = true): Evidence {
    const json = decodeType.decodeEvidence(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalDuplicateVoteEvidence (amino: AminoBytes, lengthPrefixed: boolean = true): DuplicateVoteEvidence {
    const json = decodeType.decodeDuplicateVoteEvidence(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMockGoodEvidence (amino: AminoBytes, lengthPrefixed: boolean = true): MockGoodEvidence {
    const json = decodeType.decodeMockGoodEvidence(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMockRandomGoodEvidence (amino: AminoBytes, lengthPrefixed: boolean = true): MockRandomGoodEvidence {
    const json = decodeType.decodeMockRandomGoodEvidence(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

export function unmarshalMockBadEvidence (amino: AminoBytes, lengthPrefixed: boolean = true): MockBadEvidence {
    const json = decodeType.decodeMockBadEvidence(amino, lengthPrefixed);
    return unmarshalJSON(json);
}
