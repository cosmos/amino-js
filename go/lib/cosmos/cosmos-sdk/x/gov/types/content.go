package types

type Content interface {
	GetTitle() string
	GetDescription() string
	ProposalType() string
	String() string
}
