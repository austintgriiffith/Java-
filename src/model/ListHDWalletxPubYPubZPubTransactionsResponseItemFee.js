/**
 * Crypto APIs
 * Crypto APIs 2.0 is a complex and innovative infrastructure layer that radically simplifies the development of any Blockchain and Crypto related applications. Organized around REST, Crypto APIs 2.0 can assist both novice Bitcoin/Ethereum enthusiasts and crypto experts with the development of their blockchain applications. Crypto APIs 2.0 provides unified endpoints and data, raw data, automatic tokens and coins forwardings, callback functionalities, and much more.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: bizdev@cryptoapis.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ListHDWalletxPubYPubZPubTransactionsResponseItemFee model module.
 * @module model/ListHDWalletxPubYPubZPubTransactionsResponseItemFee
 * @version 2.0.0
 */
class ListHDWalletxPubYPubZPubTransactionsResponseItemFee {
    /**
     * Constructs a new <code>ListHDWalletxPubYPubZPubTransactionsResponseItemFee</code>.
     * @alias module:model/ListHDWalletxPubYPubZPubTransactionsResponseItemFee
     * @param amount {String} Defines the amount of the transaction fee.
     */
    constructor(amount) { 
        
        ListHDWalletxPubYPubZPubTransactionsResponseItemFee.initialize(this, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount) { 
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>ListHDWalletxPubYPubZPubTransactionsResponseItemFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListHDWalletxPubYPubZPubTransactionsResponseItemFee} obj Optional instance to populate.
     * @return {module:model/ListHDWalletxPubYPubZPubTransactionsResponseItemFee} The populated <code>ListHDWalletxPubYPubZPubTransactionsResponseItemFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListHDWalletxPubYPubZPubTransactionsResponseItemFee();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the amount of the transaction fee.
 * @member {String} amount
 */
ListHDWalletxPubYPubZPubTransactionsResponseItemFee.prototype['amount'] = undefined;






export default ListHDWalletxPubYPubZPubTransactionsResponseItemFee;

