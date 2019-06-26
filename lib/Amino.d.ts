import { AminoBytes, Bech32String, Bytes, DisambBytes, JSONBytes, PrefixBytes } from './types';

// Bech32
/**
 * Encode data (e.g. an account address) as Bech32
 *
 * @param   hrp  - human readable part
 * @param   data - data to encode
 *
 * @returns Bech32-encoded string
 * @throws  will throw if encoding fails
 */
export function encodeBech32 (hrp: string, data: Bytes): Bech32String;

/**
 * Decode data (e.g. an account address) from Bech32
 *
 * @param   bech - Bech32-encoded string to decode
 *
 * @returns tuple of decoded human readable part and data
 * @throws  will throw if decoding fails
 */
export function decodeBech32 (bech: Bech32String): [string, Bytes];

// Basic encoding
/**
 * Encode a byte as Amino
 *
 * @param   byte - number to encode
 *
 * @returns Amino-encoded byte
 * @throws  will throw if encoding fails
 */
export function encodeByte (byte: number): AminoBytes;

/**
 * Encode a byte slice as Amino
 *
 * @param   bytes - bytes to encode
 *
 * @returns Amino-encoded bytes
 * @throws  will throw if encoding fails
 */
export function encodeByteSlice (bytes: Bytes): AminoBytes;

/**
 * Encode an int8 as Amino
 *
 * @param   int8 - number to encode
 *
 * @returns Amino-encoded int8
 * @throws  will throw if encoding fails
 */
export function encodeInt8 (int8: number): AminoBytes;

/**
 * Encode an int16 as Amino
 *
 * @param   int16 - number to encode
 *
 * @returns Amino-encoded int16
 * @throws  will throw if encoding fails
 */
export function encodeInt16 (int16: number): AminoBytes;

/**
 * Encode an int32 as Amino
 *
 * @param   int32 - number to encode
 *
 * @returns Amino-encoded int32
 * @throws  will throw if encoding fails
 */
export function encodeInt32 (int32: number): AminoBytes;

/**
 * Encode an int64 as Amino
 *
 * @param   int64 - number to encode
 *
 * @returns Amino-encoded int64
 * @throws  will throw if encoding fails
 */
export function encodeInt64 (int64: number): AminoBytes;

/**
 * Encode a varint as Amino
 *
 * @param   varint - number to encode
 *
 * @returns Amino-encoded varint
 * @throws  will throw if encoding fails
 */
export function encodeVarint (varint: number): AminoBytes;

/**
 * Encode a uint8 as Amino
 *
 * @param   uint8 - number to encode
 *
 * @returns Amino-encoded uint8
 * @throws  will throw if encoding fails
 */
export function encodeUint8 (uint8: number): AminoBytes;

/**
 * Encode a uint16 as Amino
 *
 * @param   uint16 - number to encode
 *
 * @returns Amino-encoded uint16
 * @throws  will throw if encoding fails
 */
export function encodeUint16 (uint16: number): AminoBytes;

/**
 * Encode a uint32 as Amino
 *
 * @param   uint32 - number to encode
 *
 * @returns Amino-encoded uint32
 * @throws  will throw if encoding fails
 */
export function encodeUint32 (uint32: number): AminoBytes;

/**
 * Encode a uint64 as Amino
 *
 * @param   uint64 - number to encode
 *
 * @returns Amino-encoded uint64
 * @throws  will throw if encoding fails
 */
export function encodeUint64 (uint64: number): AminoBytes;

/**
 * Encode a uvarint as Amino
 *
 * @param   uvarint - number to encode
 *
 * @returns Amino-encoded uvarint
 * @throws  will throw if encoding fails
 */
export function encodeUvarint (uvarint: number): AminoBytes;

/**
 * Encode a float32 as Amino
 *
 * @param   float - number to encode
 *
 * @returns Amino-encoded float32
 * @throws  will throw if encoding fails
 */
export function encodeFloat32 (float: number): AminoBytes;

/**
 * Encode a float64 as Amino
 *
 * @param   float - number to encode
 *
 * @returns Amino-encoded float64
 * @throws  will throw if encoding fails
 */
export function encodeFloat64 (float: number): AminoBytes;

/**
 * Encode a boolean as Amino
 *
 * @param   boolean - boolean to encode
 *
 * @returns Amino-encoded bool
 * @throws  will throw if encoding fails
 */
export function encodeBool (boolean: boolean): AminoBytes;

/**
 * Encode a string as Amino
 *
 * @param   string - string to encode
 *
 * @returns Amino-encoded string
 * @throws  will throw if encoding fails
 */
export function encodeString (string: string): AminoBytes;

/**
 * Encode a time as Amino
 *
 * @param   time - Date to encode
 *
 * @returns Amino-encoded time
 * @throws  will throw if encoding fails
 */
export function encodeTime (time: Date): AminoBytes;

