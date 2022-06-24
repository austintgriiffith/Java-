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
 * The NewConfirmedInternalTransactionsRBDataItem model module.
 * @module model/NewConfirmedInternalTransactionsRBDataItem
 * @version 1.6.0
 */
class NewConfirmedInternalTransactionsRBDataItem {
    /**
     * Constructs a new <code>NewConfirmedInternalTransactionsRBDataItem</code>.
     * @alias module:model/NewConfirmedInternalTransactionsRBDataItem
     * @param address {String} Defines the specific address of the internal transaction.
     * @param allowDuplicates {Boolean} Flag that permits or denies creation of duplicates
     * @param callbackSecretKey {String} Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
     * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
     */
    constructor(address, allowDuplicates, callbackSecretKey, callbackUrl) { 
        
        NewConfirmedInternalTransactionsRBDataItem.initialize(this, address, allowDuplicates, callbackSecretKey, callbackUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, allowDuplicates, callbackSecretKey, callbackUrl) { 
        obj['address'] = address;
        obj['allowDuplicates'] = allowDuplicates || false;
        obj['callbackSecretKey'] = callbackSecretKey;
        obj['callbackUrl'] = callbackUrl;
    }

    /**
     * Constructs a <code>NewConfirmedInternalTransactionsRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedInternalTransactionsRBDataItem} obj Optional instance to populate.
     * @return {module:model/NewConfirmedInternalTransactionsRBDataItem} The populated <code>NewConfirmedInternalTransactionsRBDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewConfirmedInternalTransactionsRBDataItem();

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
            if (data.hasOwnProperty('receiveCallbackOn')) {
                obj['receiveCallbackOn'] = ApiClient.convertToType(data['receiveCallbackOn'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Defines the specific address of the internal transaction.
 * @member {String} address
 */
NewConfirmedInternalTransactionsRBDataItem.prototype['address'] = undefined;

/**
 * Flag that permits or denies creation of duplicates
 * @member {Boolean} allowDuplicates
 * @default false
 */
NewConfirmedInternalTransactionsRBDataItem.prototype['allowDuplicates'] = false;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
NewConfirmedInternalTransactionsRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
NewConfirmedInternalTransactionsRBDataItem.prototype['callbackUrl'] = undefined;

/**
 * Represents the exact confirmation, on which the user wants to receive callback.
 * @member {Number} receiveCallbackOn
 */
NewConfirmedInternalTransactionsRBDataItem.prototype['receiveCallbackOn'] = undefined;






export default NewConfirmedInternalTransactionsRBDataItem;

