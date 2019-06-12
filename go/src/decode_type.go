package src

import (
	rootmulti "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/store/rootmulti"
	iavl "github.com/cosmos/amino-js/go/lib/tendermint/iavl"

	crypto "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/crypto"
	keys "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/crypto/keys"
	hd "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/crypto/keys/hd"

	types "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"

	auth "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/auth"
	bank "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/bank"
	crisis "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/crisis"
	distribution "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/distribution/types"
	gov "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/gov/types"
	ibc "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/ibc"
	params "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/params/types"
	slashing "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/slashing"
	staking "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/staking/types"

	tm_crypto "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto"
	tm_ed25519 "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto/ed25519"
	tm_multisig "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto/multisig"
	tm_secp256k1 "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto/secp256k1"

	tm_blockchain "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/blockchain"
	tm_consensus "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/consensus"
	tm_evidence "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/evidence"
	tm_mempool "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/mempool"
	tm_conn "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/p2p/conn"
	tm_pex "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/p2p/pex"
	tm_privval "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/privval"
	tm_types "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/types"
)

func DecodeMultiStoreProofOp(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o rootmulti.MultiStoreProofOp
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeIAVLAbsenceOp(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o iavl.IAVLAbsenceOp
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeIAVLValueOp(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o iavl.IAVLValueOp
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePrivKeyLedgerSecp256k1(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o crypto.PrivKeyLedgerSecp256k1
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o keys.Info
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBIP44Params(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o hd.BIP44Params
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeLocalInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o keys.LocalInfo
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeLedgerInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o keys.LedgerInfo
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeOfflineInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o keys.OfflineInfo
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMultiInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o keys.MultiInfo
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsg(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o types.Msg
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeTx(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o types.Tx
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o auth.Account
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o auth.VestingAccount
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBaseAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o auth.BaseAccount
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBaseVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o auth.BaseVestingAccount
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeContinuousVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o auth.ContinuousVestingAccount
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeDelayedVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o auth.DelayedVestingAccount
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeStdTx(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o auth.StdTx
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgSend(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o bank.MsgSend
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgMultiSend(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o bank.MsgMultiSend
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgVerifyInvariant(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o crisis.MsgVerifyInvariant
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgWithdrawDelegatorReward(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o distribution.MsgWithdrawDelegatorReward
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgWithdrawValidatorCommission(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o distribution.MsgWithdrawValidatorCommission
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgSetWithdrawAddress(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o distribution.MsgSetWithdrawAddress
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeContent(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o gov.Content
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgSubmitProposal(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o gov.MsgSubmitProposal
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgDeposit(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o gov.MsgDeposit
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgVote(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o gov.MsgVote
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeTextProposal(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o gov.TextProposal
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeSoftwareUpgradeProposal(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o gov.SoftwareUpgradeProposal
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgIBCTransfer(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o ibc.MsgIBCTransfer
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgIBCReceive(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o ibc.MsgIBCReceive
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeParameterChangeProposal(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o params.ParameterChangeProposal
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgUnjail(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o slashing.MsgUnjail
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgCreateValidator(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o staking.MsgCreateValidator
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgEditValidator(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o staking.MsgEditValidator
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgDelegate(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o staking.MsgDelegate
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgUndelegate(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o staking.MsgUndelegate
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgBeginRedelegate(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o staking.MsgBeginRedelegate
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBlockchainMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_blockchain.BlockchainMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBcBlockRequestMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_blockchain.BcBlockRequestMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBcBlockResponseMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_blockchain.BcBlockResponseMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBcNoBlockResponseMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_blockchain.BcNoBlockResponseMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBcStatusResponseMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_blockchain.BcStatusResponseMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBcStatusRequestMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_blockchain.BcStatusRequestMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeConsensusMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.ConsensusMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeNewRoundStepMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.NewRoundStepMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeNewValidBlockMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.NewValidBlockMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeProposalMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.ProposalMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeProposalPOLMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.ProposalPOLMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeBlockPartMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.BlockPartMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeVoteMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.VoteMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeHasVoteMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.HasVoteMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeVoteSetMaj23Message(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.VoteSetMaj23Message
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeVoteSetBitsMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.VoteSetBitsMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeWALMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.WALMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMsgInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.MsgInfo
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeTimeoutInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.TimeoutInfo
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEndHeightMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.EndHeightMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePubKey(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_crypto.PubKey
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePrivKey(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_crypto.PrivKey
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePubKeyEd25519(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_ed25519.PubKeyEd25519
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePrivKeyEd25519(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_ed25519.PrivKeyEd25519
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePubKeySecp256k1(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_secp256k1.PubKeySecp256k1
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePrivKeySecp256k1(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_secp256k1.PrivKeySecp256k1
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePubKeyMultisigThreshold(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_multisig.PubKeyMultisigThreshold
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEvidenceMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_evidence.EvidenceMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEvidenceListMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_evidence.EvidenceListMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMempoolMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_mempool.MempoolMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeTxMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_mempool.TxMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePacket(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_conn.Packet
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePacketPing(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_conn.PacketPing
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePacketPong(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_conn.PacketPong
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePacketMsg(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_conn.PacketMsg
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePexMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_pex.PexMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePexRequestMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_pex.PexRequestMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePexAddrsMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_pex.PexAddrsMessage
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeRemoteSignerMsg(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.RemoteSignerMsg
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePubKeyRequest(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.PubKeyRequest
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePubKeyResponse(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.PubKeyResponse
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeSignVoteRequest(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.SignVoteRequest
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeSignedVoteResponse(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.SignedVoteResponse
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeSignProposalRequest(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.SignProposalRequest
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeSignedProposalResponse(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.SignedProposalResponse
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePingRequest(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.PingRequest
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodePingResponse(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.PingResponse
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeTMEventData(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.TMEventData
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataNewBlock(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataNewBlock
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataNewBlockHeader(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataNewBlockHeader
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataTx(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataTx
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataRoundState(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataRoundState
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataNewRound(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataNewRound
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataCompleteProposal(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataCompleteProposal
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataVote(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataVote
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataValidatorSetUpdates(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataValidatorSetUpdates
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEventDataString(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataString
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.Evidence
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeDuplicateVoteEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.DuplicateVoteEvidence
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMockGoodEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.MockGoodEvidence
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMockRandomGoodEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.MockRandomGoodEvidence
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}

func DecodeMockBadEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.MockBadEvidence
	if lengthPrefixed {
		err = codec.UnmarshalBinaryLengthPrefixed(bz, &o)
	} else {
		err = codec.UnmarshalBinaryBare(bz, &o)
	}

	if err != nil {
		return nil, err
	}

	bz2, err = codec.MarshalJSON(o)
	if err != nil {
		return nil, err
	}

	return
}
