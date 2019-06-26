import { AminoBytes } from '../lib/types';
import * as encodeType from './encodeType';
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
import { marshalJSON } from './util';

/**
 * Marshal a `MultiStoreProofOp` object to Amino
 *
 * @param   o              - `MultiStoreProofOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MultiStoreProofOp` object
 * @throws  will throw if encoding fails
 */
export function marshalMultiStoreProofOp (o: MultiStoreProofOp, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMultiStoreProofOp(json, lengthPrefixed);
}

/**
 * Marshal a `IAVLAbsenceOp` object to Amino
 *
 * @param   o              - `IAVLAbsenceOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `IAVLAbsenceOp` object
 * @throws  will throw if encoding fails
 */
export function marshalIAVLAbsenceOp (o: IAVLAbsenceOp, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeIAVLAbsenceOp(json, lengthPrefixed);
}

/**
 * Marshal a `IAVLValueOp` object to Amino
 *
 * @param   o              - `IAVLValueOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `IAVLValueOp` object
 * @throws  will throw if encoding fails
 */
export function marshalIAVLValueOp (o: IAVLValueOp, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeIAVLValueOp(json, lengthPrefixed);
}

/**
 * Marshal a `PrivKeyLedgerSecp256k1` object to Amino
 *
 * @param   o              - `PrivKeyLedgerSecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PrivKeyLedgerSecp256k1` object
 * @throws  will throw if encoding fails
 */
export function marshalPrivKeyLedgerSecp256k1 (o: PrivKeyLedgerSecp256k1, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePrivKeyLedgerSecp256k1(json, lengthPrefixed);
}

/**
 * Marshal a `Info` object to Amino
 *
 * @param   o              - `Info` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Info` object
 * @throws  will throw if encoding fails
 */
export function marshalInfo (o: Info, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeInfo(json, lengthPrefixed);
}

/**
 * Marshal a `BIP44Params` object to Amino
 *
 * @param   o              - `BIP44Params` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BIP44Params` object
 * @throws  will throw if encoding fails
 */
export function marshalBIP44Params (o: BIP44Params, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBIP44Params(json, lengthPrefixed);
}

/**
 * Marshal a `LocalInfo` object to Amino
 *
 * @param   o              - `LocalInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `LocalInfo` object
 * @throws  will throw if encoding fails
 */
export function marshalLocalInfo (o: LocalInfo, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeLocalInfo(json, lengthPrefixed);
}

/**
 * Marshal a `LedgerInfo` object to Amino
 *
 * @param   o              - `LedgerInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `LedgerInfo` object
 * @throws  will throw if encoding fails
 */
export function marshalLedgerInfo (o: LedgerInfo, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeLedgerInfo(json, lengthPrefixed);
}

/**
 * Marshal a `OfflineInfo` object to Amino
 *
 * @param   o              - `OfflineInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `OfflineInfo` object
 * @throws  will throw if encoding fails
 */
export function marshalOfflineInfo (o: OfflineInfo, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeOfflineInfo(json, lengthPrefixed);
}

/**
 * Marshal a `MultiInfo` object to Amino
 *
 * @param   o              - `MultiInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MultiInfo` object
 * @throws  will throw if encoding fails
 */
export function marshalMultiInfo (o: MultiInfo, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMultiInfo(json, lengthPrefixed);
}

/**
 * Marshal a `Msg` object to Amino
 *
 * @param   o              - `Msg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Msg` object
 * @throws  will throw if encoding fails
 */
export function marshalMsg (o: Msg, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsg(json, lengthPrefixed);
}

/**
 * Marshal a `Tx` object to Amino
 *
 * @param   o              - `Tx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Tx` object
 * @throws  will throw if encoding fails
 */
export function marshalTx (o: Tx, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeTx(json, lengthPrefixed);
}

/**
 * Marshal a `Account` object to Amino
 *
 * @param   o              - `Account` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Account` object
 * @throws  will throw if encoding fails
 */
export function marshalAccount (o: Account, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeAccount(json, lengthPrefixed);
}

/**
 * Marshal a `VestingAccount` object to Amino
 *
 * @param   o              - `VestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `VestingAccount` object
 * @throws  will throw if encoding fails
 */
