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
 * The DecodeRawTransactionHexRISBVoutInnerScriptPubKey model module.
 * @module model/DecodeRawTransactionHexRISBVoutInnerScriptPubKey
 * @version 1.6.0
 */
class DecodeRawTransactionHexRISBVoutInnerScriptPubKey {
    /**
     * Constructs a new <code>DecodeRawTransactionHexRISBVoutInnerScriptPubKey</code>.
     * Script pub key of the transaction
     * @alias module:model/DecodeRawTransactionHexRISBVoutInnerScriptPubKey
     * @param address {String} Represents the address which send the amount.
     */
    constructor(address) { 
        
        DecodeRawTransactionHexRISBVoutInnerScriptPubKey.initialize(this, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address) { 
        obj['address'] = address;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISBVoutInnerScriptPubKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISBVoutInnerScriptPubKey} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISBVoutInnerScriptPubKey} The populated <code>DecodeRawTransactionHexRISBVoutInnerScriptPubKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecodeRawTransactionHexRISBVoutInnerScriptPubKey();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('asm')) {
                obj['asm'] = ApiClient.convertToType(data['asm'], 'String');
            }
            if (data.hasOwnProperty('hex')) {
                obj['hex'] = ApiClient.convertToType(data['hex'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the address which send the amount.
 * @member {String} address
 */
DecodeRawTransactionHexRISBVoutInnerScriptPubKey.prototype['address'] = undefined;

/**
 * Represents the assembly of the script public key of the address.
 * @member {String} asm
 */
DecodeRawTransactionHexRISBVoutInnerScriptPubKey.prototype['asm'] = undefined;

/**
 * Represents the hex of the script public key of the address.
 * @member {String} hex
 */
DecodeRawTransactionHexRISBVoutInnerScriptPubKey.prototype['hex'] = undefined;

/**
 * Represents the script type.
 * @member {String} type
 */
DecodeRawTransactionHexRISBVoutInnerScriptPubKey.prototype['type'] = undefined;






export default DecodeRawTransactionHexRISBVoutInnerScriptPubKey;

