package misc

import (
	"encoding/base64"
	"github.com/cosmos/amino-js/go/src"
	"testing"
)

func TestDecodeAccount(t *testing.T) {
	str := "YPqWwQqcAQpUChTVRec4TD1vW7p6GyUrThqVbrrGTBIPCgV1YXRvbRIGMTc5ODQ4GibrWumHIQKYe02D/64eNwOGvV8fs+7Nr4O3wn9SS6I9ZgPcmQ1jEiCbASg7EhQKBXVhdG9tEgsxMTAwMDAwMDAwMBoSCgV1YXRvbRIJMjA5Nzk3NjA3IhQKBXVhdG9tEgsxMTAwMDAwMDAwMCjwoLDzBQ=="
	original, err := base64.StdEncoding.DecodeString(str)

	originalDecoded, err := src.DecodeAccount(original, false)

	json := string(originalDecoded)

	encoded, err := src.EncodeAccount(originalDecoded, false)

	encodedDecoded, err := src.DecodeAccount(encoded, false)

	json = string(originalDecoded)

	_ = err
	_ = encoded
	_ = json
	_ = encodedDecoded
	return
}
