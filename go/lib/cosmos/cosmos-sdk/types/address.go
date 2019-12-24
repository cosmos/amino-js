package types

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"strings"

	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto"
	cryptoAmino "github.com/cosmos/amino-js/go/lib/tendermint/tendermint/crypto/encoding/amino"

	"github.com/cosmos/amino-js/go/lib/tendermint/tendermint/libs/bech32"
)

const (
	AddrLen = 20
	Bech32MainPrefix = "iaa"
	PrefixValidator = "val"
	PrefixConsensus = "cons"
	PrefixPublic = "pub"
	PrefixOperator = "oper"
	Bech32PrefixAccAddr = Bech32MainPrefix
	Bech32PrefixAccPub = Bech32MainPrefix + PrefixPublic
	Bech32PrefixValAddr = Bech32MainPrefix + PrefixValidator + PrefixOperator
	Bech32PrefixValPub = Bech32MainPrefix + PrefixValidator + PrefixOperator + PrefixPublic
	Bech32PrefixConsAddr = Bech32MainPrefix + PrefixValidator + PrefixConsensus
	Bech32PrefixConsPub = Bech32MainPrefix + PrefixValidator + PrefixConsensus + PrefixPublic
)

type Address interface {
	Empty() bool
	Marshal() ([]byte, error)
	MarshalJSON() ([]byte, error)
	Bytes() []byte
	String() string
}

var _ Address = AccAddress{}
var _ Address = ValAddress{}
var _ Address = ConsAddress{}

type AccAddress []byte

func VerifyAddressFormat(bz []byte) error {
	if len(bz) != AddrLen {
		return errors.New("Incorrect address length")
	}
	return nil
}

func AccAddressFromBech32(address string) (addr AccAddress, err error) {
	if len(strings.TrimSpace(address)) == 0 {
		return AccAddress{}, nil
	}

	bech32PrefixAccAddr := GetConfig().GetBech32AccountAddrPrefix()

	bz, err := GetFromBech32(address, bech32PrefixAccAddr)
	if err != nil {
		return nil, err
	}

	err = VerifyAddressFormat(bz)
	if err != nil {
		return nil, err
	}

	return AccAddress(bz), nil
}

func (aa AccAddress) Empty() bool {
	if aa == nil {
		return true
	}

	aa2 := AccAddress{}
	return bytes.Equal(aa.Bytes(), aa2.Bytes())
}

func (aa AccAddress) Marshal() ([]byte, error) {
	return aa, nil
}

func (aa *AccAddress) Unmarshal(data []byte) error {
	*aa = data
	return nil
}

func (aa AccAddress) MarshalJSON() ([]byte, error) {
	return json.Marshal(aa.String())
}

func (aa *AccAddress) UnmarshalJSON(data []byte) error {
	var s string
	err := json.Unmarshal(data, &s)
	if err != nil {
		return err
	}

	aa2, err := AccAddressFromBech32(s)
	if err != nil {
		return err
	}

	*aa = aa2
	return nil
}

func (aa AccAddress) Bytes() []byte {
	return aa
}

func (aa AccAddress) String() string {
	if aa.Empty() {
		return ""
	}

	bech32PrefixAccAddr := GetConfig().GetBech32AccountAddrPrefix()

	bech32Addr, err := bech32.ConvertAndEncode(bech32PrefixAccAddr, aa.Bytes())
	if err != nil {
		panic(err)
	}

	return bech32Addr
}

type ValAddress []byte

func ValAddressFromBech32(address string) (addr ValAddress, err error) {
	if len(strings.TrimSpace(address)) == 0 {
		return ValAddress{}, nil
	}

	bech32PrefixValAddr := GetConfig().GetBech32ValidatorAddrPrefix()

	bz, err := GetFromBech32(address, bech32PrefixValAddr)
	if err != nil {
		return nil, err
	}

	err = VerifyAddressFormat(bz)
	if err != nil {
		return nil, err
	}

	return ValAddress(bz), nil
}

