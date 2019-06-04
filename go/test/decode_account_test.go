package test

import (
	"encoding/base64"
	"github.com/cosmos/amino-js/go/src"
	"testing"
)

func TestDecodeAccount(t *testing.T) {
	str := "YPqWwQqcAQpUChTVRec4TD1vW7p6GyUrThqVbrrGTBIPCgV1YXRvbRIGMTc5ODQ4GibrWumHIQKYe02D/64eNwOGvV8fs+7Nr4O3wn9SS6I9ZgPcmQ1jEiCbASg7EhQKBXVhdG9tEgsxMTAwMDAwMDAwMBoSCgV1YXRvbRIJMjA5Nzk3NjA3IhQKBXVhdG9tEgsxMTAwMDAwMDAwMCjwoLDzBQ=="
	original, err := base64.StdEncoding.DecodeString(str)

	originalDecoded := src.DecodeAccount(original, true)

	json := string(originalDecoded)

	encoded := src.EncodeAccount(originalDecoded, true)

	encodedDecoded := src.DecodeAccount(encoded, true)

	json = string(originalDecoded)

	_ = err
	_ = encoded
	_ = json
	_ = encodedDecoded
	return
}
