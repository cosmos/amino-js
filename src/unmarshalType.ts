import { AminoBytes } from '../lib/bytes';
import * as decodeType from './decodeType';
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
} from './types';
import { unmarshalJSON } from './util';

/**
 * Unmarshal a `MultiStoreProofOp` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MultiStoreProofOp` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MultiStoreProofOp` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMultiStoreProofOp (amino: AminoBytes, lengthPrefixed: boolean = true): MultiStoreProofOp {
    const json = decodeType.decodeMultiStoreProofOp(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `IAVLAbsenceOp` object from Amino
 *
 * @param   amino          - binary Amino-encoded `IAVLAbsenceOp` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `IAVLAbsenceOp` object
 * @throws  will throw if decoding fails
 */
export function unmarshalIAVLAbsenceOp (amino: AminoBytes, lengthPrefixed: boolean = true): IAVLAbsenceOp {
    const json = decodeType.decodeIAVLAbsenceOp(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `IAVLValueOp` object from Amino
 *
 * @param   amino          - binary Amino-encoded `IAVLValueOp` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `IAVLValueOp` object
 * @throws  will throw if decoding fails
 */
export function unmarshalIAVLValueOp (amino: AminoBytes, lengthPrefixed: boolean = true): IAVLValueOp {
    const json = decodeType.decodeIAVLValueOp(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PrivKeyLedgerSecp256k1` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PrivKeyLedgerSecp256k1` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PrivKeyLedgerSecp256k1` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPrivKeyLedgerSecp256k1 (amino: AminoBytes, lengthPrefixed: boolean = true): PrivKeyLedgerSecp256k1 {
    const json = decodeType.decodePrivKeyLedgerSecp256k1(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `Info` object from Amino
 *
 * @param   amino          - binary Amino-encoded `Info` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `Info` object
 * @throws  will throw if decoding fails
 */
export function unmarshalInfo (amino: AminoBytes, lengthPrefixed: boolean = true): Info {
    const json = decodeType.decodeInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `BIP44Params` object from Amino
 *
 * @param   amino          - binary Amino-encoded `BIP44Params` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `BIP44Params` object
 * @throws  will throw if decoding fails
 */
export function unmarshalBIP44Params (amino: AminoBytes, lengthPrefixed: boolean = true): BIP44Params {
    const json = decodeType.decodeBIP44Params(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `LocalInfo` object from Amino
 *
 * @param   amino          - binary Amino-encoded `LocalInfo` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `LocalInfo` object
 * @throws  will throw if decoding fails
 */
export function unmarshalLocalInfo (amino: AminoBytes, lengthPrefixed: boolean = true): LocalInfo {
    const json = decodeType.decodeLocalInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `LedgerInfo` object from Amino
 *
 * @param   amino          - binary Amino-encoded `LedgerInfo` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `LedgerInfo` object
 * @throws  will throw if decoding fails
 */
export function unmarshalLedgerInfo (amino: AminoBytes, lengthPrefixed: boolean = true): LedgerInfo {
    const json = decodeType.decodeLedgerInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `OfflineInfo` object from Amino
 *
 * @param   amino          - binary Amino-encoded `OfflineInfo` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `OfflineInfo` object
 * @throws  will throw if decoding fails
 */
export function unmarshalOfflineInfo (amino: AminoBytes, lengthPrefixed: boolean = true): OfflineInfo {
    const json = decodeType.decodeOfflineInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MultiInfo` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MultiInfo` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MultiInfo` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMultiInfo (amino: AminoBytes, lengthPrefixed: boolean = true): MultiInfo {
    const json = decodeType.decodeMultiInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `Msg` object from Amino
 *
 * @param   amino          - binary Amino-encoded `Msg` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `Msg` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsg (amino: AminoBytes, lengthPrefixed: boolean = true): Msg {
    const json = decodeType.decodeMsg(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `Tx` object from Amino
 *
 * @param   amino          - binary Amino-encoded `Tx` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `Tx` object
 * @throws  will throw if decoding fails
 */
export function unmarshalTx (amino: AminoBytes, lengthPrefixed: boolean = true): Tx {
    const json = decodeType.decodeTx(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `Account` object from Amino
 *
 * @param   amino          - binary Amino-encoded `Account` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `Account` object
 * @throws  will throw if decoding fails
 */
export function unmarshalAccount (amino: AminoBytes, lengthPrefixed: boolean = true): Account {
    const json = decodeType.decodeAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `VestingAccount` object from Amino
 *
 * @param   amino          - binary Amino-encoded `VestingAccount` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `VestingAccount` object
 * @throws  will throw if decoding fails
 */
export function unmarshalVestingAccount (amino: AminoBytes, lengthPrefixed: boolean = true): VestingAccount {
    const json = decodeType.decodeVestingAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `BaseAccount` object from Amino
 *
 * @param   amino          - binary Amino-encoded `BaseAccount` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `BaseAccount` object
 * @throws  will throw if decoding fails
 */
export function unmarshalBaseAccount (amino: AminoBytes, lengthPrefixed: boolean = true): BaseAccount {
    const json = decodeType.decodeBaseAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `BaseVestingAccount` object from Amino
 *
 * @param   amino          - binary Amino-encoded `BaseVestingAccount` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `BaseVestingAccount` object
 * @throws  will throw if decoding fails
 */
export function unmarshalBaseVestingAccount (amino: AminoBytes, lengthPrefixed: boolean = true): BaseVestingAccount {
    const json = decodeType.decodeBaseVestingAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `ContinuousVestingAccount` object from Amino
 *
 * @param   amino          - binary Amino-encoded `ContinuousVestingAccount` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `ContinuousVestingAccount` object
 * @throws  will throw if decoding fails
 */
export function unmarshalContinuousVestingAccount (amino: AminoBytes, lengthPrefixed: boolean = true): ContinuousVestingAccount {
    const json = decodeType.decodeContinuousVestingAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `DelayedVestingAccount` object from Amino
 *
 * @param   amino          - binary Amino-encoded `DelayedVestingAccount` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `DelayedVestingAccount` object
 * @throws  will throw if decoding fails
 */
export function unmarshalDelayedVestingAccount (amino: AminoBytes, lengthPrefixed: boolean = true): DelayedVestingAccount {
    const json = decodeType.decodeDelayedVestingAccount(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `StdTx` object from Amino
 *
 * @param   amino          - binary Amino-encoded `StdTx` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `StdTx` object
 * @throws  will throw if decoding fails
 */
export function unmarshalStdTx (amino: AminoBytes, lengthPrefixed: boolean = true): StdTx {
    const json = decodeType.decodeStdTx(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgSend` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MsgSend` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MsgSend` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsgSend (amino: AminoBytes, lengthPrefixed: boolean = true): MsgSend {
    const json = decodeType.decodeMsgSend(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgMultiSend` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MsgMultiSend` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MsgMultiSend` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsgMultiSend (amino: AminoBytes, lengthPrefixed: boolean = true): MsgMultiSend {
    const json = decodeType.decodeMsgMultiSend(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgVerifyInvariant` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MsgVerifyInvariant` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MsgVerifyInvariant` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsgVerifyInvariant (amino: AminoBytes, lengthPrefixed: boolean = true): MsgVerifyInvariant {
    const json = decodeType.decodeMsgVerifyInvariant(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgWithdrawDelegatorReward` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MsgWithdrawDelegatorReward` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MsgWithdrawDelegatorReward` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsgWithdrawDelegatorReward (amino: AminoBytes, lengthPrefixed: boolean = true): MsgWithdrawDelegatorReward {
    const json = decodeType.decodeMsgWithdrawDelegatorReward(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgWithdrawValidatorCommission` object from Amino
 *
 * @param   amino          - binary Amino-encoded `Account` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use MsgWithdrawValidatorCommissionAmino decoding
 *
 * @returns binary JSON-encoded `Account` object
 * @throws  `MsgWithdrawValidatorCommission`g fails
 */
export function unmarshalMsgWithdrawValidatorCommission (amino: AminoBytes, lengthPrefixed: boolean = true): MsgWithdrawValidatorCommission {
    const json = decodeType.decodeMsgWithdrawValidatorCommission(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgSetWithdrawAddress` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MsgSetWithdrawAddress` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MsgSetWithdrawAddress` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsgSetWithdrawAddress (amino: AminoBytes, lengthPrefixed: boolean = true): MsgSetWithdrawAddress {
    const json = decodeType.decodeMsgSetWithdrawAddress(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `Content` object from Amino
 *
 * @param   amino          - binary Amino-encoded `Content` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `Content` object
 * @throws  will throw if decoding fails
 */
export function unmarshalContent (amino: AminoBytes, lengthPrefixed: boolean = true): Content {
    const json = decodeType.decodeContent(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgSubmitProposal` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MsgSubmitProposal` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MsgSubmitProposal` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsgSubmitProposal (amino: AminoBytes, lengthPrefixed: boolean = true): MsgSubmitProposal {
    const json = decodeType.decodeMsgSubmitProposal(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgDeposit` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MsgDeposit` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MsgDeposit` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsgDeposit (amino: AminoBytes, lengthPrefixed: boolean = true): MsgDeposit {
    const json = decodeType.decodeMsgDeposit(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgVote` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MsgVote` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MsgVote` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsgVote (amino: AminoBytes, lengthPrefixed: boolean = true): MsgVote {
    const json = decodeType.decodeMsgVote(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `TextProposal` object from Amino
 *
 * @param   amino          - binary Amino-encoded `TextProposal` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `TextProposal` object
 * @throws  will throw if decoding fails
 */
export function unmarshalTextProposal (amino: AminoBytes, lengthPrefixed: boolean = true): TextProposal {
    const json = decodeType.decodeTextProposal(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `SoftwareUpgradeProposal` object from Amino
 *
 * @param   amino          - binary Amino-encoded `SoftwareUpgradeProposal` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `SoftwareUpgradeProposal` object
 * @throws  will throw if decoding fails
 */
export function unmarshalSoftwareUpgradeProposal (amino: AminoBytes, lengthPrefixed: boolean = true): SoftwareUpgradeProposal {
    const json = decodeType.decodeSoftwareUpgradeProposal(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgIBCTransfer` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MsgIBCTransfer` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MsgIBCTransfer` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsgIBCTransfer (amino: AminoBytes, lengthPrefixed: boolean = true): MsgIBCTransfer {
    const json = decodeType.decodeMsgIBCTransfer(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgIBCReceive` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MsgIBCReceive` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MsgIBCReceive` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsgIBCReceive (amino: AminoBytes, lengthPrefixed: boolean = true): MsgIBCReceive {
    const json = decodeType.decodeMsgIBCReceive(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `ParameterChangeProposal` object from Amino
 *
 * @param   amino          - binary Amino-encoded `ParameterChangeProposal` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `ParameterChangeProposal` object
 * @throws  will throw if decoding fails
 */
export function unmarshalParameterChangeProposal (amino: AminoBytes, lengthPrefixed: boolean = true): ParameterChangeProposal {
    const json = decodeType.decodeParameterChangeProposal(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgUnjail` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MsgUnjail` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MsgUnjail` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsgUnjail (amino: AminoBytes, lengthPrefixed: boolean = true): MsgUnjail {
    const json = decodeType.decodeMsgUnjail(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgCreateValidator` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MsgCreateValidator` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MsgCreateValidator` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsgCreateValidator (amino: AminoBytes, lengthPrefixed: boolean = true): MsgCreateValidator {
    const json = decodeType.decodeMsgCreateValidator(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgEditValidator` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MsgEditValidator` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MsgEditValidator` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsgEditValidator (amino: AminoBytes, lengthPrefixed: boolean = true): MsgEditValidator {
    const json = decodeType.decodeMsgEditValidator(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgDelegate` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MsgDelegate` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MsgDelegate` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsgDelegate (amino: AminoBytes, lengthPrefixed: boolean = true): MsgDelegate {
    const json = decodeType.decodeMsgDelegate(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgUndelegate` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MsgUndelegate` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MsgUndelegate` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsgUndelegate (amino: AminoBytes, lengthPrefixed: boolean = true): MsgUndelegate {
    const json = decodeType.decodeMsgUndelegate(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgBeginRedelegate` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MsgBeginRedelegate` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MsgBeginRedelegate` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsgBeginRedelegate (amino: AminoBytes, lengthPrefixed: boolean = true): MsgBeginRedelegate {
    const json = decodeType.decodeMsgBeginRedelegate(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `BlockchainMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `BlockchainMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `BlockchainMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalBlockchainMessage (amino: AminoBytes, lengthPrefixed: boolean = true): BlockchainMessage {
    const json = decodeType.decodeBlockchainMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `BcBlockRequestMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `BcBlockRequestMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `BcBlockRequestMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalBcBlockRequestMessage (amino: AminoBytes, lengthPrefixed: boolean = true): BcBlockRequestMessage {
    const json = decodeType.decodeBcBlockRequestMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `BcBlockResponseMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `BcBlockResponseMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `BcBlockResponseMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalBcBlockResponseMessage (amino: AminoBytes, lengthPrefixed: boolean = true): BcBlockResponseMessage {
    const json = decodeType.decodeBcBlockResponseMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `BcNoBlockResponseMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `BcNoBlockResponseMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `BcNoBlockResponseMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalBcNoBlockResponseMessage (amino: AminoBytes, lengthPrefixed: boolean = true): BcNoBlockResponseMessage {
    const json = decodeType.decodeBcNoBlockResponseMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `BcStatusResponseMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `BcStatusResponseMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `BcStatusResponseMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalBcStatusResponseMessage (amino: AminoBytes, lengthPrefixed: boolean = true): BcStatusResponseMessage {
    const json = decodeType.decodeBcStatusResponseMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `BcStatusRequestMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `BcStatusRequestMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `BcStatusRequestMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalBcStatusRequestMessage (amino: AminoBytes, lengthPrefixed: boolean = true): BcStatusRequestMessage {
    const json = decodeType.decodeBcStatusRequestMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `ConsensusMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `ConsensusMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `ConsensusMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalConsensusMessage (amino: AminoBytes, lengthPrefixed: boolean = true): ConsensusMessage {
    const json = decodeType.decodeConsensusMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `NewRoundStepMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `NewRoundStepMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `NewRoundStepMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalNewRoundStepMessage (amino: AminoBytes, lengthPrefixed: boolean = true): NewRoundStepMessage {
    const json = decodeType.decodeNewRoundStepMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `NewValidBlockMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `NewValidBlockMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `NewValidBlockMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalNewValidBlockMessage (amino: AminoBytes, lengthPrefixed: boolean = true): NewValidBlockMessage {
    const json = decodeType.decodeNewValidBlockMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `ProposalMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `ProposalMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `ProposalMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalProposalMessage (amino: AminoBytes, lengthPrefixed: boolean = true): ProposalMessage {
    const json = decodeType.decodeProposalMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `ProposalPOLMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `ProposalPOLMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `ProposalPOLMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalProposalPOLMessage (amino: AminoBytes, lengthPrefixed: boolean = true): ProposalPOLMessage {
    const json = decodeType.decodeProposalPOLMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `BlockPartMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `BlockPartMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `BlockPartMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalBlockPartMessage (amino: AminoBytes, lengthPrefixed: boolean = true): BlockPartMessage {
    const json = decodeType.decodeBlockPartMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `VoteMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `VoteMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `VoteMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalVoteMessage (amino: AminoBytes, lengthPrefixed: boolean = true): VoteMessage {
    const json = decodeType.decodeVoteMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `HasVoteMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `HasVoteMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `HasVoteMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalHasVoteMessage (amino: AminoBytes, lengthPrefixed: boolean = true): HasVoteMessage {
    const json = decodeType.decodeHasVoteMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `VoteSetMaj23Message` object from Amino
 *
 * @param   amino          - binary Amino-encoded `VoteSetMaj23Message` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `VoteSetMaj23Message` object
 * @throws  will throw if decoding fails
 */
export function unmarshalVoteSetMaj23Message (amino: AminoBytes, lengthPrefixed: boolean = true): VoteSetMaj23Message {
    const json = decodeType.decodeVoteSetMaj23Message(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `VoteSetBitsMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `VoteSetBitsMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `VoteSetBitsMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalVoteSetBitsMessage (amino: AminoBytes, lengthPrefixed: boolean = true): VoteSetBitsMessage {
    const json = decodeType.decodeVoteSetBitsMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `WALMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `WALMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `WALMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalWALMessage (amino: AminoBytes, lengthPrefixed: boolean = true): WALMessage {
    const json = decodeType.decodeWALMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MsgInfo` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MsgInfo` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MsgInfo` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMsgInfo (amino: AminoBytes, lengthPrefixed: boolean = true): MsgInfo {
    const json = decodeType.decodeMsgInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `TimeoutInfo` object from Amino
 *
 * @param   amino          - binary Amino-encoded `TimeoutInfo` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `TimeoutInfo` object
 * @throws  will throw if decoding fails
 */
export function unmarshalTimeoutInfo (amino: AminoBytes, lengthPrefixed: boolean = true): TimeoutInfo {
    const json = decodeType.decodeTimeoutInfo(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `EndHeightMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `EndHeightMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `EndHeightMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalEndHeightMessage (amino: AminoBytes, lengthPrefixed: boolean = true): EndHeightMessage {
    const json = decodeType.decodeEndHeightMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PubKey` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PubKey` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PubKey` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPubKey (amino: AminoBytes, lengthPrefixed: boolean = true): PubKey {
    const json = decodeType.decodePubKey(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PrivKey` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PrivKey` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PrivKey` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPrivKey (amino: AminoBytes, lengthPrefixed: boolean = true): PrivKey {
    const json = decodeType.decodePrivKey(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PubKeyEd25519` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PubKeyEd25519` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PubKeyEd25519` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPubKeyEd25519 (amino: AminoBytes, lengthPrefixed: boolean = true): PubKeyEd25519 {
    const json = decodeType.decodePubKeyEd25519(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PrivKeyEd25519` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PrivKeyEd25519` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PrivKeyEd25519` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPrivKeyEd25519 (amino: AminoBytes, lengthPrefixed: boolean = true): PrivKeyEd25519 {
    const json = decodeType.decodePrivKeyEd25519(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PubKeySecp256k1` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PubKeySecp256k1` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PubKeySecp256k1` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPubKeySecp256k1 (amino: AminoBytes, lengthPrefixed: boolean = true): PubKeySecp256k1 {
    const json = decodeType.decodePubKeySecp256k1(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PrivKeySecp256k1` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PrivKeySecp256k1` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PrivKeySecp256k1` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPrivKeySecp256k1 (amino: AminoBytes, lengthPrefixed: boolean = true): PrivKeySecp256k1 {
    const json = decodeType.decodePrivKeySecp256k1(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PubKeyMultisigThreshold` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PubKeyMultisigThreshold` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PubKeyMultisigThreshold` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPubKeyMultisigThreshold (amino: AminoBytes, lengthPrefixed: boolean = true): PubKeyMultisigThreshold {
    const json = decodeType.decodePubKeyMultisigThreshold(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `EvidenceMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `EvidenceMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `EvidenceMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalEvidenceMessage (amino: AminoBytes, lengthPrefixed: boolean = true): EvidenceMessage {
    const json = decodeType.decodeEvidenceMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `EvidenceListMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `EvidenceListMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `EvidenceListMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalEvidenceListMessage (amino: AminoBytes, lengthPrefixed: boolean = true): EvidenceListMessage {
    const json = decodeType.decodeEvidenceListMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MempoolMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MempoolMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MempoolMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMempoolMessage (amino: AminoBytes, lengthPrefixed: boolean = true): MempoolMessage {
    const json = decodeType.decodeMempoolMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `TxMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `TxMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `TxMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalTxMessage (amino: AminoBytes, lengthPrefixed: boolean = true): TxMessage {
    const json = decodeType.decodeTxMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `Packet` object from Amino
 *
 * @param   amino          - binary Amino-encoded `Packet` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `Packet` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPacket (amino: AminoBytes, lengthPrefixed: boolean = true): Packet {
    const json = decodeType.decodePacket(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PacketPing` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PacketPing` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PacketPing` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPacketPing (amino: AminoBytes, lengthPrefixed: boolean = true): PacketPing {
    const json = decodeType.decodePacketPing(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PacketPong` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PacketPong` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PacketPong` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPacketPong (amino: AminoBytes, lengthPrefixed: boolean = true): PacketPong {
    const json = decodeType.decodePacketPong(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PacketMsg` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PacketMsg` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PacketMsg` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPacketMsg (amino: AminoBytes, lengthPrefixed: boolean = true): PacketMsg {
    const json = decodeType.decodePacketMsg(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PexMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PexMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PexMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPexMessage (amino: AminoBytes, lengthPrefixed: boolean = true): PexMessage {
    const json = decodeType.decodePexMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PexRequestMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PexRequestMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PexRequestMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPexRequestMessage (amino: AminoBytes, lengthPrefixed: boolean = true): PexRequestMessage {
    const json = decodeType.decodePexRequestMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PexAddrsMessage` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PexAddrsMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PexAddrsMessage` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPexAddrsMessage (amino: AminoBytes, lengthPrefixed: boolean = true): PexAddrsMessage {
    const json = decodeType.decodePexAddrsMessage(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `RemoteSignerMsg` object from Amino
 *
 * @param   amino          - binary Amino-encoded `RemoteSignerMsg` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `RemoteSignerMsg` object
 * @throws  will throw if decoding fails
 */
export function unmarshalRemoteSignerMsg (amino: AminoBytes, lengthPrefixed: boolean = true): RemoteSignerMsg {
    const json = decodeType.decodeRemoteSignerMsg(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PubKeyRequest` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PubKeyRequest` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PubKeyRequest` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPubKeyRequest (amino: AminoBytes, lengthPrefixed: boolean = true): PubKeyRequest {
    const json = decodeType.decodePubKeyRequest(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PubKeyResponse` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PubKeyResponse` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PubKeyResponse` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPubKeyResponse (amino: AminoBytes, lengthPrefixed: boolean = true): PubKeyResponse {
    const json = decodeType.decodePubKeyResponse(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `SignVoteRequest` object from Amino
 *
 * @param   amino          - binary Amino-encoded `SignVoteRequest` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `SignVoteRequest` object
 * @throws  will throw if decoding fails
 */
export function unmarshalSignVoteRequest (amino: AminoBytes, lengthPrefixed: boolean = true): SignVoteRequest {
    const json = decodeType.decodeSignVoteRequest(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `SignedVoteResponse` object from Amino
 *
 * @param   amino          - binary Amino-encoded `SignedVoteResponse` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `SignedVoteResponse` object
 * @throws  will throw if decoding fails
 */
export function unmarshalSignedVoteResponse (amino: AminoBytes, lengthPrefixed: boolean = true): SignedVoteResponse {
    const json = decodeType.decodeSignedVoteResponse(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `SignProposalRequest` object from Amino
 *
 * @param   amino          - binary Amino-encoded `SignProposalRequest` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `SignProposalRequest` object
 * @throws  will throw if decoding fails
 */
export function unmarshalSignProposalRequest (amino: AminoBytes, lengthPrefixed: boolean = true): SignProposalRequest {
    const json = decodeType.decodeSignProposalRequest(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `SignedProposalResponse` object from Amino
 *
 * @param   amino          - binary Amino-encoded `SignedProposalResponse` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `SignedProposalResponse` object
 * @throws  will throw if decoding fails
 */
export function unmarshalSignedProposalResponse (amino: AminoBytes, lengthPrefixed: boolean = true): SignedProposalResponse {
    const json = decodeType.decodeSignedProposalResponse(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PingRequest` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PingRequest` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PingRequest` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPingRequest (amino: AminoBytes, lengthPrefixed: boolean = true): PingRequest {
    const json = decodeType.decodePingRequest(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `PingResponse` object from Amino
 *
 * @param   amino          - binary Amino-encoded `PingResponse` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `PingResponse` object
 * @throws  will throw if decoding fails
 */
export function unmarshalPingResponse (amino: AminoBytes, lengthPrefixed: boolean = true): PingResponse {
    const json = decodeType.decodePingResponse(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `TMEventData` object from Amino
 *
 * @param   amino          - binary Amino-encoded `TMEventData` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `TMEventData` object
 * @throws  will throw if decoding fails
 */
export function unmarshalTMEventData (amino: AminoBytes, lengthPrefixed: boolean = true): TMEventData {
    const json = decodeType.decodeTMEventData(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `EventDataNewBlock` object from Amino
 *
 * @param   amino          - binary Amino-encoded `EventDataNewBlock` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `EventDataNewBlock` object
 * @throws  will throw if decoding fails
 */
export function unmarshalEventDataNewBlock (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataNewBlock {
    const json = decodeType.decodeEventDataNewBlock(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `EventDataNewBlockHeader` object from Amino
 *
 * @param   amino          - binary Amino-encoded `EventDataNewBlockHeader` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `EventDataNewBlockHeader` object
 * @throws  will throw if decoding fails
 */
export function unmarshalEventDataNewBlockHeader (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataNewBlockHeader {
    const json = decodeType.decodeEventDataNewBlockHeader(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `EventDataTx` object from Amino
 *
 * @param   amino          - binary Amino-encoded `EventDataTx` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `EventDataTx` object
 * @throws  will throw if decoding fails
 */
export function unmarshalEventDataTx (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataTx {
    const json = decodeType.decodeEventDataTx(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `EventDataRoundState` object from Amino
 *
 * @param   amino          - binary Amino-encoded `EventDataRoundState` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `EventDataRoundState` object
 * @throws  will throw if decoding fails
 */
export function unmarshalEventDataRoundState (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataRoundState {
    const json = decodeType.decodeEventDataRoundState(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `EventDataNewRound` object from Amino
 *
 * @param   amino          - binary Amino-encoded `EventDataNewRound` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `EventDataNewRound` object
 * @throws  will throw if decoding fails
 */
export function unmarshalEventDataNewRound (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataNewRound {
    const json = decodeType.decodeEventDataNewRound(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `EventDataCompleteProposal` object from Amino
 *
 * @param   amino          - binary Amino-encoded `EventDataCompleteProposal` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `EventDataCompleteProposal` object
 * @throws  will throw if decoding fails
 */
export function unmarshalEventDataCompleteProposal (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataCompleteProposal {
    const json = decodeType.decodeEventDataCompleteProposal(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `EventDataVote` object from Amino
 *
 * @param   amino          - binary Amino-encoded `EventDataVote` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `EventDataVote` object
 * @throws  will throw if decoding fails
 */
export function unmarshalEventDataVote (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataVote {
    const json = decodeType.decodeEventDataVote(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `EventDataValidatorSetUpdates` object from Amino
 *
 * @param   amino          - binary Amino-encoded `EventDataValidatorSetUpdates` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `EventDataValidatorSetUpdates` object
 * @throws  will throw if decoding fails
 */
export function unmarshalEventDataValidatorSetUpdates (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataValidatorSetUpdates {
    const json = decodeType.decodeEventDataValidatorSetUpdates(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `EventDataString` object from Amino
 *
 * @param   amino          - binary Amino-encoded `EventDataString` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `EventDataString` object
 * @throws  will throw if decoding fails
 */
export function unmarshalEventDataString (amino: AminoBytes, lengthPrefixed: boolean = true): EventDataString {
    const json = decodeType.decodeEventDataString(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `Evidence` object from Amino
 *
 * @param   amino          - binary Amino-encoded `Evidence` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `Evidence` object
 * @throws  will throw if decoding fails
 */
export function unmarshalEvidence (amino: AminoBytes, lengthPrefixed: boolean = true): Evidence {
    const json = decodeType.decodeEvidence(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `DuplicateVoteEvidence` object from Amino
 *
 * @param   amino          - binary Amino-encoded `DuplicateVoteEvidence` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `DuplicateVoteEvidence` object
 * @throws  will throw if decoding fails
 */
export function unmarshalDuplicateVoteEvidence (amino: AminoBytes, lengthPrefixed: boolean = true): DuplicateVoteEvidence {
    const json = decodeType.decodeDuplicateVoteEvidence(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MockGoodEvidence` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MockGoodEvidence` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MockGoodEvidence` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMockGoodEvidence (amino: AminoBytes, lengthPrefixed: boolean = true): MockGoodEvidence {
    const json = decodeType.decodeMockGoodEvidence(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MockRandomGoodEvidence` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MockRandomGoodEvidence` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MockRandomGoodEvidence` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMockRandomGoodEvidence (amino: AminoBytes, lengthPrefixed: boolean = true): MockRandomGoodEvidence {
    const json = decodeType.decodeMockRandomGoodEvidence(amino, lengthPrefixed);
    return unmarshalJSON(json);
}

/**
 * Unmarshal a `MockBadEvidence` object from Amino
 *
 * @param   amino          - binary Amino-encoded `MockBadEvidence` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns `MockBadEvidence` object
 * @throws  will throw if decoding fails
 */
export function unmarshalMockBadEvidence (amino: AminoBytes, lengthPrefixed: boolean = true): MockBadEvidence {
    const json = decodeType.decodeMockBadEvidence(amino, lengthPrefixed);
    return unmarshalJSON(json);
}
