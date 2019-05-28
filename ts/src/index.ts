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
import base64ToBytes from './util/base64ToBytes';
import bytesToString from './util/bytesToString';
import stringToBytes from './util/stringToBytes';

declare global {
    interface Window {
        Amino: Amino;
    }
}

const WindowAmino = window.Amino;
export default WindowAmino;

export type DecodeReturnType<T> = [T, null] | [T | null, Error];

export {
    base64ToBytes,
    bytesToString,
    stringToBytes
};

export interface Amino {
    //@formatter:off

    // Basic encoding

    EncodeByte (byte: number): Uint8Array;
    EncodeByteSlice (bytes: Uint8Array): Uint8Array;
    EncodeInt8 (int8: number): Uint8Array;
    EncodeInt16 (int16: number): Uint8Array;
    EncodeInt32 (int32: number): Uint8Array;
    EncodeInt64 (int64: number): Uint8Array;
    EncodeVarint (varint: number): Uint8Array;
    EncodeUint8 (uint8: number): Uint8Array;
    EncodeUint16 (uint16: number): Uint8Array;
    EncodeUint32 (uint32: number): Uint8Array;
    EncodeUint64 (uint64: number): Uint8Array;
    EncodeUvarint (uvarint: number): Uint8Array;
    EncodeFloat32 (float: number): Uint8Array;
    EncodeFloat64 (float: number): Uint8Array;
    EncodeBool (bool: boolean): Uint8Array;
    EncodeString (string: string): Uint8Array;
    EncodeTime (time: Date): Uint8Array;

    // Basic decoding

    DecodeByte (bytes: Uint8Array): [number, number];
    DecodeByteSlice (bytes: Uint8Array): [Uint8Array, number];
    DecodeInt8 (bytes: Uint8Array): [number, number];
    DecodeInt16 (bytes: Uint8Array): [number, number];
    DecodeInt32 (bytes: Uint8Array): [number, number];
    DecodeInt64 (bytes: Uint8Array): [number, number];
    DecodeUint8 (bytes: Uint8Array): [number, number];
    DecodeUint16 (bytes: Uint8Array): [number, number];
    DecodeUint32 (bytes: Uint8Array): [number, number];
    DecodeUint64 (bytes: Uint8Array): [number, number];
    DecodeVarint (bytes: Uint8Array): [number, number];
    DecodeUvarint (bytes: Uint8Array): [number, number];
    DecodeFloat32 (bytes: Uint8Array): [number, number];
    DecodeFloat64 (bytes: Uint8Array): [number, number];
    DecodeBool (bytes: Uint8Array): [boolean, number];
    DecodeString (bytes: Uint8Array): [string, number];
    DecodeTime (bytes: Uint8Array): [Date, number];

    // Miscellaneous

    DecodeDisambPrefixBytes (bytes: Uint8Array): [Uint8Array, boolean, Uint8Array, boolean, number];
    NameToDisfix (name: string): [Uint8Array, Uint8Array];
    ByteSliceSize (bytes: Uint8Array): number;
    UvarintSize (uvarint: number): number;
    VarintSize (varint: number): number;

    // Decode Type

    EncodeMultiStoreProofOp (o: rootmulti.MultiStoreProofOp, bare: boolean): Uint8Array;
    EncodeIAVLAbsenceOp (o: iavl.IAVLAbsenceOp, bare: boolean): Uint8Array;
    EncodeIAVLValueOp (o: iavl.IAVLValueOp, bare: boolean): Uint8Array;

    EncodePrivKeyLedgerSecp256k1 (o: crypto.PrivKeyLedgerSecp256k1, bare: boolean): Uint8Array;

    EncodeInfo (o: keys.Info, bare: boolean): Uint8Array;
    EncodeBIP44Params (o: keys.BIP44Params, bare: boolean): Uint8Array;
    EncodeLocalInfo (o: keys.LocalInfo, bare: boolean): Uint8Array;
    EncodeLedgerInfo (o: keys.LedgerInfo, bare: boolean): Uint8Array;
    EncodeOfflineInfo (o: keys.OfflineInfo, bare: boolean): Uint8Array;
    EncodeMultiInfo (o: keys.MultiInfo, bare: boolean): Uint8Array;

    EncodeMsg (o: types.Msg, bare: boolean): Uint8Array;
    EncodeTx (o: types.Tx, bare: boolean): Uint8Array;

