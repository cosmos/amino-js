import { AminoBytes } from '../../lib/types';
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
import { marshalJSON } from '../util';
import * as encodeType from './encodeType';

export function marshalMultiStoreProofOp (object: MultiStoreProofOp, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMultiStoreProofOp(json, lengthPrefixed);
}

export function marshalIAVLAbsenceOp (object: IAVLAbsenceOp, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeIAVLAbsenceOp(json, lengthPrefixed);
}

export function marshalIAVLValueOp (object: IAVLValueOp, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeIAVLValueOp(json, lengthPrefixed);
}

export function marshalPrivKeyLedgerSecp256k1 (object: PrivKeyLedgerSecp256k1, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePrivKeyLedgerSecp256k1(json, lengthPrefixed);
}

export function marshalInfo (object: Info, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeInfo(json, lengthPrefixed);
}

export function marshalBIP44Params (object: BIP44Params, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeBIP44Params(json, lengthPrefixed);
}

export function marshalLocalInfo (object: LocalInfo, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeLocalInfo(json, lengthPrefixed);
}

export function marshalLedgerInfo (object: LedgerInfo, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeLedgerInfo(json, lengthPrefixed);
}

export function marshalOfflineInfo (object: OfflineInfo, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeOfflineInfo(json, lengthPrefixed);
}

export function marshalMultiInfo (object: MultiInfo, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMultiInfo(json, lengthPrefixed);
}

export function marshalMsg (object: Msg, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsg(json, lengthPrefixed);
}

export function marshalTx (object: Tx, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeTx(json, lengthPrefixed);
}

export function marshalAccount (object: Account, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeAccount(json, lengthPrefixed);
}

export function marshalVestingAccount (object: VestingAccount, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeVestingAccount(json, lengthPrefixed);
}

export function marshalBaseAccount (object: BaseAccount, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeBaseAccount(json, lengthPrefixed);
}

export function marshalBaseVestingAccount (object: BaseVestingAccount, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeBaseVestingAccount(json, lengthPrefixed);
}

export function marshalContinuousVestingAccount (object: ContinuousVestingAccount, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeContinuousVestingAccount(json, lengthPrefixed);
}

export function marshalDelayedVestingAccount (object: DelayedVestingAccount, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeDelayedVestingAccount(json, lengthPrefixed);
}

export function marshalStdTx (object: StdTx, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeStdTx(json, lengthPrefixed);
}

export function marshalMsgSend (object: MsgSend, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgSend(json, lengthPrefixed);
}

export function marshalMsgMultiSend (object: MsgMultiSend, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgMultiSend(json, lengthPrefixed);
}

export function marshalMsgVerifyInvariant (object: MsgVerifyInvariant, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgVerifyInvariant(json, lengthPrefixed);
}

export function marshalMsgWithdrawDelegatorReward (object: MsgWithdrawDelegatorReward, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgWithdrawDelegatorReward(json, lengthPrefixed);
}

export function marshalMsgWithdrawValidatorCommission (object: MsgWithdrawValidatorCommission, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgWithdrawValidatorCommission(json, lengthPrefixed);
}

export function marshalMsgSetWithdrawAddress (object: MsgSetWithdrawAddress, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgSetWithdrawAddress(json, lengthPrefixed);
}

export function marshalContent (object: Content, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeContent(json, lengthPrefixed);
}

export function marshalMsgSubmitProposal (object: MsgSubmitProposal, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgSubmitProposal(json, lengthPrefixed);
}

export function marshalMsgDeposit (object: MsgDeposit, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgDeposit(json, lengthPrefixed);
}

export function marshalMsgVote (object: MsgVote, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgVote(json, lengthPrefixed);
}

export function marshalTextProposal (object: TextProposal, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeTextProposal(json, lengthPrefixed);
}

export function marshalSoftwareUpgradeProposal (object: SoftwareUpgradeProposal, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeSoftwareUpgradeProposal(json, lengthPrefixed);
}

export function marshalMsgIBCTransfer (object: MsgIBCTransfer, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgIBCTransfer(json, lengthPrefixed);
}

export function marshalMsgIBCReceive (object: MsgIBCReceive, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgIBCReceive(json, lengthPrefixed);
}

