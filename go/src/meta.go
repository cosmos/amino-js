package src

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

func NameToDisfix(name string) (amino.DisambBytes, amino.PrefixBytes) {
	return amino.NameToDisfix(name)
}

func ByteSliceSize(bz []byte) int {
	return amino.ByteSliceSize(bz)
}

func UvarintSize(u uint64) int {
	return amino.UvarintSize(u)
}

func VarintSize(i int64) int {
	return amino.VarintSize(i)
}
