import * as Amino from '../';

const txData = 'qAEoKBapCjCMTXENChQzF1z4zXyK1zFOPFFHrDj64fK+9BIUMxdc+M18itcxTjxRR6w4+uHyvvQSBBDAmgwaagom61rphyECq7ZtSmmliyZ2GAvZuSm4tZKINBOMFGJ6/5w8DpxSvAASQJm/VAPxCbQeC989s/kp43FVQZpVrPjyUCxD5F/uiz1ASuWA0TFNzmTtPIw26vcvTZvx6i90FyMHt6uKP9wJDlY=';

const tx = {
    'type':  'cosmos-sdk/StdTx',
    'value': {
        'msg':        [
            {
                'type':  'cosmos-sdk/MsgWithdrawDelegationReward',
                'value': {
                    'delegator_address': 'cosmos1xvt4e7xd0j9dwv2w83g50tpcltsl90h52003e2',
                    'validator_address': 'cosmosvaloper1xvt4e7xd0j9dwv2w83g50tpcltsl90h50mmy4e'
                }
            }
        ],
        'fee':        {
            'amount': null,
            'gas':    '200000'
        },
        'signatures': [
            {
                'pub_key':   {
                    'type':  'tendermint/PubKeySecp256k1',
                    'value': 'Aqu2bUpppYsmdhgL2bkpuLWSiDQTjBRiev+cPA6cUrwA'
                },
                'signature': 'mb9UA/EJtB4L3z2z+SnjcVVBmlWs+PJQLEPkX+6LPUBK5YDRMU3OZO08jDbq9y9Nm/HqL3QXIwe3q4o/3AkOVg=='
            }
        ],
        'memo':       ''
    }
};

describe('Tx2', () => {
    describe('decoding', () => {
        describe('Tx', () => {
            it('decodes bytes', () => {
                const bytes = Amino.base64ToBytes(txData);
                const value = Amino.unmarshalTx(bytes, true);
                expect(value).toMatchObject(tx);
            });
        });
    });

    describe('encoding', () => {
        describe('Tx', () => {
            it('encodes value', () => {
                const bytes = Amino.marshalTx(tx, true);
                const data  = Amino.bytesToBase64(bytes);
                expect(data).toBe(txData);
            });
        });
    });
});
