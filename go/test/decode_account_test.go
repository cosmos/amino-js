package test

import (
	"encoding/base64"
	"fmt"
	js "github.com/jordansexton/go-amino-js/go"
	"github.com/stretchr/testify/assert"
	"testing"

	//"github.com/tendermint/go-amino"
	//auth "github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/x/auth"
	//tm_crypto "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/crypto"
	//tm_ed25519 "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/crypto/ed25519"
	//tm_multisig "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/crypto/multisig"
	//tm_secp256k1 "github.com/jordansexton/go-amino-js/go/types/tendermint/tendermint/crypto/secp256k1"
)

func TestDecodeAccount(t *testing.T) {
	str := "YPqWwQqcAQpUChTVRec4TD1vW7p6GyUrThqVbrrGTBIPCgV1YXRvbRIGMTc5ODQ4GibrWumHIQKYe02D/64eNwOGvV8fs+7Nr4O3wn9SS6I9ZgPcmQ1jEiCbASg7EhQKBXVhdG9tEgsxMTAwMDAwMDAwMBoSCgV1YXRvbRIJMjA5Nzk3NjA3IhQKBXVhdG9tEgsxMTAwMDAwMDAwMCjwoLDzBQ=="
	data, err := base64.StdEncoding.DecodeString(str)
	if err != nil {
		fmt.Println("error:", err)
		return
	}
	fmt.Printf("%q\n", data)

	//codec := amino.NewCodec()
	//
	//codec.RegisterInterface((*auth.Account)(nil), nil)
	//codec.RegisterConcrete(&auth.BaseAccount{}, "auth/Account", nil)
	//codec.RegisterInterface((*auth.VestingAccount)(nil), nil)
	//codec.RegisterConcrete(&auth.BaseVestingAccount{}, "auth/BaseVestingAccount", nil)
	//codec.RegisterConcrete(&auth.ContinuousVestingAccount{}, "auth/ContinuousVestingAccount", nil)
	//codec.RegisterConcrete(&auth.DelayedVestingAccount{}, "auth/DelayedVestingAccount", nil)
	//codec.RegisterConcrete(auth.StdTx{}, "auth/StdTx", nil)
	//
	//codec.RegisterInterface((*tm_crypto.PubKey)(nil), nil)
	//codec.RegisterConcrete(tm_ed25519.PubKeyEd25519{}, "tendermint/PubKeyEd25519", nil)
	//codec.RegisterConcrete(tm_secp256k1.PubKeySecp256k1{}, "tendermint/PubKeySecp256k1", nil)
	//codec.RegisterConcrete(tm_multisig.PubKeyMultisigThreshold{}, "tendermint/PubKeyMultisigThreshold", nil)
	//
	//codec.RegisterInterface((*tm_crypto.PrivKey)(nil), nil)
	//codec.RegisterConcrete(tm_ed25519.PrivKeyEd25519{}, "tendermint/PrivKeyEd25519", nil)
	//codec.RegisterConcrete(tm_secp256k1.PrivKeySecp256k1{}, "tendermint/PrivKeySecp256k1", nil)
	//
	//var account auth.Account
	//err = codec.UnmarshalBinaryBare(data, &account)

	//var account auth.Account
	//account, err = js.DecodeAccount(data, true)
	var account []byte
	account = js.DecodeAccountJSON(data, true)

	assert.NoError(t, err)

	_ = account
	_ = err
	return
}
