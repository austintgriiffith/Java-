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
 * The NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem model module.
 * @module model/NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem
 * @version 2.0.0
 */
class NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem {
    /**
     * Constructs a new <code>NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem</code>.
     * @alias module:model/NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem
     * @param address {String} Represents the address of the transaction, per which the result is returned.
     * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
     */
    constructor(address, callbackUrl) { 
        
        NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem.initialize(this, address, callbackUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, callbackUrl) { 
        obj['address'] = address;
        obj['callbackUrl'] = callbackUrl;
    }

    /**
     * Constructs a <code>NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem} obj Optional instance to populate.
     * @return {module:model/NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem} The populated <code>NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('allowDuplicates')) {
                obj['allowDuplicates'] = ApiClient.convertToType(data['allowDuplicates'], 'Boolean');
            }
            if (data.hasOwnProperty('callbackSecretKey')) {
                obj['callbackSecretKey'] = ApiClient.convertToType(data['callbackSecretKey'], 'String');
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('confirmationsCount')) {
                obj['confirmationsCount'] = ApiClient.convertToType(data['confirmationsCount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the address of the transaction, per which the result is returned.
 * @member {String} address
 */
NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem.prototype['address'] = undefined;

/**
 * Specifies a flag that permits or denies the creation of duplicate addresses.
 * @member {Boolean} allowDuplicates
 * @default false
 */
NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem.prototype['allowDuplicates'] = false;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs.
 * @member {String} callbackSecretKey
 */
NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
 * @member {String} callbackUrl
 */
NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem.prototype['callbackUrl'] = undefined;

/**
 * Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
 * @member {Number} confirmationsCount
 */
NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem.prototype['confirmationsCount'] = undefined;






export default NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem;

