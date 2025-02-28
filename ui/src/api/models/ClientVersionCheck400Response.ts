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
 * @interface ClientVersionCheck400Response
 */
export interface ClientVersionCheck400Response {
    /**
     * 
     * @type {string}
     * @memberof ClientVersionCheck400Response
     */
    message?: string;
}

/**
 * Check if a given object implements the ClientVersionCheck400Response interface.
 */
export function instanceOfClientVersionCheck400Response(value: object): value is ClientVersionCheck400Response {
    return true;
}

export function ClientVersionCheck400ResponseFromJSON(json: any): ClientVersionCheck400Response {
    return ClientVersionCheck400ResponseFromJSONTyped(json, false);
}

export function ClientVersionCheck400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientVersionCheck400Response {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function ClientVersionCheck400ResponseToJSON(value?: ClientVersionCheck400Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
    };
}

