import { AminoBytes } from '../lib/types';
import { Account, BaseAccount, BaseVestingAccount, BcBlockRequestMessage, BcBlockResponseMessage, BcNoBlockResponseMessage, BcStatusRequestMessage, BcStatusResponseMessage, BIP44Params, BlockchainMessage, BlockPartMessage, ConsensusMessage, Content, ContinuousVestingAccount, DelayedVestingAccount, DuplicateVoteEvidence, EndHeightMessage, EventDataCompleteProposal, EventDataNewBlock, EventDataNewBlockHeader, EventDataNewRound, EventDataRoundState, EventDataString, EventDataTx, EventDataValidatorSetUpdates, EventDataVote, Evidence, EvidenceListMessage, EvidenceMessage, HasVoteMessage, IAVLAbsenceOp, IAVLValueOp, Info, LedgerInfo, LocalInfo, MempoolMessage, MockBadEvidence, MockGoodEvidence, MockRandomGoodEvidence, Msg, MsgBeginRedelegate, MsgCreateValidator, MsgDelegate, MsgDeposit, MsgEditValidator, MsgIBCReceive, MsgIBCTransfer, MsgInfo, MsgMultiSend, MsgSend, MsgSetWithdrawAddress, MsgSubmitProposal, MsgUndelegate, MsgUnjail, MsgVerifyInvariant, MsgVote, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MultiInfo, MultiStoreProofOp, NewRoundStepMessage, NewValidBlockMessage, OfflineInfo, Packet, PacketMsg, PacketPing, PacketPong, ParameterChangeProposal, PexAddrsMessage, PexMessage, PexRequestMessage, PingRequest, PingResponse, PrivKey, PrivKeyEd25519, PrivKeyLedgerSecp256k1, PrivKeySecp256k1, ProposalMessage, ProposalPOLMessage, PubKey, PubKeyEd25519, PubKeyMultisigThreshold, PubKeyRequest, PubKeyResponse, PubKeySecp256k1, RemoteSignerMsg, SignedProposalResponse, SignedVoteResponse, SignProposalRequest, SignVoteRequest, SoftwareUpgradeProposal, StdTx, TextProposal, TimeoutInfo, TMEventData, Tx, TxMessage, VestingAccount, VoteMessage, VoteSetBitsMessage, VoteSetMaj23Message, WALMessage } from './types';
/**
 * Marshal a `MultiStoreProofOp` object to Amino
 *
 * @param   o              - `MultiStoreProofOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MultiStoreProofOp` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMultiStoreProofOp(o: MultiStoreProofOp, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `IAVLAbsenceOp` object to Amino
 *
 * @param   o              - `IAVLAbsenceOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `IAVLAbsenceOp` object
 * @throws  will throw if encoding fails
 */
