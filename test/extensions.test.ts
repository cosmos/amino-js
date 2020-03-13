import * as Amino from '../';

const txData = 'lwHwYl3uCh+ISBeyChRXmZp0ijNn4Ck45U3Dn8935ucetBIDeHl6EgQQwIQ9GmoKJuta6YchAzLLqrGgOXVl8+8m3O9tiZdKb4+gQzLloFrMRVmRbBsXEkCeEfjb2IvhUPcricANV/yyMPst0/O64zndCsGH3ywQ0izw1Sk8k1NRD3PFAWJ1YRoUUGM/XbHvh+k7GzKnCZbn';

const tx = {
    'type':  'auth/StdTx',
    'value': {
        'msg':        [{
            'type':  'microtick/CreateMarket',
            'value': {
                'Account': 'cosmos127ve5ay2xdn7q2fcu4xu8870wlnww845pv6ten',
                'Market':  'xyz'
            }
        }],
        'fee':        {
            'amount': null,
            'gas':    '1000000'
        },
        'signatures': [
            {
                'signature': 'nhH429iL4VD3K4nADVf8sjD7LdPzuuM53QrBh98sENIs8NUpPJNTUQ9zxQFidWEaFFBjP12x74fpOxsypwmW5w==',
                'pub_key':   {
                    'type':  'tendermint/PubKeySecp256k1',
                    'value': 'AzLLqrGgOXVl8+8m3O9tiZdKb4+gQzLloFrMRVmRbBsX'
                }
            }
        ],
        'memo':       ''
    }
};

describe('Extensions', () => {
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
