package iavl

type RangeProof struct {
	LeftPath     PathToLeaf      `json:"left_path"`
	InnerNodes   []PathToLeaf    `json:"inner_nodes"`
	Leaves       []proofLeafNode `json:"leaves"`
	rootVerified bool
	rootHash     []byte // valid iff rootVerified is true
	treeEnd      bool   // valid iff rootVerified is true
}
