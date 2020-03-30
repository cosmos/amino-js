module github.com/cosmos/amino-js/go/js

go 1.12

require (
	github.com/cosmos/amino-js/go/extensions v0.0.0
	github.com/cosmos/amino-js/go/src v0.0.0
	github.com/cosmos/cosmos-sdk v0.37.4 // indirect
	github.com/gopherjs/gopherjs v0.0.0-20190430165422-3e4dfb77656c
	github.com/irisnet/irishub v0.16.1 // indirect
	github.com/tendermint/go-amino v0.15.0
)

replace github.com/cosmos/amino-js/go/extensions => ../extensions

replace github.com/cosmos/amino-js/go/src => ../src

replace github.com/cosmos/amino-js/go/lib => ../lib