// Basic decoding
/**
 * Decode a byte from Amino
 *
 * @param   amino - Amino-encoded byte
 *
 * @returns tuple of decoded byte and byte length
 * @throws  will throw if decoding fails
 */
export function decodeByte (amino: AminoBytes): [number, number];

/**
 * Decode a byte slice from Amino
 *
 * @param   amino - Amino-encoded bytes
 *
 * @returns tuple of decoded bytes and byte length
 * @throws  will throw if decoding fails
 */
export function decodeByteSlice (amino: AminoBytes): [Bytes, number];

/**
 * Decode an int8 from Amino
 *
 * @param   amino - Amino-encoded int8
 *
 * @returns tuple of decoded int8 and byte length
 * @throws  will throw if decoding fails
 */
export function decodeInt8 (amino: AminoBytes): [number, number];

/**
 * Decode an int16 from Amino
 *
 * @param   amino - Amino-encoded int16
 *
 * @returns tuple of decoded int16 and byte length
 * @throws  will throw if decoding fails
 */
export function decodeInt16 (amino: AminoBytes): [number, number];

/**
 * Decode an int32 from Amino
 *
 * @param   amino - Amino-encoded int32
 *
 * @returns tuple of decoded int32 and byte length
 * @throws  will throw if decoding fails
 */
export function decodeInt32 (amino: AminoBytes): [number, number];

/**
 * Decode an int64 from Amino
 *
 * @param   amino - Amino-encoded int64
 *
 * @returns tuple of decoded int64 and byte length
 * @throws  will throw if decoding fails
 */
export function decodeInt64 (amino: AminoBytes): [number, number];

/**
 * Decode a varint from Amino
 *
 * @param   amino - Amino-encoded varint
 *
 * @returns tuple of decoded varint and byte length
 * @throws  will throw if decoding fails
 */
export function decodeVarint (amino: AminoBytes): [number, number];

/**
 * Decode a uint8 from Amino
 *
 * @param   amino - Amino-encoded uint8
 *
 * @returns tuple of decoded uint8 and byte length
 * @throws  will throw if decoding fails
 */
export function decodeUint8 (amino: AminoBytes): [number, number];

/**
 * Decode a uint16 from Amino
 *
 * @param   amino - Amino-encoded uint16
 *
 * @returns tuple of decoded uint16 and byte length
 * @throws  will throw if decoding fails
 */
export function decodeUint16 (amino: AminoBytes): [number, number];

/**
 * Decode a uint32 from Amino
 *
 * @param   amino - Amino-encoded uint32
 *
 * @returns tuple of decoded uint32 and byte length
 * @throws  will throw if decoding fails
 */
export function decodeUint32 (amino: AminoBytes): [number, number];

/**
 * Decode a uint64 from Amino
 *
 * @param   amino - Amino-encoded uint64
 *
 * @returns tuple of decoded uint64 and byte length
 * @throws  will throw if decoding fails
 */
export function decodeUint64 (amino: AminoBytes): [number, number];

/**
 * Decode a uvarint from Amino
 *
 * @param   amino - Amino-encoded uvarint
 *
 * @returns tuple of decoded uvarint and byte length
 * @throws  will throw if decoding fails
 */
export function decodeUvarint (amino: AminoBytes): [number, number];

/**
 * Decode a float32 from Amino
 *
 * @param   amino - Amino-encoded float32
 *
 * @returns tuple of decoded float32 and byte length
 * @throws  will throw if decoding fails
 */
export function decodeFloat32 (amino: AminoBytes): [number, number];

/**
 * Decode a float64 from Amino
 *
 * @param   amino - Amino-encoded float64
 *
 * @returns tuple of decoded float64 and byte length
 * @throws  will throw if decoding fails
 */
export function decodeFloat64 (amino: AminoBytes): [number, number];

/**
 * Decode a boolean from Amino
 *
 * @param   amino - Amino-encoded boolean
 *
 * @returns tuple of decoded boolean and byte length
 * @throws  will throw if decoding fails
 */
export function decodeBool (amino: AminoBytes): [boolean, number];

/**
 * Decode a string from Amino
 *
 * @param   amino - Amino-encoded string
 *
 * @returns tuple of decoded string and byte length
 * @throws  will throw if decoding fails
 */
export function decodeString (amino: AminoBytes): [string, number];

/**
 * Decode a time from Amino
 *
 * @param   amino - Amino-encoded time
 *
 * @returns tuple of decoded time and byte length
 * @throws  will throw if decoding fails
 */
export function decodeTime (amino: AminoBytes): [Date, number];

// Meta
/**
 * Decode disambiguation bytes, prefix bytes, and byte length from Amino
 *
 * @param   amino - Amino-encoded bytes
 *
 * @returns tuple of disambiguation bytes, hasDisambiguationBytes, prefix bytes, hasPrefixBytes, and byte length
 * @throws  will throw if decoding fails
 */
