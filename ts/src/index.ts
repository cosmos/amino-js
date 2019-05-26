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
import * as slashing from './slashing';
import * as staking from './staking';
import * as types from './types';

declare global {
    interface Window {
        Amino: Amino;
    }
}

const WindowAmino = window.Amino;
export default WindowAmino;

export type DecodeReturnType<T> = [T, null] | [T | null, Error];

export type DecodeLengthReturnType<T> = [T, number, null] | [null, null, Error];

export type EncodeReturnType<T> = [T, null] | [null, Error];

export interface Amino {
    //@formatter:off

    // Basic encoding

    EncodeByte (byte: number): EncodeReturnType<Uint8Array>;
    EncodeByteSlice (bytes: Uint8Array): EncodeReturnType<Uint8Array>;

    EncodeInt8 (int8: number): EncodeReturnType<Uint8Array>;
    EncodeInt16 (int16: number): EncodeReturnType<Uint8Array>;
    EncodeInt32 (int32: number): EncodeReturnType<Uint8Array>;
    EncodeInt64 (int64: number): EncodeReturnType<Uint8Array>;
    EncodeVarint (varint: number): EncodeReturnType<Uint8Array>;

    EncodeUint8 (uint8: number): EncodeReturnType<Uint8Array>;
    EncodeUint16 (uint16: number): EncodeReturnType<Uint8Array>;
    EncodeUint32 (uint32: number): EncodeReturnType<Uint8Array>;
    EncodeUint64 (uint64: number): EncodeReturnType<Uint8Array>;
    EncodeUvarint (uvarint: number): EncodeReturnType<Uint8Array>;

    EncodeFloat32 (float: number): EncodeReturnType<Uint8Array>;
    EncodeFloat64 (float: number): EncodeReturnType<Uint8Array>;

    EncodeBool (bool: boolean): EncodeReturnType<Uint8Array>;
    EncodeString (string: string): EncodeReturnType<Uint8Array>;
    EncodeTime (time: Date): EncodeReturnType<Uint8Array>;

    // Basic decoding

    DecodeByte (bytes: Uint8Array): DecodeLengthReturnType<number>;
    DecodeByteSlice (bytes: Uint8Array): DecodeLengthReturnType<Uint8Array>;

    DecodeInt8 (bytes: Uint8Array): DecodeLengthReturnType<number>;
    DecodeInt16 (bytes: Uint8Array): DecodeLengthReturnType<number>;
    DecodeInt32 (bytes: Uint8Array): DecodeLengthReturnType<number>;
    DecodeInt64 (bytes: Uint8Array): DecodeLengthReturnType<number>;

    DecodeUint8 (bytes: Uint8Array): DecodeLengthReturnType<number>;
    DecodeUint16 (bytes: Uint8Array): DecodeLengthReturnType<number>;
    DecodeUint32 (bytes: Uint8Array): DecodeLengthReturnType<number>;
    DecodeUint64 (bytes: Uint8Array): DecodeLengthReturnType<number>;

    DecodeVarint (bytes: Uint8Array): DecodeLengthReturnType<number>;
    DecodeUvarint (bytes: Uint8Array): DecodeLengthReturnType<number>;

    DecodeFloat32 (bytes: Uint8Array): DecodeLengthReturnType<number>;
    DecodeFloat64 (bytes: Uint8Array): DecodeLengthReturnType<number>;

    DecodeBool (bytes: Uint8Array): DecodeLengthReturnType<boolean>;
    DecodeString (bytes: Uint8Array): DecodeLengthReturnType<string>;
    DecodeTime (bytes: Uint8Array): DecodeLengthReturnType<Date>;

    // Miscellaneous

    DecodeDisambPrefixBytes (bytes: Uint8Array): [Uint8Array, boolean, Uint8Array, boolean, number, null] | [null, null, null, null, null, Error];
    NameToDisfix (name: string): [Uint8Array, Uint8Array];
    ByteSliceSize (bytes: Uint8Array): number;
    UvarintSize (uvarint: number): number;
    VarintSize (varint: number): number;

    // Unregistered