    EncodeAccount (o: auth.Account, bare: boolean): Uint8Array;
    EncodeVestingAccount (o: auth.VestingAccount, bare: boolean): Uint8Array;
    EncodeBaseAccount (o: auth.BaseAccount, bare: boolean): Uint8Array;
    EncodeBaseVestingAccount (o: auth.BaseVestingAccount, bare: boolean): Uint8Array;
    EncodeContinuousVestingAccount (o: auth.ContinuousVestingAccount, bare: boolean): Uint8Array;
    EncodeDelayedVestingAccount (o: auth.DelayedVestingAccount, bare: boolean): Uint8Array;
    EncodeStdTx (o: auth.StdTx, bare: boolean): Uint8Array;

    EncodeMsgSend (o: bank.MsgSend, bare: boolean): Uint8Array;
    EncodeMsgMultiSend (o: bank.MsgMultiSend, bare: boolean): Uint8Array;

    EncodeMsgVerifyInvariant (o: crisis.MsgVerifyInvariant, bare: boolean): Uint8Array;

    EncodeMsgWithdrawDelegatorReward (o: distribution.MsgWithdrawDelegatorReward, bare: boolean): Uint8Array;
    EncodeMsgWithdrawValidatorCommission (o: distribution.MsgWithdrawValidatorCommission, bare: boolean): Uint8Array;
    EncodeMsgSetWithdrawAddress (o: distribution.MsgSetWithdrawAddress, bare: boolean): Uint8Array;

    EncodeContent (o: gov.Content, bare: boolean): Uint8Array;
    EncodeMsgSubmitProposal (o: gov.MsgSubmitProposal, bare: boolean): Uint8Array;
    EncodeMsgDeposit (o: gov.MsgDeposit, bare: boolean): Uint8Array;
    EncodeMsgVote (o: gov.MsgVote, bare: boolean): Uint8Array;
    EncodeTextProposal (o: gov.TextProposal, bare: boolean): Uint8Array;
    EncodeSoftwareUpgradeProposal (o: gov.SoftwareUpgradeProposal, bare: boolean): Uint8Array;

    EncodeMsgIBCTransfer (o: ibc.MsgIBCTransfer, bare: boolean): Uint8Array;
    EncodeMsgIBCReceive (o: ibc.MsgIBCReceive, bare: boolean): Uint8Array;

    EncodeParameterChangeProposal (o: params.ParameterChangeProposal, bare: boolean): Uint8Array;

    EncodeMsgUnjail (o: slashing.MsgUnjail, bare: boolean): Uint8Array;

    EncodeMsgCreateValidator (o: staking.MsgCreateValidator, bare: boolean): Uint8Array;
    EncodeMsgEditValidator (o: staking.MsgEditValidator, bare: boolean): Uint8Array;
    EncodeMsgDelegate (o: staking.MsgDelegate, bare: boolean): Uint8Array;
    EncodeMsgUndelegate (o: staking.MsgUndelegate, bare: boolean): Uint8Array;
    EncodeMsgBeginRedelegate (o: staking.MsgBeginRedelegate, bare: boolean): Uint8Array;

    EncodeBlockchainMessage (o: blockchain.BlockchainMessage, bare: boolean): Uint8Array;
    EncodeBcBlockRequestMessage (o: blockchain.BcBlockRequestMessage, bare: boolean): Uint8Array;
    EncodeBcBlockResponseMessage (o: blockchain.BcBlockResponseMessage, bare: boolean): Uint8Array;
    EncodeBcNoBlockResponseMessage (o: blockchain.BcNoBlockResponseMessage, bare: boolean): Uint8Array;
    EncodeBcStatusResponseMessage (o: blockchain.BcStatusResponseMessage, bare: boolean): Uint8Array;
    EncodeBcStatusRequestMessage (o: blockchain.BcStatusRequestMessage, bare: boolean): Uint8Array;

