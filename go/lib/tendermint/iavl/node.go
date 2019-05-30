package iavl

type Node struct {
	key       []byte
	value     []byte
	version   int64
	height    int8
	size      int64
	hash      []byte
	leftHash  []byte
	leftNode  *Node
	rightHash []byte
	rightNode *Node
	persisted bool
}
