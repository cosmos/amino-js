import * as Amino from '../src';

// https://rpc.cosmos.network:26657/abci_query?path=%22store/acc/key%22&data=0x01D545E7384C3D6F5BBA7A1B252B4E1A956EBAC64C&prove=true

const accountData           = 'YPqWwQqcAQpUChTVRec4TD1vW7p6GyUrThqVbrrGTBIPCgV1YXRvbRIGMTc5ODQ4GibrWumHIQKYe02D/64eNwOGvV8fs+7Nr4O3wn9SS6I9ZgPcmQ1jEiCbASg7EhQKBXVhdG9tEgsxMTAwMDAwMDAwMBoSCgV1YXRvbRIJMjA5Nzk3NjA3IhQKBXVhdG9tEgsxMTAwMDAwMDAwMCjwoLDzBQ==';
const iavlValueOpData       = 'hQUKggUKKwggEPRAGJeoFiIg42ukaK0uAk7ILChDKa2MAFQFCOQFHTdoHk72xrPqn8YKKwgeEO0gGJeoFiIgKTAvE5LXRMXvLtFItHxHqhaWLVKre8QWE+sG8E1Z1YYKKwgaEKEQGL2nFiogx4Bretm5AWrvsnzsRpoohgaekTVJ4R04Xj5FN5wCVwIKKwgYEJUIGL2nFiIguo1I6e9Rj73aCfyZnYQHRGUXq1GDyB1tvWdjysYTajIKKwgWEJoEGL2nFiogi7CVB6o/0PIzr+4le03bzqd7W9nluTJwkF5H96OsPucKKwgSEP8BGJujFiIgeRcR4sFkokanbxWDZpZxtaEzfZ8xtM/uPzUrvyAEsDMKKwgQEJgBGKKVFiIgIQc2xOwMqFbvMSjlSbHhUVD1c0+RaQHwRb2Jiu5Yf7UKKggOEFYYipQWKiDw5Bc4Lxdfrk/EfE4imjy2AKyg4vujseUEpWB3+gCcZAoqCAwQMBiKlBYqIKY3zEai6/YEkQSBFC6ip74SI4MtACgr/TdQFSBUfT7ICioIChAZGIqUFioguHqFHs9oIk2FQ18+nq2vZumPTIoDDwsLan1vjVMIPxcKKggIEAoYipQWKiAq5wga4cYIvmokgEgZvP7CQgQjGq6NQvwQv4Vy1YZqEwoqCAYQBhiKlBYiICD9YpCHnKK2/ezmWOxX5uUCXg5GC8I7E3pjzBjeMBzbCioIAhACGIqUFiogS1QK5AZwGKWEfTKDxlc/PXHXGioimRuUvaN0Wz/seNgaPQoVAdVF5zhMPW9bunobJStOGpVuusZMEiB2dXzzOGZoxxV2WcHcWUeXd99tJm65ENdr1muoA5tE0RiKlBY=';
const multiStoreProofOpData = 'zAMKyQMKMgoGcGFyYW1zEigKJgifqBYSILQQeWv+l/f4sz0XrMFwYl7ciA8wVVpJEbi3qfTDklx3CjMKB3N0YWtpbmcSKAomCJ+oFhIgl/W+J7W+84XjsUkoee2UoG25z2Qoa8+4WZ797IQuDM8KLwoDZ292EigKJgifqBYSIKhUGp0K9m8bBvnaR4CrzZc2ti1V53v4Rejr0ywkKuDkCi8KA2ZlZRIoCiYIn6gWEiC/jsXcQM4jKoOPfqC3RswEkIwyvKw7goy7g0Mst/SeHAowCgRtaW50EigKJgifqBYSIKICvSgOiooDDqybo7DaN/Kd2rxGEIWKMdEzXEwkWGD7CjEKBWRpc3RyEigKJgifqBYSIOBGzTXH2fB/JSNtnb0g4zNmhOvy3RnNfghic7/0l2CsCjQKCHNsYXNoaW5nEigKJgifqBYSIH0/FymzrPVSQuE5r0kkwuRvn44z/1DK5ZB8JDdWvxSrCjAKBG1haW4SKAomCJ+oFhIgdNv/3PjtbBb+R4S4HMizVHGFeiSOKE2MaXS6k6v0NW0KLwoDYWNjEigKJgifqBYSIBKIj7ZT7YN1dcOgCKxAVRqYlJKkZ/pukCPpEPhfwrn5';

