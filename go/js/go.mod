module github.com/cosmos/amino-js/go/js

go 1.12

require (
	github.com/gopherjs/gopherjs v0.0.0-20190430165422-3e4dfb77656c
	github.com/tendermint/go-amino v0.15.0
	github.com/cosmos/amino-js/go/src v0.0.0
)

replace github.com/cosmos/amino-js/go/src => ../src
