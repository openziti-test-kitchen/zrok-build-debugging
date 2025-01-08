// Code generated by go-swagger; DO NOT EDIT.

package metadata

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the generate command

import (
	"context"
	"net/http"
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime/middleware"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"

	"github.com/openziti/zrok/rest_model_zrok"
)

// ListOrgMembersHandlerFunc turns a function with the right signature into a list org members handler
type ListOrgMembersHandlerFunc func(ListOrgMembersParams, *rest_model_zrok.Principal) middleware.Responder

// Handle executing the request and returning a response
func (fn ListOrgMembersHandlerFunc) Handle(params ListOrgMembersParams, principal *rest_model_zrok.Principal) middleware.Responder {
	return fn(params, principal)
}

// ListOrgMembersHandler interface for that can handle valid list org members params
type ListOrgMembersHandler interface {
	Handle(ListOrgMembersParams, *rest_model_zrok.Principal) middleware.Responder
}

// NewListOrgMembers creates a new http.Handler for the list org members operation
func NewListOrgMembers(ctx *middleware.Context, handler ListOrgMembersHandler) *ListOrgMembers {
	return &ListOrgMembers{Context: ctx, Handler: handler}
}

/*
	ListOrgMembers swagger:route GET /members/{organizationToken} metadata listOrgMembers

ListOrgMembers list org members API
*/
type ListOrgMembers struct {
	Context *middleware.Context
	Handler ListOrgMembersHandler
}

func (o *ListOrgMembers) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	route, rCtx, _ := o.Context.RouteInfo(r)
	if rCtx != nil {
		*r = *rCtx
	}
	var Params = NewListOrgMembersParams()
	uprinc, aCtx, err := o.Context.Authorize(r, route)
	if err != nil {
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}
	if aCtx != nil {
		*r = *aCtx
	}
	var principal *rest_model_zrok.Principal
	if uprinc != nil {
		principal = uprinc.(*rest_model_zrok.Principal) // this is really a rest_model_zrok.Principal, I promise
	}

	if err := o.Context.BindValidRequest(r, route, &Params); err != nil { // bind params
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}

	res := o.Handler.Handle(Params, principal) // actually handle the request
	o.Context.Respond(rw, r, route.Produces, route, res)

}

// ListOrgMembersOKBody list org members o k body
//
// swagger:model ListOrgMembersOKBody
type ListOrgMembersOKBody struct {

	// members
	Members []*ListOrgMembersOKBodyMembersItems0 `json:"members"`
}

// Validate validates this list org members o k body
func (o *ListOrgMembersOKBody) Validate(formats strfmt.Registry) error {
	var res []error

	if err := o.validateMembers(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (o *ListOrgMembersOKBody) validateMembers(formats strfmt.Registry) error {
	if swag.IsZero(o.Members) { // not required
		return nil
	}

	for i := 0; i < len(o.Members); i++ {
		if swag.IsZero(o.Members[i]) { // not required
			continue
		}

		if o.Members[i] != nil {
			if err := o.Members[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("listOrgMembersOK" + "." + "members" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("listOrgMembersOK" + "." + "members" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// ContextValidate validate this list org members o k body based on the context it is used
func (o *ListOrgMembersOKBody) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := o.contextValidateMembers(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (o *ListOrgMembersOKBody) contextValidateMembers(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(o.Members); i++ {

		if o.Members[i] != nil {

			if swag.IsZero(o.Members[i]) { // not required
				return nil
			}

			if err := o.Members[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("listOrgMembersOK" + "." + "members" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("listOrgMembersOK" + "." + "members" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (o *ListOrgMembersOKBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *ListOrgMembersOKBody) UnmarshalBinary(b []byte) error {
	var res ListOrgMembersOKBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}

// ListOrgMembersOKBodyMembersItems0 list org members o k body members items0
//
// swagger:model ListOrgMembersOKBodyMembersItems0
type ListOrgMembersOKBodyMembersItems0 struct {

	// admin
	Admin bool `json:"admin,omitempty"`

	// email
	Email string `json:"email,omitempty"`
}

// Validate validates this list org members o k body members items0
func (o *ListOrgMembersOKBodyMembersItems0) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this list org members o k body members items0 based on context it is used
func (o *ListOrgMembersOKBodyMembersItems0) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *ListOrgMembersOKBodyMembersItems0) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *ListOrgMembersOKBodyMembersItems0) UnmarshalBinary(b []byte) error {
	var res ListOrgMembersOKBodyMembersItems0
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}
