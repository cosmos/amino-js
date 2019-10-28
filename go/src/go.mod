module github.com/cosmos/amino-js/go/src

go 1.13

require (
	github.com/cosmos/amino-js/go/lib v0.0.0
	github.com/tendermint/go-amino v0.15.1
)

replace github.com/cosmos/amino-js/go/lib => ../lib
