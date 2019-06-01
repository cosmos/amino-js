package test

import (
	"encoding/base64"
	"github.com/cosmos/cosmos-sdk/x/auth"
	"github.com/tendermint/go-amino"
	cryptoAmino "github.com/tendermint/tendermint/crypto/encoding/amino"
	"testing"
)

func TestDecodeAccountSdkJSON(t *testing.T) {
	// account from https://rpc.cosmos.network:26657/abci_query?path=%22store/acc/key%22&data=0x01D545E7384C3D6F5BBA7A1B252B4E1A956EBAC64C&prove=true
	base64string := "YPqWwQqcAQpUChTVRec4TD1vW7p6GyUrThqVbrrGTBIPCgV1YXRvbRIGMTc5ODQ4GibrWumHIQKYe02D/64eNwOGvV8fs+7Nr4O3wn9SS6I9ZgPcmQ1jEiCbASg7EhQKBXVhdG9tEgsxMTAwMDAwMDAwMBoSCgV1YXRvbRIJMjA5Nzk3NjA3IhQKBXVhdG9tEgsxMTAwMDAwMDAwMCjwoLDzBQ=="

	aminoBytes1, err := base64.StdEncoding.DecodeString(base64string)
	// [ 96, 250, 150, 193, 10, 156, 1, 10, 84, 10, ..., 160, 176, 243, 5 ]

	cdc := amino.NewCodec()

	cdc.RegisterInterface((*auth.Account)(nil), nil)
	cdc.RegisterConcrete(&auth.BaseAccount{}, "auth/Account", nil)
	cdc.RegisterInterface((*auth.VestingAccount)(nil), nil)
	cdc.RegisterConcrete(&auth.BaseVestingAccount{}, "auth/BaseVestingAccount", nil)
	cdc.RegisterConcrete(&auth.ContinuousVestingAccount{}, "auth/ContinuousVestingAccount", nil)
	cdc.RegisterConcrete(&auth.DelayedVestingAccount{}, "auth/DelayedVestingAccount", nil)
	cdc.RegisterConcrete(auth.StdTx{}, "auth/StdTx", nil)
	cryptoAmino.RegisterAmino(cdc)

	var account1 auth.Account
	err = cdc.UnmarshalBinaryBare(aminoBytes1, &account1)

	aminoBytes1, err = cdc.MarshalBinaryBare(&account1)

	jsonBytes, err := cdc.MarshalJSON(&account1)

	jsonString := string(jsonBytes)

	var account2 auth.Account
	err = cdc.UnmarshalJSON(jsonBytes, &account2)

	jsonBytes, err = cdc.MarshalJSON(&account2)

	jsonString = string(jsonBytes)

	aminoBytes2, err := cdc.MarshalBinaryBare(account2)

	var account3 auth.Account
	err = cdc.UnmarshalBinaryBare(aminoBytes2, &account3)

	base64string = base64.StdEncoding.EncodeToString(aminoBytes2)

	_ = err
	_ = jsonString
	return
}
