module github.com/cosmos/amino-js/go/test

go 1.13

require (
	github.com/cosmos/amino-js/go/src v0.0.0
	github.com/cosmos/cosmos-sdk v0.37.3
	github.com/tendermint/go-amino v0.15.1
	github.com/tendermint/tendermint v0.32.6
)

replace github.com/cosmos/amino-js/go/src => ../src

replace github.com/cosmos/amino-js/go/lib => ../lib
