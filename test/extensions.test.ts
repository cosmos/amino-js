import { base64ToBytes, bytesToBase64 } from '@tendermint/belt';
import * as Amino from '../';

const createTopicTxData = 'swHwYl3uCin1rCMCCg1jZXJ0aWZpY2F0aW9uGhRpzQnhs67Ll6DGrwsgR4eo2nOtthIWChAKBHVtZWQSCDEwMDAwMDAwEMCaDBpqCibrWumHIQMhm0g3O7eef24yI6STg7q3Ii6gPI9gYs3uQNOua2V3+hJArUDhsKm5yAX4C9PsluBsWB10xZVpk7W2L2Pot+8ODIsoVLmdYnnng+Dxy8eji7angvtDPC7/8cqvQ9S5wUR+8Q==';

const createTopicTx = {
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
}

const addWriterTxData = 'yQHwYl3uCj9R4QMMCg1tZWRpY2FsUmVjb3JkIhRXWzhmHTkmng5EL8jEiIUbco1WECoUac0J4bOuy5egxq8LIEeHqNpzrbYSFgoQCgR1bWVkEggxMDAwMDAwMBDAmgwaagom61rphyEDIZtINzu3nn9uMiOkk4O6tyIuoDyPYGLN7kDTrmtld/oSQDO3ySMBovHajtyvoq2AfeTy4ithmrcjUZ+9DbIg1v0ZHAahKJROTY8ysSoaKRGZTMNK8a2KBXgn5dBePYTZ0Fo=';

