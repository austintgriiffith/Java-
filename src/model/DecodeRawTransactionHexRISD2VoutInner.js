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
import DecodeRawTransactionHexRISD2VoutInnerScriptPubKey from './DecodeRawTransactionHexRISD2VoutInnerScriptPubKey';

/**
 * The DecodeRawTransactionHexRISD2VoutInner model module.
 * @module model/DecodeRawTransactionHexRISD2VoutInner
 * @version 1.6.0
 */
class DecodeRawTransactionHexRISD2VoutInner {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRISD2VoutInner</code>.
     * @alias module:model/DecodeRawTransactionHexRISD2VoutInner
     * @param scriptPubKey {module:model/DecodeRawTransactionHexRISD2VoutInnerScriptPubKey} 
     */
    constructor(scriptPubKey) { 
        
        DecodeRawTransactionHexRISD2VoutInner.initialize(this, scriptPubKey);
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
     * Constructs a <code>DecodeRawTransactionHexRISD2VoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISD2VoutInner} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISD2VoutInner} The populated <code>DecodeRawTransactionHexRISD2VoutInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRISD2VoutInner();

            if (data.hasOwnProperty('scriptPubKey')) {
                obj['scriptPubKey'] = DecodeRawTransactionHexRISD2VoutInnerScriptPubKey.constructFromObject(data['scriptPubKey']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DecodeRawTransactionHexRISD2VoutInnerScriptPubKey} scriptPubKey
 */
DecodeRawTransactionHexRISD2VoutInner.prototype['scriptPubKey'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
DecodeRawTransactionHexRISD2VoutInner.prototype['value'] = undefined;






export default DecodeRawTransactionHexRISD2VoutInner;

