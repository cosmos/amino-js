# go-amino-js

Experimental, don't use this yet.

### Install

```shell
go get -u github.com/tendermint/go-amino
go get -u github.com/gopherjs/gopherjs
git clone https://github.com/jordansexton/go-amino-js.git
cd go-amino-js
```

### Build

```shell
make build
```

### Test

```shell
cd ts
yarn install
yarn test
```

### Run

```shell
go run server.go
open http://localhost:8090
```

### Experiment

Using your browser console:

```javascript
Amino.DecodeString(Amino.EncodeString('hello world'));
// [ "hello world", 12 ]
```

### Structure

##### `./go`
Go files:
  - Amino
  - Registered and unregistered types from the Cosmos SDK and Tendermint Core with most methods stripped out
  - Wrappers around Amino encoding and decoding functions for JS

##### `./ts`
TypeScript files: 
  - Yarn package
  - Config, linting, testing, and build boilerplate
  - TypeScript definitions for GopherJS's compiled output
  - Encoding utility functions
  - Unit tests using Jest

##### `./static`
Static assets -- currently just an HTML file to load JS.

##### `./dist`
Compiled and copied output.