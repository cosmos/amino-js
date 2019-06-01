package types

type Config struct {
	bech32AddressPrefix map[string]string
}

var (
	sdkConfig = &Config{
		bech32AddressPrefix: map[string]string{
			"account_addr":   Bech32PrefixAccAddr,
			"validator_addr": Bech32PrefixValAddr,
			"consensus_addr": Bech32PrefixConsAddr,
			"account_pub":    Bech32PrefixAccPub,
			"validator_pub":  Bech32PrefixValPub,
			"consensus_pub":  Bech32PrefixConsPub,
		},
	}
)

func GetConfig() *Config {
	return sdkConfig
}

func (config *Config) GetBech32AccountAddrPrefix() string {
	return config.bech32AddressPrefix["account_addr"]
}

func (config *Config) GetBech32ValidatorAddrPrefix() string {
	return config.bech32AddressPrefix["validator_addr"]
}

func (config *Config) GetBech32ConsensusAddrPrefix() string {
	return config.bech32AddressPrefix["consensus_addr"]
}

func (config *Config) GetBech32AccountPubPrefix() string {
	return config.bech32AddressPrefix["account_pub"]
}

// GetBech32ValidatorPubPrefix returns the Bech32 prefix for validator public key
func (config *Config) GetBech32ValidatorPubPrefix() string {
	return config.bech32AddressPrefix["validator_pub"]
}

// GetBech32ConsensusPubPrefix returns the Bech32 prefix for consensus node public key
func (config *Config) GetBech32ConsensusPubPrefix() string {
	return config.bech32AddressPrefix["consensus_pub"]
}