    DecodeIAVLAbsenceOp (bytes: Uint8Array, bare: boolean): DecodeReturnType<iavl.IAVLAbsenceOp>;
    DecodeIAVLValueOp (bytes: Uint8Array, bare: boolean): DecodeReturnType<iavl.IAVLValueOp>;

    // Registered

    DecodePrivKeyLedgerSecp256k1 (bytes: Uint8Array, bare: boolean): DecodeReturnType<crypto.PrivKeyLedgerSecp256k1>;

    DecodeInfo (bytes: Uint8Array, bare: boolean): DecodeReturnType<keys.Info>;
    DecodeBIP44Params (bytes: Uint8Array, bare: boolean): DecodeReturnType<keys.BIP44Params>;
    DecodeLocalInfo (bytes: Uint8Array, bare: boolean): DecodeReturnType<keys.LocalInfo>;
    DecodeLedgerInfo (bytes: Uint8Array, bare: boolean): DecodeReturnType<keys.LedgerInfo>;
    DecodeOfflineInfo (bytes: Uint8Array, bare: boolean): DecodeReturnType<keys.OfflineInfo>;
    DecodeMultiInfo (bytes: Uint8Array, bare: boolean): DecodeReturnType<keys.MultiInfo>;

    DecodeMsg (bytes: Uint8Array, bare: boolean): DecodeReturnType<types.Msg>;
    DecodeTx (bytes: Uint8Array, bare: boolean): DecodeReturnType<types.Tx>;

    DecodeAccount (bytes: Uint8Array, bare: boolean): DecodeReturnType<auth.Account>;
    DecodeVestingAccount (bytes: Uint8Array, bare: boolean): DecodeReturnType<auth.VestingAccount>;
    DecodeBaseAccount (bytes: Uint8Array, bare: boolean): DecodeReturnType<auth.BaseAccount>;
    DecodeBaseVestingAccount (bytes: Uint8Array, bare: boolean): DecodeReturnType<auth.BaseVestingAccount>;
    DecodeContinuousVestingAccount (bytes: Uint8Array, bare: boolean): DecodeReturnType<auth.ContinuousVestingAccount>;
    DecodeDelayedVestingAccount (bytes: Uint8Array, bare: boolean): DecodeReturnType<auth.DelayedVestingAccount>;
    DecodeStdTx (bytes: Uint8Array, bare: boolean): DecodeReturnType<auth.StdTx>;

    DecodeMsgSend (bytes: Uint8Array, bare: boolean): DecodeReturnType<bank.MsgSend>;
    DecodeMsgMultiSend (bytes: Uint8Array, bare: boolean): DecodeReturnType<bank.MsgMultiSend>;

    DecodeMsgVerifyInvariant (bytes: Uint8Array, bare: boolean): DecodeReturnType<crisis.MsgVerifyInvariant>;

    DecodeMsgWithdrawDelegatorReward (bytes: Uint8Array, bare: boolean): DecodeReturnType<distribution.MsgWithdrawDelegatorReward>;
    DecodeMsgWithdrawValidatorCommission (bytes: Uint8Array, bare: boolean): DecodeReturnType<distribution.MsgWithdrawValidatorCommission>;
    DecodeMsgSetWithdrawAddress (bytes: Uint8Array, bare: boolean): DecodeReturnType<distribution.MsgSetWithdrawAddress>;

    DecodeContent (bytes: Uint8Array, bare: boolean): DecodeReturnType<gov.Content>;
    DecodeMsgSubmitProposal (bytes: Uint8Array, bare: boolean): DecodeReturnType<gov.MsgSubmitProposal>;
    DecodeMsgDeposit (bytes: Uint8Array, bare: boolean): DecodeReturnType<gov.MsgDeposit>;
    DecodeMsgVote (bytes: Uint8Array, bare: boolean): DecodeReturnType<gov.MsgVote>;
    DecodeTextProposal (bytes: Uint8Array, bare: boolean): DecodeReturnType<gov.TextProposal>;
    DecodeSoftwareUpgradeProposal (bytes: Uint8Array, bare: boolean): DecodeReturnType<gov.SoftwareUpgradeProposal>;

