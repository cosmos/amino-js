package version

type Protocol uint64

type App struct {
	Protocol Protocol `json:"protocol"`
	Software string   `json:"software"`
}

type Consensus struct {
	Block Protocol `json:"block"`
	App   Protocol `json:"app"`
}