const account = {
    'address':           '1UXnOEw9b1u6ehslK04alW66xkw=',
    'coins':             [
        {
            'denom':  'uatom',
            'amount': '179848'
        }
    ],
    'public_key':        [
        2,
        152,
        123,
        77,
        131,
        255,
        174,
        30,
        55,
        3,
        134,
        189,
        95,
        31,
        179,
        238,
        205,
        175,
        131,
        183,
        194,
        127,
        82,
        75,
        162,
        61,
        102,
        3,
        220,
        153,
        13,
        99,
        18
    ],
    'account_number':    155,
    'sequence':          59,
    'original_vesting':  [
        {
            'denom':  'uatom',
            'amount': '11000000000'
        }
    ],
    'delegated_free':    [
        {
            'denom':  'uatom',
            'amount': '209797607'
        }
    ],
    'delegated_vesting': [
        {
            'denom':  'uatom',
            'amount': '11000000000'
        }
    ],
    'end_time':          1584140400
};

const iavlValueOp = {
    'proof': {
        'left_path':   [
            {
                'height':  16,
                'size':    8308,
                'version': 365591,
                'left':    '42ukaK0uAk7ILChDKa2MAFQFCOQFHTdoHk72xrPqn8Y=',
                'right':   null
            },
            {
                'height':  15,
                'size':    4205,
                'version': 365591,
                'left':    'KTAvE5LXRMXvLtFItHxHqhaWLVKre8QWE+sG8E1Z1YY=',
                'right':   null
            },
            {
                'height':  13,
                'size':    2081,
                'version': 365501,
                'left':    null,
                'right':   'x4Bretm5AWrvsnzsRpoohgaekTVJ4R04Xj5FN5wCVwI='
            },
            {
                'height':  12,
                'size':    1045,
                'version': 365501,
                'left':    'uo1I6e9Rj73aCfyZnYQHRGUXq1GDyB1tvWdjysYTajI=',
                'right':   null
            },
            {
                'height':  11,
                'size':    538,
                'version': 365501,
                'left':    null,
                'right':   'i7CVB6o/0PIzr+4le03bzqd7W9nluTJwkF5H96OsPuc='
            },
            {
                'height':  9,
                'size':    255,
                'version': 364955,
                'left':    'eRcR4sFkokanbxWDZpZxtaEzfZ8xtM/uPzUrvyAEsDM=',
                'right':   null
            },
            {
                'height':  8,
                'size':    152,
                'version': 363170,
                'left':    'IQc2xOwMqFbvMSjlSbHhUVD1c0+RaQHwRb2Jiu5Yf7U=',
                'right':   null
            },
            {
                'height':  7,
                'size':    86,
                'version': 363018,
                'left':    null,
                'right':   '8OQXOC8XX65PxHxOIpo8tgCsoOL7o7HlBKVgd/oAnGQ='
            },
            {
                'height':  6,
                'size':    48,
                'version': 363018,
                'left':    null,
                'right':   'pjfMRqLr9gSRBIEULqKnvhIjgy0AKCv9N1AVIFR9Psg='
            },
            {
                'height':  5,
                'size':    25,
                'version': 363018,
                'left':    null,
                'right':   'uHqFHs9oIk2FQ18+nq2vZumPTIoDDwsLan1vjVMIPxc='
            },
            {
                'height':  4,
                'size':    10,
                'version': 363018,
                'left':    null,
                'right':   'KucIGuHGCL5qJIBIGbz+wkIEIxqujUL8EL+FctWGahM='
            },
            {
                'height':  3,
                'size':    6,
                'version': 363018,
                'left':    'IP1ikIecorb97OZY7Ffm5QJeDkYLwjsTemPMGN4wHNs=',
                'right':   null
            },
            {
                'height':  1,
                'size':    2,
                'version': 363018,
                'left':    null,
                'right':   'S1QK5AZwGKWEfTKDxlc/PXHXGioimRuUvaN0Wz/seNg='
            }
        ],
        'inner_nodes': null,
        'leaves':      [
            {
                'key':     'AdVF5zhMPW9bunobJStOGpVuusZM',
                'value':   'dnV88zhmaMcVdlnB3FlHl3ffbSZuuRDXa9ZrqAObRNE=',
                'version': 363018
            }
        ]
    }
};