    DecodeMsgIBCTransfer (bytes: Uint8Array, bare: boolean): DecodeReturnType<ibc.MsgIBCTransfer>;
    DecodeMsgIBCReceive (bytes: Uint8Array, bare: boolean): DecodeReturnType<ibc.MsgIBCReceive>;

    DecodeParameterChangeProposal (bytes: Uint8Array, bare: boolean): DecodeReturnType<params.ParameterChangeProposal>;

    DecodeMsgUnjail (bytes: Uint8Array, bare: boolean): DecodeReturnType<slashing.MsgUnjail>;

    DecodeMsgCreateValidator (bytes: Uint8Array, bare: boolean): DecodeReturnType<staking.MsgCreateValidator>;
    DecodeMsgEditValidator (bytes: Uint8Array, bare: boolean): DecodeReturnType<staking.MsgEditValidator>;
    DecodeMsgDelegate (bytes: Uint8Array, bare: boolean): DecodeReturnType<staking.MsgDelegate>;
    DecodeMsgUndelegate (bytes: Uint8Array, bare: boolean): DecodeReturnType<staking.MsgUndelegate>;
    DecodeMsgBeginRedelegate (bytes: Uint8Array, bare: boolean): DecodeReturnType<staking.MsgBeginRedelegate>;

    DecodeBlockchainMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<blockchain.BlockchainMessage>;
    DecodeBcBlockRequestMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<blockchain.BcBlockRequestMessage>;
    DecodeBcBlockResponseMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<blockchain.BcBlockResponseMessage>;
    DecodeBcNoBlockResponseMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<blockchain.BcNoBlockResponseMessage>;
    DecodeBcStatusResponseMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<blockchain.BcStatusResponseMessage>;
    DecodeBcStatusRequestMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<blockchain.BcStatusRequestMessage>;

    DecodeConsensusMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<consensus.ConsensusMessage>;
    DecodeNewRoundStepMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<consensus.NewRoundStepMessage>;
    DecodeNewValidBlockMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<consensus.NewValidBlockMessage>;
    DecodeProposalMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<consensus.ProposalMessage>;
    DecodeProposalPOLMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<consensus.ProposalPOLMessage>;
    DecodeBlockPartMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<consensus.BlockPartMessage>;
    DecodeVoteMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<consensus.VoteMessage>;
    DecodeHasVoteMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<consensus.HasVoteMessage>;
    DecodeVoteSetMaj23Message (bytes: Uint8Array, bare: boolean): DecodeReturnType<consensus.VoteSetMaj23Message>;
    DecodeVoteSetBitsMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<consensus.VoteSetBitsMessage>;
    DecodeWALMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<consensus.WALMessage>;
    DecodeMsgInfo (bytes: Uint8Array, bare: boolean): DecodeReturnType<consensus.MsgInfo>;
    DecodeTimeoutInfo (bytes: Uint8Array, bare: boolean): DecodeReturnType<consensus.TimeoutInfo>;
    DecodeEndHeightMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<consensus.EndHeightMessage>;

    DecodePubKey (bytes: Uint8Array, bare: boolean): DecodeReturnType<crypto.PubKey>;
    DecodePrivKey (bytes: Uint8Array, bare: boolean): DecodeReturnType<crypto.PrivKey>;
    DecodePubKeyEd25519 (bytes: Uint8Array, bare: boolean): DecodeReturnType<crypto.PubKeyEd25519>;
    DecodePrivKeyEd25519 (bytes: Uint8Array, bare: boolean): DecodeReturnType<crypto.PrivKeyEd25519>;
    DecodePubKeySecp256k1 (bytes: Uint8Array, bare: boolean): DecodeReturnType<crypto.PubKeySecp256k1>;
    DecodePrivKeySecp256k1 (bytes: Uint8Array, bare: boolean): DecodeReturnType<crypto.PrivKeySecp256k1>;
    DecodePubKeyMultisigThreshold (bytes: Uint8Array, bare: boolean): DecodeReturnType<crypto.PubKeyMultisigThreshold>;

    DecodeEvidenceMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<evidence.EvidenceMessage>;
    DecodeEvidenceListMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<evidence.EvidenceListMessage>;

    DecodeMempoolMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<mempool.MempoolMessage>;
    DecodeTxMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<mempool.TxMessage>;

