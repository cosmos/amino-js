module github.com/cosmos/amino-js/go/src

go 1.12

require (
	github.com/cosmos/amino-js/go/lib v0.0.0
	github.com/tendermint/go-amino v0.15.0
)

replace github.com/cosmos/amino-js/go/lib => ../lib
