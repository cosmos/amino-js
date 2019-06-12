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

func EncodeMultiStoreProofOp(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o rootmulti.MultiStoreProofOp
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeIAVLAbsenceOp(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o iavl.IAVLAbsenceOp
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeIAVLValueOp(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o iavl.IAVLValueOp
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePrivKeyLedgerSecp256k1(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o crypto.PrivKeyLedgerSecp256k1
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o keys.Info
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeBIP44Params(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o hd.BIP44Params
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeLocalInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o keys.LocalInfo
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeLedgerInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o keys.LedgerInfo
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeOfflineInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o keys.OfflineInfo
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMultiInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o keys.MultiInfo
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsg(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o types.Msg
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeTx(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o types.Tx
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o auth.Account
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o auth.VestingAccount
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeBaseAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o auth.BaseAccount
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeBaseVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o auth.BaseVestingAccount
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeContinuousVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o auth.ContinuousVestingAccount
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeDelayedVestingAccount(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o auth.DelayedVestingAccount
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeStdTx(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o auth.StdTx
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgSend(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o bank.MsgSend
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgMultiSend(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o bank.MsgMultiSend
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgVerifyInvariant(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o crisis.MsgVerifyInvariant
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgWithdrawDelegatorReward(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o distribution.MsgWithdrawDelegatorReward
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgWithdrawValidatorCommission(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o distribution.MsgWithdrawValidatorCommission
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgSetWithdrawAddress(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o distribution.MsgSetWithdrawAddress
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeContent(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o gov.Content
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgSubmitProposal(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o gov.MsgSubmitProposal
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgDeposit(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o gov.MsgDeposit
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgVote(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o gov.MsgVote
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeTextProposal(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o gov.TextProposal
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeSoftwareUpgradeProposal(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o gov.SoftwareUpgradeProposal
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgIBCTransfer(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o ibc.MsgIBCTransfer
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgIBCReceive(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o ibc.MsgIBCReceive
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeParameterChangeProposal(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o params.ParameterChangeProposal
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgUnjail(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o slashing.MsgUnjail
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgCreateValidator(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o staking.MsgCreateValidator
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgEditValidator(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o staking.MsgEditValidator
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgDelegate(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o staking.MsgDelegate
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgUndelegate(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o staking.MsgUndelegate
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgBeginRedelegate(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o staking.MsgBeginRedelegate
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeBlockchainMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_blockchain.BlockchainMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeBcBlockRequestMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_blockchain.BcBlockRequestMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeBcBlockResponseMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_blockchain.BcBlockResponseMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeBcNoBlockResponseMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_blockchain.BcNoBlockResponseMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeBcStatusResponseMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_blockchain.BcStatusResponseMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeBcStatusRequestMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_blockchain.BcStatusRequestMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeConsensusMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.ConsensusMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeNewRoundStepMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.NewRoundStepMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeNewValidBlockMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.NewValidBlockMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeProposalMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.ProposalMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeProposalPOLMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.ProposalPOLMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeBlockPartMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.BlockPartMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeVoteMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.VoteMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeHasVoteMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.HasVoteMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeVoteSetMaj23Message(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.VoteSetMaj23Message
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeVoteSetBitsMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.VoteSetBitsMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeWALMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.WALMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMsgInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.MsgInfo
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeTimeoutInfo(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.TimeoutInfo
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeEndHeightMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_consensus.EndHeightMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePubKey(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_crypto.PubKey
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePrivKey(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_crypto.PrivKey
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePubKeyEd25519(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_ed25519.PubKeyEd25519
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePrivKeyEd25519(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_ed25519.PrivKeyEd25519
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePubKeySecp256k1(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_secp256k1.PubKeySecp256k1
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePrivKeySecp256k1(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_secp256k1.PrivKeySecp256k1
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePubKeyMultisigThreshold(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_multisig.PubKeyMultisigThreshold
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeEvidenceMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_evidence.EvidenceMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeEvidenceListMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_evidence.EvidenceListMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMempoolMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_mempool.MempoolMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeTxMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_mempool.TxMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePacket(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_conn.Packet
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePacketPing(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_conn.PacketPing
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePacketPong(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_conn.PacketPong
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePacketMsg(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_conn.PacketMsg
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePexMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_pex.PexMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePexRequestMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_pex.PexRequestMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePexAddrsMessage(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_pex.PexAddrsMessage
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeRemoteSignerMsg(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.RemoteSignerMsg
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePubKeyRequest(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.PubKeyRequest
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePubKeyResponse(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.PubKeyResponse
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeSignVoteRequest(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.SignVoteRequest
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeSignedVoteResponse(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.SignedVoteResponse
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeSignProposalRequest(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.SignProposalRequest
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeSignedProposalResponse(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.SignedProposalResponse
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePingRequest(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.PingRequest
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodePingResponse(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_privval.PingResponse
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeTMEventData(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.TMEventData
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeEventDataNewBlock(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataNewBlock
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeEventDataNewBlockHeader(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataNewBlockHeader
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeEventDataTx(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataTx
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeEventDataRoundState(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataRoundState
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeEventDataNewRound(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataNewRound
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeEventDataCompleteProposal(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataCompleteProposal
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeEventDataVote(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataVote
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeEventDataValidatorSetUpdates(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataValidatorSetUpdates
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeEventDataString(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.EventDataString
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.Evidence
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeDuplicateVoteEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.DuplicateVoteEvidence
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMockGoodEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.MockGoodEvidence
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMockRandomGoodEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.MockRandomGoodEvidence
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}

func EncodeMockBadEvidence(bz []byte, lengthPrefixed bool) (bz2 []byte, err error) {
	var o tm_types.MockBadEvidence
	err = codec.UnmarshalJSON(bz, &o)
	if err != nil {
		return nil, err
	}

	if lengthPrefixed {
		bz2, err = codec.MarshalBinaryLengthPrefixed(o)
	} else {
		bz2, err = codec.MarshalBinaryBare(o)
	}

	if err != nil {
		return nil, err
	}

	return
}
