import { base64ToBytes, bytesToBase64 } from '@tendermint/belt';
import * as Amino from '../';

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
        describe('AddRecord Tx', () => {
            it('decodes bytes', () => {
                const bytes = base64ToBytes(addRecordTxData);
                const value = Amino.unmarshalTx(bytes, true);
                expect(value).toMatchObject(addRecordTx);
            });
        });
    });

    describe('encoding', () => {
        describe('AddRecord Tx', () => {
            it('encodes value', () => {
                const bytes = Amino.marshalTx(addRecordTx, true);
                const data  = bytesToBase64(bytes);
                expect(data).toBe(addRecordTxData);
            });
        });
    });
});
