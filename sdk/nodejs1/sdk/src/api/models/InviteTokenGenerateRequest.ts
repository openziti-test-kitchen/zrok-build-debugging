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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InviteTokenGenerateRequest
 */
export interface InviteTokenGenerateRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof InviteTokenGenerateRequest
     */
    inviteTokens?: Array<string>;
}

/**
 * Check if a given object implements the InviteTokenGenerateRequest interface.
 */
export function instanceOfInviteTokenGenerateRequest(value: object): value is InviteTokenGenerateRequest {
    return true;
}

export function InviteTokenGenerateRequestFromJSON(json: any): InviteTokenGenerateRequest {
    return InviteTokenGenerateRequestFromJSONTyped(json, false);
}

export function InviteTokenGenerateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InviteTokenGenerateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'inviteTokens': json['inviteTokens'] == null ? undefined : json['inviteTokens'],
    };
}

export function InviteTokenGenerateRequestToJSON(value?: InviteTokenGenerateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'inviteTokens': value['inviteTokens'],
    };
}

