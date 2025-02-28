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

// VerifyHandlerFunc turns a function with the right signature into a verify handler
type VerifyHandlerFunc func(VerifyParams) middleware.Responder

// Handle executing the request and returning a response
func (fn VerifyHandlerFunc) Handle(params VerifyParams) middleware.Responder {
	return fn(params)
}

// VerifyHandler interface for that can handle valid verify params
type VerifyHandler interface {
	Handle(VerifyParams) middleware.Responder
}

// NewVerify creates a new http.Handler for the verify operation
func NewVerify(ctx *middleware.Context, handler VerifyHandler) *Verify {
	return &Verify{Context: ctx, Handler: handler}
}

/*
	Verify swagger:route POST /verify account verify

Verify verify API
*/
type Verify struct {
	Context *middleware.Context
	Handler VerifyHandler
}

func (o *Verify) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	route, rCtx, _ := o.Context.RouteInfo(r)
	if rCtx != nil {
		*r = *rCtx
	}
	var Params = NewVerifyParams()
	if err := o.Context.BindValidRequest(r, route, &Params); err != nil { // bind params
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}

	res := o.Handler.Handle(Params) // actually handle the request
	o.Context.Respond(rw, r, route.Produces, route, res)

}

// VerifyBody verify body
//
// swagger:model VerifyBody
type VerifyBody struct {

	// register token
	RegisterToken string `json:"registerToken,omitempty"`
}

// Validate validates this verify body
func (o *VerifyBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this verify body based on context it is used
func (o *VerifyBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *VerifyBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *VerifyBody) UnmarshalBinary(b []byte) error {
	var res VerifyBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}

// VerifyOKBody verify o k body
//
// swagger:model VerifyOKBody
type VerifyOKBody struct {

	// email
	Email string `json:"email,omitempty"`
}

// Validate validates this verify o k body
func (o *VerifyOKBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this verify o k body based on context it is used
func (o *VerifyOKBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *VerifyOKBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *VerifyOKBody) UnmarshalBinary(b []byte) error {
	var res VerifyOKBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}
