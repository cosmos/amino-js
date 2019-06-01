export interface IAVLAbsenceOp {
    proof: RangeProof;
}

export interface IAVLValueOp {
    proof: RangeProof;
}

export interface RangeProof {
    inner_nodes: PathToLeaf[] | null;
    leaves: Leaf[];
    left_path: PathToLeaf[];
}

export interface Leaf {
    key: string;
    value: string;
    version: string;
}

export interface PathToLeaf {
    height: number;
    size: string;
    version: string;
    left: string | null;
    right: string | null;
}
