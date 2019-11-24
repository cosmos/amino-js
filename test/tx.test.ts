import './setup';
import { base64ToBytes } from '@tendermint/belt';
import * as Amino from '../';

// https://lcd.nylira.net/blocks/2567202

const tx = {
    'type':  'auth/StdTx',
    'value': {
        'msg':        [{
            'type':  'cosmos-sdk/MsgSubmitProposal',
            'value': {
                'title':           'Cosmos Hub 3 Upgrade Proposal E',
                'description':     'Figment Networks (https://figment.network)\n\n-=-=-\n\nFull proposal:\nhttps://ipfs.io/ipfs/QmfJyd64srJSX824WoNnF6BbvF4wvPGqVBynZeN98C7ygq\n\n-=-=-\n\n_Decision_\n\nWe are signalling that:\n\n1. The Gaia 2.0.3 implementation is aligned with the list of high-level changes approved in Cosmos Hub 3 Upgrade Proposal A.\n\n2. We are prepared to upgrade the Cosmos Hub to cosmoshub-3 based upon\n\ta. Commit hash: 2f6783e298f25ff4e12cb84549777053ab88749a;\n\tb. The state export from cosmoshub-2 at Block Height 2902000;\n\tc. Genesis time: 60 minutes after the timestamp at Block Height 2902000.\n\n3. We are prepared to relaunch cosmoshub-2\n\ta. In the event of:\n\t\ti. A non-trivial error in the migration procedure and/or\n\t\tii. A need for ad-hoc genesis file changes\n\t\tiii. The failure of cosmoshub-3 to produce two (2) blocks by 180 minutes after the timestamp of Block Height 2902000;\n\tb. Using:\n\t\ti. The starting block height: 2902000\n\t\tii. Software version: Cosmos SDK v0.34.6+ https://github.com/cosmos/cosmos-sdk/releases/tag/v0.34.10\n\t\tiii. The full data snapshot at export Block Height 2902000;\n\tc. And will consider the relaunch complete after cosmoshub-2 has reached consensus on Block 2902001.\n\n4. The upgrade will be considered complete after cosmoshub-3 has reached consensus on Block Height 2 within 120 minutes of genesis time.\n\n5. This proposal is void if the voting period has not concluded by Block Height 2852202.\n\n-=-=-\n\n_Context_\nThis proposal follows Cosmos Hub 3 Upgrade Proposal D (https://hubble.figment.network/cosmos/chains/cosmoshub-2/governance/proposals/16) aka Prop 16, which passed in vote, but failed in execution (https://forum.cosmos.network/t/cosmos-hub-3-upgrade-post-mortem/2772). This proposal is intended to succeed where Prop 16 failed.\n\nThis proposal is intended to signal acceptance/rejection of the precise software release that will contain the changes to be included in the Cosmos Hub 3 upgrade. A high level overview of these changes was successfully approved by the voters signalling via Cosmos Hub 3 Upgrade Proposal A:\nhttps://hubble.figment.network/cosmos/chains/cosmoshub-2/governance/proposals/13\n\nWe are proposing to use this code https://github.com/cosmos/gaia/releases/tag/v2.0.3 to upgrade the Cosmos Hub.\nWe are proposing to export the ledger’s state at Block Height 2,902,000, which we expect to occur on December 11, 2019 at or around 14:27 UTC assuming an average of 6.94 seconds per block. Please note that there will likely be a variance from this target time, due to deviations in block time.\n\nWe are proposing that the Cosmos Hub 3 genesis time be set to 60 minutes after Block Height 2,902,000.\n\n-=-=-\n\nCo-ordination in case of failure will happen in this channel: https://riot.im/app/#/room/#cosmos_validators_technical_updates:matrix.org',
                'proposal_type':   1,
                'proposer':        'cosmos19wlk8gkfjckqr8d73dyp4n0f0k89q4h7xr3uwj',
                'initial_deposit': [{
                    'denom':  'uatom',
                    'amount': '12000000'
                }]
            }
        }],
        'fee':        {
            'amount': [{
                'denom':  'uatom',
                'amount': '1400000'
            }],
            'gas':    '200000'
        },
        'signatures': [{
            'pub_key':   {
                'type':  'tendermint/PubKeySecp256k1',
                'value': 'AmwZHFaRzRCT8RfoxMQK8N0wpUGbg3/VRxgG+HeRwwIK'
            },
            'signature': '+m0xMg1tbm8ANXKt46ZREcYjr3EhHYsdQs+aipAbFclOaVJD6TOQ/nWIwHELVEro3n4tN9CauZdJxQMUlVO+mw=='
        }],
        'memo':       ''
    }
};

