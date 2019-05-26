package types

import (
	govtypes "github.com/jordansexton/go-amino-js/go/types/cosmos/cosmos-sdk/x/gov/types"
)

var _ govtypes.Content = ParameterChangeProposal{}

type ParameterChangeProposal struct {
	Title       string        `json:"title"`
	Description string        `json:"description"`
	Changes     []ParamChange `json:"changes"`
}

type ParamChange struct {
	Subspace string `json:"subspace"`
	Key      string `json:"key"`
	Subkey   string `json:"subkey,omitempty"`
	Value    string `json:"value"`
}
