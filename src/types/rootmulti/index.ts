export interface MultiStoreProofOp {
    proof: MultiStoreProof;
}

export interface MultiStoreProof {
    StoreInfos: StoreInfo[];
}

export interface StoreInfo {
    Name: string;
    Core: StoreCore;
}

export interface StoreCore {
    CommitID: CommitID;
}

export interface CommitID {
    Version: string;
    Hash: string;
}
