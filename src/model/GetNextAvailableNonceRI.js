/**
 * CryptoAPIs
 * Crypto APIs 2.0 is a complex and innovative infrastructure layer that radically simplifies the development of any Blockchain and Crypto related applications. Organized around REST, Crypto APIs 2.0 can assist both novice Bitcoin/Ethereum enthusiasts and crypto experts with the development of their blockchain applications. Crypto APIs 2.0 provides unified endpoints and data, raw data, automatic tokens and coins forwardings, callback functionalities, and much more.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: developers@cryptoapis.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetNextAvailableNonceRI model module.
 * @module model/GetNextAvailableNonceRI
 * @version 1.6.0
 */
class GetNextAvailableNonceRI {
    /**
     * Constructs a new <code>GetNextAvailableNonceRI</code>.
     * @alias module:model/GetNextAvailableNonceRI
     * @param nextAvailableNonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     */
    constructor(nextAvailableNonce) { 
        
        GetNextAvailableNonceRI.initialize(this, nextAvailableNonce);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, nextAvailableNonce) { 
        obj['nextAvailableNonce'] = nextAvailableNonce;
    }

    /**
     * Constructs a <code>GetNextAvailableNonceRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetNextAvailableNonceRI} obj Optional instance to populate.
     * @return {module:model/GetNextAvailableNonceRI} The populated <code>GetNextAvailableNonceRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetNextAvailableNonceRI();

            if (data.hasOwnProperty('nextAvailableNonce')) {
                obj['nextAvailableNonce'] = ApiClient.convertToType(data['nextAvailableNonce'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nextAvailableNonce
 */
GetNextAvailableNonceRI.prototype['nextAvailableNonce'] = undefined;






export default GetNextAvailableNonceRI;
