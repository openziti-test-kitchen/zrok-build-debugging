// Code generated by go-swagger; DO NOT EDIT.

package account

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the generate command

import (
	"context"
	"net/http"

	"github.com/go-openapi/runtime/middleware"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// InviteHandlerFunc turns a function with the right signature into a invite handler
type InviteHandlerFunc func(InviteParams) middleware.Responder

// Handle executing the request and returning a response
func (fn InviteHandlerFunc) Handle(params InviteParams) middleware.Responder {
	return fn(params)
}

// InviteHandler interface for that can handle valid invite params
type InviteHandler interface {
	Handle(InviteParams) middleware.Responder
}

// NewInvite creates a new http.Handler for the invite operation
func NewInvite(ctx *middleware.Context, handler InviteHandler) *Invite {
	return &Invite{Context: ctx, Handler: handler}
}

/*
	Invite swagger:route POST /invite account invite

Invite invite API
*/
type Invite struct {
	Context *middleware.Context
	Handler InviteHandler
}

func (o *Invite) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	route, rCtx, _ := o.Context.RouteInfo(r)
	if rCtx != nil {
		*r = *rCtx
	}
	var Params = NewInviteParams()
	if err := o.Context.BindValidRequest(r, route, &Params); err != nil { // bind params
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}

	res := o.Handler.Handle(Params) // actually handle the request
	o.Context.Respond(rw, r, route.Produces, route, res)

}

// InviteBody invite body
//
// swagger:model InviteBody
type InviteBody struct {

	// email
	Email string `json:"email,omitempty"`

	// inv token
	InvToken string `json:"invToken,omitempty"`
}

// Validate validates this invite body
func (o *InviteBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this invite body based on context it is used
func (o *InviteBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *InviteBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *InviteBody) UnmarshalBinary(b []byte) error {
	var res InviteBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}