const multiStoreProofOp = {
    'proof': {
        'StoreInfos': [
            {
                'Name': 'params',
                'Core': {
                    'CommitID': {
                        'Version': 365599,
                        'Hash':    'tBB5a/6X9/izPReswXBiXtyIDzBVWkkRuLep9MOSXHc='
                    }
                }
            },
            {
                'Name': 'staking',
                'Core': {
                    'CommitID': {
                        'Version': 365599,
                        'Hash':    'l/W+J7W+84XjsUkoee2UoG25z2Qoa8+4WZ797IQuDM8='
                    }
                }
            },
            {
                'Name': 'gov',
                'Core': {
                    'CommitID': {
                        'Version': 365599,
                        'Hash':    'qFQanQr2bxsG+dpHgKvNlza2LVXne/hF6OvTLCQq4OQ='
                    }
                }
            },
            {
                'Name': 'fee',
                'Core': {
                    'CommitID': {
                        'Version': 365599,
                        'Hash':    'v47F3EDOIyqDj36gt0bMBJCMMrysO4KMu4NDLLf0nhw='
                    }
                }
            },
            {
                'Name': 'mint',
                'Core': {
                    'CommitID': {
                        'Version': 365599,
                        'Hash':    'ogK9KA6KigMOrJujsNo38p3avEYQhYox0TNcTCRYYPs='
                    }
                }
            },
            {
                'Name': 'distr',
                'Core': {
                    'CommitID': {
                        'Version': 365599,
                        'Hash':    '4EbNNcfZ8H8lI22dvSDjM2aE6/LdGc1+CGJzv/SXYKw='
                    }
                }
            },
            {
                'Name': 'slashing',
                'Core': {
                    'CommitID': {
                        'Version': 365599,
                        'Hash':    'fT8XKbOs9VJC4TmvSSTC5G+fjjP/UMrlkHwkN1a/FKs='
                    }
                }
            },
            {
                'Name': 'main',
                'Core': {
                    'CommitID': {
                        'Version': 365599,
                        'Hash':    'dNv/3PjtbBb+R4S4HMizVHGFeiSOKE2MaXS6k6v0NW0='
                    }
                }
            },
            {
                'Name': 'acc',
                'Core': {
                    'CommitID': {
                        'Version': 365599,
                        'Hash':    'EoiPtlPtg3V1w6AIrEBVGpiUkqRn+m6QI+kQ+F/Cufk='
                    }
                }
            }
        ]
    }
};

describe('Store', () => {
    describe('decoding', () => {
        describe('Account', () => {
            it('decodes bytes', () => {
                const bytes = Amino.base64ToBytes(accountData);
                const value = Amino.unmarshalAccount(bytes, true);
                expect(value).toMatchObject(account);
            });
        });

        describe('IAVLValueOp', () => {
            it('decodes bytes', () => {
                const bytes = Amino.base64ToBytes(iavlValueOpData);
                const value = Amino.unmarshalIAVLValueOp(bytes, false);
                expect(value).toMatchObject(iavlValueOp);
            });
        });

        describe('MultiStoreProofOp', () => {
            it('decodes bytes', () => {
                const bytes = Amino.base64ToBytes(multiStoreProofOpData);
                const value = Amino.unmarshalMultiStoreProofOp(bytes, false);
                expect(value).toMatchObject(multiStoreProofOp);
            });
        });
    });

    describe('encoding', () => {
        describe('Account', () => {
            it('encodes value', () => {
                const bytes = Amino.marshalAccount(account as any, true);
                const data  = Amino.bytesToBase64(bytes);
                expect(data).toBe(accountData);
            });
        });

        describe('IAVLValueOp', () => {
            it('encodes value', () => {
                const bytes = Amino.marshalIAVLValueOp(iavlValueOp as any, false);
                const data  = Amino.bytesToBase64(bytes);
                expect(data).toBe(iavlValueOpData);
            });
        });

        describe('MultiStoreProofOp', () => {
            it('encodes value', () => {
                const bytes = Amino.marshalMultiStoreProofOp(multiStoreProofOp, false);
                const data  = Amino.bytesToBase64(bytes);
                expect(data).toBe(multiStoreProofOpData);
            });
        });
    });
});
