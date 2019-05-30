package types

type DecCoin struct {
	Denom  string `json:"denom"`
	Amount Dec    `json:"amount"`
}

type DecCoins []DecCoin
