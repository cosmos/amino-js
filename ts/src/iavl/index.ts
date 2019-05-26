export interface IAVLAbsenceOp {
    Proof: RangeProof;
}

export interface IAVLValueOp {
    Proof: RangeProof;
}

export interface RangeProof {
    InnerNodes: PathToLeaf[];
    Leaves: Leaf[];
    LeftPath: PathToLeaf[];
}

export interface Leaf {
    Key: Uint8Array;
    ValueHash: Uint8Array;
    Version: number;
}

export interface PathToLeaf {
    Height: number;
    Size: number;
    Version: number;
    Left: Uint8Array;
    Right: Uint8Array;
}
