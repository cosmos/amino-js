/** @TODO document */
export interface MultiStoreProofOp {
    proof: MultiStoreProof;
}
/** @TODO document */
export interface MultiStoreProof {
    StoreInfos: StoreInfo[];
}
/** @TODO document */
export interface StoreInfo {
    Name: string;
    Core: StoreCore;
}
/** @TODO document */
export interface StoreCore {
    CommitID: CommitID;
}
/** @TODO document */
export interface CommitID {
    Version: string;
    Hash: string;
}
