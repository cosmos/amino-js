package keys

import (
	"github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/crypto/keys/hd"
	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto"
)

type Info interface {
}

var (
	_ Info = &LocalInfo{}
	_ Info = &LedgerInfo{}
	_ Info = &OfflineInfo{}
	_ Info = &MultiInfo{}
)

type LocalInfo struct {
	Name         string        `json:"name"`
	PubKey       crypto.PubKey `json:"pubkey"`
	PrivKeyArmor string        `json:"privkey.armor"`
}

type LedgerInfo struct {
	Name   string         `json:"name"`
	PubKey crypto.PubKey  `json:"pubkey"`
	Path   hd.BIP44Params `json:"path"`
}

type OfflineInfo struct {
	Name   string        `json:"name"`
	PubKey crypto.PubKey `json:"pubkey"`
}

type MultisigPubKeyInfo struct {
	PubKey crypto.PubKey `json:"pubkey"`
	Weight uint          `json:"weight"`
}

type MultiInfo struct {
	Name      string               `json:"name"`
	PubKey    crypto.PubKey        `json:"pubkey"`
	Threshold uint                 `json:"threshold"`
	PubKeys   []MultisigPubKeyInfo `json:"pubkeys"`
}
