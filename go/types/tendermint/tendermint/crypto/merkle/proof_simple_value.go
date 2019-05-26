package merkle

const ProofOpSimpleValue = "simple:v"

type SimpleValueOp struct {
	key   []byte
	Proof *SimpleProof `json:"simple_proof"`
}

var _ ProofOperator = SimpleValueOp{}