export declare function marshalIAVLAbsenceOp(o: IAVLAbsenceOp, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `IAVLValueOp` object to Amino
 *
 * @param   o              - `IAVLValueOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `IAVLValueOp` object
 * @throws  will throw if encoding fails
 */
export declare function marshalIAVLValueOp(o: IAVLValueOp, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PrivKeyLedgerSecp256k1` object to Amino
 *
 * @param   o              - `PrivKeyLedgerSecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PrivKeyLedgerSecp256k1` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPrivKeyLedgerSecp256k1(o: PrivKeyLedgerSecp256k1, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `Info` object to Amino
 *
 * @param   o              - `Info` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Info` object
 * @throws  will throw if encoding fails
 */
export declare function marshalInfo(o: Info, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `BIP44Params` object to Amino
 *
 * @param   o              - `BIP44Params` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BIP44Params` object
 * @throws  will throw if encoding fails
 */
export declare function marshalBIP44Params(o: BIP44Params, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `LocalInfo` object to Amino
 *
 * @param   o              - `LocalInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `LocalInfo` object
 * @throws  will throw if encoding fails
 */
export declare function marshalLocalInfo(o: LocalInfo, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `LedgerInfo` object to Amino
 *
 * @param   o              - `LedgerInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `LedgerInfo` object
 * @throws  will throw if encoding fails
 */
export declare function marshalLedgerInfo(o: LedgerInfo, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `OfflineInfo` object to Amino
 *
 * @param   o              - `OfflineInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `OfflineInfo` object
 * @throws  will throw if encoding fails
 */
export declare function marshalOfflineInfo(o: OfflineInfo, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MultiInfo` object to Amino
 *
 * @param   o              - `MultiInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MultiInfo` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMultiInfo(o: MultiInfo, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `Msg` object to Amino
 *
 * @param   o              - `Msg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Msg` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsg(o: Msg, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `Tx` object to Amino
 *
 * @param   o              - `Tx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Tx` object
 * @throws  will throw if encoding fails
 */
export declare function marshalTx(o: Tx, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `Account` object to Amino
 *
 * @param   o              - `Account` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Account` object
 * @throws  will throw if encoding fails
 */
export declare function marshalAccount(o: Account, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `VestingAccount` object to Amino
 *
 * @param   o              - `VestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `VestingAccount` object
 * @throws  will throw if encoding fails
 */
export declare function marshalVestingAccount(o: VestingAccount, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `BaseAccount` object to Amino
 *
 * @param   o              - `BaseAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BaseAccount` object
 * @throws  will throw if encoding fails
 */
export declare function marshalBaseAccount(o: BaseAccount, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `BaseVestingAccount` object to Amino
 *
 * @param   o              - `BaseVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BaseVestingAccount` object
 * @throws  will throw if encoding fails
 */
export declare function marshalBaseVestingAccount(o: BaseVestingAccount, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `ContinuousVestingAccount` object to Amino
 *
 * @param   o              - `ContinuousVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ContinuousVestingAccount` object
 * @throws  will throw if encoding fails
 */
export declare function marshalContinuousVestingAccount(o: ContinuousVestingAccount, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `DelayedVestingAccount` object to Amino
 *
 * @param   o              - `DelayedVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `DelayedVestingAccount` object
 * @throws  will throw if encoding fails
 */
export declare function marshalDelayedVestingAccount(o: DelayedVestingAccount, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `StdTx` object to Amino
 *
 * @param   o              - `StdTx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `StdTx` object
 * @throws  will throw if encoding fails
 */
export declare function marshalStdTx(o: StdTx, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgSend` object to Amino
 *
 * @param   o              - `MsgSend` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgSend` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgSend(o: MsgSend, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgMultiSend` object to Amino
 *
 * @param   o              - `MsgMultiSend` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgMultiSend` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgMultiSend(o: MsgMultiSend, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgVerifyInvariant` object to Amino
 *
 * @param   o              - `MsgVerifyInvariant` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgVerifyInvariant` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgVerifyInvariant(o: MsgVerifyInvariant, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgWithdrawDelegatorReward` object to Amino
 *
 * @param   o              - `MsgWithdrawDelegatorReward` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgWithdrawDelegatorReward` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgWithdrawDelegatorReward(o: MsgWithdrawDelegatorReward, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgWithdrawValidatorCommission` object to Amino
 *
 * @param   o              - `MsgWithdrawValidatorCommission` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgWithdrawValidatorCommission` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgWithdrawValidatorCommission(o: MsgWithdrawValidatorCommission, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgSetWithdrawAddress` object to Amino
 *
 * @param   o              - `MsgSetWithdrawAddress` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgSetWithdrawAddress` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgSetWithdrawAddress(o: MsgSetWithdrawAddress, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `Content` object to Amino
 *
 * @param   o              - `Content` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Content` object
 * @throws  will throw if encoding fails
 */
export declare function marshalContent(o: Content, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgSubmitProposal` object to Amino
 *
 * @param   o              - `MsgSubmitProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgSubmitProposal` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgSubmitProposal(o: MsgSubmitProposal, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgDeposit` object to Amino
 *
 * @param   o              - `MsgDeposit` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgDeposit` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgDeposit(o: MsgDeposit, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgVote` object to Amino
 *
 * @param   o              - `MsgVote` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgVote` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgVote(o: MsgVote, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `TextProposal` object to Amino
 *
 * @param   o              - `TextProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `TextProposal` object
 * @throws  will throw if encoding fails
 */
export declare function marshalTextProposal(o: TextProposal, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `SoftwareUpgradeProposal` object to Amino
 *
 * @param   o              - `SoftwareUpgradeProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SoftwareUpgradeProposal` object
 * @throws  will throw if encoding fails
 */
export declare function marshalSoftwareUpgradeProposal(o: SoftwareUpgradeProposal, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgIBCTransfer` object to Amino
 *
 * @param   o              - `MsgIBCTransfer` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgIBCTransfer` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgIBCTransfer(o: MsgIBCTransfer, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgIBCReceive` object to Amino
 *
 * @param   o              - `MsgIBCReceive` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgIBCReceive` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgIBCReceive(o: MsgIBCReceive, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `ParameterChangeProposal` object to Amino
 *
 * @param   o              - `ParameterChangeProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ParameterChangeProposal` object
 * @throws  will throw if encoding fails
 */
export declare function marshalParameterChangeProposal(o: ParameterChangeProposal, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgUnjail` object to Amino
 *
 * @param   o              - `MsgUnjail` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgUnjail` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgUnjail(o: MsgUnjail, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgCreateValidator` object to Amino
 *
 * @param   o              - `MsgCreateValidator` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgCreateValidator` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgCreateValidator(o: MsgCreateValidator, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgEditValidator` object to Amino
 *
 * @param   o              - `MsgEditValidator` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgEditValidator` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgEditValidator(o: MsgEditValidator, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgDelegate` object to Amino
 *
 * @param   o              - `MsgDelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgDelegate` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgDelegate(o: MsgDelegate, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgUndelegate` object to Amino
 *
 * @param   o              - `MsgUndelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgUndelegate` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgUndelegate(o: MsgUndelegate, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgBeginRedelegate` object to Amino
 *
 * @param   o              - `MsgBeginRedelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgBeginRedelegate` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgBeginRedelegate(o: MsgBeginRedelegate, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `BlockchainMessage` object to Amino
 *
 * @param   o              - `BlockchainMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BlockchainMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalBlockchainMessage(o: BlockchainMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `BcBlockRequestMessage` object to Amino
 *
 * @param   o              - `BcBlockRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcBlockRequestMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalBcBlockRequestMessage(o: BcBlockRequestMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `BcBlockResponseMessage` object to Amino
 *
 * @param   o              - `BcBlockResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcBlockResponseMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalBcBlockResponseMessage(o: BcBlockResponseMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `BcNoBlockResponseMessage` object to Amino
 *
 * @param   o              - `BcNoBlockResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcNoBlockResponseMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalBcNoBlockResponseMessage(o: BcNoBlockResponseMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `BcStatusResponseMessage` object to Amino
 *
 * @param   o              - `BcStatusResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcStatusResponseMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalBcStatusResponseMessage(o: BcStatusResponseMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `BcStatusRequestMessage` object to Amino
 *
 * @param   o              - `BcStatusRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcStatusRequestMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalBcStatusRequestMessage(o: BcStatusRequestMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `ConsensusMessage` object to Amino
 *
 * @param   o              - `ConsensusMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ConsensusMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalConsensusMessage(o: ConsensusMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `NewRoundStepMessage` object to Amino
 *
 * @param   o              - `NewRoundStepMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `NewRoundStepMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalNewRoundStepMessage(o: NewRoundStepMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `NewValidBlockMessage` object to Amino
 *
 * @param   o              - `NewValidBlockMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `NewValidBlockMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalNewValidBlockMessage(o: NewValidBlockMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `ProposalMessage` object to Amino
 *
 * @param   o              - `ProposalMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ProposalMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalProposalMessage(o: ProposalMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `ProposalPOLMessage` object to Amino
 *
 * @param   o              - `ProposalPOLMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ProposalPOLMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalProposalPOLMessage(o: ProposalPOLMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `BlockPartMessage` object to Amino
 *
 * @param   o              - `BlockPartMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BlockPartMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalBlockPartMessage(o: BlockPartMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `VoteMessage` object to Amino
 *
 * @param   o              - `VoteMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `VoteMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalVoteMessage(o: VoteMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `HasVoteMessage` object to Amino
 *
 * @param   o              - `HasVoteMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `HasVoteMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalHasVoteMessage(o: HasVoteMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `VoteSetMaj23Message` object to Amino
 *
 * @param   o              - `VoteSetMaj23Message` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `VoteSetMaj23Message` object
 * @throws  will throw if encoding fails
 */
export declare function marshalVoteSetMaj23Message(o: VoteSetMaj23Message, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `VoteSetBitsMessage` object to Amino
 *
 * @param   o              - `VoteSetBitsMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `VoteSetBitsMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalVoteSetBitsMessage(o: VoteSetBitsMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `WALMessage` object to Amino
 *
 * @param   o              - `WALMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `WALMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalWALMessage(o: WALMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MsgInfo` object to Amino
 *
 * @param   o              - `MsgInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgInfo` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMsgInfo(o: MsgInfo, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `TimeoutInfo` object to Amino
 *
 * @param   o              - `TimeoutInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `TimeoutInfo` object
 * @throws  will throw if encoding fails
 */
export declare function marshalTimeoutInfo(o: TimeoutInfo, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `EndHeightMessage` object to Amino
 *
 * @param   o              - `EndHeightMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EndHeightMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalEndHeightMessage(o: EndHeightMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PubKey` object to Amino
 *
 * @param   o              - `PubKey` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKey` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPubKey(o: PubKey, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PrivKey` object to Amino
 *
 * @param   o              - `PrivKey` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PrivKey` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPrivKey(o: PrivKey, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PubKeyEd25519` object to Amino
 *
 * @param   o              - `PubKeyEd25519` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeyEd25519` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPubKeyEd25519(o: PubKeyEd25519, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PrivKeyEd25519` object to Amino
 *
 * @param   o              - `PrivKeyEd25519` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PrivKeyEd25519` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPrivKeyEd25519(o: PrivKeyEd25519, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PubKeySecp256k1` object to Amino
 *
 * @param   o              - `PubKeySecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeySecp256k1` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPubKeySecp256k1(o: PubKeySecp256k1, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PrivKeySecp256k1` object to Amino
 *
 * @param   o              - `PrivKeySecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PrivKeySecp256k1` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPrivKeySecp256k1(o: PrivKeySecp256k1, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PubKeyMultisigThreshold` object to Amino
 *
 * @param   o              - `PubKeyMultisigThreshold` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeyMultisigThreshold` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPubKeyMultisigThreshold(o: PubKeyMultisigThreshold, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `EvidenceMessage` object to Amino
 *
 * @param   o              - `EvidenceMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EvidenceMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalEvidenceMessage(o: EvidenceMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `EvidenceListMessage` object to Amino
 *
 * @param   o              - `EvidenceListMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EvidenceListMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalEvidenceListMessage(o: EvidenceListMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MempoolMessage` object to Amino
 *
 * @param   o              - `MempoolMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MempoolMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMempoolMessage(o: MempoolMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `TxMessage` object to Amino
 *
 * @param   o              - `TxMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `TxMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalTxMessage(o: TxMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `Packet` object to Amino
 *
 * @param   o              - `Packet` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Packet` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPacket(o: Packet, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PacketPing` object to Amino
 *
 * @param   o              - `PacketPing` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PacketPing` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPacketPing(o: PacketPing, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PacketPong` object to Amino
 *
 * @param   o              - `PacketPong` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PacketPong` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPacketPong(o: PacketPong, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PacketMsg` object to Amino
 *
 * @param   o              - `PacketMsg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PacketMsg` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPacketMsg(o: PacketMsg, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PexMessage` object to Amino
 *
 * @param   o              - `PexMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PexMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPexMessage(o: PexMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PexRequestMessage` object to Amino
 *
 * @param   o              - `PexRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PexRequestMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPexRequestMessage(o: PexRequestMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PexAddrsMessage` object to Amino
 *
 * @param   o              - `PexAddrsMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PexAddrsMessage` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPexAddrsMessage(o: PexAddrsMessage, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `RemoteSignerMsg` object to Amino
 *
 * @param   o              - `RemoteSignerMsg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `RemoteSignerMsg` object
 * @throws  will throw if encoding fails
 */
export declare function marshalRemoteSignerMsg(o: RemoteSignerMsg, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PubKeyRequest` object to Amino
 *
 * @param   o              - `PubKeyRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeyRequest` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPubKeyRequest(o: PubKeyRequest, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PubKeyResponse` object to Amino
 *
 * @param   o              - `PubKeyResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeyResponse` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPubKeyResponse(o: PubKeyResponse, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `SignVoteRequest` object to Amino
 *
 * @param   o              - `SignVoteRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SignVoteRequest` object
 * @throws  will throw if encoding fails
 */
export declare function marshalSignVoteRequest(o: SignVoteRequest, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `SignedVoteResponse` object to Amino
 *
 * @param   o              - `SignedVoteResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SignedVoteResponse` object
 * @throws  will throw if encoding fails
 */
export declare function marshalSignedVoteResponse(o: SignedVoteResponse, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `SignProposalRequest` object to Amino
 *
 * @param   o              - `SignProposalRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SignProposalRequest` object
 * @throws  will throw if encoding fails
 */
export declare function marshalSignProposalRequest(o: SignProposalRequest, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `SignedProposalResponse` object to Amino
 *
 * @param   o              - `SignedProposalResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SignedProposalResponse` object
 * @throws  will throw if encoding fails
 */
export declare function marshalSignedProposalResponse(o: SignedProposalResponse, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PingRequest` object to Amino
 *
 * @param   o              - `PingRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PingRequest` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPingRequest(o: PingRequest, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `PingResponse` object to Amino
 *
 * @param   o              - `PingResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PingResponse` object
 * @throws  will throw if encoding fails
 */
export declare function marshalPingResponse(o: PingResponse, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `TMEventData` object to Amino
 *
 * @param   o              - `TMEventData` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `TMEventData` object
 * @throws  will throw if encoding fails
 */
export declare function marshalTMEventData(o: TMEventData, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `EventDataNewBlock` object to Amino
 *
 * @param   o              - `EventDataNewBlock` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataNewBlock` object
 * @throws  will throw if encoding fails
 */
export declare function marshalEventDataNewBlock(o: EventDataNewBlock, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `EventDataNewBlockHeader` object to Amino
 *
 * @param   o              - `EventDataNewBlockHeader` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataNewBlockHeader` object
 * @throws  will throw if encoding fails
 */
export declare function marshalEventDataNewBlockHeader(o: EventDataNewBlockHeader, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `EventDataTx` object to Amino
 *
 * @param   o              - `EventDataTx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataTx` object
 * @throws  will throw if encoding fails
 */
export declare function marshalEventDataTx(o: EventDataTx, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `EventDataRoundState` object to Amino
 *
 * @param   o              - `EventDataRoundState` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataRoundState` object
 * @throws  will throw if encoding fails
 */
export declare function marshalEventDataRoundState(o: EventDataRoundState, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `EventDataNewRound` object to Amino
 *
 * @param   o              - `EventDataNewRound` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataNewRound` object
 * @throws  will throw if encoding fails
 */
export declare function marshalEventDataNewRound(o: EventDataNewRound, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `EventDataCompleteProposal` object to Amino
 *
 * @param   o              - `EventDataCompleteProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataCompleteProposal` object
 * @throws  will throw if encoding fails
 */
export declare function marshalEventDataCompleteProposal(o: EventDataCompleteProposal, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `EventDataVote` object to Amino
 *
 * @param   o              - `EventDataVote` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataVote` object
 * @throws  will throw if encoding fails
 */
export declare function marshalEventDataVote(o: EventDataVote, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `EventDataValidatorSetUpdates` object to Amino
 *
 * @param   o              - `EventDataValidatorSetUpdates` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataValidatorSetUpdates` object
 * @throws  will throw if encoding fails
 */
export declare function marshalEventDataValidatorSetUpdates(o: EventDataValidatorSetUpdates, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `EventDataString` object to Amino
 *
 * @param   o              - `EventDataString` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataString` object
 * @throws  will throw if encoding fails
 */
export declare function marshalEventDataString(o: EventDataString, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `Evidence` object to Amino
 *
 * @param   o              - `Evidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Evidence` object
 * @throws  will throw if encoding fails
 */
export declare function marshalEvidence(o: Evidence, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `DuplicateVoteEvidence` object to Amino
 *
 * @param   o              - `DuplicateVoteEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `DuplicateVoteEvidence` object
 * @throws  will throw if encoding fails
 */
export declare function marshalDuplicateVoteEvidence(o: DuplicateVoteEvidence, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MockGoodEvidence` object to Amino
 *
 * @param   o              - `MockGoodEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MockGoodEvidence` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMockGoodEvidence(o: MockGoodEvidence, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MockRandomGoodEvidence` object to Amino
 *
 * @param   o              - `MockRandomGoodEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MockRandomGoodEvidence` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMockRandomGoodEvidence(o: MockRandomGoodEvidence, lengthPrefixed?: boolean): AminoBytes;
/**
 * Marshal a `MockBadEvidence` object to Amino
 *
 * @param   o              - `MockBadEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MockBadEvidence` object
 * @throws  will throw if encoding fails
 */
export declare function marshalMockBadEvidence(o: MockBadEvidence, lengthPrefixed?: boolean): AminoBytes;
