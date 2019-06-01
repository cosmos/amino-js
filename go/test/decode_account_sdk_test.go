package test

import (
	"encoding/base64"
	"encoding/json"
	"github.com/cosmos/cosmos-sdk/x/auth"
	"github.com/tendermint/go-amino"
	cryptoAmino "github.com/tendermint/tendermint/crypto/encoding/amino"
	"testing"
)

func TestDecodeAccountSdk(t *testing.T) {
	base64string := "YPqWwQqcAQpUChTVRec4TD1vW7p6GyUrThqVbrrGTBIPCgV1YXRvbRIGMTc5ODQ4GibrWumHIQKYe02D/64eNwOGvV8fs+7Nr4O3wn9SS6I9ZgPcmQ1jEiCbASg7EhQKBXVhdG9tEgsxMTAwMDAwMDAwMBoSCgV1YXRvbRIJMjA5Nzk3NjA3IhQKBXVhdG9tEgsxMTAwMDAwMDAwMCjwoLDzBQ=="
	// account from https://rpc.cosmos.network:26657/abci_query?path=%22store/acc/key%22&data=0x01D545E7384C3D6F5BBA7A1B252B4E1A956EBAC64C&prove=true

	aminoBytes, err := base64.StdEncoding.DecodeString(base64string)

	cdc := amino.NewCodec()

	// register account and key types
	cdc.RegisterInterface((*auth.Account)(nil), nil)
	cdc.RegisterConcrete(&auth.BaseAccount{}, "auth/Account", nil)
	cdc.RegisterInterface((*auth.VestingAccount)(nil), nil)
	cdc.RegisterConcrete(&auth.BaseVestingAccount{}, "auth/BaseVestingAccount", nil)
	cdc.RegisterConcrete(&auth.ContinuousVestingAccount{}, "auth/ContinuousVestingAccount", nil)
	cdc.RegisterConcrete(&auth.DelayedVestingAccount{}, "auth/DelayedVestingAccount", nil)
	cdc.RegisterConcrete(auth.StdTx{}, "auth/StdTx", nil)
	cryptoAmino.RegisterAmino(cdc)

	// amino bytes -> account
	var account1 auth.Account
	err = cdc.UnmarshalBinaryBare(aminoBytes, &account1)
	// account is a DelayedVestingAccount
	// account.PubKey has type secp256k1.PubKeySecp256k1

	// account -> json bytes
	jsonBytes, err := json.Marshal(&account1)

	// json bytes -> json string
	jsonString := string(jsonBytes)
	// {"address":"cosmos164z7wwzv84h4hwn6rvjjkns6j4ht43jv9e3ljy","coins":[{"denom":"uatom","amount":"179848"}],"public_key":[2,152,123,77,131,255,174,30,55,3,134,189,95,31,179,238,205,175,131,183,194,127,82,75,162,61,102,3,220,153,13,99,18],"account_number":155,"sequence":59,"original_vesting":[{"denom":"uatom","amount":"11000000000"}],"delegated_free":[{"denom":"uatom","amount":"209797607"}],"delegated_vesting":[{"denom":"uatom","amount":"11000000000"}],"end_time":1584140400}
	// json:"public_key" has bytes but no type information!

	// json bytes -> account
	var account2 auth.Account
	err = json.Unmarshal(jsonBytes, &account2)
	// json.UnmarshalTypeError (value:"object", offset:1, struct:"", field:"")
	// not very helpful...
	// this indicates that JSON encoding an account loses the concrete type

	// but since we "know" that the account is a DelayedVestingAccount
	var delayedVestingAccount auth.DelayedVestingAccount
	err = json.Unmarshal(jsonBytes, &delayedVestingAccount)
	// json.UnmarshalTypeError (value:"array", offset:119, struct:"DelayedVestingAccount", field:"public_key")
	// this indicates that JSON encoding a public key loses the concrete type

	// code after this point doesn't matter (garbage in, garbage out)
	aminoBytes, err = cdc.MarshalBinaryBare(&delayedVestingAccount)

	base64string = base64.StdEncoding.EncodeToString(aminoBytes)

	_ = err
	_ = jsonString
	return
}