export function decodeDisambPrefixBytes (amino: AminoBytes): [DisambBytes, boolean, PrefixBytes, boolean, number];

/**
 * Calculate disambiguation bytes and prefix bytes from a name
 *
 * @param   name - Amino registered type name (e.g. `"auth/Account"`)
 *
 * @returns tuple of disambiguation bytes and prefix bytes
 */
export function nameToDisfix (name: string): [DisambBytes, PrefixBytes];

/**
 * Calculate the byte length of Amino-encoded bytes
 *
 * @param   bytes - unencoded bytes to get the Amino-encoded byte length of
 *
 * @returns byte length of Amino-encoded bytes
 */
export function byteSliceSize (bytes: Bytes): number;

/**
 * Calculate the byte length of an Amino-encoded uvarint
 *
 * @param   uvarint - number to get the Amino-encoded byte length of
 *
 * @returns byte length of Amino-encoded uvarint
 */
export function uvarintSize (uvarint: number): number;

/**
 * Calculate the byte length of an Amino-encoded varint
 *
 * @param   varint - number to get the Amino-encoded byte length of
 *
 * @returns byte length of Amino-encoded varint
 */
export function varintSize (varint: number): number;

// Typed encoding
/**
 * Encode a `MultiStoreProofOp` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MultiStoreProofOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MultiStoreProofOp` object
 * @throws  will throw if encoding fails
 */
