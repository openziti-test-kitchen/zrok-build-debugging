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

import { RequestFile } from './models';

export class RegisterResponse {
    'token'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RegisterResponse.attributeTypeMap;
    }
}

