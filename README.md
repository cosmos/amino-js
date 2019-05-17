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

### Run

```shell
go run server.go
open http://localhost:8090
```

### Experiment

Using your browser console:

```javascript
Amino.JS.decodeString(Amino.JS.encodeString('hello world'));
```

### Structure

##### `./go`
Go files -- Amino, wrappers around Amino functions for JS, and some basic structs and types from the Cosmos SDK that aren't used yet.

##### `./ts`
A Yarn package with TypeScript files and some config, linting, testing, and build boilerplate.

##### `./static`
Static assets -- currently just an HTML file to load JS.

##### `./dist`
Compiled and copied output.