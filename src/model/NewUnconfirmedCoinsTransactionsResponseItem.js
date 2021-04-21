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
 * The NewUnconfirmedCoinsTransactionsResponseItem model module.
 * @module model/NewUnconfirmedCoinsTransactionsResponseItem
 * @version 2.0.0
 */
class NewUnconfirmedCoinsTransactionsResponseItem {
    /**
     * Constructs a new <code>NewUnconfirmedCoinsTransactionsResponseItem</code>.
     * @alias module:model/NewUnconfirmedCoinsTransactionsResponseItem
     * @param callbackSecretKey {String} Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs.
     * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
     * @param confirmationsCount {Number} Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
     * @param createdTimestamp {Number} Defines the specific time/date when the subscription was created in Unix Timestamp.
     * @param eventType {String} Defines the type of the specific event available for the customer to subscribe to for callback notification.
     * @param isActive {Boolean} Defines whether the subscription is active or not. Set as boolean.
     * @param referenceId {String} Represents a unique ID used to reference the specific callback subscription.
     * @param transactionId {String} Represents the unique identification string that defines the transaction.
     */
    constructor(callbackSecretKey, callbackUrl, confirmationsCount, createdTimestamp, eventType, isActive, referenceId, transactionId) { 
        
        NewUnconfirmedCoinsTransactionsResponseItem.initialize(this, callbackSecretKey, callbackUrl, confirmationsCount, createdTimestamp, eventType, isActive, referenceId, transactionId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, callbackSecretKey, callbackUrl, confirmationsCount, createdTimestamp, eventType, isActive, referenceId, transactionId) { 
        obj['callbackSecretKey'] = callbackSecretKey;
        obj['callbackUrl'] = callbackUrl;
        obj['confirmationsCount'] = confirmationsCount;
        obj['createdTimestamp'] = createdTimestamp;
        obj['eventType'] = eventType;
        obj['isActive'] = isActive;
        obj['referenceId'] = referenceId;
        obj['transactionId'] = transactionId;
    }

    /**
     * Constructs a <code>NewUnconfirmedCoinsTransactionsResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewUnconfirmedCoinsTransactionsResponseItem} obj Optional instance to populate.
     * @return {module:model/NewUnconfirmedCoinsTransactionsResponseItem} The populated <code>NewUnconfirmedCoinsTransactionsResponseItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewUnconfirmedCoinsTransactionsResponseItem();

            if (data.hasOwnProperty('callbackSecretKey')) {
                obj['callbackSecretKey'] = ApiClient.convertToType(data['callbackSecretKey'], 'String');
            }
            if (data.hasOwnProperty('callbackUrl')) {
                obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
            }
            if (data.hasOwnProperty('confirmationsCount')) {
                obj['confirmationsCount'] = ApiClient.convertToType(data['confirmationsCount'], 'Number');
            }
            if (data.hasOwnProperty('createdTimestamp')) {
                obj['createdTimestamp'] = ApiClient.convertToType(data['createdTimestamp'], 'Number');
            }
            if (data.hasOwnProperty('eventType')) {
                obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('referenceId')) {
                obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs.
 * @member {String} callbackSecretKey
 */
NewUnconfirmedCoinsTransactionsResponseItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
 * @member {String} callbackUrl
 */
NewUnconfirmedCoinsTransactionsResponseItem.prototype['callbackUrl'] = undefined;

/**
 * Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
 * @member {Number} confirmationsCount
 */
NewUnconfirmedCoinsTransactionsResponseItem.prototype['confirmationsCount'] = undefined;

/**
 * Defines the specific time/date when the subscription was created in Unix Timestamp.
 * @member {Number} createdTimestamp
 */
NewUnconfirmedCoinsTransactionsResponseItem.prototype['createdTimestamp'] = undefined;

/**
 * Defines the type of the specific event available for the customer to subscribe to for callback notification.
 * @member {String} eventType
 */
NewUnconfirmedCoinsTransactionsResponseItem.prototype['eventType'] = undefined;

/**
 * Defines whether the subscription is active or not. Set as boolean.
 * @member {Boolean} isActive
 */
NewUnconfirmedCoinsTransactionsResponseItem.prototype['isActive'] = undefined;

/**
 * Represents a unique ID used to reference the specific callback subscription.
 * @member {String} referenceId
 */
NewUnconfirmedCoinsTransactionsResponseItem.prototype['referenceId'] = undefined;

/**
 * Represents the unique identification string that defines the transaction.
 * @member {String} transactionId
 */
NewUnconfirmedCoinsTransactionsResponseItem.prototype['transactionId'] = undefined;






export default NewUnconfirmedCoinsTransactionsResponseItem;

