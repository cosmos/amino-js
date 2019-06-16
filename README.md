# amino-js

Supported in Node.js and browsers.

Support is planned for Service Workers.

### Demo

- [Node.js](https://repl.it/repls/ScalyGracefulState)
- [Browser](https://jsfiddle.net/qk2wut06/)

### Documentation

**https://cosmos.github.io/amino-js/**

All exported functions are documented. Some Amino registered type interfaces are documented.

### Install

Please note that the NPM package name is `@tendermint/amino-js` rather than `@cosmos/amino-js`.

##### Yarn
```shell
yarn add @tendermint/amino-js
```

##### NPM
```shell
npm install @tendermint/amino-js
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

### Source

##### Prerequisites

Install `myitcv/gopherjs` via the instructions @ https://github.com/myitcv/gopherjs#installation-and-usage

This fork is required for go module support until https://github.com/gopherjs/gopherjs/issues/855 is resolved.

##### Install

```shell
git clone https://github.com/cosmos/amino-js.git
cd amino-js
yarn install
yarn setup
```

##### Test

```shell
yarn test
```