export function encodeMultiStoreProofOp (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `IAVLAbsenceOp` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `IAVLAbsenceOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `IAVLAbsenceOp` object
 * @throws  will throw if encoding fails
 */
export function encodeIAVLAbsenceOp (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `IAVLValueOp` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `IAVLValueOp` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `IAVLValueOp` object
 * @throws  will throw if encoding fails
 */
export function encodeIAVLValueOp (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PrivKeyLedgerSecp256k1` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PrivKeyLedgerSecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PrivKeyLedgerSecp256k1` object
 * @throws  will throw if encoding fails
 */
export function encodePrivKeyLedgerSecp256k1 (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `Info` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `Info` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Info` object
 * @throws  will throw if encoding fails
 */
export function encodeInfo (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `BIP44Params` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `BIP44Params` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BIP44Params` object
 * @throws  will throw if encoding fails
 */
export function encodeBIP44Params (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `LocalInfo` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `LocalInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `LocalInfo` object
 * @throws  will throw if encoding fails
 */
export function encodeLocalInfo (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `LedgerInfo` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `LedgerInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `LedgerInfo` object
 * @throws  will throw if encoding fails
 */
export function encodeLedgerInfo (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `OfflineInfo` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `OfflineInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `OfflineInfo` object
 * @throws  will throw if encoding fails
 */
export function encodeOfflineInfo (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MultiInfo` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MultiInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MultiInfo` object
 * @throws  will throw if encoding fails
 */
export function encodeMultiInfo (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `Msg` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `Msg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Msg` object
 * @throws  will throw if encoding fails
 */
export function encodeMsg (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `Tx` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `Tx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Tx` object
 * @throws  will throw if encoding fails
 */
export function encodeTx (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `Account` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `Account` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Account` object
 * @throws  will throw if encoding fails
 */
export function encodeAccount (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `VestingAccount` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `VestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `VestingAccount` object
 * @throws  will throw if encoding fails
 */
export function encodeVestingAccount (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `BaseAccount` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `BaseAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BaseAccount` object
 * @throws  will throw if encoding fails
 */
export function encodeBaseAccount (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `BaseVestingAccount` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `BaseVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BaseVestingAccount` object
 * @throws  will throw if encoding fails
 */
export function encodeBaseVestingAccount (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `ContinuousVestingAccount` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `ContinuousVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ContinuousVestingAccount` object
 * @throws  will throw if encoding fails
 */
export function encodeContinuousVestingAccount (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `DelayedVestingAccount` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `DelayedVestingAccount` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `DelayedVestingAccount` object
 * @throws  will throw if encoding fails
 */
export function encodeDelayedVestingAccount (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `StdTx` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `StdTx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `StdTx` object
 * @throws  will throw if encoding fails
 */
export function encodeStdTx (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgSend` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgSend` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgSend` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgSend (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgMultiSend` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgMultiSend` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgMultiSend` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgMultiSend (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgVerifyInvariant` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgVerifyInvariant` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgVerifyInvariant` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgVerifyInvariant (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgWithdrawDelegatorReward` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgWithdrawDelegatorReward` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgWithdrawDelegatorReward` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgWithdrawDelegatorReward (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgWithdrawValidatorCommission` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgWithdrawValidatorCommission` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgWithdrawValidatorCommission` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgWithdrawValidatorCommission (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgSetWithdrawAddress` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgSetWithdrawAddress` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgSetWithdrawAddress` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgSetWithdrawAddress (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `Content` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `Content` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Content` object
 * @throws  will throw if encoding fails
 */
export function encodeContent (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgSubmitProposal` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgSubmitProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgSubmitProposal` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgSubmitProposal (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgDeposit` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgDeposit` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgDeposit` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgDeposit (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgVote` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgVote` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgVote` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgVote (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `TextProposal` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `TextProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `TextProposal` object
 * @throws  will throw if encoding fails
 */
export function encodeTextProposal (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `SoftwareUpgradeProposal` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `SoftwareUpgradeProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SoftwareUpgradeProposal` object
 * @throws  will throw if encoding fails
 */
export function encodeSoftwareUpgradeProposal (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgIBCTransfer` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgIBCTransfer` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgIBCTransfer` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgIBCTransfer (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgIBCReceive` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgIBCReceive` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgIBCReceive` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgIBCReceive (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `ParameterChangeProposal` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `ParameterChangeProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ParameterChangeProposal` object
 * @throws  will throw if encoding fails
 */
export function encodeParameterChangeProposal (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgUnjail` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgUnjail` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgUnjail` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgUnjail (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgCreateValidator` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgCreateValidator` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgCreateValidator` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgCreateValidator (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgEditValidator` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgEditValidator` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgEditValidator` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgEditValidator (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgDelegate` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgDelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgDelegate` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgDelegate (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgUndelegate` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgUndelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgUndelegate` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgUndelegate (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgBeginRedelegate` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgBeginRedelegate` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgBeginRedelegate` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgBeginRedelegate (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `BlockchainMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `BlockchainMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BlockchainMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeBlockchainMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `BcBlockRequestMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `BcBlockRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcBlockRequestMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeBcBlockRequestMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `BcBlockResponseMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `BcBlockResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcBlockResponseMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeBcBlockResponseMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `BcNoBlockResponseMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `BcNoBlockResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcNoBlockResponseMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeBcNoBlockResponseMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `BcStatusResponseMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `BcStatusResponseMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcStatusResponseMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeBcStatusResponseMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `BcStatusRequestMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `BcStatusRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BcStatusRequestMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeBcStatusRequestMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `ConsensusMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `ConsensusMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ConsensusMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeConsensusMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `NewRoundStepMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `NewRoundStepMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `NewRoundStepMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeNewRoundStepMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `NewValidBlockMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `NewValidBlockMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `NewValidBlockMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeNewValidBlockMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `ProposalMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `ProposalMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ProposalMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeProposalMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `ProposalPOLMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `ProposalPOLMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `ProposalPOLMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeProposalPOLMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `BlockPartMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `BlockPartMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `BlockPartMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeBlockPartMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `VoteMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `VoteMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `VoteMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeVoteMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `HasVoteMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `HasVoteMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `HasVoteMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeHasVoteMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `VoteSetMaj23Message` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `VoteSetMaj23Message` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `VoteSetMaj23Message` object
 * @throws  will throw if encoding fails
 */
export function encodeVoteSetMaj23Message (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `VoteSetBitsMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `VoteSetBitsMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `VoteSetBitsMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeVoteSetBitsMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `WALMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `WALMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `WALMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeWALMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MsgInfo` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MsgInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MsgInfo` object
 * @throws  will throw if encoding fails
 */
export function encodeMsgInfo (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `TimeoutInfo` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `TimeoutInfo` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `TimeoutInfo` object
 * @throws  will throw if encoding fails
 */
export function encodeTimeoutInfo (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `EndHeightMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `EndHeightMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EndHeightMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeEndHeightMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PubKey` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PubKey` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKey` object
 * @throws  will throw if encoding fails
 */
export function encodePubKey (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PrivKey` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PrivKey` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PrivKey` object
 * @throws  will throw if encoding fails
 */
export function encodePrivKey (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PubKeyEd25519` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PubKeyEd25519` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeyEd25519` object
 * @throws  will throw if encoding fails
 */
export function encodePubKeyEd25519 (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PrivKeyEd25519` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PrivKeyEd25519` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PrivKeyEd25519` object
 * @throws  will throw if encoding fails
 */
export function encodePrivKeyEd25519 (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PubKeySecp256k1` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PubKeySecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeySecp256k1` object
 * @throws  will throw if encoding fails
 */
export function encodePubKeySecp256k1 (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PrivKeySecp256k1` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PrivKeySecp256k1` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PrivKeySecp256k1` object
 * @throws  will throw if encoding fails
 */
export function encodePrivKeySecp256k1 (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PubKeyMultisigThreshold` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PubKeyMultisigThreshold` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeyMultisigThreshold` object
 * @throws  will throw if encoding fails
 */
export function encodePubKeyMultisigThreshold (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `EvidenceMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `EvidenceMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EvidenceMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeEvidenceMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `EvidenceListMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `EvidenceListMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EvidenceListMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeEvidenceListMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MempoolMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MempoolMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MempoolMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeMempoolMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `TxMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `TxMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `TxMessage` object
 * @throws  will throw if encoding fails
 */
export function encodeTxMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `Packet` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `Packet` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Packet` object
 * @throws  will throw if encoding fails
 */
export function encodePacket (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PacketPing` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PacketPing` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PacketPing` object
 * @throws  will throw if encoding fails
 */
export function encodePacketPing (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PacketPong` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PacketPong` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PacketPong` object
 * @throws  will throw if encoding fails
 */
export function encodePacketPong (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PacketMsg` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PacketMsg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PacketMsg` object
 * @throws  will throw if encoding fails
 */
export function encodePacketMsg (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PexMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PexMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PexMessage` object
 * @throws  will throw if encoding fails
 */
export function encodePexMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PexRequestMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PexRequestMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PexRequestMessage` object
 * @throws  will throw if encoding fails
 */
export function encodePexRequestMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PexAddrsMessage` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PexAddrsMessage` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PexAddrsMessage` object
 * @throws  will throw if encoding fails
 */
export function encodePexAddrsMessage (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `RemoteSignerMsg` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `RemoteSignerMsg` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `RemoteSignerMsg` object
 * @throws  will throw if encoding fails
 */
export function encodeRemoteSignerMsg (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PubKeyRequest` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PubKeyRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeyRequest` object
 * @throws  will throw if encoding fails
 */
export function encodePubKeyRequest (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PubKeyResponse` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PubKeyResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PubKeyResponse` object
 * @throws  will throw if encoding fails
 */
export function encodePubKeyResponse (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `SignVoteRequest` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `SignVoteRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SignVoteRequest` object
 * @throws  will throw if encoding fails
 */
export function encodeSignVoteRequest (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `SignedVoteResponse` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `SignedVoteResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SignedVoteResponse` object
 * @throws  will throw if encoding fails
 */
export function encodeSignedVoteResponse (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `SignProposalRequest` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `SignProposalRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SignProposalRequest` object
 * @throws  will throw if encoding fails
 */
export function encodeSignProposalRequest (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `SignedProposalResponse` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `SignedProposalResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `SignedProposalResponse` object
 * @throws  will throw if encoding fails
 */
export function encodeSignedProposalResponse (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PingRequest` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PingRequest` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PingRequest` object
 * @throws  will throw if encoding fails
 */
export function encodePingRequest (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `PingResponse` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `PingResponse` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `PingResponse` object
 * @throws  will throw if encoding fails
 */
export function encodePingResponse (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `TMEventData` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `TMEventData` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `TMEventData` object
 * @throws  will throw if encoding fails
 */
export function encodeTMEventData (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `EventDataNewBlock` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `EventDataNewBlock` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataNewBlock` object
 * @throws  will throw if encoding fails
 */
export function encodeEventDataNewBlock (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `EventDataNewBlockHeader` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `EventDataNewBlockHeader` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataNewBlockHeader` object
 * @throws  will throw if encoding fails
 */
export function encodeEventDataNewBlockHeader (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `EventDataTx` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `EventDataTx` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataTx` object
 * @throws  will throw if encoding fails
 */
export function encodeEventDataTx (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `EventDataRoundState` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `EventDataRoundState` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataRoundState` object
 * @throws  will throw if encoding fails
 */
export function encodeEventDataRoundState (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `EventDataNewRound` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `EventDataNewRound` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataNewRound` object
 * @throws  will throw if encoding fails
 */
export function encodeEventDataNewRound (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `EventDataCompleteProposal` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `EventDataCompleteProposal` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataCompleteProposal` object
 * @throws  will throw if encoding fails
 */
export function encodeEventDataCompleteProposal (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `EventDataVote` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `EventDataVote` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataVote` object
 * @throws  will throw if encoding fails
 */
export function encodeEventDataVote (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `EventDataValidatorSetUpdates` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `EventDataValidatorSetUpdates` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataValidatorSetUpdates` object
 * @throws  will throw if encoding fails
 */
export function encodeEventDataValidatorSetUpdates (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `EventDataString` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `EventDataString` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `EventDataString` object
 * @throws  will throw if encoding fails
 */
export function encodeEventDataString (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `Evidence` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `Evidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `Evidence` object
 * @throws  will throw if encoding fails
 */
export function encodeEvidence (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `DuplicateVoteEvidence` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `DuplicateVoteEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `DuplicateVoteEvidence` object
 * @throws  will throw if encoding fails
 */
export function encodeDuplicateVoteEvidence (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MockGoodEvidence` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MockGoodEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MockGoodEvidence` object
 * @throws  will throw if encoding fails
 */
export function encodeMockGoodEvidence (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MockRandomGoodEvidence` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MockRandomGoodEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MockRandomGoodEvidence` object
 * @throws  will throw if encoding fails
 */
export function encodeMockRandomGoodEvidence (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

/**
 * Encode a `MockBadEvidence` object from JSON to Amino
 *
 * @param   json           - JSON-encoded `MockBadEvidence` object
 * @param   lengthPrefixed - if `true`, use length-prefixed Amino encoding; if `false`, use bare Amino encoding
 *
 * @returns Amino-encoded `MockBadEvidence` object
 * @throws  will throw if encoding fails
 */
export function encodeMockBadEvidence (json: JSONBytes, lengthPrefixed: boolean): AminoBytes;

// Typed decoding
/**
 * Decode a `MultiStoreProofOp` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MultiStoreProofOp` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MultiStoreProofOp` object
 * @throws  will throw if decoding fails
 */
export function decodeMultiStoreProofOp (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `IAVLAbsenceOp` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `IAVLAbsenceOp` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `IAVLAbsenceOp` object
 * @throws  will throw if decoding fails
 */
export function decodeIAVLAbsenceOp (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `IAVLValueOp` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `IAVLValueOp` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `IAVLValueOp` object
 * @throws  will throw if decoding fails
 */
export function decodeIAVLValueOp (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PrivKeyLedgerSecp256k1` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PrivKeyLedgerSecp256k1` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PrivKeyLedgerSecp256k1` object
 * @throws  will throw if decoding fails
 */
export function decodePrivKeyLedgerSecp256k1 (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `Info` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded  `object ` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `Info` object
 * @throws  will throw if decoding fails
 */
export function decodeInfo (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `BIP44Params` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `BIP44Params` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `BIP44Params` object
 * @throws  will throw if decoding fails
 */
export function decodeBIP44Params (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `LocalInfo` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `LocalInfo` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `LocalInfo` object
 * @throws  will throw if decoding fails
 */
export function decodeLocalInfo (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `LedgerInfo` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `LedgerInfo` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `LedgerInfo` object
 * @throws  will throw if decoding fails
 */
export function decodeLedgerInfo (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `OfflineInfo` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `OfflineInfo` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `OfflineInfo` object
 * @throws  will throw if decoding fails
 */
export function decodeOfflineInfo (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MultiInfo` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MultiInfo` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MultiInfo` object
 * @throws  will throw if decoding fails
 */
export function decodeMultiInfo (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `Msg` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `object ` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `Msg` object
 * @throws  will throw if decoding fails
 */
export function decodeMsg (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `Tx` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `object ` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `Tx` object
 * @throws  will throw if decoding fails
 */
export function decodeTx (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `Account` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `Account` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `Account` object
 * @throws  will throw if decoding fails
 */
export function decodeAccount (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `VestingAccount` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `VestingAccount` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `VestingAccount` object
 * @throws  will throw if decoding fails
 */
export function decodeVestingAccount (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `BaseAccount` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `BaseAccount` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `BaseAccount` object
 * @throws  will throw if decoding fails
 */
export function decodeBaseAccount (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `BaseVestingAccount` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `BaseVestingAccount` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `BaseVestingAccount` object
 * @throws  will throw if decoding fails
 */
export function decodeBaseVestingAccount (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a  `ContinuousVestingAccount` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `ContinuousVestingAccount` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `ContinuousVestingAccount` object
 * @throws  will throw if decoding fails
 */
export function decodeContinuousVestingAccount (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `DelayedVestingAccount` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `DelayedVestingAccount` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `DelayedVestingAccount` object
 * @throws  will throw if decoding fails
 */
export function decodeDelayedVestingAccount (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `StdTx` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `object ` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `StdTx` object
 * @throws  will throw if decoding fails
 */
export function decodeStdTx (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgSend` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgSend` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgSend` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgSend (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgMultiSend` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgMultiSend` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgMultiSend` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgMultiSend (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgVerifyInvariant` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgVerifyInvariant` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgVerifyInvariant` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgVerifyInvariant (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgWithdrawDelegatorReward` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgWithdrawDelegatorReward` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgWithdrawDelegatorReward` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgWithdrawDelegatorReward (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgWithdrawValidatorCommission` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgWithdrawValidatorCommission` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgWithdrawValidatorCommission` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgWithdrawValidatorCommission (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgSetWithdrawAddress` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgSetWithdrawAddress` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgSetWithdrawAddress` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgSetWithdrawAddress (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `Content` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `Content` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `Content` object
 * @throws  will throw if decoding fails
 */
export function decodeContent (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgSubmitProposal` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgSubmitProposal` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgSubmitProposal` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgSubmitProposal (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgDeposit` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgDeposit` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgDeposit` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgDeposit (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgVote` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgVote` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgVote` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgVote (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `TextProposal` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `TextProposal` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `TextProposal` object
 * @throws  will throw if decoding fails
 */
export function decodeTextProposal (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `SoftwareUpgradeProposal` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `SoftwareUpgradeProposal` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `SoftwareUpgradeProposal` object
 * @throws  will throw if decoding fails
 */
export function decodeSoftwareUpgradeProposal (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgIBCTransfer` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgIBCTransfer` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgIBCTransfer` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgIBCTransfer (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgIBCReceive` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgIBCReceive` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgIBCReceive` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgIBCReceive (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `ParameterChangeProposal` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `ParameterChangeProposal` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `ParameterChangeProposal` object
 * @throws  will throw if decoding fails
 */
export function decodeParameterChangeProposal (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgUnjail` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgUnjail` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgUnjail` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgUnjail (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgCreateValidator` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgCreateValidator` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgCreateValidator` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgCreateValidator (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgEditValidator` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgEditValidator` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgEditValidator` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgEditValidator (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgDelegate` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgDelegate` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgDelegate` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgDelegate (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgUndelegate` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgUndelegate` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgUndelegate` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgUndelegate (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgBeginRedelegate` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgBeginRedelegate` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgBeginRedelegate` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgBeginRedelegate (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `BlockchainMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `BlockchainMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `BlockchainMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeBlockchainMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `BcBlockRequestMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `BcBlockRequestMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `BcBlockRequestMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeBcBlockRequestMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `BcBlockResponseMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `BcBlockResponseMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `BcBlockResponseMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeBcBlockResponseMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a  `BcNoBlockResponseMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `BcNoBlockResponseMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `BcNoBlockResponseMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeBcNoBlockResponseMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `BcStatusResponseMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `BcStatusResponseMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `BcStatusResponseMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeBcStatusResponseMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `BcStatusRequestMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `BcStatusRequestMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `BcStatusRequestMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeBcStatusRequestMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `ConsensusMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `ConsensusMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `ConsensusMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeConsensusMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `NewRoundStepMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `NewRoundStepMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `NewRoundStepMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeNewRoundStepMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `NewValidBlockMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `NewValidBlockMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `NewValidBlockMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeNewValidBlockMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `ProposalMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `ProposalMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `ProposalMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeProposalMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `ProposalPOLMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `ProposalPOLMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `ProposalPOLMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeProposalPOLMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `BlockPartMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `BlockPartMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `BlockPartMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeBlockPartMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `VoteMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `VoteMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `VoteMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeVoteMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `HasVoteMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `HasVoteMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `HasVoteMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeHasVoteMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `VoteSetMaj23Message` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `VoteSetMaj23Message` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `VoteSetMaj23Message` object
 * @throws  will throw if decoding fails
 */
export function decodeVoteSetMaj23Message (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `VoteSetBitsMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `VoteSetBitsMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `VoteSetBitsMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeVoteSetBitsMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `WALMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `WALMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `WALMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeWALMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MsgInfo` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MsgInfo` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MsgInfo` object
 * @throws  will throw if decoding fails
 */
export function decodeMsgInfo (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `TimeoutInfo` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `TimeoutInfo` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `TimeoutInfo` object
 * @throws  will throw if decoding fails
 */
export function decodeTimeoutInfo (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `EndHeightMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `EndHeightMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `EndHeightMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeEndHeightMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PubKey` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PubKey` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PubKey` object
 * @throws  will throw if decoding fails
 */
export function decodePubKey (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PrivKey` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PrivKey` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PrivKey` object
 * @throws  will throw if decoding fails
 */
export function decodePrivKey (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PubKeyEd25519` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PubKeyEd25519` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PubKeyEd25519` object
 * @throws  will throw if decoding fails
 */
export function decodePubKeyEd25519 (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PrivKeyEd25519` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PrivKeyEd25519` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PrivKeyEd25519` object
 * @throws  will throw if decoding fails
 */
export function decodePrivKeyEd25519 (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PubKeySecp256k1` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PubKeySecp256k1` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PubKeySecp256k1` object
 * @throws  will throw if decoding fails
 */
export function decodePubKeySecp256k1 (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PrivKeySecp256k1` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PrivKeySecp256k1` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PrivKeySecp256k1` object
 * @throws  will throw if decoding fails
 */
export function decodePrivKeySecp256k1 (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PubKeyMultisigThreshold` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PubKeyMultisigThreshold` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PubKeyMultisigThreshold` object
 * @throws  will throw if decoding fails
 */
export function decodePubKeyMultisigThreshold (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `EvidenceMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `EvidenceMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `EvidenceMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeEvidenceMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `EvidenceListMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `EvidenceListMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `EvidenceListMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeEvidenceListMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MempoolMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MempoolMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MempoolMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeMempoolMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `TxMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `TxMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `TxMessage` object
 * @throws  will throw if decoding fails
 */
export function decodeTxMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `Packet` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `Packet` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `Packet` object
 * @throws  will throw if decoding fails
 */
export function decodePacket (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PacketPing` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PacketPing` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PacketPing` object
 * @throws  will throw if decoding fails
 */
export function decodePacketPing (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PacketPong` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PacketPong` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PacketPong` object
 * @throws  will throw if decoding fails
 */
export function decodePacketPong (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PacketMsg` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PacketMsg` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PacketMsg` object
 * @throws  will throw if decoding fails
 */
export function decodePacketMsg (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PexMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PexMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PexMessage` object
 * @throws  will throw if decoding fails
 */
export function decodePexMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PexRequestMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PexRequestMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PexRequestMessage` object
 * @throws  will throw if decoding fails
 */
export function decodePexRequestMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PexAddrsMessage` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PexAddrsMessage` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PexAddrsMessage` object
 * @throws  will throw if decoding fails
 */
export function decodePexAddrsMessage (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `RemoteSignerMsg` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `RemoteSignerMsg` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `RemoteSignerMsg` object
 * @throws  will throw if decoding fails
 */
export function decodeRemoteSignerMsg (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PubKeyRequest` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PubKeyRequest` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PubKeyRequest` object
 * @throws  will throw if decoding fails
 */
export function decodePubKeyRequest (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PubKeyResponse` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PubKeyResponse` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PubKeyResponse` object
 * @throws  will throw if decoding fails
 */
export function decodePubKeyResponse (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `SignVoteRequest` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `SignVoteRequest` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `SignVoteRequest` object
 * @throws  will throw if decoding fails
 */
export function decodeSignVoteRequest (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `SignedVoteResponse` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `SignedVoteResponse` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `SignedVoteResponse` object
 * @throws  will throw if decoding fails
 */
export function decodeSignedVoteResponse (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `SignProposalRequest` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `SignProposalRequest` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `SignProposalRequest` object
 * @throws  will throw if decoding fails
 */
export function decodeSignProposalRequest (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `SignedProposalResponse` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `SignedProposalResponse` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `SignedProposalResponse` object
 * @throws  will throw if decoding fails
 */
export function decodeSignedProposalResponse (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PingRequest` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PingRequest` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PingRequest` object
 * @throws  will throw if decoding fails
 */
export function decodePingRequest (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `PingResponse` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `PingResponse` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `PingResponse` object
 * @throws  will throw if decoding fails
 */
export function decodePingResponse (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `TMEventData` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `TMEventData` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `TMEventData` object
 * @throws  will throw if decoding fails
 */
export function decodeTMEventData (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `EventDataNewBlock` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `EventDataNewBlock` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `EventDataNewBlock` object
 * @throws  will throw if decoding fails
 */
export function decodeEventDataNewBlock (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `EventDataNewBlockHeader` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `EventDataNewBlockHeader` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `EventDataNewBlockHeader` object
 * @throws  will throw if decoding fails
 */
export function decodeEventDataNewBlockHeader (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `EventDataTx` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `EventDataTx` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `EventDataTx` object
 * @throws  will throw if decoding fails
 */
export function decodeEventDataTx (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `EventDataRoundState` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `EventDataRoundState` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `EventDataRoundState` object
 * @throws  will throw if decoding fails
 */
export function decodeEventDataRoundState (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `EventDataNewRound` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `EventDataNewRound` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `EventDataNewRound` object
 * @throws  will throw if decoding fails
 */
export function decodeEventDataNewRound (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `EventDataCompleteProposal` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `EventDataCompleteProposal` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `EventDataCompleteProposal` object
 * @throws  will throw if decoding fails
 */
export function decodeEventDataCompleteProposal (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `EventDataVote` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `EventDataVote` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `EventDataVote` object
 * @throws  will throw if decoding fails
 */
export function decodeEventDataVote (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `EventDataValidatorSetUpdates` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `EventDataValidatorSetUpdates` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `EventDataValidatorSetUpdates` object
 * @throws  will throw if decoding fails
 */
export function decodeEventDataValidatorSetUpdates (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `EventDataString` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `EventDataString` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `EventDataString` object
 * @throws  will throw if decoding fails
 */
export function decodeEventDataString (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `Evidence` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `Evidence` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `Evidence` object
 * @throws  will throw if decoding fails
 */
export function decodeEvidence (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `DuplicateVoteEvidence` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `DuplicateVoteEvidence` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `DuplicateVoteEvidence` object
 * @throws  will throw if decoding fails
 */
export function decodeDuplicateVoteEvidence (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MockGoodEvidence` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MockGoodEvidence` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MockGoodEvidence` object
 * @throws  will throw if decoding fails
 */
export function decodeMockGoodEvidence (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MockRandomGoodEvidence` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MockRandomGoodEvidence` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MockRandomGoodEvidence` object
 * @throws  will throw if decoding fails
 */
export function decodeMockRandomGoodEvidence (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;

/**
 * Decode a `MockBadEvidence` object from Amino to JSON
 *
 * @param   amino          - Amino-encoded `MockBadEvidence` object
 * @param   lengthPrefixed - if true, use length-prefixed Amino decoding; if false, use bare Amino decoding
 *
 * @returns JSON-encoded `MockBadEvidence` object
 * @throws  will throw if decoding fails
 */
export function decodeMockBadEvidence (amino: AminoBytes, lengthPrefixed: boolean): JSONBytes;
