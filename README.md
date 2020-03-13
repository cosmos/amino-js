# `amino-js`

Supported in Node.js and browsers.

Support is planned for Service Workers.

Foked from [cosmos/amino-js](https://github.com/cosmos/amino-js)

### Install

##### NPM
```shell
npm install --save @medibloc/amino-js
```

### Usage

Encoding decoding of basic values:
```js
import { encodeString, decodeString } from '@medibloc/amino-js';
decodeString(encodeString('hello world'));
// [ "hello world", 12 ]
```

Encoding/decoding of registered types:
```js
import { marshalTx, unmarshalTx } from '@medibloc/amino-js';

const tx = {
  "type": "auth/StdTx",
  "value": {
    "msg": [
      {
        "type": "aol/MsgCreateTopic",
        "value": {
          "TopicName": "certification",
          "Description": "",
          "OwnerAddress": "panacea1d8xsncdn4m9e0gxx4u9jq3u84rd88tdkthz6pu"
        }
      }
    ],
    "fee": {
      "amount": [
        {
          "denom": "umed",
          "amount": "10000000"
        }
      ],
      "gas": "200000"
    },
    "signatures": [
      {
        "pub_key": {
          "type": "tendermint/PubKeySecp256k1",
          "value": "AyGbSDc7t55/bjIjpJODurciLqA8j2Bize5A065rZXf6"
        },
        "signature": "rUDhsKm5yAX4C9PsluBsWB10xZVpk7W2L2Pot+8ODIsoVLmdYnnng+Dxy8eji7angvtDPC7/8cqvQ9S5wUR+8Q=="
      }
    ],
    "memo": ""
  }
};

const encodedTx = marshalTx(tx);
const decodedTx = unmarshalTx(encodedTx);
```