    EncodeConsensusMessage (o: consensus.ConsensusMessage, bare: boolean): Uint8Array;
    EncodeNewRoundStepMessage (o: consensus.NewRoundStepMessage, bare: boolean): Uint8Array;
    EncodeNewValidBlockMessage (o: consensus.NewValidBlockMessage, bare: boolean): Uint8Array;
    EncodeProposalMessage (o: consensus.ProposalMessage, bare: boolean): Uint8Array;
    EncodeProposalPOLMessage (o: consensus.ProposalPOLMessage, bare: boolean): Uint8Array;
    EncodeBlockPartMessage (o: consensus.BlockPartMessage, bare: boolean): Uint8Array;
    EncodeVoteMessage (o: consensus.VoteMessage, bare: boolean): Uint8Array;
    EncodeHasVoteMessage (o: consensus.HasVoteMessage, bare: boolean): Uint8Array;
    EncodeVoteSetMaj23Message (o: consensus.VoteSetMaj23Message, bare: boolean): Uint8Array;
    EncodeVoteSetBitsMessage (o: consensus.VoteSetBitsMessage, bare: boolean): Uint8Array;
    EncodeWALMessage (o: consensus.WALMessage, bare: boolean): Uint8Array;
    EncodeMsgInfo (o: consensus.MsgInfo, bare: boolean): Uint8Array;
    EncodeTimeoutInfo (o: consensus.TimeoutInfo, bare: boolean): Uint8Array;
    EncodeEndHeightMessage (o: consensus.EndHeightMessage, bare: boolean): Uint8Array;

    EncodePubKey (o: crypto.PubKey, bare: boolean): Uint8Array;
    EncodePrivKey (o: crypto.PrivKey, bare: boolean): Uint8Array;
    EncodePubKeyEd25519 (o: crypto.PubKeyEd25519, bare: boolean): Uint8Array;
    EncodePrivKeyEd25519 (o: crypto.PrivKeyEd25519, bare: boolean): Uint8Array;
    EncodePubKeySecp256k1 (o: crypto.PubKeySecp256k1, bare: boolean): Uint8Array;
    EncodePrivKeySecp256k1 (o: crypto.PrivKeySecp256k1, bare: boolean): Uint8Array;
    EncodePubKeyMultisigThreshold (o: crypto.PubKeyMultisigThreshold, bare: boolean): Uint8Array;

    EncodeEvidenceMessage (o: evidence.EvidenceMessage, bare: boolean): Uint8Array;
    EncodeEvidenceListMessage (o: evidence.EvidenceListMessage, bare: boolean): Uint8Array;

    EncodeMempoolMessage (o: mempool.MempoolMessage, bare: boolean): Uint8Array;
    EncodeTxMessage (o: mempool.TxMessage, bare: boolean): Uint8Array;

    EncodePacket (o: conn.Packet, bare: boolean): Uint8Array;
    EncodePacketPing (o: conn.PacketPing, bare: boolean): Uint8Array;
    EncodePacketPong (o: conn.PacketPong, bare: boolean): Uint8Array;
    EncodePacketMsg (o: conn.PacketMsg, bare: boolean): Uint8Array;

    EncodePexMessage (o: pex.PexMessage, bare: boolean): Uint8Array;
    EncodePexRequestMessage (o: pex.PexRequestMessage, bare: boolean): Uint8Array;
    EncodePexAddrsMessage (o: pex.PexAddrsMessage, bare: boolean): Uint8Array;

    EncodeRemoteSignerMsg (o: privval.RemoteSignerMsg, bare: boolean): Uint8Array;
    EncodePubKeyRequest (o: privval.PubKeyRequest, bare: boolean): Uint8Array;
    EncodePubKeyResponse (o: privval.PubKeyResponse, bare: boolean): Uint8Array;
    EncodeSignVoteRequest (o: privval.SignVoteRequest, bare: boolean): Uint8Array;
    EncodeSignedVoteResponse (o: privval.SignedVoteResponse, bare: boolean): Uint8Array;
    EncodeSignProposalRequest (o: privval.SignProposalRequest, bare: boolean): Uint8Array;
    EncodeSignedProposalResponse (o: privval.SignedProposalResponse, bare: boolean): Uint8Array;
    EncodePingRequest (o: privval.PingRequest, bare: boolean): Uint8Array;
    EncodePingResponse (o: privval.PingResponse, bare: boolean): Uint8Array;

