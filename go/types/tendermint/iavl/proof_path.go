package iavl

type pathWithLeaf struct {
	Path PathToLeaf    `json:"path"`
	Leaf proofLeafNode `json:"leaf"`
}

type PathToLeaf []proofInnerNode
