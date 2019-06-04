package types

import (
	"fmt"
	"strings"

	govtypes "github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/x/gov/types"
)

const (
	ProposalTypeChange = "ParameterChange"
)

var _ govtypes.Content = ParameterChangeProposal{}

type ParameterChangeProposal struct {
	Title       string        `json:"title"`
	Description string        `json:"description"`
	Changes     []ParamChange `json:"changes"`
}

func (pcp ParameterChangeProposal) GetTitle() string { return pcp.Title }

func (pcp ParameterChangeProposal) GetDescription() string { return pcp.Description }

func (pcp ParameterChangeProposal) ProposalType() string { return ProposalTypeChange }

func (pcp ParameterChangeProposal) String() string {
	var b strings.Builder

	b.WriteString(fmt.Sprintf(`Parameter Change Proposal:
  Title:       %s
  Description: %s
  Changes:
`, pcp.Title, pcp.Description))

	for _, pc := range pcp.Changes {
		b.WriteString(fmt.Sprintf(`    Param Change:
      Subspace: %s
      Key:      %s
      Subkey:   %X
      Value:    %X
`, pc.Subspace, pc.Key, pc.Subkey, pc.Value))
	}

	return b.String()
}

type ParamChange struct {
	Subspace string `json:"subspace"`
	Key      string `json:"key"`
	Subkey   string `json:"subkey,omitempty"`
	Value    string `json:"value"`
}

func (pc ParamChange) String() string {
	return fmt.Sprintf(`Param Change:
  Subspace: %s
  Key:      %s
  Subkey:   %X
  Value:    %X
`, pc.Subspace, pc.Key, pc.Subkey, pc.Value)
}
