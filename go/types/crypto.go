package types

type HexBytes []byte

// An address is a []byte, but hex-encoded even in JSON.
// []byte leaves us the option to change the address length.
// Use an alias so Unmarshal methods (with ptr receivers) are available too.
type Address = HexBytes

type PubKey interface {
}

type PrivKey interface {
}

type Symmetric interface {
}