    EncodeTMEventData (o: events.TMEventData, bare: boolean): Uint8Array;
    EncodeEventDataNewBlock (o: events.EventDataNewBlock, bare: boolean): Uint8Array;
    EncodeEventDataNewBlockHeader (o: events.EventDataNewBlockHeader, bare: boolean): Uint8Array;
    EncodeEventDataTx (o: events.EventDataTx, bare: boolean): Uint8Array;
    EncodeEventDataRoundState (o: events.EventDataRoundState, bare: boolean): Uint8Array;
    EncodeEventDataNewRound (o: events.EventDataNewRound, bare: boolean): Uint8Array;
    EncodeEventDataCompleteProposal (o: events.EventDataCompleteProposal, bare: boolean): Uint8Array;
    EncodeEventDataVote (o: events.EventDataVote, bare: boolean): Uint8Array;
    EncodeEventDataValidatorSetUpdates (o: events.EventDataValidatorSetUpdates, bare: boolean): Uint8Array;
    EncodeEventDataString (o: events.EventDataString, bare: boolean): Uint8Array;

    EncodeEvidence (o: evidence.Evidence, bare: boolean): Uint8Array;
    EncodeDuplicateVoteEvidence (o: evidence.DuplicateVoteEvidence, bare: boolean): Uint8Array;
    EncodeMockGoodEvidence (o: evidence.MockGoodEvidence, bare: boolean): Uint8Array;
    EncodeMockRandomGoodEvidence (o: evidence.MockRandomGoodEvidence, bare: boolean): Uint8Array;
    EncodeMockBadEvidence (o: evidence.MockBadEvidence, bare: boolean): Uint8Array;

    // Decode Type

    DecodeMultiStoreProofOp (bytes: Uint8Array, bare: boolean): rootmulti.MultiStoreProofOp;
    DecodeIAVLAbsenceOp (bytes: Uint8Array, bare: boolean): iavl.IAVLAbsenceOp;
    DecodeIAVLValueOp (bytes: Uint8Array, bare: boolean): iavl.IAVLValueOp;

    DecodePrivKeyLedgerSecp256k1 (bytes: Uint8Array, bare: boolean): crypto.PrivKeyLedgerSecp256k1;

    DecodeInfo (bytes: Uint8Array, bare: boolean): keys.Info;
    DecodeBIP44Params (bytes: Uint8Array, bare: boolean): keys.BIP44Params;
    DecodeLocalInfo (bytes: Uint8Array, bare: boolean): keys.LocalInfo;
    DecodeLedgerInfo (bytes: Uint8Array, bare: boolean): keys.LedgerInfo;
    DecodeOfflineInfo (bytes: Uint8Array, bare: boolean): keys.OfflineInfo;
    DecodeMultiInfo (bytes: Uint8Array, bare: boolean): keys.MultiInfo;

    DecodeMsg (bytes: Uint8Array, bare: boolean): types.Msg;
    DecodeTx (bytes: Uint8Array, bare: boolean): types.Tx;

    DecodeAccount (bytes: Uint8Array, bare: boolean): auth.Account;
    DecodeVestingAccount (bytes: Uint8Array, bare: boolean): auth.VestingAccount;
    DecodeBaseAccount (bytes: Uint8Array, bare: boolean): auth.BaseAccount;
    DecodeBaseVestingAccount (bytes: Uint8Array, bare: boolean): auth.BaseVestingAccount;
    DecodeContinuousVestingAccount (bytes: Uint8Array, bare: boolean): auth.ContinuousVestingAccount;
    DecodeDelayedVestingAccount (bytes: Uint8Array, bare: boolean): auth.DelayedVestingAccount;
    DecodeStdTx (bytes: Uint8Array, bare: boolean): auth.StdTx;

    DecodeMsgSend (bytes: Uint8Array, bare: boolean): bank.MsgSend;
    DecodeMsgMultiSend (bytes: Uint8Array, bare: boolean): bank.MsgMultiSend;

    DecodeMsgVerifyInvariant (bytes: Uint8Array, bare: boolean): crisis.MsgVerifyInvariant;

    DecodeMsgWithdrawDelegatorReward (bytes: Uint8Array, bare: boolean): distribution.MsgWithdrawDelegatorReward;
    DecodeMsgWithdrawValidatorCommission (bytes: Uint8Array, bare: boolean): distribution.MsgWithdrawValidatorCommission;
    DecodeMsgSetWithdrawAddress (bytes: Uint8Array, bare: boolean): distribution.MsgSetWithdrawAddress;

