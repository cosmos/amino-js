export interface IAVLAbsenceOp {
    proof: RangeProof;
}

export interface IAVLValueOp {
    proof: RangeProof;
}

export interface RangeProof {
    innerNodes: PathToLeaf[];
    leaves: Leaf[];
    leftPath: PathToLeaf[];
}

export interface Leaf {
    key: Uint8Array;
    valueHash: Uint8Array;
    version: number;
}

export interface PathToLeaf {
    height: number;
    size: number;
    version: number;
    left: Uint8Array;
    right: Uint8Array;
}
