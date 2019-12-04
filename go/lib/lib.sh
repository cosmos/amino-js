export SDK_PATH=cosmos/cosmos-sdk
export SDK_VERSION=v0.35.0
export TENDERMINT_PATH=tendermint/tendermint
export TENDERMINT_VERSION=v0.31.7
export IAVL_PATH=tendermint/iavl
export IAVL_VERSION=v0.12.1

export SDK_PATH_VERSION="${SDK_PATH}@${SDK_VERSION}"
export TENDERMINT_PATH_VERSION="${TENDERMINT_PATH}@${TENDERMINT_VERSION}"
export IAVL_PATH_VERSION="${IAVL_PATH}@${IAVL_VERSION}"

copy () {
  rm -rf "$1"
  rsync -rvL --include '*/' --include '*.go' --exclude '*' --prune-empty-dirs --chmod=Du=rwx,Dg=rx,Do=rx,Fu=rw,Fg=r,Fo=r "${GOPATH}/pkg/mod/github.com/$1/" "$1"
  find "$1" -type f -name "*_test.go" -exec rm -rf {} \;
#  find "$1" -type f -name "{doc,version}.go" -exec rm -rf {} \;
#  find "$1" -type f -exec sed -i '' 's!"github\.com/!"github.com/cosmos/amino-js/go/lib/!g' {} +
}

copy $SDK_PATH_VERSION
#rm -rf \
#  "${SDK_PATH_VERSION}/baseapp" \
#  "${SDK_PATH_VERSION}/client" \
#  "${SDK_PATH_VERSION}/cmd" \
#  "${SDK_PATH_VERSION}/codec" \
#  "${SDK_PATH_VERSION}/docs" \
#  "${SDK_PATH_VERSION}/server" \
#  "${SDK_PATH_VERSION}/tests" \
#  "${SDK_PATH_VERSION}/version"

copy $TENDERMINT_PATH_VERSION
#rm -rf \
#  "${TENDERMINT_PATH_VERSION}/abci/client" \
#  "${TENDERMINT_PATH_VERSION}/abci/cmd" \
#  "${TENDERMINT_PATH_VERSION}/abci/example" \
#  "${TENDERMINT_PATH_VERSION}/abci/server" \
#  "${TENDERMINT_PATH_VERSION}/abci/tests" \
#  "${TENDERMINT_PATH_VERSION}/abci/version" \
#  "${TENDERMINT_PATH_VERSION}/benchmarks" \
#  "${TENDERMINT_PATH_VERSION}/cmd" \
#  "${TENDERMINT_PATH_VERSION}/config" \
#  "${TENDERMINT_PATH_VERSION}/crypto/armor" \
#  "${TENDERMINT_PATH_VERSION}/crypto/internal" \
#  "${TENDERMINT_PATH_VERSION}/docs" \
#  "${TENDERMINT_PATH_VERSION}/scripts" \
#  "${TENDERMINT_PATH_VERSION}/test" \
#  "${TENDERMINT_PATH_VERSION}/tools" \
#  "${TENDERMINT_PATH_VERSION}/version"

copy $IAVL_PATH_VERSION
#rm -rf \
#  "${IAVL_PATH_VERSION}/benchmarks"