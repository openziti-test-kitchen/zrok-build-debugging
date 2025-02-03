/* tslint:disable */
/* eslint-disable */
/**
 * zrok
 * zrok client access
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AddOrganizationMemberRequest,
  CreateFrontendRequest,
  CreateIdentity201Response,
  CreateIdentityRequest,
  CreateOrganizationRequest,
  DeleteFrontendRequest,
  InviteTokenGenerateRequest,
  ListFrontends200ResponseInner,
  ListOrganizationMembers200Response,
  ListOrganizations200Response,
  LoginRequest,
  RegenerateToken200Response,
  RemoveOrganizationMemberRequest,
  UpdateFrontendRequest,
  Verify200Response,
} from '../models/index';
import {
    AddOrganizationMemberRequestFromJSON,
    AddOrganizationMemberRequestToJSON,
    CreateFrontendRequestFromJSON,
    CreateFrontendRequestToJSON,
    CreateIdentity201ResponseFromJSON,
    CreateIdentity201ResponseToJSON,
    CreateIdentityRequestFromJSON,
    CreateIdentityRequestToJSON,
    CreateOrganizationRequestFromJSON,
    CreateOrganizationRequestToJSON,
    DeleteFrontendRequestFromJSON,
    DeleteFrontendRequestToJSON,
    InviteTokenGenerateRequestFromJSON,
    InviteTokenGenerateRequestToJSON,
    ListFrontends200ResponseInnerFromJSON,
    ListFrontends200ResponseInnerToJSON,
    ListOrganizationMembers200ResponseFromJSON,
    ListOrganizationMembers200ResponseToJSON,
    ListOrganizations200ResponseFromJSON,
    ListOrganizations200ResponseToJSON,
    LoginRequestFromJSON,
    LoginRequestToJSON,
    RegenerateToken200ResponseFromJSON,
    RegenerateToken200ResponseToJSON,
    RemoveOrganizationMemberRequestFromJSON,
    RemoveOrganizationMemberRequestToJSON,
    UpdateFrontendRequestFromJSON,
    UpdateFrontendRequestToJSON,
    Verify200ResponseFromJSON,
    Verify200ResponseToJSON,
} from '../models/index';

export interface AddOrganizationMemberOperationRequest {
    body?: AddOrganizationMemberRequest;
}

export interface CreateAccountRequest {
    body?: LoginRequest;
}

export interface CreateFrontendOperationRequest {
    body?: CreateFrontendRequest;
}

export interface CreateIdentityOperationRequest {
    body?: CreateIdentityRequest;
}

export interface CreateOrganizationOperationRequest {
    body?: CreateOrganizationRequest;
}

export interface DeleteFrontendOperationRequest {
    body?: DeleteFrontendRequest;
}

export interface DeleteOrganizationRequest {
    body?: RegenerateToken200Response;
}

export interface GrantsRequest {
    body?: Verify200Response;
}

export interface InviteTokenGenerateOperationRequest {
    body?: InviteTokenGenerateRequest;
}

export interface ListOrganizationMembersRequest {
    body?: RegenerateToken200Response;
}

export interface RemoveOrganizationMemberOperationRequest {
    body?: RemoveOrganizationMemberRequest;
}

export interface UpdateFrontendOperationRequest {
    body?: UpdateFrontendRequest;
}

/**
 * 
 */
export class AdminApi extends runtime.BaseAPI {

    /**
     */
    async addOrganizationMemberRaw(requestParameters: AddOrganizationMemberOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-token"] = await this.configuration.apiKey("x-token"); // key authentication
        }