export function marshalVestingAccount (o: VestingAccount, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeVestingAccount(json, lengthPrefixed);
}

/**
 * Marshal a `BaseAccount` object to Amino
 *
 * @param   o              - `BaseAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BaseAccount` object
 * @throws  will throw if encoding fails
 */
export function marshalBaseAccount (o: BaseAccount, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBaseAccount(json, lengthPrefixed);
}

/**
 * Marshal a `BaseVestingAccount` object to Amino
 *
 * @param   o              - `BaseVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BaseVestingAccount` object
 * @throws  will throw if encoding fails
 */
export function marshalBaseVestingAccount (o: BaseVestingAccount, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBaseVestingAccount(json, lengthPrefixed);
}

/**
 * Marshal a `ContinuousVestingAccount` object to Amino
 *
 * @param   o              - `ContinuousVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ContinuousVestingAccount` object
 * @throws  will throw if encoding fails
 */
export function marshalContinuousVestingAccount (o: ContinuousVestingAccount, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeContinuousVestingAccount(json, lengthPrefixed);
}

/**
 * Marshal a `DelayedVestingAccount` object to Amino
 *
 * @param   o              - `DelayedVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `DelayedVestingAccount` object
 * @throws  will throw if encoding fails
 */
export function marshalDelayedVestingAccount (o: DelayedVestingAccount, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeDelayedVestingAccount(json, lengthPrefixed);
}

/**
 * Marshal a `StdTx` object to Amino
 *
 * @param   o              - `StdTx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `StdTx` object
 * @throws  will throw if encoding fails
 */
export function marshalStdTx (o: StdTx, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeStdTx(json, lengthPrefixed);
}

/**
 * Marshal a `MsgSend` object to Amino
 *
 * @param   o              - `MsgSend` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgSend` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgSend (o: MsgSend, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgSend(json, lengthPrefixed);
}

/**
 * Marshal a `MsgMultiSend` object to Amino
 *
 * @param   o              - `MsgMultiSend` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgMultiSend` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgMultiSend (o: MsgMultiSend, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgMultiSend(json, lengthPrefixed);
}

/**
 * Marshal a `MsgVerifyInvariant` object to Amino
 *
 * @param   o              - `MsgVerifyInvariant` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgVerifyInvariant` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgVerifyInvariant (o: MsgVerifyInvariant, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgVerifyInvariant(json, lengthPrefixed);
}

/**
 * Marshal a `MsgWithdrawDelegatorReward` object to Amino
 *
 * @param   o              - `MsgWithdrawDelegatorReward` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgWithdrawDelegatorReward` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgWithdrawDelegatorReward (o: MsgWithdrawDelegatorReward, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgWithdrawDelegatorReward(json, lengthPrefixed);
}

/**
 * Marshal a `MsgWithdrawValidatorCommission` object to Amino
 *
 * @param   o              - `MsgWithdrawValidatorCommission` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgWithdrawValidatorCommission` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgWithdrawValidatorCommission (o: MsgWithdrawValidatorCommission, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgWithdrawValidatorCommission(json, lengthPrefixed);
}

/**
 * Marshal a `MsgSetWithdrawAddress` object to Amino
 *
 * @param   o              - `MsgSetWithdrawAddress` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgSetWithdrawAddress` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgSetWithdrawAddress (o: MsgSetWithdrawAddress, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgSetWithdrawAddress(json, lengthPrefixed);
}

/**
 * Marshal a `Content` object to Amino
 *
 * @param   o              - `Content` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Content` object
 * @throws  will throw if encoding fails
 */
export function marshalContent (o: Content, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeContent(json, lengthPrefixed);
}

/**
 * Marshal a `MsgSubmitProposal` object to Amino
 *
 * @param   o              - `MsgSubmitProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgSubmitProposal` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgSubmitProposal (o: MsgSubmitProposal, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgSubmitProposal(json, lengthPrefixed);
}

/**
 * Marshal a `MsgDeposit` object to Amino
 *
 * @param   o              - `MsgDeposit` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgDeposit` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgDeposit (o: MsgDeposit, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgDeposit(json, lengthPrefixed);
}

/**
 * Marshal a `MsgVote` object to Amino
 *
 * @param   o              - `MsgVote` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgVote` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgVote (o: MsgVote, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgVote(json, lengthPrefixed);
}

/**
 * Marshal a `TextProposal` object to Amino
 *
 * @param   o              - `TextProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `TextProposal` object
 * @throws  will throw if encoding fails
 */