    DecodeContent (bytes: Uint8Array, bare: boolean): gov.Content;
    DecodeMsgSubmitProposal (bytes: Uint8Array, bare: boolean): gov.MsgSubmitProposal;
    DecodeMsgDeposit (bytes: Uint8Array, bare: boolean): gov.MsgDeposit;
    DecodeMsgVote (bytes: Uint8Array, bare: boolean): gov.MsgVote;
    DecodeTextProposal (bytes: Uint8Array, bare: boolean): gov.TextProposal;
    DecodeSoftwareUpgradeProposal (bytes: Uint8Array, bare: boolean): gov.SoftwareUpgradeProposal;

    DecodeMsgIBCTransfer (bytes: Uint8Array, bare: boolean): ibc.MsgIBCTransfer;
    DecodeMsgIBCReceive (bytes: Uint8Array, bare: boolean): ibc.MsgIBCReceive;

    DecodeParameterChangeProposal (bytes: Uint8Array, bare: boolean): params.ParameterChangeProposal;

    DecodeMsgUnjail (bytes: Uint8Array, bare: boolean): slashing.MsgUnjail;

    DecodeMsgCreateValidator (bytes: Uint8Array, bare: boolean): staking.MsgCreateValidator;
    DecodeMsgEditValidator (bytes: Uint8Array, bare: boolean): staking.MsgEditValidator;
    DecodeMsgDelegate (bytes: Uint8Array, bare: boolean): staking.MsgDelegate;
    DecodeMsgUndelegate (bytes: Uint8Array, bare: boolean): staking.MsgUndelegate;
    DecodeMsgBeginRedelegate (bytes: Uint8Array, bare: boolean): staking.MsgBeginRedelegate;

    DecodeBlockchainMessage (bytes: Uint8Array, bare: boolean): blockchain.BlockchainMessage;
    DecodeBcBlockRequestMessage (bytes: Uint8Array, bare: boolean): blockchain.BcBlockRequestMessage;
    DecodeBcBlockResponseMessage (bytes: Uint8Array, bare: boolean): blockchain.BcBlockResponseMessage;
    DecodeBcNoBlockResponseMessage (bytes: Uint8Array, bare: boolean): blockchain.BcNoBlockResponseMessage;
    DecodeBcStatusResponseMessage (bytes: Uint8Array, bare: boolean): blockchain.BcStatusResponseMessage;
    DecodeBcStatusRequestMessage (bytes: Uint8Array, bare: boolean): blockchain.BcStatusRequestMessage;

    DecodeConsensusMessage (bytes: Uint8Array, bare: boolean): consensus.ConsensusMessage;
    DecodeNewRoundStepMessage (bytes: Uint8Array, bare: boolean): consensus.NewRoundStepMessage;
    DecodeNewValidBlockMessage (bytes: Uint8Array, bare: boolean): consensus.NewValidBlockMessage;
    DecodeProposalMessage (bytes: Uint8Array, bare: boolean): consensus.ProposalMessage;
    DecodeProposalPOLMessage (bytes: Uint8Array, bare: boolean): consensus.ProposalPOLMessage;
    DecodeBlockPartMessage (bytes: Uint8Array, bare: boolean): consensus.BlockPartMessage;
    DecodeVoteMessage (bytes: Uint8Array, bare: boolean): consensus.VoteMessage;
    DecodeHasVoteMessage (bytes: Uint8Array, bare: boolean): consensus.HasVoteMessage;
    DecodeVoteSetMaj23Message (bytes: Uint8Array, bare: boolean): consensus.VoteSetMaj23Message;
    DecodeVoteSetBitsMessage (bytes: Uint8Array, bare: boolean): consensus.VoteSetBitsMessage;
    DecodeWALMessage (bytes: Uint8Array, bare: boolean): consensus.WALMessage;
    DecodeMsgInfo (bytes: Uint8Array, bare: boolean): consensus.MsgInfo;
    DecodeTimeoutInfo (bytes: Uint8Array, bare: boolean): consensus.TimeoutInfo;
    DecodeEndHeightMessage (bytes: Uint8Array, bare: boolean): consensus.EndHeightMessage;