        const response = await this.request({
            path: `/organization/add`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddOrganizationMemberRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async addOrganizationMember(requestParameters: AddOrganizationMemberOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addOrganizationMemberRaw(requestParameters, initOverrides);
    }

    /**
     */
    async createAccountRaw(requestParameters: CreateAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RegenerateToken200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-token"] = await this.configuration.apiKey("x-token"); // key authentication
        }

        const response = await this.request({
            path: `/account`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RegenerateToken200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async createAccount(requestParameters: CreateAccountRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegenerateToken200Response> {
        const response = await this.createAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async createFrontendRaw(requestParameters: CreateFrontendOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RegenerateToken200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-token"] = await this.configuration.apiKey("x-token"); // key authentication
        }

        const response = await this.request({
            path: `/frontend`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateFrontendRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RegenerateToken200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async createFrontend(requestParameters: CreateFrontendOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegenerateToken200Response> {
        const response = await this.createFrontendRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async createIdentityRaw(requestParameters: CreateIdentityOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateIdentity201Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-token"] = await this.configuration.apiKey("x-token"); // key authentication
        }

        const response = await this.request({
            path: `/identity`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateIdentityRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateIdentity201ResponseFromJSON(jsonValue));
    }

    /**
     */
    async createIdentity(requestParameters: CreateIdentityOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateIdentity201Response> {
        const response = await this.createIdentityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async createOrganizationRaw(requestParameters: CreateOrganizationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RegenerateToken200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-token"] = await this.configuration.apiKey("x-token"); // key authentication
        }

        const response = await this.request({
            path: `/organization`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateOrganizationRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RegenerateToken200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async createOrganization(requestParameters: CreateOrganizationOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RegenerateToken200Response> {
        const response = await this.createOrganizationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteFrontendRaw(requestParameters: DeleteFrontendOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-token"] = await this.configuration.apiKey("x-token"); // key authentication
        }

        const response = await this.request({
            path: `/frontend`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: DeleteFrontendRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteFrontend(requestParameters: DeleteFrontendOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteFrontendRaw(requestParameters, initOverrides);
    }

    /**
     */
    async deleteOrganizationRaw(requestParameters: DeleteOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-token"] = await this.configuration.apiKey("x-token"); // key authentication
        }

        const response = await this.request({
            path: `/organization`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: RegenerateToken200ResponseToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteOrganization(requestParameters: DeleteOrganizationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteOrganizationRaw(requestParameters, initOverrides);
    }

    /**
     */
    async grantsRaw(requestParameters: GrantsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-token"] = await this.configuration.apiKey("x-token"); // key authentication
        }

        const response = await this.request({
            path: `/grants`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: Verify200ResponseToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async grants(requestParameters: GrantsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.grantsRaw(requestParameters, initOverrides);
    }

    /**
     */
    async inviteTokenGenerateRaw(requestParameters: InviteTokenGenerateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-token"] = await this.configuration.apiKey("x-token"); // key authentication
        }

        const response = await this.request({
            path: `/invite/token/generate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InviteTokenGenerateRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async inviteTokenGenerate(requestParameters: InviteTokenGenerateOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.inviteTokenGenerateRaw(requestParameters, initOverrides);
    }

    /**
     */
    async listFrontendsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ListFrontends200ResponseInner>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-token"] = await this.configuration.apiKey("x-token"); // key authentication
        }

        const response = await this.request({
            path: `/frontends`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ListFrontends200ResponseInnerFromJSON));
    }

    /**
     */
    async listFrontends(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ListFrontends200ResponseInner>> {
        const response = await this.listFrontendsRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async listOrganizationMembersRaw(requestParameters: ListOrganizationMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListOrganizationMembers200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-token"] = await this.configuration.apiKey("x-token"); // key authentication
        }

        const response = await this.request({
            path: `/organization/list`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RegenerateToken200ResponseToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListOrganizationMembers200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async listOrganizationMembers(requestParameters: ListOrganizationMembersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListOrganizationMembers200Response> {
        const response = await this.listOrganizationMembersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async listOrganizationsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListOrganizations200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-token"] = await this.configuration.apiKey("x-token"); // key authentication
        }

        const response = await this.request({
            path: `/organizations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListOrganizations200ResponseFromJSON(jsonValue));
    }

    /**
     */
    async listOrganizations(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListOrganizations200Response> {
        const response = await this.listOrganizationsRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async removeOrganizationMemberRaw(requestParameters: RemoveOrganizationMemberOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-token"] = await this.configuration.apiKey("x-token"); // key authentication
        }

        const response = await this.request({
            path: `/organization/remove`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RemoveOrganizationMemberRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async removeOrganizationMember(requestParameters: RemoveOrganizationMemberOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeOrganizationMemberRaw(requestParameters, initOverrides);
    }

    /**
     */
    async updateFrontendRaw(requestParameters: UpdateFrontendOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/zrok.v1+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-token"] = await this.configuration.apiKey("x-token"); // key authentication
        }

        const response = await this.request({
            path: `/frontend`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateFrontendRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async updateFrontend(requestParameters: UpdateFrontendOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateFrontendRaw(requestParameters, initOverrides);
    }

}