export function marshalTextProposal (o: TextProposal, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeTextProposal(json, lengthPrefixed);
}

/**
 * Marshal a `SoftwareUpgradeProposal` object to Amino
 *
 * @param   o              - `SoftwareUpgradeProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SoftwareUpgradeProposal` object
 * @throws  will throw if encoding fails
 */
export function marshalSoftwareUpgradeProposal (o: SoftwareUpgradeProposal, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeSoftwareUpgradeProposal(json, lengthPrefixed);
}

/**
 * Marshal a `MsgIBCTransfer` object to Amino
 *
 * @param   o              - `MsgIBCTransfer` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgIBCTransfer` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgIBCTransfer (o: MsgIBCTransfer, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgIBCTransfer(json, lengthPrefixed);
}

/**
 * Marshal a `MsgIBCReceive` object to Amino
 *
 * @param   o              - `MsgIBCReceive` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgIBCReceive` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgIBCReceive (o: MsgIBCReceive, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgIBCReceive(json, lengthPrefixed);
}

/**
 * Marshal a `ParameterChangeProposal` object to Amino
 *
 * @param   o              - `ParameterChangeProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ParameterChangeProposal` object
 * @throws  will throw if encoding fails
 */
export function marshalParameterChangeProposal (o: ParameterChangeProposal, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeParameterChangeProposal(json, lengthPrefixed);
}

