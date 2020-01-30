# `amino-js`

Supported in Node.js and browsers.

Support is planned for Service Workers.

### Demo

- [Node.js](https://repl.it/repls/ScalyGracefulState)
- [Browser](https://jsfiddle.net/qk2wut06/)

### Documentation

**https://cosmos.github.io/amino-js/**

All exported functions are documented. Some Amino registered TypeScript interfaces are documented. The codec works as is, but we'll work on adding more TS definitions to improve the developer experience.

### Install

Please note that the NPM package name is `@tendermint/amino-js` rather than `@cosmos/amino-js`.

##### Yarn
```shell
yarn add @tendermint/amino-js
```

##### NPM
```shell
npm install --save @tendermint/amino-js
```

### Usage

Encoding decoding of basic values:
```js
import { encodeString, decodeString } from '@tendermint/amino-js';
decodeString(encodeString('hello world'));
// [ "hello world", 12 ]
```

Encoding/decoding of registered types:
```js
import { marshalTx, unmarshalTx } from '@tendermint/amino-js';

const tx = {
   'type':  'auth/StdTx',
   'value': {
       'msg':        [{
           'type':  'cosmos-sdk/MsgSend',
           'value': {
               'from_address': 'cosmos1h806c7khnvmjlywdrkdgk2vrayy2mmvf9rxk2r',
               'to_address':   'cosmos1z7g5w84ynmjyg0kqpahdjqpj7yq34v3suckp0e',
               'amount':       [{
                   'denom':  'uatom',
                   'amount': '11657995'
               }]
           }
       }],
       'fee':        {
           'amount': [{
               'denom':  'uatom',
               'amount': '5000'
           }],
           'gas':    '200000'
       },
       'signatures': [{
           'pub_key':   {
               'type':  'tendermint/PubKeySecp256k1',
               'value': 'AtQaCqFnshaZQp6rIkvAPyzThvCvXSDO+9AzbxVErqJP'
           },
           'signature': '1nUcIH0CLT0/nQ0mBTDrT6kMG20NY/PsH7P2gc4bpYNGLEYjBmdWevXUJouSE/9A/60QG9cYeqyTe5kFDeIPxQ=='
       }],
       'memo':       '1122672754'
   }
};

const encodedTx = marshalTx(tx);
const decodedTx = unmarshalTx(encodedTx);
```

### Register custom types

To register your own types with Amino, you'll need to add Go structs and interfaces, register them with the codec, compile the Go code with GopherJS, and then rebuild the JS lib.

To keep the compiled output small, the recommended way to do this is to add your Go structs, but strip out methods, private properties, and anything else that you don't plan to marshal to Amino. 

This is all (hopefully) less complicated than it sounds.

##### 1. Fork

See [`FORK.md`](https://github.com/cosmos/amino-js/blob/extend/FORK.md) for instructions.

##### 2. Extend

See [`EXTEND.md`](https://github.com/cosmos/amino-js/blob/extend/EXTEND.md) for instructions.

### Contributing

`amino-js` is very new! Questions, feedback, use cases, issues, and code are all very, very welcome.

Thank you for helping us help you help us all. 🎁

### Build inside a Docker Container

If you wish to build this lib without having to install Go 1.12, GopherJS and Yarn on your local computer, you can build it inside a docker container. You only need docker to be installed on your computer.

#### Download source code

```
export GITHUB_ORG="<github user or org name of your fork>"
git clone https://github.com/$GITHUB_ORG/amino-js
cd ./amino-js
```

#### Build the docker image

```
docker build -t cosmos/amino-js:local -f Dockerfile .
```

### Run yarn in the docker container

You can run any yarn command inside the container. By sharing the current path to the container, any new files will be available on the host.

Run `yarn setup` and `yarn test`:
```
docker run --rm -it -v $(PWD):/project cosmos/amino-js:local yarn setup && yarn test
```

Run `yarn publish`:
```
docker run --rm -it -v $(PWD):/project cosmos/amino-js:local yarn publish
```
