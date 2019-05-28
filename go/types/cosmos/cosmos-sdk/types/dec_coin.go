package types

type DecCoin struct {
	Amount Dec    `json:"amount"`
	Denom  string `json:"denom"`
}

type DecCoins []DecCoin