/**
 * Marshal a `MsgUnjail` object to Amino
 *
 * @param   o              - `MsgUnjail` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgUnjail` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgUnjail (o: MsgUnjail, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgUnjail(json, lengthPrefixed);
}

/**
 * Marshal a `MsgCreateValidator` object to Amino
 *
 * @param   o              - `MsgCreateValidator` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgCreateValidator` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgCreateValidator (o: MsgCreateValidator, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgCreateValidator(json, lengthPrefixed);
}

/**
 * Marshal a `MsgEditValidator` object to Amino
 *
 * @param   o              - `MsgEditValidator` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgEditValidator` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgEditValidator (o: MsgEditValidator, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgEditValidator(json, lengthPrefixed);
}

/**
 * Marshal a `MsgDelegate` object to Amino
 *
 * @param   o              - `MsgDelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgDelegate` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgDelegate (o: MsgDelegate, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgDelegate(json, lengthPrefixed);
}

/**
 * Marshal a `MsgUndelegate` object to Amino
 *
 * @param   o              - `MsgUndelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgUndelegate` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgUndelegate (o: MsgUndelegate, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgUndelegate(json, lengthPrefixed);
}

/**
 * Marshal a `MsgBeginRedelegate` object to Amino
 *
 * @param   o              - `MsgBeginRedelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgBeginRedelegate` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgBeginRedelegate (o: MsgBeginRedelegate, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgBeginRedelegate(json, lengthPrefixed);
}

/**
 * Marshal a `BlockchainMessage` object to Amino
 *
 * @param   o              - `BlockchainMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BlockchainMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalBlockchainMessage (o: BlockchainMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBlockchainMessage(json, lengthPrefixed);
}

/**
 * Marshal a `BcBlockRequestMessage` object to Amino
 *
 * @param   o              - `BcBlockRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcBlockRequestMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalBcBlockRequestMessage (o: BcBlockRequestMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBcBlockRequestMessage(json, lengthPrefixed);
}

/**
 * Marshal a `BcBlockResponseMessage` object to Amino
 *
 * @param   o              - `BcBlockResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcBlockResponseMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalBcBlockResponseMessage (o: BcBlockResponseMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBcBlockResponseMessage(json, lengthPrefixed);
}

/**
 * Marshal a `BcNoBlockResponseMessage` object to Amino
 *
 * @param   o              - `BcNoBlockResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcNoBlockResponseMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalBcNoBlockResponseMessage (o: BcNoBlockResponseMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBcNoBlockResponseMessage(json, lengthPrefixed);
}

/**
 * Marshal a `BcStatusResponseMessage` object to Amino
 *
 * @param   o              - `BcStatusResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcStatusResponseMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalBcStatusResponseMessage (o: BcStatusResponseMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBcStatusResponseMessage(json, lengthPrefixed);
}

/**
 * Marshal a `BcStatusRequestMessage` object to Amino
 *
 * @param   o              - `BcStatusRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcStatusRequestMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalBcStatusRequestMessage (o: BcStatusRequestMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBcStatusRequestMessage(json, lengthPrefixed);
}

/**
 * Marshal a `ConsensusMessage` object to Amino
 *
 * @param   o              - `ConsensusMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ConsensusMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalConsensusMessage (o: ConsensusMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeConsensusMessage(json, lengthPrefixed);
}

/**
 * Marshal a `NewRoundStepMessage` object to Amino
 *
 * @param   o              - `NewRoundStepMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `NewRoundStepMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalNewRoundStepMessage (o: NewRoundStepMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeNewRoundStepMessage(json, lengthPrefixed);
}

/**
 * Marshal a `NewValidBlockMessage` object to Amino
 *
 * @param   o              - `NewValidBlockMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `NewValidBlockMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalNewValidBlockMessage (o: NewValidBlockMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeNewValidBlockMessage(json, lengthPrefixed);
}

/**
 * Marshal a `ProposalMessage` object to Amino
 *
 * @param   o              - `ProposalMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ProposalMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalProposalMessage (o: ProposalMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeProposalMessage(json, lengthPrefixed);
}

/**
 * Marshal a `ProposalPOLMessage` object to Amino
 *
 * @param   o              - `ProposalPOLMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ProposalPOLMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalProposalPOLMessage (o: ProposalPOLMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeProposalPOLMessage(json, lengthPrefixed);
}

/**
 * Marshal a `BlockPartMessage` object to Amino
 *
 * @param   o              - `BlockPartMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BlockPartMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalBlockPartMessage (o: BlockPartMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeBlockPartMessage(json, lengthPrefixed);
}

/**
 * Marshal a `VoteMessage` object to Amino
 *
 * @param   o              - `VoteMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `VoteMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalVoteMessage (o: VoteMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeVoteMessage(json, lengthPrefixed);
}

/**
 * Marshal a `HasVoteMessage` object to Amino
 *
 * @param   o              - `HasVoteMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `HasVoteMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalHasVoteMessage (o: HasVoteMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeHasVoteMessage(json, lengthPrefixed);
}

/**
 * Marshal a `VoteSetMaj23Message` object to Amino
 *
 * @param   o              - `VoteSetMaj23Message` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `VoteSetMaj23Message` object
 * @throws  will throw if encoding fails
 */
export function marshalVoteSetMaj23Message (o: VoteSetMaj23Message, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeVoteSetMaj23Message(json, lengthPrefixed);
}

/**
 * Marshal a `VoteSetBitsMessage` object to Amino
 *
 * @param   o              - `VoteSetBitsMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `VoteSetBitsMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalVoteSetBitsMessage (o: VoteSetBitsMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeVoteSetBitsMessage(json, lengthPrefixed);
}

/**
 * Marshal a `WALMessage` object to Amino
 *
 * @param   o              - `WALMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `WALMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalWALMessage (o: WALMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeWALMessage(json, lengthPrefixed);
}

/**
 * Marshal a `MsgInfo` object to Amino
 *
 * @param   o              - `MsgInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgInfo` object
 * @throws  will throw if encoding fails
 */
export function marshalMsgInfo (o: MsgInfo, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMsgInfo(json, lengthPrefixed);
}

/**
 * Marshal a `TimeoutInfo` object to Amino
 *
 * @param   o              - `TimeoutInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `TimeoutInfo` object
 * @throws  will throw if encoding fails
 */
export function marshalTimeoutInfo (o: TimeoutInfo, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeTimeoutInfo(json, lengthPrefixed);
}

/**
 * Marshal a `EndHeightMessage` object to Amino
 *
 * @param   o              - `EndHeightMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EndHeightMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalEndHeightMessage (o: EndHeightMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEndHeightMessage(json, lengthPrefixed);
}

/**
 * Marshal a `PubKey` object to Amino
 *
 * @param   o              - `PubKey` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKey` object
 * @throws  will throw if encoding fails
 */
