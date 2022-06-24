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
import DecodeRawTransactionHexRISZVoutInnerScriptPubKey from './DecodeRawTransactionHexRISZVoutInnerScriptPubKey';

/**
 * The DecodeRawTransactionHexRISZVoutInner model module.
 * @module model/DecodeRawTransactionHexRISZVoutInner
 * @version 1.6.0
 */
class DecodeRawTransactionHexRISZVoutInner {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRISZVoutInner</code>.
     * @alias module:model/DecodeRawTransactionHexRISZVoutInner
     * @param scriptPubKey {module:model/DecodeRawTransactionHexRISZVoutInnerScriptPubKey} 
     */
    constructor(scriptPubKey) { 
        
        DecodeRawTransactionHexRISZVoutInner.initialize(this, scriptPubKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, scriptPubKey) { 
        obj['scriptPubKey'] = scriptPubKey;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISZVoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISZVoutInner} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISZVoutInner} The populated <code>DecodeRawTransactionHexRISZVoutInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRISZVoutInner();

            if (data.hasOwnProperty('scriptPubKey')) {
                obj['scriptPubKey'] = DecodeRawTransactionHexRISZVoutInnerScriptPubKey.constructFromObject(data['scriptPubKey']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DecodeRawTransactionHexRISZVoutInnerScriptPubKey} scriptPubKey
 */
DecodeRawTransactionHexRISZVoutInner.prototype['scriptPubKey'] = undefined;

/**
 * Defines the specific amount.
 * @member {String} value
 */
DecodeRawTransactionHexRISZVoutInner.prototype['value'] = undefined;






export default DecodeRawTransactionHexRISZVoutInner;

