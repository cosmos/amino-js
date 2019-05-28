package test

import (
	"encoding/base64"
	"fmt"
	lib "github.com/jordansexton/go-amino-js/go"
	"testing"
)

func TestDecodeAccount(t *testing.T) {
	str := "YPqWwQqcAQpUChTVRec4TD1vW7p6GyUrThqVbrrGTBIPCgV1YXRvbRIGMTc5ODQ4GibrWumHIQKYe02D/64eNwOGvV8fs+7Nr4O3wn9SS6I9ZgPcmQ1jEiCbASg7EhQKBXVhdG9tEgsxMTAwMDAwMDAwMBoSCgV1YXRvbRIJMjA5Nzk3NjA3IhQKBXVhdG9tEgsxMTAwMDAwMDAwMCjwoLDzBQ=="
	encoded, err := base64.StdEncoding.DecodeString(str)
	if err != nil {
		fmt.Println("error:", err)
		return
	}
	fmt.Printf("%q\n", encoded)

	// this works, data is decoded as a concrete auth.DelayedVestingAccount
	decoded := lib.DecodeAccount(encoded, true)

	// this errs with "Cannot encode unregistered concrete type map[string]interface {}."
	encoded = lib.EncodeAccount(decoded, true)

	// this errs with "Cannot encode unregistered concrete type []interface {}."
	encoded = lib.EncodeDelayedVestingAccount(decoded, true)

	_ = err
	_ = decoded
	_ = encoded
	return
}