export function marshalPubKey (o: PubKey, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePubKey(json, lengthPrefixed);
}

/**
 * Marshal a `PrivKey` object to Amino
 *
 * @param   o              - `PrivKey` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PrivKey` object
 * @throws  will throw if encoding fails
 */
export function marshalPrivKey (o: PrivKey, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePrivKey(json, lengthPrefixed);
}

/**
 * Marshal a `PubKeyEd25519` object to Amino
 *
 * @param   o              - `PubKeyEd25519` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeyEd25519` object
 * @throws  will throw if encoding fails
 */
export function marshalPubKeyEd25519 (o: PubKeyEd25519, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePubKeyEd25519(json, lengthPrefixed);
}

/**
 * Marshal a `PrivKeyEd25519` object to Amino
 *
 * @param   o              - `PrivKeyEd25519` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PrivKeyEd25519` object
 * @throws  will throw if encoding fails
 */
export function marshalPrivKeyEd25519 (o: PrivKeyEd25519, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePrivKeyEd25519(json, lengthPrefixed);
}

/**
 * Marshal a `PubKeySecp256k1` object to Amino
 *
 * @param   o              - `PubKeySecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeySecp256k1` object
 * @throws  will throw if encoding fails
 */
export function marshalPubKeySecp256k1 (o: PubKeySecp256k1, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePubKeySecp256k1(json, lengthPrefixed);
}

/**
 * Marshal a `PrivKeySecp256k1` object to Amino
 *
 * @param   o              - `PrivKeySecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PrivKeySecp256k1` object
 * @throws  will throw if encoding fails
 */
export function marshalPrivKeySecp256k1 (o: PrivKeySecp256k1, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePrivKeySecp256k1(json, lengthPrefixed);
}

/**
 * Marshal a `PubKeyMultisigThreshold` object to Amino
 *
 * @param   o              - `PubKeyMultisigThreshold` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeyMultisigThreshold` object
 * @throws  will throw if encoding fails
 */
export function marshalPubKeyMultisigThreshold (o: PubKeyMultisigThreshold, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePubKeyMultisigThreshold(json, lengthPrefixed);
}

/**
 * Marshal a `EvidenceMessage` object to Amino
 *
 * @param   o              - `EvidenceMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EvidenceMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalEvidenceMessage (o: EvidenceMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEvidenceMessage(json, lengthPrefixed);
}

/**
 * Marshal a `EvidenceListMessage` object to Amino
 *
 * @param   o              - `EvidenceListMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EvidenceListMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalEvidenceListMessage (o: EvidenceListMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEvidenceListMessage(json, lengthPrefixed);
}

/**
 * Marshal a `MempoolMessage` object to Amino
 *
 * @param   o              - `MempoolMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MempoolMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalMempoolMessage (o: MempoolMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMempoolMessage(json, lengthPrefixed);
}

/**
 * Marshal a `TxMessage` object to Amino
 *
 * @param   o              - `TxMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `TxMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalTxMessage (o: TxMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeTxMessage(json, lengthPrefixed);
}

/**
 * Marshal a `Packet` object to Amino
 *
 * @param   o              - `Packet` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Packet` object
 * @throws  will throw if encoding fails
 */
export function marshalPacket (o: Packet, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePacket(json, lengthPrefixed);
}

/**
 * Marshal a `PacketPing` object to Amino
 *
 * @param   o              - `PacketPing` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PacketPing` object
 * @throws  will throw if encoding fails
 */
export function marshalPacketPing (o: PacketPing, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePacketPing(json, lengthPrefixed);
}

/**
 * Marshal a `PacketPong` object to Amino
 *
 * @param   o              - `PacketPong` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PacketPong` object
 * @throws  will throw if encoding fails
 */
export function marshalPacketPong (o: PacketPong, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePacketPong(json, lengthPrefixed);
}

/**
 * Marshal a `PacketMsg` object to Amino
 *
 * @param   o              - `PacketMsg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PacketMsg` object
 * @throws  will throw if encoding fails
 */
export function marshalPacketMsg (o: PacketMsg, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePacketMsg(json, lengthPrefixed);
}

