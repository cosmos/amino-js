package lib

import (
	"github.com/tendermint/go-amino"
)

func DecodeDisambPrefixBytes(bz []byte) (dbr *amino.DisambBytes, pbr *amino.PrefixBytes, n int) {
	db, hasDb, pb, hasPb, n, err := amino.DecodeDisambPrefixBytes(bz)
	if err != nil {
		panic(err)
	}

	dbr, pbr = &db, &pb
	if !hasDb {
		dbr = nil
	}

	if !hasPb {
		pbr = nil
	}

	return dbr, pbr, n
}