export function marshalParameterChangeProposal (object: ParameterChangeProposal, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeParameterChangeProposal(json, lengthPrefixed);
}

export function marshalMsgUnjail (object: MsgUnjail, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgUnjail(json, lengthPrefixed);
}

export function marshalMsgCreateValidator (object: MsgCreateValidator, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgCreateValidator(json, lengthPrefixed);
}

export function marshalMsgEditValidator (object: MsgEditValidator, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgEditValidator(json, lengthPrefixed);
}

export function marshalMsgDelegate (object: MsgDelegate, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgDelegate(json, lengthPrefixed);
}

export function marshalMsgUndelegate (object: MsgUndelegate, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgUndelegate(json, lengthPrefixed);
}

export function marshalMsgBeginRedelegate (object: MsgBeginRedelegate, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgBeginRedelegate(json, lengthPrefixed);
}

export function marshalBlockchainMessage (object: BlockchainMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeBlockchainMessage(json, lengthPrefixed);
}

export function marshalBcBlockRequestMessage (object: BcBlockRequestMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeBcBlockRequestMessage(json, lengthPrefixed);
}

export function marshalBcBlockResponseMessage (object: BcBlockResponseMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeBcBlockResponseMessage(json, lengthPrefixed);
}

export function marshalBcNoBlockResponseMessage (object: BcNoBlockResponseMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeBcNoBlockResponseMessage(json, lengthPrefixed);
}

export function marshalBcStatusResponseMessage (object: BcStatusResponseMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeBcStatusResponseMessage(json, lengthPrefixed);
}

export function marshalBcStatusRequestMessage (object: BcStatusRequestMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeBcStatusRequestMessage(json, lengthPrefixed);
}

export function marshalConsensusMessage (object: ConsensusMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeConsensusMessage(json, lengthPrefixed);
}

export function marshalNewRoundStepMessage (object: NewRoundStepMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeNewRoundStepMessage(json, lengthPrefixed);
}

export function marshalNewValidBlockMessage (object: NewValidBlockMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeNewValidBlockMessage(json, lengthPrefixed);
}

export function marshalProposalMessage (object: ProposalMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeProposalMessage(json, lengthPrefixed);
}

export function marshalProposalPOLMessage (object: ProposalPOLMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeProposalPOLMessage(json, lengthPrefixed);
}

export function marshalBlockPartMessage (object: BlockPartMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeBlockPartMessage(json, lengthPrefixed);
}

export function marshalVoteMessage (object: VoteMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeVoteMessage(json, lengthPrefixed);
}

export function marshalHasVoteMessage (object: HasVoteMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeHasVoteMessage(json, lengthPrefixed);
}

export function marshalVoteSetMaj23Message (object: VoteSetMaj23Message, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeVoteSetMaj23Message(json, lengthPrefixed);
}

export function marshalVoteSetBitsMessage (object: VoteSetBitsMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeVoteSetBitsMessage(json, lengthPrefixed);
}

export function marshalWALMessage (object: WALMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeWALMessage(json, lengthPrefixed);
}

export function marshalMsgInfo (object: MsgInfo, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMsgInfo(json, lengthPrefixed);
}

export function marshalTimeoutInfo (object: TimeoutInfo, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeTimeoutInfo(json, lengthPrefixed);
}

export function marshalEndHeightMessage (object: EndHeightMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeEndHeightMessage(json, lengthPrefixed);
}

export function marshalPubKey (object: PubKey, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePubKey(json, lengthPrefixed);
}

export function marshalPrivKey (object: PrivKey, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePrivKey(json, lengthPrefixed);
}

export function marshalPubKeyEd25519 (object: PubKeyEd25519, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePubKeyEd25519(json, lengthPrefixed);
}

export function marshalPrivKeyEd25519 (object: PrivKeyEd25519, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePrivKeyEd25519(json, lengthPrefixed);
}

export function marshalPubKeySecp256k1 (object: PubKeySecp256k1, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePubKeySecp256k1(json, lengthPrefixed);
}

export function marshalPrivKeySecp256k1 (object: PrivKeySecp256k1, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePrivKeySecp256k1(json, lengthPrefixed);
}

export function marshalPubKeyMultisigThreshold (object: PubKeyMultisigThreshold, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePubKeyMultisigThreshold(json, lengthPrefixed);
}

