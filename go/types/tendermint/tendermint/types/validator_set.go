package types

type ValidatorSet struct {
	Validators []*Validator `json:"validators"`
	Proposer   *Validator   `json:"proposer"`

	totalVotingPower int64
}

type ValidatorsByAddress []*Validator
