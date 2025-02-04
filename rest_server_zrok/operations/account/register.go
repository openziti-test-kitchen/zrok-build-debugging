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

// RegisterHandlerFunc turns a function with the right signature into a register handler
type RegisterHandlerFunc func(RegisterParams) middleware.Responder

// Handle executing the request and returning a response
func (fn RegisterHandlerFunc) Handle(params RegisterParams) middleware.Responder {
	return fn(params)
}

// RegisterHandler interface for that can handle valid register params
type RegisterHandler interface {
	Handle(RegisterParams) middleware.Responder
}

// NewRegister creates a new http.Handler for the register operation
func NewRegister(ctx *middleware.Context, handler RegisterHandler) *Register {
	return &Register{Context: ctx, Handler: handler}
}

/*
	Register swagger:route POST /register account register

Register register API
*/
type Register struct {
	Context *middleware.Context
	Handler RegisterHandler
}

func (o *Register) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	route, rCtx, _ := o.Context.RouteInfo(r)
	if rCtx != nil {
		*r = *rCtx
	}
	var Params = NewRegisterParams()
	if err := o.Context.BindValidRequest(r, route, &Params); err != nil { // bind params
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}

	res := o.Handler.Handle(Params) // actually handle the request
	o.Context.Respond(rw, r, route.Produces, route, res)

}

// RegisterBody register body
//
// swagger:model RegisterBody
type RegisterBody struct {

	// password
	Password string `json:"password,omitempty"`

	// reg token
	RegToken string `json:"regToken,omitempty"`
}

// Validate validates this register body
func (o *RegisterBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this register body based on context it is used
func (o *RegisterBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *RegisterBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *RegisterBody) UnmarshalBinary(b []byte) error {
	var res RegisterBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}

// RegisterOKBody register o k body
//
// swagger:model RegisterOKBody
type RegisterOKBody struct {

	// account token
	AccountToken string `json:"accountToken,omitempty"`
}

// Validate validates this register o k body
func (o *RegisterOKBody) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this register o k body based on context it is used
func (o *RegisterOKBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *RegisterOKBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *RegisterOKBody) UnmarshalBinary(b []byte) error {
	var res RegisterOKBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}