export function marshalEvidenceMessage (object: EvidenceMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeEvidenceMessage(json, lengthPrefixed);
}

export function marshalEvidenceListMessage (object: EvidenceListMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeEvidenceListMessage(json, lengthPrefixed);
}

export function marshalMempoolMessage (object: MempoolMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMempoolMessage(json, lengthPrefixed);
}

export function marshalTxMessage (object: TxMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeTxMessage(json, lengthPrefixed);
}

export function marshalPacket (object: Packet, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePacket(json, lengthPrefixed);
}

export function marshalPacketPing (object: PacketPing, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePacketPing(json, lengthPrefixed);
}

export function marshalPacketPong (object: PacketPong, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePacketPong(json, lengthPrefixed);
}

export function marshalPacketMsg (object: PacketMsg, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePacketMsg(json, lengthPrefixed);
}

export function marshalPexMessage (object: PexMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePexMessage(json, lengthPrefixed);
}

export function marshalPexRequestMessage (object: PexRequestMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePexRequestMessage(json, lengthPrefixed);
}

export function marshalPexAddrsMessage (object: PexAddrsMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePexAddrsMessage(json, lengthPrefixed);
}

export function marshalRemoteSignerMsg (object: RemoteSignerMsg, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeRemoteSignerMsg(json, lengthPrefixed);
}

export function marshalPubKeyRequest (object: PubKeyRequest, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePubKeyRequest(json, lengthPrefixed);
}

export function marshalPubKeyResponse (object: PubKeyResponse, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePubKeyResponse(json, lengthPrefixed);
}

export function marshalSignVoteRequest (object: SignVoteRequest, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeSignVoteRequest(json, lengthPrefixed);
}

export function marshalSignedVoteResponse (object: SignedVoteResponse, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeSignedVoteResponse(json, lengthPrefixed);
}

export function marshalSignProposalRequest (object: SignProposalRequest, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeSignProposalRequest(json, lengthPrefixed);
}

export function marshalSignedProposalResponse (object: SignedProposalResponse, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeSignedProposalResponse(json, lengthPrefixed);
}

export function marshalPingRequest (object: PingRequest, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePingRequest(json, lengthPrefixed);
}

export function marshalPingResponse (object: PingResponse, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodePingResponse(json, lengthPrefixed);
}

export function marshalTMEventData (object: TMEventData, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeTMEventData(json, lengthPrefixed);
}

export function marshalEventDataNewBlock (object: EventDataNewBlock, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataNewBlock(json, lengthPrefixed);
}

export function marshalEventDataNewBlockHeader (object: EventDataNewBlockHeader, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataNewBlockHeader(json, lengthPrefixed);
}

export function marshalEventDataTx (object: EventDataTx, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataTx(json, lengthPrefixed);
}

export function marshalEventDataRoundState (object: EventDataRoundState, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataRoundState(json, lengthPrefixed);
}

export function marshalEventDataNewRound (object: EventDataNewRound, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataNewRound(json, lengthPrefixed);
}

export function marshalEventDataCompleteProposal (object: EventDataCompleteProposal, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataCompleteProposal(json, lengthPrefixed);
}

export function marshalEventDataVote (object: EventDataVote, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataVote(json, lengthPrefixed);
}

export function marshalEventDataValidatorSetUpdates (object: EventDataValidatorSetUpdates, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataValidatorSetUpdates(json, lengthPrefixed);
}

export function marshalEventDataString (object: EventDataString, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeEventDataString(json, lengthPrefixed);
}

export function marshalEvidence (object: Evidence, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeEvidence(json, lengthPrefixed);
}

export function marshalDuplicateVoteEvidence (object: DuplicateVoteEvidence, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeDuplicateVoteEvidence(json, lengthPrefixed);
}

export function marshalMockGoodEvidence (object: MockGoodEvidence, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMockGoodEvidence(json, lengthPrefixed);
}

export function marshalMockRandomGoodEvidence (object: MockRandomGoodEvidence, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMockRandomGoodEvidence(json, lengthPrefixed);
}

export function marshalMockBadEvidence (object: MockBadEvidence, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(object);
    return encodeType.encodeMockBadEvidence(json, lengthPrefixed);
}
