package controller

import (
	"github.com/go-openapi/loads"
	"github.com/go-openapi/runtime/middleware"
	"github.com/openziti-test-kitchen/zrok/controller/store"
	"github.com/openziti-test-kitchen/zrok/rest_server_zrok"
	"github.com/openziti-test-kitchen/zrok/rest_server_zrok/operations"
	"github.com/openziti-test-kitchen/zrok/rest_server_zrok/operations/identity"
	"github.com/openziti-test-kitchen/zrok/rest_server_zrok/operations/metadata"
	"github.com/openziti-test-kitchen/zrok/rest_server_zrok/operations/tunnel"
	"github.com/pkg/errors"
)

var str *store.Store

func Run(cfg *Config) error {
	swaggerSpec, err := loads.Embedded(rest_server_zrok.SwaggerJSON, rest_server_zrok.FlatSwaggerJSON)
	if err != nil {
		return errors.Wrap(err, "error loading embedded swagger spec")
	}

	api := operations.NewZrokAPI(swaggerSpec)
	api.KeyAuth = ZrokAuthenticate
	api.IdentityCreateAccountHandler = identity.CreateAccountHandlerFunc(createAccountHandler)
	api.IdentityEnableHandler = identity.EnableHandlerFunc(enableHandler)
	api.IdentityLoginHandler = identity.LoginHandlerFunc(loginHandler)
	api.MetadataOverviewHandler = metadata.OverviewHandlerFunc(overviewHandler)
	api.MetadataVersionHandler = metadata.VersionHandlerFunc(versionHandler)
	api.TunnelTunnelHandler = tunnel.TunnelHandlerFunc(tunnelHandler)
	api.TunnelUntunnelHandler = tunnel.UntunnelHandlerFunc(untunnelHandler)

	if v, err := store.Open(cfg.Store); err == nil {
		str = v
	} else {
		return errors.Wrap(err, "error opening store")
	}

	server := rest_server_zrok.NewServer(api)
	defer func() { _ = server.Shutdown() }()
	server.Host = cfg.Endpoint.Host
	server.Port = cfg.Endpoint.Port
	server.ConfigureAPI()
	if err := server.Serve(); err != nil {
		return errors.Wrap(err, "api server error")
	}
	return nil
}

func versionHandler(_ metadata.VersionParams) middleware.Responder {
	return metadata.NewVersionOK().WithPayload("v0.0.2")
}
