# amino-js

Supported in Node.js and browsers.

Support is planned for Service Workers.

### Install

##### Yarn
```shell
yarn add @tendermint/amino-js
```

##### NPM
```shell
npm install @tendermint/amino-js
```

### Usage

```js
import { encodeString, decodeString } from '@tendermint/amino-js';
decodeString(encodeString('hello world'));
// [ "hello world", 12 ]
```

### Source

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