    DecodePacket (bytes: Uint8Array, bare: boolean): DecodeReturnType<conn.Packet>;
    DecodePacketPing (bytes: Uint8Array, bare: boolean): DecodeReturnType<conn.PacketPing>;
    DecodePacketPong (bytes: Uint8Array, bare: boolean): DecodeReturnType<conn.PacketPong>;
    DecodePacketMsg (bytes: Uint8Array, bare: boolean): DecodeReturnType<conn.PacketMsg>;

    DecodePexMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<pex.PexMessage>;
    DecodePexRequestMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<pex.PexRequestMessage>;
    DecodePexAddrsMessage (bytes: Uint8Array, bare: boolean): DecodeReturnType<pex.PexAddrsMessage>;

    DecodeRemoteSignerMsg (bytes: Uint8Array, bare: boolean): DecodeReturnType<privval.RemoteSignerMsg>;
    DecodePubKeyRequest (bytes: Uint8Array, bare: boolean): DecodeReturnType<privval.PubKeyRequest>;
    DecodePubKeyResponse (bytes: Uint8Array, bare: boolean): DecodeReturnType<privval.PubKeyResponse>;
    DecodeSignVoteRequest (bytes: Uint8Array, bare: boolean): DecodeReturnType<privval.SignVoteRequest>;
    DecodeSignedVoteResponse (bytes: Uint8Array, bare: boolean): DecodeReturnType<privval.SignedVoteResponse>;
    DecodeSignProposalRequest (bytes: Uint8Array, bare: boolean): DecodeReturnType<privval.SignProposalRequest>;
    DecodeSignedProposalResponse (bytes: Uint8Array, bare: boolean): DecodeReturnType<privval.SignedProposalResponse>;
    DecodePingRequest (bytes: Uint8Array, bare: boolean): DecodeReturnType<privval.PingRequest>;
    DecodePingResponse (bytes: Uint8Array, bare: boolean): DecodeReturnType<privval.PingResponse>;

    DecodeTMEventData (bytes: Uint8Array, bare: boolean): DecodeReturnType<events.TMEventData>;
    DecodeEventDataNewBlock (bytes: Uint8Array, bare: boolean): DecodeReturnType<events.EventDataNewBlock>;
    DecodeEventDataNewBlockHeader (bytes: Uint8Array, bare: boolean): DecodeReturnType<events.EventDataNewBlockHeader>;
    DecodeEventDataTx (bytes: Uint8Array, bare: boolean): DecodeReturnType<events.EventDataTx>;
    DecodeEventDataRoundState (bytes: Uint8Array, bare: boolean): DecodeReturnType<events.EventDataRoundState>;
    DecodeEventDataNewRound (bytes: Uint8Array, bare: boolean): DecodeReturnType<events.EventDataNewRound>;
    DecodeEventDataCompleteProposal (bytes: Uint8Array, bare: boolean): DecodeReturnType<events.EventDataCompleteProposal>;
    DecodeEventDataVote (bytes: Uint8Array, bare: boolean): DecodeReturnType<events.EventDataVote>;
    DecodeEventDataValidatorSetUpdates (bytes: Uint8Array, bare: boolean): DecodeReturnType<events.EventDataValidatorSetUpdates>;
    DecodeEventDataString (bytes: Uint8Array, bare: boolean): DecodeReturnType<events.EventDataString>;

    DecodeEvidence (bytes: Uint8Array, bare: boolean): DecodeReturnType<evidence.Evidence>;
    DecodeDuplicateVoteEvidence (bytes: Uint8Array, bare: boolean): DecodeReturnType<evidence.DuplicateVoteEvidence>;
    DecodeMockGoodEvidence (bytes: Uint8Array, bare: boolean): DecodeReturnType<evidence.MockGoodEvidence>;
    DecodeMockRandomGoodEvidence (bytes: Uint8Array, bare: boolean): DecodeReturnType<evidence.MockRandomGoodEvidence>;
    DecodeMockBadEvidence (bytes: Uint8Array, bare: boolean): DecodeReturnType<evidence.MockBadEvidence>;
    //@formatter:on
}
