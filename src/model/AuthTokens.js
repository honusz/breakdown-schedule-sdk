/**
 * breakdown-sched-sdk
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Token from './Token';

/**
 * The AuthTokens model module.
 * @module model/AuthTokens
 * @version 0.1.0
 */
class AuthTokens {
    /**
     * Constructs a new <code>AuthTokens</code>.
     * @alias module:model/AuthTokens
     */
    constructor() { 
        
        AuthTokens.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthTokens</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthTokens} obj Optional instance to populate.
     * @return {module:model/AuthTokens} The populated <code>AuthTokens</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthTokens();

            if (data.hasOwnProperty('access')) {
                obj['access'] = Token.constructFromObject(data['access']);
            }
            if (data.hasOwnProperty('refresh')) {
                obj['refresh'] = Token.constructFromObject(data['refresh']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Token} access
 */
AuthTokens.prototype['access'] = undefined;

/**
 * @member {module:model/Token} refresh
 */
AuthTokens.prototype['refresh'] = undefined;






export default AuthTokens;

