# amino-js

Experimental. Don't use this yet.

Supported in browsers (currently depends on `window`).

Support is planned for Node.js and Service Workers.

### Install

##### Yarn
```shell
yarn add @jordansexton/amino-js
```

##### NPM
```shell
npm install @jordansexton/amino-js
```

### Usage

```js
import { encodeString, decodeString } from '@jordansexton/amino-js';
decodeString(encodeString('hello world'));
// [ "hello world", 12 ]
```

### Source

##### Install

```shell
git clone https://github.com/jordansexton/amino-js.git
cd amino-js
yarn install
yarn setup
```

##### Test

```shell
yarn test
```
