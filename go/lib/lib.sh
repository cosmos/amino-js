export SDK_PATH=cosmos/cosmos-sdk
export SDK_VERSION=v0.37.4
export TENDERMINT_PATH=tendermint/tendermint
export TENDERMINT_VERSION=v0.32.7
export IAVL_PATH=tendermint/iavl
export IAVL_VERSION=v0.12.4

copy () {
  rm -rf "$1"
  rsync -rvL --include '*/' --include '*.go' --exclude '*' --prune-empty-dirs --chmod=Du=rwx,Dg=rx,Do=rx,Fu=rw,Fg=r,Fo=r "${GOPATH}/pkg/mod/github.com/$1/" "$1"
}

copy "${SDK_PATH}@${SDK_VERSION}"
copy "${TENDERMINT_PATH}@${TENDERMINT_VERSION}"
copy "${IAVL_PATH}@${IAVL_VERSION}"
