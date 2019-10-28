import * as Amino from '../';

const txData = '2gEoKBapCkOoo2GaChTNi4afLkGQV1Df+AvNv4mvem6PjBIU0kxbneuQG/5QEXWWJm+hoPWFufEaEQoFc3Rha2USCDEwMDAwMDAwEhEKCwoFc3Rha2USAjQwEOa4AhpqCibrWumHIQL9AVlxawWaJcrGJl/aLlLAVxGHlI/BLzj3GC8Zi1a8wRJAummHUrkNaAcMCTg5K7E2SYgLoJA3Rh6MxpxvIcp9LQJ0NPhTCZ1WwuiKhwnKg3R/EU46/GQv7ktmTlPSDjrnCyIQKFNlbnQgdmlhIEx1bmllKQ==';

const tx = {
    'type':  'cosmos-sdk/StdTx',
    'value': {
        'msg':        [
            {
                'type':  'cosmos-sdk/MsgSend',
                'value': {
                    'from_address': 'cosmos1ek9cd8ewgxg9w5xllq9um0uf4aaxaruvcw4v9e',
                    'to_address':   'cosmos16fx9h80tjqdlu5q3wktzvmap5r6ctw03myypaq',
                    'amount':       [
                        {
                            'denom':  'stake',
                            'amount': '10000000'
                        }
                    ]
                }
            }
        ],
        'fee':        {
            'amount': [
                {
                    'denom':  'stake',
                    'amount': '40'
                }
            ],
            'gas':    '40038'
        },
        'signatures': [
            {
                'pub_key':   {
                    'type':  'tendermint/PubKeySecp256k1',
                    'value': 'Av0BWXFrBZolysYmX9ouUsBXEYeUj8EvOPcYLxmLVrzB'
                },
                'signature': 'ummHUrkNaAcMCTg5K7E2SYgLoJA3Rh6MxpxvIcp9LQJ0NPhTCZ1WwuiKhwnKg3R/EU46/GQv7ktmTlPSDjrnCw=='
            }
        ],
        'memo':       '(Sent via Lunie)'
    }
};

describe('Tx1', () => {
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
