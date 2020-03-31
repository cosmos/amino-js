/** @TODO document */
export interface IAVLAbsenceOp {
    proof: RangeProof;
}
/** @TODO document */
export interface IAVLValueOp {
    proof: RangeProof;
}
/** @TODO document */
export interface RangeProof {
    inner_nodes: PathToLeaf[] | null;
    leaves: Leaf[];
    left_path: PathToLeaf[];
}
/** @TODO document */
export interface Leaf {
    key: string;
    value: string;
    version: string;
}
/** @TODO document */
export interface PathToLeaf {
    height: number;
    size: string;
    version: string;
    left: string | null;
    right: string | null;
}
