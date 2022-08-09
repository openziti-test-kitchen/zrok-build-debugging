// Code generated by go-swagger; DO NOT EDIT.

package metadata

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new metadata API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for metadata API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientOption is the option for Client methods
type ClientOption func(*runtime.ClientOperation)

// ClientService is the interface for Client methods
type ClientService interface {
	Overview(params *OverviewParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*OverviewOK, error)

	Version(params *VersionParams, opts ...ClientOption) (*VersionOK, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
  Overview overview API
*/
func (a *Client) Overview(params *OverviewParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*OverviewOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewOverviewParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "overview",
		Method:             "GET",
		PathPattern:        "/overview",
		ProducesMediaTypes: []string{"application/zrok.v1+json"},
		ConsumesMediaTypes: []string{"application/zrok.v1+json"},
		Schemes:            []string{"http"},
		Params:             params,
		Reader:             &OverviewReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*OverviewOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for overview: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
  Version version API
*/
func (a *Client) Version(params *VersionParams, opts ...ClientOption) (*VersionOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewVersionParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "version",
		Method:             "GET",
		PathPattern:        "/version",
		ProducesMediaTypes: []string{"application/zrok.v1+json"},
		ConsumesMediaTypes: []string{"application/zrok.v1+json"},
		Schemes:            []string{"http"},
		Params:             params,
		Reader:             &VersionReader{formats: a.formats},
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*VersionOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for version: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}
