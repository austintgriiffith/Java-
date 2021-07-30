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
import ListTransactionsByBlockHashRIBSDScriptPubKey from './ListTransactionsByBlockHashRIBSDScriptPubKey';

/**
 * The ListTransactionsByBlockHashRIBSDVout model module.
 * @module model/ListTransactionsByBlockHashRIBSDVout
 * @version 1.2.0
 */
class ListTransactionsByBlockHashRIBSDVout {
    /**
     * Constructs a new <code>ListTransactionsByBlockHashRIBSDVout</code>.
     * @alias module:model/ListTransactionsByBlockHashRIBSDVout
     * @param isSpent {Boolean} Defines whether the output is spent or not.
     * @param scriptPubKey {module:model/ListTransactionsByBlockHashRIBSDScriptPubKey} 
     * @param value {String} Represents the sent/received amount.
     */
    constructor(isSpent, scriptPubKey, value) { 
        
        ListTransactionsByBlockHashRIBSDVout.initialize(this, isSpent, scriptPubKey, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isSpent, scriptPubKey, value) { 
        obj['isSpent'] = isSpent;
        obj['scriptPubKey'] = scriptPubKey;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHashRIBSDVout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashRIBSDVout} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashRIBSDVout} The populated <code>ListTransactionsByBlockHashRIBSDVout</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHashRIBSDVout();

            if (data.hasOwnProperty('isSpent')) {
                obj['isSpent'] = ApiClient.convertToType(data['isSpent'], 'Boolean');
            }
            if (data.hasOwnProperty('scriptPubKey')) {
                obj['scriptPubKey'] = ListTransactionsByBlockHashRIBSDScriptPubKey.constructFromObject(data['scriptPubKey']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */
ListTransactionsByBlockHashRIBSDVout.prototype['isSpent'] = undefined;

/**
 * @member {module:model/ListTransactionsByBlockHashRIBSDScriptPubKey} scriptPubKey
 */
ListTransactionsByBlockHashRIBSDVout.prototype['scriptPubKey'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListTransactionsByBlockHashRIBSDVout.prototype['value'] = undefined;






export default ListTransactionsByBlockHashRIBSDVout;