/**
 * Marshal a `PexMessage` object to Amino
 *
 * @param   o              - `PexMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PexMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalPexMessage (o: PexMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePexMessage(json, lengthPrefixed);
}

/**
 * Marshal a `PexRequestMessage` object to Amino
 *
 * @param   o              - `PexRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PexRequestMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalPexRequestMessage (o: PexRequestMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePexRequestMessage(json, lengthPrefixed);
}

/**
 * Marshal a `PexAddrsMessage` object to Amino
 *
 * @param   o              - `PexAddrsMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PexAddrsMessage` object
 * @throws  will throw if encoding fails
 */
export function marshalPexAddrsMessage (o: PexAddrsMessage, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePexAddrsMessage(json, lengthPrefixed);
}

/**
 * Marshal a `RemoteSignerMsg` object to Amino
 *
 * @param   o              - `RemoteSignerMsg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `RemoteSignerMsg` object
 * @throws  will throw if encoding fails
 */
export function marshalRemoteSignerMsg (o: RemoteSignerMsg, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeRemoteSignerMsg(json, lengthPrefixed);
}

/**
 * Marshal a `PubKeyRequest` object to Amino
 *
 * @param   o              - `PubKeyRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeyRequest` object
 * @throws  will throw if encoding fails
 */
export function marshalPubKeyRequest (o: PubKeyRequest, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePubKeyRequest(json, lengthPrefixed);
}

/**
 * Marshal a `PubKeyResponse` object to Amino
 *
 * @param   o              - `PubKeyResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeyResponse` object
 * @throws  will throw if encoding fails
 */
export function marshalPubKeyResponse (o: PubKeyResponse, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePubKeyResponse(json, lengthPrefixed);
}

/**
 * Marshal a `SignVoteRequest` object to Amino
 *
 * @param   o              - `SignVoteRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SignVoteRequest` object
 * @throws  will throw if encoding fails
 */
export function marshalSignVoteRequest (o: SignVoteRequest, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeSignVoteRequest(json, lengthPrefixed);
}

/**
 * Marshal a `SignedVoteResponse` object to Amino
 *
 * @param   o              - `SignedVoteResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SignedVoteResponse` object
 * @throws  will throw if encoding fails
 */
export function marshalSignedVoteResponse (o: SignedVoteResponse, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeSignedVoteResponse(json, lengthPrefixed);
}

/**
 * Marshal a `SignProposalRequest` object to Amino
 *
 * @param   o              - `SignProposalRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SignProposalRequest` object
 * @throws  will throw if encoding fails
 */
export function marshalSignProposalRequest (o: SignProposalRequest, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeSignProposalRequest(json, lengthPrefixed);
}

/**
 * Marshal a `SignedProposalResponse` object to Amino
 *
 * @param   o              - `SignedProposalResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SignedProposalResponse` object
 * @throws  will throw if encoding fails
 */
export function marshalSignedProposalResponse (o: SignedProposalResponse, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeSignedProposalResponse(json, lengthPrefixed);
}

/**
 * Marshal a `PingRequest` object to Amino
 *
 * @param   o              - `PingRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PingRequest` object
 * @throws  will throw if encoding fails
 */
export function marshalPingRequest (o: PingRequest, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePingRequest(json, lengthPrefixed);
}

/**
 * Marshal a `PingResponse` object to Amino
 *
 * @param   o              - `PingResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PingResponse` object
 * @throws  will throw if encoding fails
 */
export function marshalPingResponse (o: PingResponse, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodePingResponse(json, lengthPrefixed);
}

/**
 * Marshal a `TMEventData` object to Amino
 *
 * @param   o              - `TMEventData` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `TMEventData` object
 * @throws  will throw if encoding fails
 */
export function marshalTMEventData (o: TMEventData, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeTMEventData(json, lengthPrefixed);
}

/**
 * Marshal a `EventDataNewBlock` object to Amino
 *
 * @param   o              - `EventDataNewBlock` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataNewBlock` object
 * @throws  will throw if encoding fails
 */
export function marshalEventDataNewBlock (o: EventDataNewBlock, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataNewBlock(json, lengthPrefixed);
}