const txData = 'uxfwYl3uCrAWtC1hTgofQ29zbW9zIEh1YiAzIFVwZ3JhZGUgUHJvcG9zYWwgRRLdFUZpZ21lbnQgTmV0d29ya3MgKGh0dHBzOi8vZmlnbWVudC5uZXR3b3JrKQoKLT0tPS0KCkZ1bGwgcHJvcG9zYWw6Cmh0dHBzOi8vaXBmcy5pby9pcGZzL1FtZkp5ZDY0c3JKU1g4MjRXb05uRjZCYnZGNHd2UEdxVkJ5blplTjk4Qzd5Z3EKCi09LT0tCgpfRGVjaXNpb25fCgpXZSBhcmUgc2lnbmFsbGluZyB0aGF0OgoKMS4gVGhlIEdhaWEgMi4wLjMgaW1wbGVtZW50YXRpb24gaXMgYWxpZ25lZCB3aXRoIHRoZSBsaXN0IG9mIGhpZ2gtbGV2ZWwgY2hhbmdlcyBhcHByb3ZlZCBpbiBDb3Ntb3MgSHViIDMgVXBncmFkZSBQcm9wb3NhbCBBLgoKMi4gV2UgYXJlIHByZXBhcmVkIHRvIHVwZ3JhZGUgdGhlIENvc21vcyBIdWIgdG8gY29zbW9zaHViLTMgYmFzZWQgdXBvbgoJYS4gQ29tbWl0IGhhc2g6IDJmNjc4M2UyOThmMjVmZjRlMTJjYjg0NTQ5Nzc3MDUzYWI4ODc0OWE7CgliLiBUaGUgc3RhdGUgZXhwb3J0IGZyb20gY29zbW9zaHViLTIgYXQgQmxvY2sgSGVpZ2h0IDI5MDIwMDA7CgljLiBHZW5lc2lzIHRpbWU6IDYwIG1pbnV0ZXMgYWZ0ZXIgdGhlIHRpbWVzdGFtcCBhdCBCbG9jayBIZWlnaHQgMjkwMjAwMC4KCjMuIFdlIGFyZSBwcmVwYXJlZCB0byByZWxhdW5jaCBjb3Ntb3NodWItMgoJYS4gSW4gdGhlIGV2ZW50IG9mOgoJCWkuIEEgbm9uLXRyaXZpYWwgZXJyb3IgaW4gdGhlIG1pZ3JhdGlvbiBwcm9jZWR1cmUgYW5kL29yCgkJaWkuIEEgbmVlZCBmb3IgYWQtaG9jIGdlbmVzaXMgZmlsZSBjaGFuZ2VzCgkJaWlpLiBUaGUgZmFpbHVyZSBvZiBjb3Ntb3NodWItMyB0byBwcm9kdWNlIHR3byAoMikgYmxvY2tzIGJ5IDE4MCBtaW51dGVzIGFmdGVyIHRoZSB0aW1lc3RhbXAgb2YgQmxvY2sgSGVpZ2h0IDI5MDIwMDA7CgliLiBVc2luZzoKCQlpLiBUaGUgc3RhcnRpbmcgYmxvY2sgaGVpZ2h0OiAyOTAyMDAwCgkJaWkuIFNvZnR3YXJlIHZlcnNpb246IENvc21vcyBTREsgdjAuMzQuNisgaHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3JlbGVhc2VzL3RhZy92MC4zNC4xMAoJCWlpaS4gVGhlIGZ1bGwgZGF0YSBzbmFwc2hvdCBhdCBleHBvcnQgQmxvY2sgSGVpZ2h0IDI5MDIwMDA7CgljLiBBbmQgd2lsbCBjb25zaWRlciB0aGUgcmVsYXVuY2ggY29tcGxldGUgYWZ0ZXIgY29zbW9zaHViLTIgaGFzIHJlYWNoZWQgY29uc2Vuc3VzIG9uIEJsb2NrIDI5MDIwMDEuCgo0LiBUaGUgdXBncmFkZSB3aWxsIGJlIGNvbnNpZGVyZWQgY29tcGxldGUgYWZ0ZXIgY29zbW9zaHViLTMgaGFzIHJlYWNoZWQgY29uc2Vuc3VzIG9uIEJsb2NrIEhlaWdodCAyIHdpdGhpbiAxMjAgbWludXRlcyBvZiBnZW5lc2lzIHRpbWUuCgo1LiBUaGlzIHByb3Bvc2FsIGlzIHZvaWQgaWYgdGhlIHZvdGluZyBwZXJpb2QgaGFzIG5vdCBjb25jbHVkZWQgYnkgQmxvY2sgSGVpZ2h0IDI4NTIyMDIuCgotPS09LQoKX0NvbnRleHRfClRoaXMgcHJvcG9zYWwgZm9sbG93cyBDb3Ntb3MgSHViIDMgVXBncmFkZSBQcm9wb3NhbCBEIChodHRwczovL2h1YmJsZS5maWdtZW50Lm5ldHdvcmsvY29zbW9zL2NoYWlucy9jb3Ntb3NodWItMi9nb3Zlcm5hbmNlL3Byb3Bvc2Fscy8xNikgYWthIFByb3AgMTYsIHdoaWNoIHBhc3NlZCBpbiB2b3RlLCBidXQgZmFpbGVkIGluIGV4ZWN1dGlvbiAoaHR0cHM6Ly9mb3J1bS5jb3Ntb3MubmV0d29yay90L2Nvc21vcy1odWItMy11cGdyYWRlLXBvc3QtbW9ydGVtLzI3NzIpLiBUaGlzIHByb3Bvc2FsIGlzIGludGVuZGVkIHRvIHN1Y2NlZWQgd2hlcmUgUHJvcCAxNiBmYWlsZWQuCgpUaGlzIHByb3Bvc2FsIGlzIGludGVuZGVkIHRvIHNpZ25hbCBhY2NlcHRhbmNlL3JlamVjdGlvbiBvZiB0aGUgcHJlY2lzZSBzb2Z0d2FyZSByZWxlYXNlIHRoYXQgd2lsbCBjb250YWluIHRoZSBjaGFuZ2VzIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBDb3Ntb3MgSHViIDMgdXBncmFkZS4gQSBoaWdoIGxldmVsIG92ZXJ2aWV3IG9mIHRoZXNlIGNoYW5nZXMgd2FzIHN1Y2Nlc3NmdWxseSBhcHByb3ZlZCBieSB0aGUgdm90ZXJzIHNpZ25hbGxpbmcgdmlhIENvc21vcyBIdWIgMyBVcGdyYWRlIFByb3Bvc2FsIEE6Cmh0dHBzOi8vaHViYmxlLmZpZ21lbnQubmV0d29yay9jb3Ntb3MvY2hhaW5zL2Nvc21vc2h1Yi0yL2dvdmVybmFuY2UvcHJvcG9zYWxzLzEzCgpXZSBhcmUgcHJvcG9zaW5nIHRvIHVzZSB0aGlzIGNvZGUgaHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9nYWlhL3JlbGVhc2VzL3RhZy92Mi4wLjMgdG8gdXBncmFkZSB0aGUgQ29zbW9zIEh1Yi4KV2UgYXJlIHByb3Bvc2luZyB0byBleHBvcnQgdGhlIGxlZGdlcuKAmXMgc3RhdGUgYXQgQmxvY2sgSGVpZ2h0IDIsOTAyLDAwMCwgd2hpY2ggd2UgZXhwZWN0IHRvIG9jY3VyIG9uIERlY2VtYmVyIDExLCAyMDE5IGF0IG9yIGFyb3VuZCAxNDoyNyBVVEMgYXNzdW1pbmcgYW4gYXZlcmFnZSBvZiA2Ljk0IHNlY29uZHMgcGVyIGJsb2NrLiBQbGVhc2Ugbm90ZSB0aGF0IHRoZXJlIHdpbGwgbGlrZWx5IGJlIGEgdmFyaWFuY2UgZnJvbSB0aGlzIHRhcmdldCB0aW1lLCBkdWUgdG8gZGV2aWF0aW9ucyBpbiBibG9jayB0aW1lLgoKV2UgYXJlIHByb3Bvc2luZyB0aGF0IHRoZSBDb3Ntb3MgSHViIDMgZ2VuZXNpcyB0aW1lIGJlIHNldCB0byA2MCBtaW51dGVzIGFmdGVyIEJsb2NrIEhlaWdodCAyLDkwMiwwMDAuCgotPS09LQoKQ28tb3JkaW5hdGlvbiBpbiBjYXNlIG9mIGZhaWx1cmUgd2lsbCBoYXBwZW4gaW4gdGhpcyBjaGFubmVsOiBodHRwczovL3Jpb3QuaW0vYXBwLyMvcm9vbS8jY29zbW9zX3ZhbGlkYXRvcnNfdGVjaG5pY2FsX3VwZGF0ZXM6bWF0cml4Lm9yZxgBIhQrv2OiyZYsAZ2+i0gazel9jlBW/ioRCgV1YXRvbRIIMTIwMDAwMDASFgoQCgV1YXRvbRIHMTQwMDAwMBDAmgwaagom61rphyECbBkcVpHNEJPxF+jExArw3TClQZuDf9VHGAb4d5HDAgoSQPptMTINbW5vADVyreOmURHGI69xIR2LHULPmoqQGxXJTmlSQ+kzkP51iMBxC1RK6N5+LTfQmrmXScUDFJVTvps=';

describe('Tx', () => {
    describe('decoding', () => {
        describe('Tx', () => {
            it('decodes bytes', () => {
                const bytes = base64ToBytes(txData);
                const value = Amino.unmarshalTx(bytes, true);
                expect(value).toMatchObject(tx);
            });
        });
    });
});
