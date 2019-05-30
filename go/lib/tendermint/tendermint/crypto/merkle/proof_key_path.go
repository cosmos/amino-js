package merkle

type keyEncoding int

type Key struct {
	name []byte
	enc  keyEncoding
}

type KeyPath []Key
