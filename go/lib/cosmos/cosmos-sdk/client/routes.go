package client

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/amino-js/go/lib/cosmos/cosmos-sdk/client/context"
)

// Register routes
func RegisterRoutes(cliCtx context.CLIContext, r *mux.Router) {
	RegisterRPCRoutes(cliCtx, r)
}
