package main

import (
	js "github.com/jordansexton/go-amino-js/go"
)

//import (
//	"encoding/base64"
//	"fmt"
//	"github.com/tendermint/go-amino"
//
//	//"github.com/tendermint/iavl"
//
//	//"github.com/cosmos/cosmos-sdk/types"
//	"github.com/cosmos/cosmos-sdk/x/auth"
//	"github.com/tendermint/tendermint/crypto"
//	"github.com/tendermint/tendermint/crypto/ed25519"
//	"github.com/tendermint/tendermint/crypto/multisig"
//	"github.com/tendermint/tendermint/crypto/secp256k1"
//)
//
////func keyPubAddr() (crypto.PrivKey, crypto.PubKey, types.AccAddress) {
////	key := secp256k1.GenPrivKey()
////	pub := key.PubKey()
////	addr := types.AccAddress(pub.Address())
////	return key, pub, addr
////}
//

func main() {
	valueBool := js.EncodeBool(true)
	valueByte := js.EncodeByte(byte["0"])
	valueByteSlice := js.EncodeByteSlice()
	valueFloat32 := js.EncodeFloat32()
	valueFloat64 := js.EncodeFloat64()
	valueInt16 := js.EncodeInt16()
	valueInt32 := js.EncodeInt32()
	valueInt64 := js.EncodeInt64()
	valueInt8 := js.EncodeInt8()
	valueString := js.EncodeString()
	valueTime := js.EncodeTime()
	valueUint16 := js.EncodeUint16()
	valueUint32 := js.EncodeUint32()
	valueUint64 := js.EncodeUint64()
	valueUint8 := js.EncodeUint8()
	valueUvarint := js.EncodeUvarint()
	valueVarint := js.EncodeVarint()
}

//
//func main () {
//	str := "YPqWwQqcAQpUChTVRec4TD1vW7p6GyUrThqVbrrGTBIPCgV1YXRvbRIGMTc5ODQ4GibrWumHIQKYe02D/64eNwOGvV8fs+7Nr4O3wn9SS6I9ZgPcmQ1jEiCbASg7EhQKBXVhdG9tEgsxMTAwMDAwMDAwMBoSCgV1YXRvbRIJMjA5Nzk3NjA3IhQKBXVhdG9tEgsxMTAwMDAwMDAwMCjwoLDzBQ=="
//	data, err := base64.StdEncoding.DecodeString(str)
//	if err != nil {
//		fmt.Println("error:", err)
//		return
//	}
//	fmt.Printf("%q\n", data)
//
//	codec := amino.NewCodec()
//
//	codec.RegisterInterface((*auth.Account)(nil), nil)
//	codec.RegisterInterface((*auth.VestingAccount)(nil), nil)
//
//	codec.RegisterConcrete(&auth.BaseAccount{}, "auth/Account", nil)
//	codec.RegisterConcrete(&auth.BaseVestingAccount{}, "cosmosauthBaseVestingAccount", nil)
//	codec.RegisterConcrete(&auth.ContinuousVestingAccount{}, "auth/ContinuousVestingAccount", nil)
//	codec.RegisterConcrete(&auth.DelayedVestingAccount{}, "auth/DelayedVestingAccount", nil)
//	codec.RegisterConcrete(auth.StdTx{}, "auth/StdTx", nil)
//
//	codec.RegisterInterface((*crypto.PubKey)(nil), nil)
//	codec.RegisterInterface((*crypto.PrivKey)(nil), nil)
//	codec.RegisterConcrete(ed25519.PubKeyEd25519{}, "tendermint/PrivKeyEd25519", nil)
//	codec.RegisterConcrete(ed25519.PrivKeyEd25519{}, "tendermint/PubKeyEd25519", nil)
//	codec.RegisterConcrete(secp256k1.PubKeySecp256k1{}, "tendermint/PrivKeySecp256k1", nil)
//	codec.RegisterConcrete(secp256k1.PrivKeySecp256k1{}, "tendermint/PubKeySecp256k1", nil)
//	codec.RegisterConcrete(multisig.PubKeyMultisigThreshold{}, "tendermint/PubKeyMultisigThreshold", nil)
//
//	var account auth.Account
//	err = codec.UnmarshalBinaryBare(data, &account)
//
//	return
//
//	//_, pub, address := keyPubAddr()
//	//
//	//acc1 := auth.BaseAccount{}
//	//err = acc1.SetAddress(address)
//	//err = acc1.SetPubKey(pub)
//	//
//	//bytes, err := codec.MarshalBinaryLengthPrefixed(acc1)
//	//
//	//acc2 := auth.BaseAccount{}
//	//err = codec.UnmarshalBinaryLengthPrefixed(bytes, &acc2)
//	//
//	//str = base64.StdEncoding.EncodeToString(bytes)
//	//
//	//return
//}
//
////func main () {
////	str := "hQUKggUKKwggEPRAGJeoFiIg42ukaK0uAk7ILChDKa2MAFQFCOQFHTdoHk72xrPqn8YKKwgeEO0gGJeoFiIgKTAvE5LXRMXvLtFItHxHqhaWLVKre8QWE+sG8E1Z1YYKKwgaEKEQGL2nFiogx4Bretm5AWrvsnzsRpoohgaekTVJ4R04Xj5FN5wCVwIKKwgYEJUIGL2nFiIguo1I6e9Rj73aCfyZnYQHRGUXq1GDyB1tvWdjysYTajIKKwgWEJoEGL2nFiogi7CVB6o/0PIzr+4le03bzqd7W9nluTJwkF5H96OsPucKKwgSEP8BGJujFiIgeRcR4sFkokanbxWDZpZxtaEzfZ8xtM/uPzUrvyAEsDMKKwgQEJgBGKKVFiIgIQc2xOwMqFbvMSjlSbHhUVD1c0+RaQHwRb2Jiu5Yf7UKKggOEFYYipQWKiDw5Bc4Lxdfrk/EfE4imjy2AKyg4vujseUEpWB3+gCcZAoqCAwQMBiKlBYqIKY3zEai6/YEkQSBFC6ip74SI4MtACgr/TdQFSBUfT7ICioIChAZGIqUFioguHqFHs9oIk2FQ18+nq2vZumPTIoDDwsLan1vjVMIPxcKKggIEAoYipQWKiAq5wga4cYIvmokgEgZvP7CQgQjGq6NQvwQv4Vy1YZqEwoqCAYQBhiKlBYiICD9YpCHnKK2/ezmWOxX5uUCXg5GC8I7E3pjzBjeMBzbCioIAhACGIqUFiogS1QK5AZwGKWEfTKDxlc/PXHXGioimRuUvaN0Wz/seNgaPQoVAdVF5zhMPW9bunobJStOGpVuusZMEiB2dXzzOGZoxxV2WcHcWUeXd99tJm65ENdr1muoA5tE0RiKlBY="
////	data, err := base64.StdEncoding.DecodeString(str)
////	if err != nil {
////		fmt.Println("error:", err)
////		return
////	}
////	fmt.Printf("%q\n", data)
////
////	codec := amino.NewCodec()
////
////	var op iavl.IAVLValueOp
////
////	err = codec.UnmarshalBinaryLengthPrefixed(data, &op)
////
////	return
////}
