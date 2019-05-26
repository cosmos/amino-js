package types

type Coin struct {
	Denom string `json:"denom"`
	Amount Int `json:"amount"`
}

type Coins []Coin
