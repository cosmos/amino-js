package types

type ConsensusParams struct {
	Block     BlockParams     `json:"block"`
	Evidence  EvidenceParams  `json:"evidence"`
	Validator ValidatorParams `json:"validator"`
}

type HashedParams struct {
	BlockMaxBytes int64
	BlockMaxGas   int64
}

type BlockParams struct {
	MaxBytes   int64 `json:"max_bytes"`
	MaxGas     int64 `json:"max_gas"`
	TimeIotaMs int64 `json:"time_iota_ms"`
}

type EvidenceParams struct {
	MaxAge int64 `json:"max_age"` // only accept new evidence more recent than this
}

type ValidatorParams struct {
	PubKeyTypes []string `json:"pub_key_types"`
}