    DecodePubKey (bytes: Uint8Array, bare: boolean): crypto.PubKey;
    DecodePrivKey (bytes: Uint8Array, bare: boolean): crypto.PrivKey;
    DecodePubKeyEd25519 (bytes: Uint8Array, bare: boolean): crypto.PubKeyEd25519;
    DecodePrivKeyEd25519 (bytes: Uint8Array, bare: boolean): crypto.PrivKeyEd25519;
    DecodePubKeySecp256k1 (bytes: Uint8Array, bare: boolean): crypto.PubKeySecp256k1;
    DecodePrivKeySecp256k1 (bytes: Uint8Array, bare: boolean): crypto.PrivKeySecp256k1;
    DecodePubKeyMultisigThreshold (bytes: Uint8Array, bare: boolean): crypto.PubKeyMultisigThreshold;

    DecodeEvidenceMessage (bytes: Uint8Array, bare: boolean): evidence.EvidenceMessage;
    DecodeEvidenceListMessage (bytes: Uint8Array, bare: boolean): evidence.EvidenceListMessage;

    DecodeMempoolMessage (bytes: Uint8Array, bare: boolean): mempool.MempoolMessage;
    DecodeTxMessage (bytes: Uint8Array, bare: boolean): mempool.TxMessage;

    DecodePacket (bytes: Uint8Array, bare: boolean): conn.Packet;
    DecodePacketPing (bytes: Uint8Array, bare: boolean): conn.PacketPing;
    DecodePacketPong (bytes: Uint8Array, bare: boolean): conn.PacketPong;
    DecodePacketMsg (bytes: Uint8Array, bare: boolean): conn.PacketMsg;

    DecodePexMessage (bytes: Uint8Array, bare: boolean): pex.PexMessage;
    DecodePexRequestMessage (bytes: Uint8Array, bare: boolean): pex.PexRequestMessage;
    DecodePexAddrsMessage (bytes: Uint8Array, bare: boolean): pex.PexAddrsMessage;

    DecodeRemoteSignerMsg (bytes: Uint8Array, bare: boolean): privval.RemoteSignerMsg;
    DecodePubKeyRequest (bytes: Uint8Array, bare: boolean): privval.PubKeyRequest;
    DecodePubKeyResponse (bytes: Uint8Array, bare: boolean): privval.PubKeyResponse;
    DecodeSignVoteRequest (bytes: Uint8Array, bare: boolean): privval.SignVoteRequest;
    DecodeSignedVoteResponse (bytes: Uint8Array, bare: boolean): privval.SignedVoteResponse;
    DecodeSignProposalRequest (bytes: Uint8Array, bare: boolean): privval.SignProposalRequest;
    DecodeSignedProposalResponse (bytes: Uint8Array, bare: boolean): privval.SignedProposalResponse;
    DecodePingRequest (bytes: Uint8Array, bare: boolean): privval.PingRequest;
    DecodePingResponse (bytes: Uint8Array, bare: boolean): privval.PingResponse;

    DecodeTMEventData (bytes: Uint8Array, bare: boolean): events.TMEventData;
    DecodeEventDataNewBlock (bytes: Uint8Array, bare: boolean): events.EventDataNewBlock;
    DecodeEventDataNewBlockHeader (bytes: Uint8Array, bare: boolean): events.EventDataNewBlockHeader;
    DecodeEventDataTx (bytes: Uint8Array, bare: boolean): events.EventDataTx;
    DecodeEventDataRoundState (bytes: Uint8Array, bare: boolean): events.EventDataRoundState;
    DecodeEventDataNewRound (bytes: Uint8Array, bare: boolean): events.EventDataNewRound;
    DecodeEventDataCompleteProposal (bytes: Uint8Array, bare: boolean): events.EventDataCompleteProposal;
    DecodeEventDataVote (bytes: Uint8Array, bare: boolean): events.EventDataVote;
    DecodeEventDataValidatorSetUpdates (bytes: Uint8Array, bare: boolean): events.EventDataValidatorSetUpdates;
    DecodeEventDataString (bytes: Uint8Array, bare: boolean): events.EventDataString;

    DecodeEvidence (bytes: Uint8Array, bare: boolean): evidence.Evidence;
    DecodeDuplicateVoteEvidence (bytes: Uint8Array, bare: boolean): evidence.DuplicateVoteEvidence;
    DecodeMockGoodEvidence (bytes: Uint8Array, bare: boolean): evidence.MockGoodEvidence;
    DecodeMockRandomGoodEvidence (bytes: Uint8Array, bare: boolean): evidence.MockRandomGoodEvidence;
    DecodeMockBadEvidence (bytes: Uint8Array, bare: boolean): evidence.MockBadEvidence;
    //@formatter:on
}
