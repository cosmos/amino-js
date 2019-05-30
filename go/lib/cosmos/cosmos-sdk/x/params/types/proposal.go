package types

import (
	govtypes "github.com/jordansexton/amino-js/go/lib/cosmos/cosmos-sdk/x/gov/types"
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
