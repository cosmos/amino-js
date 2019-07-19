#### 1. Fork `amino-js`

༼ つ ◕_◕ ༽つ Do the Github thing. ༼ つ ◕_◕ ༽つ

#### 2. Clone your fork

The project uses Go modules, so you'll probably want to clone it in your GOPATH.

```shell
export GITHUB_ORG="<github user or org name of your fork>"
export GO111MODULE="on"

mkdir -p $GOPATH/src/github.com/$GITHUB_ORG

cd $GOPATH/src/github.com/$GITHUB_ORG

git clone https://github.com/$GITHUB_ORG/amino-js.git
```

#### 3. Install `myitcv/gopherjs`

Install `myitcv/gopherjs` via the instructions @ https://github.com/myitcv/gopherjs#installation-and-usage

This fork is required for Go module support until https://github.com/gopherjs/gopherjs/issues/855 is resolved.

If you don't have GopherJS installed yet, this is straightforward:

```shell
git clone https://github.com/myitcv/gopherjs "$(cut -d':' -f1 <<< $GOPATH)/src/github.com/gopherjs/gopherjs"
cd "$(cut -d':' -f1 <<< $GOPATH)/src/github.com/gopherjs/gopherjs"
GO111MODULE=on go install
```

#### 4. Install dependencies

```shell
cd amino-js

(cd go/lib; go mod download)
(cd go/src; go mod download)
(cd go/js;  go mod download)

yarn install
```

#### 5. Build

```shell
yarn setup
```

#### 6. Test

```shell
yarn test
```
