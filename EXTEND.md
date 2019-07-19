#### 1. Fork

See [`FORK.md`](FORK.md) for instructions.

#### 2. Extend

```shell
git checkout extend

(cd go/extensions; go mod download)
(cd go/src; go clean --modcache; go mod download)
```

#### 3. Add a type

See [`extensions/types.go`](go/extensions/types.go) for an example of how to declare a struct (in this case, a custom transaction message). 

#### 4. Register your type

See [`extensions/codec.go`](go/extensions/codec.go) for an example of how to register the struct with the codec.

Interfaces can be registered the same way. See [`lib/codec.go`](go/lib/codec.go) for examples (all the registered types from the Cosmos SDK and Tendermint core).  

#### 5. Build

```shell
yarn setup
```

#### 6. Test

See [test/extensions.test.ts](test/extensions.test.ts) for an example of how to test marshaling and unmarshaling a struct.

```shell
yarn test
```
