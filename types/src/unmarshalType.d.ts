import { AminoBytes } from '../lib/types';
import { Account, BaseAccount, BaseVestingAccount, BcBlockRequestMessage, BcBlockResponseMessage, BcNoBlockResponseMessage, BcStatusRequestMessage, BcStatusResponseMessage, BIP44Params, BlockchainMessage, BlockPartMessage, ConsensusMessage, Content, ContinuousVestingAccount, DelayedVestingAccount, DuplicateVoteEvidence, EndHeightMessage, EventDataCompleteProposal, EventDataNewBlock, EventDataNewBlockHeader, EventDataNewRound, EventDataRoundState, EventDataString, EventDataTx, EventDataValidatorSetUpdates, EventDataVote, Evidence, EvidenceListMessage, EvidenceMessage, HasVoteMessage, IAVLAbsenceOp, IAVLValueOp, Info, LedgerInfo, LocalInfo, MempoolMessage, MockBadEvidence, MockGoodEvidence, MockRandomGoodEvidence, Msg, MsgBeginRedelegate, MsgCreateValidator, MsgDelegate, MsgDeposit, MsgEditValidator, MsgIBCReceive, MsgIBCTransfer, MsgInfo, MsgMultiSend, MsgSend, MsgSetWithdrawAddress, MsgSubmitProposal, MsgUndelegate, MsgUnjail, MsgVerifyInvariant, MsgVote, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MultiInfo, MultiStoreProofOp, NewRoundStepMessage, NewValidBlockMessage, OfflineInfo, Packet, PacketMsg, PacketPing, PacketPong, ParameterChangeProposal, PexAddrsMessage, PexMessage, PexRequestMessage, PingRequest, PingResponse, PrivKey, PrivKeyEd25519, PrivKeyLedgerSecp256k1, PrivKeySecp256k1, ProposalMessage, ProposalPOLMessage, PubKey, PubKeyEd25519, PubKeyMultisigThreshold, PubKeyRequest, PubKeyResponse, PubKeySecp256k1, RemoteSignerMsg, SignedProposalResponse, SignedVoteResponse, SignProposalRequest, SignVoteRequest, SoftwareUpgradeProposal, StdTx, TextProposal, TimeoutInfo, TMEventData, Tx, TxMessage, VestingAccount, VoteMessage, VoteSetBitsMessage, VoteSetMaj23Message, WALMessage } from './types';
/**
 * Unmarshal a `MultiStoreProofOp` object from Amino
 *
 * @param   amino          - Amino-encoded `MultiStoreProofOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MultiStoreProofOp` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMultiStoreProofOp(amino: AminoBytes, lengthPrefixed?: boolean): MultiStoreProofOp;
/**
 * Unmarshal a `IAVLAbsenceOp` object from Amino
 *
 * @param   amino          - Amino-encoded `IAVLAbsenceOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `IAVLAbsenceOp` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalIAVLAbsenceOp(amino: AminoBytes, lengthPrefixed?: boolean): IAVLAbsenceOp;
/**
 * Unmarshal a `IAVLValueOp` object from Amino
 *
 * @param   amino          - Amino-encoded `IAVLValueOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `IAVLValueOp` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalIAVLValueOp(amino: AminoBytes, lengthPrefixed?: boolean): IAVLValueOp;
/**
 * Unmarshal a `PrivKeyLedgerSecp256k1` object from Amino
 *
 * @param   amino          - Amino-encoded `PrivKeyLedgerSecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PrivKeyLedgerSecp256k1` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPrivKeyLedgerSecp256k1(amino: AminoBytes, lengthPrefixed?: boolean): PrivKeyLedgerSecp256k1;
/**
 * Unmarshal a `Info` object from Amino
 *
 * @param   amino          - Amino-encoded `Info` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `Info` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalInfo(amino: AminoBytes, lengthPrefixed?: boolean): Info;
/**
 * Unmarshal a `BIP44Params` object from Amino
 *
 * @param   amino          - Amino-encoded `BIP44Params` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BIP44Params` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalBIP44Params(amino: AminoBytes, lengthPrefixed?: boolean): BIP44Params;
/**
 * Unmarshal a `LocalInfo` object from Amino
 *
 * @param   amino          - Amino-encoded `LocalInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `LocalInfo` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalLocalInfo(amino: AminoBytes, lengthPrefixed?: boolean): LocalInfo;
/**
 * Unmarshal a `LedgerInfo` object from Amino
 *
 * @param   amino          - Amino-encoded `LedgerInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `LedgerInfo` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalLedgerInfo(amino: AminoBytes, lengthPrefixed?: boolean): LedgerInfo;
/**
 * Unmarshal a `OfflineInfo` object from Amino
 *
 * @param   amino          - Amino-encoded `OfflineInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `OfflineInfo` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalOfflineInfo(amino: AminoBytes, lengthPrefixed?: boolean): OfflineInfo;
/**
 * Unmarshal a `MultiInfo` object from Amino
 *
 * @param   amino          - Amino-encoded `MultiInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MultiInfo` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMultiInfo(amino: AminoBytes, lengthPrefixed?: boolean): MultiInfo;
/**
 * Unmarshal a `Msg` object from Amino
 *
 * @param   amino          - Amino-encoded `Msg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `Msg` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsg(amino: AminoBytes, lengthPrefixed?: boolean): Msg;
/**
 * Unmarshal a `Tx` object from Amino
 *
 * @param   amino          - Amino-encoded `Tx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `Tx` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalTx(amino: AminoBytes, lengthPrefixed?: boolean): Tx;
/**
 * Unmarshal a `Account` object from Amino
 *
 * @param   amino          - Amino-encoded `Account` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `Account` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalAccount(amino: AminoBytes, lengthPrefixed?: boolean): Account;
/**
 * Unmarshal a `VestingAccount` object from Amino
 *
 * @param   amino          - Amino-encoded `VestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `VestingAccount` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalVestingAccount(amino: AminoBytes, lengthPrefixed?: boolean): VestingAccount;
/**
 * Unmarshal a `BaseAccount` object from Amino
 *
 * @param   amino          - Amino-encoded `BaseAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BaseAccount` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalBaseAccount(amino: AminoBytes, lengthPrefixed?: boolean): BaseAccount;
/**
 * Unmarshal a `BaseVestingAccount` object from Amino
 *
 * @param   amino          - Amino-encoded `BaseVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BaseVestingAccount` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalBaseVestingAccount(amino: AminoBytes, lengthPrefixed?: boolean): BaseVestingAccount;
/**
 * Unmarshal a `ContinuousVestingAccount` object from Amino
 *
 * @param   amino          - Amino-encoded `ContinuousVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `ContinuousVestingAccount` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalContinuousVestingAccount(amino: AminoBytes, lengthPrefixed?: boolean): ContinuousVestingAccount;
/**
 * Unmarshal a `DelayedVestingAccount` object from Amino
 *
 * @param   amino          - Amino-encoded `DelayedVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `DelayedVestingAccount` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalDelayedVestingAccount(amino: AminoBytes, lengthPrefixed?: boolean): DelayedVestingAccount;
/**
 * Unmarshal a `StdTx` object from Amino
 *
 * @param   amino          - Amino-encoded `StdTx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `StdTx` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalStdTx(amino: AminoBytes, lengthPrefixed?: boolean): StdTx;
/**
 * Unmarshal a `MsgSend` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgSend` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgSend` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgSend(amino: AminoBytes, lengthPrefixed?: boolean): MsgSend;
/**
 * Unmarshal a `MsgMultiSend` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgMultiSend` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgMultiSend` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgMultiSend(amino: AminoBytes, lengthPrefixed?: boolean): MsgMultiSend;
/**
 * Unmarshal a `MsgVerifyInvariant` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgVerifyInvariant` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgVerifyInvariant` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgVerifyInvariant(amino: AminoBytes, lengthPrefixed?: boolean): MsgVerifyInvariant;
/**
 * Unmarshal a `MsgWithdrawDelegatorReward` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgWithdrawDelegatorReward` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgWithdrawDelegatorReward` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgWithdrawDelegatorReward(amino: AminoBytes, lengthPrefixed?: boolean): MsgWithdrawDelegatorReward;
/**
 * Unmarshal a `MsgWithdrawValidatorCommission` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgWithdrawValidatorCommission` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgWithdrawValidatorCommission` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgWithdrawValidatorCommission(amino: AminoBytes, lengthPrefixed?: boolean): MsgWithdrawValidatorCommission;
/**
 * Unmarshal a `MsgSetWithdrawAddress` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgSetWithdrawAddress` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgSetWithdrawAddress` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgSetWithdrawAddress(amino: AminoBytes, lengthPrefixed?: boolean): MsgSetWithdrawAddress;
/**
 * Unmarshal a `Content` object from Amino
 *
 * @param   amino          - Amino-encoded `Content` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `Content` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalContent(amino: AminoBytes, lengthPrefixed?: boolean): Content;
/**
 * Unmarshal a `MsgSubmitProposal` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgSubmitProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgSubmitProposal` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgSubmitProposal(amino: AminoBytes, lengthPrefixed?: boolean): MsgSubmitProposal;
/**
 * Unmarshal a `MsgDeposit` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgDeposit` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgDeposit` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgDeposit(amino: AminoBytes, lengthPrefixed?: boolean): MsgDeposit;
/**
 * Unmarshal a `MsgVote` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgVote` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgVote` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgVote(amino: AminoBytes, lengthPrefixed?: boolean): MsgVote;
/**
 * Unmarshal a `TextProposal` object from Amino
 *
 * @param   amino          - Amino-encoded `TextProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `TextProposal` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalTextProposal(amino: AminoBytes, lengthPrefixed?: boolean): TextProposal;
/**
 * Unmarshal a `SoftwareUpgradeProposal` object from Amino
 *
 * @param   amino          - Amino-encoded `SoftwareUpgradeProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `SoftwareUpgradeProposal` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalSoftwareUpgradeProposal(amino: AminoBytes, lengthPrefixed?: boolean): SoftwareUpgradeProposal;
/**
 * Unmarshal a `MsgIBCTransfer` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgIBCTransfer` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgIBCTransfer` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgIBCTransfer(amino: AminoBytes, lengthPrefixed?: boolean): MsgIBCTransfer;
/**
 * Unmarshal a `MsgIBCReceive` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgIBCReceive` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgIBCReceive` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgIBCReceive(amino: AminoBytes, lengthPrefixed?: boolean): MsgIBCReceive;
/**
 * Unmarshal a `ParameterChangeProposal` object from Amino
 *
 * @param   amino          - Amino-encoded `ParameterChangeProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `ParameterChangeProposal` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalParameterChangeProposal(amino: AminoBytes, lengthPrefixed?: boolean): ParameterChangeProposal;
/**
 * Unmarshal a `MsgUnjail` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgUnjail` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgUnjail` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgUnjail(amino: AminoBytes, lengthPrefixed?: boolean): MsgUnjail;
/**
 * Unmarshal a `MsgCreateValidator` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgCreateValidator` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgCreateValidator` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgCreateValidator(amino: AminoBytes, lengthPrefixed?: boolean): MsgCreateValidator;
/**
 * Unmarshal a `MsgEditValidator` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgEditValidator` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgEditValidator` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgEditValidator(amino: AminoBytes, lengthPrefixed?: boolean): MsgEditValidator;
/**
 * Unmarshal a `MsgDelegate` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgDelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgDelegate` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgDelegate(amino: AminoBytes, lengthPrefixed?: boolean): MsgDelegate;
/**
 * Unmarshal a `MsgUndelegate` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgUndelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgUndelegate` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgUndelegate(amino: AminoBytes, lengthPrefixed?: boolean): MsgUndelegate;
/**
 * Unmarshal a `MsgBeginRedelegate` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgBeginRedelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgBeginRedelegate` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgBeginRedelegate(amino: AminoBytes, lengthPrefixed?: boolean): MsgBeginRedelegate;
/**
 * Unmarshal a `BlockchainMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `BlockchainMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BlockchainMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalBlockchainMessage(amino: AminoBytes, lengthPrefixed?: boolean): BlockchainMessage;
/**
 * Unmarshal a `BcBlockRequestMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `BcBlockRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BcBlockRequestMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalBcBlockRequestMessage(amino: AminoBytes, lengthPrefixed?: boolean): BcBlockRequestMessage;
/**
 * Unmarshal a `BcBlockResponseMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `BcBlockResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BcBlockResponseMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalBcBlockResponseMessage(amino: AminoBytes, lengthPrefixed?: boolean): BcBlockResponseMessage;
/**
 * Unmarshal a `BcNoBlockResponseMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `BcNoBlockResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BcNoBlockResponseMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalBcNoBlockResponseMessage(amino: AminoBytes, lengthPrefixed?: boolean): BcNoBlockResponseMessage;
/**
 * Unmarshal a `BcStatusResponseMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `BcStatusResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BcStatusResponseMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalBcStatusResponseMessage(amino: AminoBytes, lengthPrefixed?: boolean): BcStatusResponseMessage;
/**
 * Unmarshal a `BcStatusRequestMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `BcStatusRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BcStatusRequestMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalBcStatusRequestMessage(amino: AminoBytes, lengthPrefixed?: boolean): BcStatusRequestMessage;
/**
 * Unmarshal a `ConsensusMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `ConsensusMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `ConsensusMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalConsensusMessage(amino: AminoBytes, lengthPrefixed?: boolean): ConsensusMessage;
/**
 * Unmarshal a `NewRoundStepMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `NewRoundStepMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `NewRoundStepMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalNewRoundStepMessage(amino: AminoBytes, lengthPrefixed?: boolean): NewRoundStepMessage;
/**
 * Unmarshal a `NewValidBlockMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `NewValidBlockMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `NewValidBlockMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalNewValidBlockMessage(amino: AminoBytes, lengthPrefixed?: boolean): NewValidBlockMessage;
/**
 * Unmarshal a `ProposalMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `ProposalMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `ProposalMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalProposalMessage(amino: AminoBytes, lengthPrefixed?: boolean): ProposalMessage;
/**
 * Unmarshal a `ProposalPOLMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `ProposalPOLMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `ProposalPOLMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalProposalPOLMessage(amino: AminoBytes, lengthPrefixed?: boolean): ProposalPOLMessage;
/**
 * Unmarshal a `BlockPartMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `BlockPartMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `BlockPartMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalBlockPartMessage(amino: AminoBytes, lengthPrefixed?: boolean): BlockPartMessage;
/**
 * Unmarshal a `VoteMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `VoteMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `VoteMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalVoteMessage(amino: AminoBytes, lengthPrefixed?: boolean): VoteMessage;
/**
 * Unmarshal a `HasVoteMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `HasVoteMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `HasVoteMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalHasVoteMessage(amino: AminoBytes, lengthPrefixed?: boolean): HasVoteMessage;
/**
 * Unmarshal a `VoteSetMaj23Message` object from Amino
 *
 * @param   amino          - Amino-encoded `VoteSetMaj23Message` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `VoteSetMaj23Message` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalVoteSetMaj23Message(amino: AminoBytes, lengthPrefixed?: boolean): VoteSetMaj23Message;
/**
 * Unmarshal a `VoteSetBitsMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `VoteSetBitsMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `VoteSetBitsMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalVoteSetBitsMessage(amino: AminoBytes, lengthPrefixed?: boolean): VoteSetBitsMessage;
/**
 * Unmarshal a `WALMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `WALMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `WALMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalWALMessage(amino: AminoBytes, lengthPrefixed?: boolean): WALMessage;
/**
 * Unmarshal a `MsgInfo` object from Amino
 *
 * @param   amino          - Amino-encoded `MsgInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MsgInfo` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMsgInfo(amino: AminoBytes, lengthPrefixed?: boolean): MsgInfo;
/**
 * Unmarshal a `TimeoutInfo` object from Amino
 *
 * @param   amino          - Amino-encoded `TimeoutInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `TimeoutInfo` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalTimeoutInfo(amino: AminoBytes, lengthPrefixed?: boolean): TimeoutInfo;
/**
 * Unmarshal a `EndHeightMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `EndHeightMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EndHeightMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalEndHeightMessage(amino: AminoBytes, lengthPrefixed?: boolean): EndHeightMessage;
/**
 * Unmarshal a `PubKey` object from Amino
 *
 * @param   amino          - Amino-encoded `PubKey` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PubKey` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPubKey(amino: AminoBytes, lengthPrefixed?: boolean): PubKey;
/**
 * Unmarshal a `PrivKey` object from Amino
 *
 * @param   amino          - Amino-encoded `PrivKey` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PrivKey` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPrivKey(amino: AminoBytes, lengthPrefixed?: boolean): PrivKey;
/**
 * Unmarshal a `PubKeyEd25519` object from Amino
 *
 * @param   amino          - Amino-encoded `PubKeyEd25519` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PubKeyEd25519` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPubKeyEd25519(amino: AminoBytes, lengthPrefixed?: boolean): PubKeyEd25519;
/**
 * Unmarshal a `PrivKeyEd25519` object from Amino
 *
 * @param   amino          - Amino-encoded `PrivKeyEd25519` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PrivKeyEd25519` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPrivKeyEd25519(amino: AminoBytes, lengthPrefixed?: boolean): PrivKeyEd25519;
/**
 * Unmarshal a `PubKeySecp256k1` object from Amino
 *
 * @param   amino          - Amino-encoded `PubKeySecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PubKeySecp256k1` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPubKeySecp256k1(amino: AminoBytes, lengthPrefixed?: boolean): PubKeySecp256k1;
/**
 * Unmarshal a `PrivKeySecp256k1` object from Amino
 *
 * @param   amino          - Amino-encoded `PrivKeySecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PrivKeySecp256k1` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPrivKeySecp256k1(amino: AminoBytes, lengthPrefixed?: boolean): PrivKeySecp256k1;
/**
 * Unmarshal a `PubKeyMultisigThreshold` object from Amino
 *
 * @param   amino          - Amino-encoded `PubKeyMultisigThreshold` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PubKeyMultisigThreshold` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPubKeyMultisigThreshold(amino: AminoBytes, lengthPrefixed?: boolean): PubKeyMultisigThreshold;
/**
 * Unmarshal a `EvidenceMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `EvidenceMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EvidenceMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalEvidenceMessage(amino: AminoBytes, lengthPrefixed?: boolean): EvidenceMessage;
/**
 * Unmarshal a `EvidenceListMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `EvidenceListMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EvidenceListMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalEvidenceListMessage(amino: AminoBytes, lengthPrefixed?: boolean): EvidenceListMessage;
/**
 * Unmarshal a `MempoolMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `MempoolMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MempoolMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMempoolMessage(amino: AminoBytes, lengthPrefixed?: boolean): MempoolMessage;
/**
 * Unmarshal a `TxMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `TxMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `TxMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalTxMessage(amino: AminoBytes, lengthPrefixed?: boolean): TxMessage;
/**
 * Unmarshal a `Packet` object from Amino
 *
 * @param   amino          - Amino-encoded `Packet` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `Packet` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPacket(amino: AminoBytes, lengthPrefixed?: boolean): Packet;
/**
 * Unmarshal a `PacketPing` object from Amino
 *
 * @param   amino          - Amino-encoded `PacketPing` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PacketPing` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPacketPing(amino: AminoBytes, lengthPrefixed?: boolean): PacketPing;
/**
 * Unmarshal a `PacketPong` object from Amino
 *
 * @param   amino          - Amino-encoded `PacketPong` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PacketPong` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPacketPong(amino: AminoBytes, lengthPrefixed?: boolean): PacketPong;
/**
 * Unmarshal a `PacketMsg` object from Amino
 *
 * @param   amino          - Amino-encoded `PacketMsg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PacketMsg` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPacketMsg(amino: AminoBytes, lengthPrefixed?: boolean): PacketMsg;
/**
 * Unmarshal a `PexMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `PexMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PexMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPexMessage(amino: AminoBytes, lengthPrefixed?: boolean): PexMessage;
/**
 * Unmarshal a `PexRequestMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `PexRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PexRequestMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPexRequestMessage(amino: AminoBytes, lengthPrefixed?: boolean): PexRequestMessage;
/**
 * Unmarshal a `PexAddrsMessage` object from Amino
 *
 * @param   amino          - Amino-encoded `PexAddrsMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PexAddrsMessage` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPexAddrsMessage(amino: AminoBytes, lengthPrefixed?: boolean): PexAddrsMessage;
/**
 * Unmarshal a `RemoteSignerMsg` object from Amino
 *
 * @param   amino          - Amino-encoded `RemoteSignerMsg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `RemoteSignerMsg` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalRemoteSignerMsg(amino: AminoBytes, lengthPrefixed?: boolean): RemoteSignerMsg;
/**
 * Unmarshal a `PubKeyRequest` object from Amino
 *
 * @param   amino          - Amino-encoded `PubKeyRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PubKeyRequest` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPubKeyRequest(amino: AminoBytes, lengthPrefixed?: boolean): PubKeyRequest;
/**
 * Unmarshal a `PubKeyResponse` object from Amino
 *
 * @param   amino          - Amino-encoded `PubKeyResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PubKeyResponse` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPubKeyResponse(amino: AminoBytes, lengthPrefixed?: boolean): PubKeyResponse;
/**
 * Unmarshal a `SignVoteRequest` object from Amino
 *
 * @param   amino          - Amino-encoded `SignVoteRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `SignVoteRequest` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalSignVoteRequest(amino: AminoBytes, lengthPrefixed?: boolean): SignVoteRequest;
/**
 * Unmarshal a `SignedVoteResponse` object from Amino
 *
 * @param   amino          - Amino-encoded `SignedVoteResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `SignedVoteResponse` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalSignedVoteResponse(amino: AminoBytes, lengthPrefixed?: boolean): SignedVoteResponse;
/**
 * Unmarshal a `SignProposalRequest` object from Amino
 *
 * @param   amino          - Amino-encoded `SignProposalRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `SignProposalRequest` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalSignProposalRequest(amino: AminoBytes, lengthPrefixed?: boolean): SignProposalRequest;
/**
 * Unmarshal a `SignedProposalResponse` object from Amino
 *
 * @param   amino          - Amino-encoded `SignedProposalResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `SignedProposalResponse` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalSignedProposalResponse(amino: AminoBytes, lengthPrefixed?: boolean): SignedProposalResponse;
/**
 * Unmarshal a `PingRequest` object from Amino
 *
 * @param   amino          - Amino-encoded `PingRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PingRequest` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPingRequest(amino: AminoBytes, lengthPrefixed?: boolean): PingRequest;
/**
 * Unmarshal a `PingResponse` object from Amino
 *
 * @param   amino          - Amino-encoded `PingResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `PingResponse` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalPingResponse(amino: AminoBytes, lengthPrefixed?: boolean): PingResponse;
/**
 * Unmarshal a `TMEventData` object from Amino
 *
 * @param   amino          - Amino-encoded `TMEventData` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `TMEventData` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalTMEventData(amino: AminoBytes, lengthPrefixed?: boolean): TMEventData;
/**
 * Unmarshal a `EventDataNewBlock` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataNewBlock` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataNewBlock` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalEventDataNewBlock(amino: AminoBytes, lengthPrefixed?: boolean): EventDataNewBlock;
/**
 * Unmarshal a `EventDataNewBlockHeader` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataNewBlockHeader` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataNewBlockHeader` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalEventDataNewBlockHeader(amino: AminoBytes, lengthPrefixed?: boolean): EventDataNewBlockHeader;
/**
 * Unmarshal a `EventDataTx` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataTx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataTx` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalEventDataTx(amino: AminoBytes, lengthPrefixed?: boolean): EventDataTx;
/**
 * Unmarshal a `EventDataRoundState` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataRoundState` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataRoundState` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalEventDataRoundState(amino: AminoBytes, lengthPrefixed?: boolean): EventDataRoundState;
/**
 * Unmarshal a `EventDataNewRound` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataNewRound` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataNewRound` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalEventDataNewRound(amino: AminoBytes, lengthPrefixed?: boolean): EventDataNewRound;
/**
 * Unmarshal a `EventDataCompleteProposal` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataCompleteProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataCompleteProposal` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalEventDataCompleteProposal(amino: AminoBytes, lengthPrefixed?: boolean): EventDataCompleteProposal;
/**
 * Unmarshal a `EventDataVote` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataVote` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataVote` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalEventDataVote(amino: AminoBytes, lengthPrefixed?: boolean): EventDataVote;
/**
 * Unmarshal a `EventDataValidatorSetUpdates` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataValidatorSetUpdates` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataValidatorSetUpdates` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalEventDataValidatorSetUpdates(amino: AminoBytes, lengthPrefixed?: boolean): EventDataValidatorSetUpdates;
/**
 * Unmarshal a `EventDataString` object from Amino
 *
 * @param   amino          - Amino-encoded `EventDataString` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `EventDataString` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalEventDataString(amino: AminoBytes, lengthPrefixed?: boolean): EventDataString;
/**
 * Unmarshal a `Evidence` object from Amino
 *
 * @param   amino          - Amino-encoded `Evidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `Evidence` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalEvidence(amino: AminoBytes, lengthPrefixed?: boolean): Evidence;
/**
 * Unmarshal a `DuplicateVoteEvidence` object from Amino
 *
 * @param   amino          - Amino-encoded `DuplicateVoteEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `DuplicateVoteEvidence` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalDuplicateVoteEvidence(amino: AminoBytes, lengthPrefixed?: boolean): DuplicateVoteEvidence;
/**
 * Unmarshal a `MockGoodEvidence` object from Amino
 *
 * @param   amino          - Amino-encoded `MockGoodEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MockGoodEvidence` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMockGoodEvidence(amino: AminoBytes, lengthPrefixed?: boolean): MockGoodEvidence;
/**
 * Unmarshal a `MockRandomGoodEvidence` object from Amino
 *
 * @param   amino          - Amino-encoded `MockRandomGoodEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MockRandomGoodEvidence` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMockRandomGoodEvidence(amino: AminoBytes, lengthPrefixed?: boolean): MockRandomGoodEvidence;
/**
 * Unmarshal a `MockBadEvidence` object from Amino
 *
 * @param   amino          - Amino-encoded `MockBadEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino decoding; if `false`, use bare Amino decoding
 *
 * @returns `MockBadEvidence` object
 * @throws  will throw if decoding fails
 */
export declare function unmarshalMockBadEvidence(amino: AminoBytes, lengthPrefixed?: boolean): MockBadEvidence;