const addWriterTx = {
  "type": "auth/StdTx",
  "value": {
    "msg": [
      {
        "type": "aol/MsgAddWriter",
        "value": {
          "TopicName": "medicalRecord",
          "Moniker": "",
          "Description": "",
          "WriterAddress": "panacea12adnsesa8ynfurjy9lyvfzy9rdeg64ss3dfv6g",
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
        "signature": "M7fJIwGi8dqO3K+irYB95PLiK2GatyNRn70NsiDW/RkcBqEolE5NjzKxKhopEZlMw0rxrYoFeCfl0F49hNnQWg=="
      }
    ],
    "memo": ""
  }
}

const deleteWriterTxData = 'vwHwYl3uCjYNtuPeCgR0ZXN0EhS0kincnuRbXGTyvMp3T1yWdxfqvxoUac0J4bOuy5egxq8LIEeHqNpzrbYSFQoPCgR1bWVkEgcxMDAwMDAwEMCaDBpqCibrWumHIQMhm0g3O7eef24yI6STg7q3Ii6gPI9gYs3uQNOua2V3+hJAqBfliiII2rwUduhzC4tDYZQIXCJSR21wwIXXoCbkC4tmoM5z0BsNdlpSP5gkswiESvIcyEAmJRqSTkzvC00vRQ==';

const deleteWriterTx = {
  "type": "auth/StdTx",
  "value": {
    "msg": [
      {
        "type": "aol/MsgDeleteWriter",
        "value": {
          "TopicName": "test",
          "WriterAddress": "panacea1kjfznhy7u3d4ce8jhn98wn6ujem3064l4fls4x",
          "OwnerAddress": "panacea1d8xsncdn4m9e0gxx4u9jq3u84rd88tdkthz6pu"
        }
      }
    ],
    "fee": {
      "amount": [
        {
          "denom": "umed",
          "amount": "1000000"
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
        "signature": "qBfliiII2rwUduhzC4tDYZQIXCJSR21wwIXXoCbkC4tmoM5z0BsNdlpSP5gkswiESvIcyEAmJRqSTkzvC00vRQ=="
      }
    ],
    "memo": ""
  }
}

const addRecordTxData = 'mwPwYl3uCqUB8WWZEgoNY2VydGlmaWNhdGlvbhIgeyJ2ZXJzaW9uIjoxLCJ2YWx1ZSI6IjkyZjNjMmMyIn0aLDk1TXQvMFlZKzQxNkIrOXFUL2l3OU5PTm5iMllpeFh5MHB4a1pPQzN6cFE9IhTQssGmT8DbC0wajWDRrTzHvEz/cyoUac0J4bOuy5egxq8LIEeHqNpzrbYyFGnNCeGzrsuXoMavCyBHh6jac622EhUKDwoEdW1lZBIHMTAwMDAwMBDAmgwaagom61rphyEDIZtINzu3nn9uMiOkk4O6tyIuoDyPYGLN7kDTrmtld/oSQLZ1KhExdBZDv8ffR4vQCi4NIi+dQnhRlyuvnuSVwVoJEnP/2i7sKGmOEaf5VcAVgXENSlhcymnyv51yTwzLjbAaagom61rphyECRpXSp/a4jtFyVYH59LRDGiMPNAkaYJRxzV4hTtm0T80SQO+ktWbPIuYA/WsEfdPrFuYeEbdCCP2KL/qUt77SC4eBEj6XQylnEnwQMu7R9rflAuffeIr5DFepd5I/3V10mMQ=';

const addRecordTx = {
  "type": "auth/StdTx",
  "value": {
    "msg": [{
      "type": "aol/MsgAddRecord",
      "value": {
        "TopicName": "certification",
        "Key": "eyJ2ZXJzaW9uIjoxLCJ2YWx1ZSI6IjkyZjNjMmMyIn0=",
        "Value": "OTVNdC8wWVkrNDE2Qis5cVQvaXc5Tk9ObmIyWWl4WHkwcHhrWk9DM3pwUT0=",
        "WriterAddress": "panacea16zevrfj0crdsknq634sdrtfuc77yelmndvte6j",
        "OwnerAddress": "panacea1d8xsncdn4m9e0gxx4u9jq3u84rd88tdkthz6pu",
        "FeePayerAddress": "panacea1d8xsncdn4m9e0gxx4u9jq3u84rd88tdkthz6pu"
      }
    }],
    "fee": {
      "amount": [{
        "denom": "umed",
        "amount": "1000000"
      }],
      "gas": "200000"
    },
    "signatures": [
      {
        "pub_key": {
          "type": "tendermint/PubKeySecp256k1",
          "value": "AyGbSDc7t55/bjIjpJODurciLqA8j2Bize5A065rZXf6"
        },
        "signature": "tnUqETF0FkO/x99Hi9AKLg0iL51CeFGXK6+e5JXBWgkSc//aLuwoaY4Rp/lVwBWBcQ1KWFzKafK/nXJPDMuNsA=="
      },
      {
        "pub_key": {
          "type": "tendermint/PubKeySecp256k1",
          "value": "AkaV0qf2uI7RclWB+fS0QxojDzQJGmCUcc1eIU7ZtE/N"
        },
        "signature": "76S1Zs8i5gD9awR90+sW5h4Rt0II/Yov+pS3vtILh4ESPpdDKWcSfBAy7tH2t+UC5994ivkMV6l3kj/dXXSYxA=="
      }
    ],
    "memo": ""
  }
}

describe('Extensions', () => {
    describe('decoding', () => {
        describe('CreateTopic Tx', () => {
            it('decodes bytes', () => {
                const bytes = base64ToBytes(createTopicTxData);
                const value = Amino.unmarshalTx(bytes, true);
                expect(value).toMatchObject(createTopicTx);
            });
        });
        describe('AddWriter Tx', () => {
          it('decodes bytes', () => {
              const bytes = base64ToBytes(addWriterTxData);
              const value = Amino.unmarshalTx(bytes, true);
              expect(value).toMatchObject(addWriterTx);
          });
        });
        describe('DeleteWriter Tx', () => {
          it('decodes bytes', () => {
              const bytes = base64ToBytes(deleteWriterTxData);
              const value = Amino.unmarshalTx(bytes, true);
              expect(value).toMatchObject(deleteWriterTx);
          });
        });
        describe('AddRecord Tx', () => {
          it('decodes bytes', () => {
              const bytes = base64ToBytes(addRecordTxData);
              const value = Amino.unmarshalTx(bytes, true);
              expect(value).toMatchObject(addRecordTx);
          });
      });
    });

    describe('encoding', () => {
        describe('CreateTopic Tx', () => {
            it('encodes value', () => {
                const bytes = Amino.marshalTx(createTopicTx, true);
                const data  = bytesToBase64(bytes);
                expect(data).toBe(createTopicTxData);
            });
        });
        describe('AddWriter Tx', () => {
          it('encodes value', () => {
              const bytes = Amino.marshalTx(addWriterTx, true);
              const data  = bytesToBase64(bytes);
              expect(data).toBe(addWriterTxData);
          });
        });
        describe('DeleteWriter Tx', () => {
          it('encodes value', () => {
              const bytes = Amino.marshalTx(deleteWriterTx, true);
              const data  = bytesToBase64(bytes);
              expect(data).toBe(deleteWriterTxData);
          });
        });
        describe('AddRecord Tx', () => {
          it('encodes value', () => {
              const bytes = Amino.marshalTx(addRecordTx, true);
              const data  = bytesToBase64(bytes);
              expect(data).toBe(addRecordTxData);
          });
      });
    });
});
