package test

import (
	"encoding/base64"
	"github.com/jordansexton/amino-js/go/src"
	"testing"
)

func TestDecodeTx(t *testing.T) {
	str := "1gHwYl3uCkOoo2GaChS536x615s3L5HNHZqLKYPpCK3tiRIUF5FHHqSe5EQ+wA9u2QAy8QEasjAaEQoFdWF0b20SCDExNjU3OTk1EhMKDQoFdWF0b20SBDUwMDAQwJoMGmoKJuta6YchAtQaCqFnshaZQp6rIkvAPyzThvCvXSDO+9AzbxVErqJPEkDWdRwgfQItPT+dDSYFMOtPqQwbbQ1j8+wfs/aBzhulg0YsRiMGZ1Z69dQmi5IT/0D/rRAb1xh6rJN7mQUN4g/FIgoxMTIyNjcyNzU0"
	original, err := base64.StdEncoding.DecodeString(str)

	originalDecoded := src.DecodeTx(original, false)

	json := string(originalDecoded)

	encoded := src.EncodeTx(originalDecoded, false)

	encodedDecoded := src.DecodeTx(encoded, false)

	json = string(originalDecoded)

	_ = err
	_ = encoded
	_ = json
	_ = encodedDecoded
	return
}
