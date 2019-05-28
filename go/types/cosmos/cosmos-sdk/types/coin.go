package types

type Coin struct {
	Amount Int    `json:"amount"`
	Denom  string `json:"denom"`
}

type Coins []Coin
