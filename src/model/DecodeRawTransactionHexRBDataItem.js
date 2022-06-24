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
 * The DecodeRawTransactionHexRBDataItem model module.
 * @module model/DecodeRawTransactionHexRBDataItem
 * @version 1.6.0
 */
class DecodeRawTransactionHexRBDataItem {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRBDataItem</code>.
     * @alias module:model/DecodeRawTransactionHexRBDataItem
     * @param rawTransactionHex {String} Represents the raw transaction Hex that has to be decoded.
     */
    constructor(rawTransactionHex) { 
        
        DecodeRawTransactionHexRBDataItem.initialize(this, rawTransactionHex);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, rawTransactionHex) { 
        obj['rawTransactionHex'] = rawTransactionHex;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRBDataItem} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRBDataItem} The populated <code>DecodeRawTransactionHexRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRBDataItem();

            if (data.hasOwnProperty('rawTransactionHex')) {
                obj['rawTransactionHex'] = ApiClient.convertToType(data['rawTransactionHex'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the raw transaction Hex that has to be decoded.
 * @member {String} rawTransactionHex
 */
DecodeRawTransactionHexRBDataItem.prototype['rawTransactionHex'] = undefined;






export default DecodeRawTransactionHexRBDataItem;

