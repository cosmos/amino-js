package extensions

import (
	amino "github.com/tendermint/go-amino"
)

// RegisterCodec Register Codec
func RegisterCodec(codec *amino.Codec) {
	codec.RegisterConcrete(&Params{}, "irishub/Auth/Params", nil)

	codec.RegisterInterface((*Account)(nil), nil)
	codec.RegisterInterface((*ValidatorSigningInfo)(nil), nil)
	codec.RegisterConcrete(&BaseAccount{}, "irishub/bank/Account", nil)
	codec.RegisterConcrete(&StdTx{}, "irishub/bank/StdTx", nil)
	codec.RegisterConcrete(&MsgSend{}, "irishub/bank/Send", nil)
	codec.RegisterConcrete(&MsgBurn{}, "irishub/bank/Burn", nil)
	codec.RegisterConcrete(&MsgSetMemoRegexp{}, "irishub/bank/SetMemoRegexp", nil)
	codec.RegisterConcrete(&MsgEditValidator{}, "irishub/stake/MsgEditValidator", nil)
	codec.RegisterConcrete(&MsgDelegate{}, "irishub/stake/MsgDelegate", nil)
	codec.RegisterConcrete(&MsgBeginUnbonding{}, "irishub/stake/BeginUnbonding", nil)
	codec.RegisterConcrete(&MsgBeginRedelegate{}, "irishub/stake/BeginRedelegate", nil)
	codec.RegisterConcrete(&MsgSubmitProposal{}, "irishub/gov/MsgSubmitProposal", nil)
	codec.RegisterConcrete(&MsgSubmitCommunityTaxUsageProposal{}, "irishub/gov/MsgSubmitCommunityTaxUsageProposal", nil)
	codec.RegisterConcrete(&MsgSubmitSoftwareUpgradeProposal{}, "irishub/gov/MsgSubmitSoftwareUpgradeProposal", nil)
	codec.RegisterConcrete(&MsgSubmitTokenAdditionProposal{}, "irishub/gov/MsgSubmitTokenAdditionProposal", nil)
	codec.RegisterConcrete(&MsgDeposit{}, "irishub/gov/MsgDeposit", nil)
	codec.RegisterConcrete(&MsgVote{}, "irishub/gov/MsgVote", nil)
	codec.RegisterConcrete(&MsgUnjail{}, "irishub/slashing/MsgUnjail", nil)
	codec.RegisterConcrete(&MsgWithdrawDelegatorRewardsAll{}, "irishub/distr/MsgWithdrawDelegationRewardsAll", nil)
	codec.RegisterConcrete(&MsgWithdrawDelegatorReward{}, "irishub/distr/MsgWithdrawDelegationReward", nil)
	codec.RegisterConcrete(&MsgWithdrawValidatorRewardsAll{}, "irishub/distr/MsgWithdrawValidatorRewardsAll", nil)
	codec.RegisterConcrete(&MsgSetWithdrawAddress{}, "irishub/distr/MsgModifyWithdrawAddress", nil)
	codec.RegisterConcrete(&MsgSwapOrder{}, "irismod/coinswap/MsgSwapOrder", nil)
	codec.RegisterConcrete(&MsgAddLiquidity{}, "irismod/coinswap/MsgAddLiquidity", nil)
	codec.RegisterConcrete(&MsgRemoveLiquidity{}, "irismod/coinswap/MsgRemoveLiquidity", nil)
	codec.RegisterConcrete(&CoinswapParams{}, "irismod/coinswap/Params", nil)

}
