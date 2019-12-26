/* eslint-disable @typescript-eslint/indent */
import * as Amino from "../";
import { base64ToBytes, bytesToBase64 } from "@tendermint/belt";

// https://rpc.irisnet.org/blocks/3753790
const txData =
  "rALZHnawCoQBKpckrAo+ChSdDFmiPEjUWbq57wQNBs4SLAGZqBImCglpcmlzLWF0dG8SGTI4NjAyOTkzMzMzMDAwMDAwMDAwMDAwMDASPgoUAzvS5aEI+Nraj4ntBi52l9DgHCoSJgoJaXJpcy1hdHRvEhkyODYwMjk5MzMzMzAwMDAwMDAwMDAwMDAwEiUKHwoJaXJpcy1hdHRvEhIzMDAwMDAwMDAwMDAwMDAwMDAQ0IYDGm8KJuta6YchA4IEXMxyBa8QTSyjNii3uxGhnALvBWsKeP2nMcYFd6KEEkARnO9HK0F+yrOVQt0Xvj545+CWLZ0IpA5NMloDQI08rQGk98tDqCU6e2mhEvDqT7gG2yna141Qr7KVGUKKAIHhGAQghQEiB2NwIGRpZmY=";

// https://rpc.irisnet.org/txs/8F985BD163782D09C13D145D2099E7EED1ADABE3E0AC58C148CFBE4A05613C34
const tx = {
  type: "irishub/bank/StdTx",
  value: {
    msg: [
      {
        type: "irishub/bank/Send",
        value: {
          inputs: [
            {
              address: "iaa1n5x9ng3ufr29nw4eauzq6pkwzgkqrxdgacph4t",
              coins: [
                {
                  denom: "iris-atto",
                  amount: "2860299333300000000000000"
                }
              ]
            }
          ],
          outputs: [
            {
              address: "iaa1qvaa9edpprud4k5038ksvtnkjlgwq8p2j8jakm",
              coins: [
                {
                  denom: "iris-atto",
                  amount: "2860299333300000000000000"
                }
              ]
            }
          ]
        }
      }
    ],
    fee: {
      amount: [
        {
          denom: "iris-atto",
          amount: "300000000000000000"
        }
      ],
      gas: "50000"
    },
    signatures: [
      {
        'pub_key': {
          type: "tendermint/PubKeySecp256k1",
          value: "A4IEXMxyBa8QTSyjNii3uxGhnALvBWsKeP2nMcYFd6KE"
        },
        signature:
          "EZzvRytBfsqzlULdF74+eOfgli2dCKQOTTJaA0CNPK0BpPfLQ6glOntpoRLw6k+4Btsp2teNUK+ylRlCigCB4Q==",
        'account_number': "4",
        sequence: "133"
      }
    ],
    memo: "cp diff"
  }
};

describe("Store", () => {
  describe("decoding", () => {
    describe("Tx", () => {
      it("decodes bytes", () => {
        // const bytes = base64ToBytes(txData);
        // const value = Amino.unmarshalTx(bytes, true);
        // expect(value).toMatchObject(tx);
      });
    });
  });

  describe("encoding", () => {
    describe("Tx", () => {
      it("encodes value", () => {
        // const bytes = Amino.marshalTx(tx, true);
        // const data = bytesToBase64(bytes);
        // expect(data).toBe(txData);
      });
    });
  });
});
