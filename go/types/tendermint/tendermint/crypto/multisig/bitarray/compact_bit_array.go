package bitarray

type CompactBitArray struct {
	ExtraBitsStored byte   `json:"extra_bits"` // The number of extra bits in elems.
	Elems           []byte `json:"bits"`
}
