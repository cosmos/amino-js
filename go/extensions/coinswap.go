package extensions

import (
	sdk "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/types"
	"github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/bank"
)

// MsgSwapOrder represents a msg for swap order
type MsgSwapOrder struct {
	Input      bank.Input  `json:"input" yaml:"input"`               // the amount the sender is trading
	Output     bank.Output `json:"output" yaml:"output"`             // the amount the sender is receiving
	Deadline   int64       `json:"deadline" yaml:"deadline"`         // deadline for the transaction to still be considered valid
	IsBuyOrder bool        `json:"is_buy_order" yaml:"is_buy_order"` // boolean indicating whether the order should be treated as a buy or sell
}

// MsgAddLiquidity - struct for adding liquidity to a reserve pool
type MsgAddLiquidity struct {
	MaxToken         sdk.Coin       `json:"max_token" yaml:"max_token"`                   // coin to be deposited as liquidity with an upper bound for its amount
	ExactStandardAmt sdk.Int        `json:"exact_standard_amt" yaml:"exact_standard_amt"` // exact amount of native asset being add to the liquidity pool
	MinLiquidity     sdk.Int        `json:"min_liquidity" yaml:"min_liquidity"`           // lower bound UNI sender is willing to accept for deposited coins
	Deadline         int64          `json:"deadline" yaml:"deadline"`                     // deadline of tx
	Sender           sdk.AccAddress `json:"sender" yaml:"sender"`                         // msg sender
}

// MsgRemoveLiquidity - struct for removing liquidity from a reserve pool
type MsgRemoveLiquidity struct {
	MinToken          sdk.Int        `json:"min_token" yaml:"min_token"`                   // coin to be withdrawn with a lower bound for its amount
	WithdrawLiquidity sdk.Coin       `json:"withdraw_liquidity" yaml:"withdraw_liquidity"` // amount of UNI to be burned to withdraw liquidity from a reserve pool
	MinStandardAmt    sdk.Int        `json:"min_standard_amt" yaml:"min_standard_amt"`     // minimum amount of the native asset the sender is willing to accept
	Deadline          int64          `json:"deadline" yaml:"deadline"`                     // deadline of tx
	Sender            sdk.AccAddress `json:"sender" yaml:"sender"`                         // msg sender
}

// CoinswapParams defines the fee and native denomination for coinswap
type CoinswapParams struct {
	Fee           sdk.Dec `json:"fee" yaml:"fee"`                       // fee of coinswap
	StandardDenom string  `json:"standard_denom" yaml:"standard_denom"` // standard token denom of coinswap
}
