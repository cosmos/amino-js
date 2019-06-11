package misc

import (
	"encoding/base64"
	"fmt"
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/x/auth"
	"github.com/tendermint/go-amino"
	"testing"
)

func TestDecodeAccountOld(t *testing.T) {
	str := "YPqWwQqcAQpUChTVRec4TD1vW7p6GyUrThqVbrrGTBIPCgV1YXRvbRIGMTc5ODQ4GibrWumHIQKYe02D/64eNwOGvV8fs+7Nr4O3wn9SS6I9ZgPcmQ1jEiCbASg7EhQKBXVhdG9tEgsxMTAwMDAwMDAwMBoSCgV1YXRvbRIJMjA5Nzk3NjA3IhQKBXVhdG9tEgsxMTAwMDAwMDAwMCjwoLDzBQ=="
	data, err := base64.StdEncoding.DecodeString(str)
	if err != nil {
		fmt.Println("error:", err)
		return
	}
	fmt.Printf("%q\n", data)

	cdc := amino.NewCodec()

	auth.RegisterCodec(cdc)
	codec.RegisterCrypto(cdc)

	var account auth.Account
	err = cdc.UnmarshalBinaryBare(data, &account)

	_ = err
	return
}