func (va ValAddress) Empty() bool {
	if va == nil {
		return true
	}

	va2 := ValAddress{}
	return bytes.Equal(va.Bytes(), va2.Bytes())
}

func (va ValAddress) Marshal() ([]byte, error) {
	return va, nil
}

func (va *ValAddress) Unmarshal(data []byte) error {
	*va = data
	return nil
}

func (va ValAddress) MarshalJSON() ([]byte, error) {
	return json.Marshal(va.String())
}

func (va *ValAddress) UnmarshalJSON(data []byte) error {
	var s string

	err := json.Unmarshal(data, &s)
	if err != nil {
		return err
	}

	va2, err := ValAddressFromBech32(s)
	if err != nil {
		return err
	}

	*va = va2
	return nil
}

func (va ValAddress) Bytes() []byte {
	return va
}

func (va ValAddress) String() string {
	if va.Empty() {
		return ""
	}

	bech32PrefixValAddr := GetConfig().GetBech32ValidatorAddrPrefix()

	bech32Addr, err := bech32.ConvertAndEncode(bech32PrefixValAddr, va.Bytes())
	if err != nil {
		panic(err)
	}

	return bech32Addr
}

type ConsAddress []byte

func ConsAddressFromBech32(address string) (addr ConsAddress, err error) {
	if len(strings.TrimSpace(address)) == 0 {
		return ConsAddress{}, nil
	}

	bech32PrefixConsAddr := GetConfig().GetBech32ConsensusAddrPrefix()

	bz, err := GetFromBech32(address, bech32PrefixConsAddr)
	if err != nil {
		return nil, err
	}

	err = VerifyAddressFormat(bz)
	if err != nil {
		return nil, err
	}

	return ConsAddress(bz), nil
}

func (ca ConsAddress) Empty() bool {
	if ca == nil {
		return true
	}

	ca2 := ConsAddress{}
	return bytes.Equal(ca.Bytes(), ca2.Bytes())
}

func (ca ConsAddress) Marshal() ([]byte, error) {
	return ca, nil
}

func (ca *ConsAddress) Unmarshal(data []byte) error {
	*ca = data
	return nil
}

func (ca ConsAddress) MarshalJSON() ([]byte, error) {
	return json.Marshal(ca.String())
}

func (ca *ConsAddress) UnmarshalJSON(data []byte) error {
	var s string

	err := json.Unmarshal(data, &s)
	if err != nil {
		return err
	}

	ca2, err := ConsAddressFromBech32(s)
	if err != nil {
		return err
	}

	*ca = ca2
	return nil
}

func (ca ConsAddress) Bytes() []byte {
	return ca
}

func (ca ConsAddress) String() string {
	if ca.Empty() {
		return ""
	}

	bech32PrefixConsAddr := GetConfig().GetBech32ConsensusAddrPrefix()

	bech32Addr, err := bech32.ConvertAndEncode(bech32PrefixConsAddr, ca.Bytes())
	if err != nil {
		panic(err)
	}

	return bech32Addr
}

func GetConsPubKeyBech32(pubkey string) (pk crypto.PubKey, err error) {
	bech32PrefixConsPub := GetConfig().GetBech32ConsensusPubPrefix()
	bz, err := GetFromBech32(pubkey, bech32PrefixConsPub)
	if err != nil {
		return nil, err
	}

	pk, err = cryptoAmino.PubKeyFromBytes(bz)
	if err != nil {
		return nil, err
	}

	return pk, nil
}

func GetFromBech32(bech32str, prefix string) ([]byte, error) {
	if len(bech32str) == 0 {
		return nil, errors.New("decoding Bech32 address failed: must provide an address")
	}

	hrp, bz, err := bech32.DecodeAndConvert(bech32str)
	if err != nil {
		return nil, err
	}

	if hrp != prefix {
		return nil, fmt.Errorf("invalid Bech32 prefix; expected %s, got %s", prefix, hrp)
	}

	return bz, nil
}