/**
 * Marshal a `EventDataNewBlockHeader` object to Amino
 *
 * @param   o              - `EventDataNewBlockHeader` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataNewBlockHeader` object
 * @throws  will throw if encoding fails
 */
export function marshalEventDataNewBlockHeader (o: EventDataNewBlockHeader, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataNewBlockHeader(json, lengthPrefixed);
}

/**
 * Marshal a `EventDataTx` object to Amino
 *
 * @param   o              - `EventDataTx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataTx` object
 * @throws  will throw if encoding fails
 */
export function marshalEventDataTx (o: EventDataTx, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataTx(json, lengthPrefixed);
}

/**
 * Marshal a `EventDataRoundState` object to Amino
 *
 * @param   o              - `EventDataRoundState` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataRoundState` object
 * @throws  will throw if encoding fails
 */
export function marshalEventDataRoundState (o: EventDataRoundState, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataRoundState(json, lengthPrefixed);
}

/**
 * Marshal a `EventDataNewRound` object to Amino
 *
 * @param   o              - `EventDataNewRound` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataNewRound` object
 * @throws  will throw if encoding fails
 */
export function marshalEventDataNewRound (o: EventDataNewRound, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataNewRound(json, lengthPrefixed);
}

/**
 * Marshal a `EventDataCompleteProposal` object to Amino
 *
 * @param   o              - `EventDataCompleteProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataCompleteProposal` object
 * @throws  will throw if encoding fails
 */
export function marshalEventDataCompleteProposal (o: EventDataCompleteProposal, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataCompleteProposal(json, lengthPrefixed);
}

/**
 * Marshal a `EventDataVote` object to Amino
 *
 * @param   o              - `EventDataVote` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataVote` object
 * @throws  will throw if encoding fails
 */
export function marshalEventDataVote (o: EventDataVote, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataVote(json, lengthPrefixed);
}

/**
 * Marshal a `EventDataValidatorSetUpdates` object to Amino
 *
 * @param   o              - `EventDataValidatorSetUpdates` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataValidatorSetUpdates` object
 * @throws  will throw if encoding fails
 */
export function marshalEventDataValidatorSetUpdates (o: EventDataValidatorSetUpdates, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataValidatorSetUpdates(json, lengthPrefixed);
}

/**
 * Marshal a `EventDataString` object to Amino
 *
 * @param   o              - `EventDataString` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataString` object
 * @throws  will throw if encoding fails
 */
export function marshalEventDataString (o: EventDataString, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEventDataString(json, lengthPrefixed);
}

/**
 * Marshal a `Evidence` object to Amino
 *
 * @param   o              - `Evidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Evidence` object
 * @throws  will throw if encoding fails
 */
export function marshalEvidence (o: Evidence, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeEvidence(json, lengthPrefixed);
}

/**
 * Marshal a `DuplicateVoteEvidence` object to Amino
 *
 * @param   o              - `DuplicateVoteEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `DuplicateVoteEvidence` object
 * @throws  will throw if encoding fails
 */
export function marshalDuplicateVoteEvidence (o: DuplicateVoteEvidence, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeDuplicateVoteEvidence(json, lengthPrefixed);
}

/**
 * Marshal a `MockGoodEvidence` object to Amino
 *
 * @param   o              - `MockGoodEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MockGoodEvidence` object
 * @throws  will throw if encoding fails
 */
export function marshalMockGoodEvidence (o: MockGoodEvidence, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMockGoodEvidence(json, lengthPrefixed);
}

/**
 * Marshal a `MockRandomGoodEvidence` object to Amino
 *
 * @param   o              - `MockRandomGoodEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MockRandomGoodEvidence` object
 * @throws  will throw if encoding fails
 */
export function marshalMockRandomGoodEvidence (o: MockRandomGoodEvidence, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMockRandomGoodEvidence(json, lengthPrefixed);
}

/**
 * Marshal a `MockBadEvidence` object to Amino
 *
 * @param   o              - `MockBadEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MockBadEvidence` object
 * @throws  will throw if encoding fails
 */
export function marshalMockBadEvidence (o: MockBadEvidence, lengthPrefixed: boolean = true): AminoBytes {
    const json = marshalJSON(o);
    return encodeType.encodeMockBadEvidence(json, lengthPrefixed);
}
