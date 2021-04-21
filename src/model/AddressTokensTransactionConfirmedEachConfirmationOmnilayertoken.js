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
 * The AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken model module.
 * @module model/AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken
 * @version 2.0.0
 */
class AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken {
    /**
     * Constructs a new <code>AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken</code>.
     * omniLayerToken
     * @alias module:model/AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken
     * @param name {String} Specifies the name of the token.
     * @param propertyId {String} Defines the ID of the property for Omni Layer.
     * @param transactionType {String} Defines the type of the transaction.
     * @param createdByTransactionId {String} The transaction ID used to create the token.
     * @param amount {String} Defines the amount of tokens sent with the confirmed transaction.
     */
    constructor(name, propertyId, transactionType, createdByTransactionId, amount) { 
        
        AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken.initialize(this, name, propertyId, transactionType, createdByTransactionId, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, propertyId, transactionType, createdByTransactionId, amount) { 
        obj['name'] = name;
        obj['propertyId'] = propertyId;
        obj['transactionType'] = transactionType;
        obj['createdByTransactionId'] = createdByTransactionId;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken} The populated <code>AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('propertyId')) {
                obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'String');
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
            if (data.hasOwnProperty('createdByTransactionId')) {
                obj['createdByTransactionId'] = ApiClient.convertToType(data['createdByTransactionId'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the name of the token.
 * @member {String} name
 */
AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken.prototype['name'] = undefined;

/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken.prototype['propertyId'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} transactionType
 */
AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken.prototype['transactionType'] = undefined;

/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken.prototype['createdByTransactionId'] = undefined;

/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken.prototype['amount'] = undefined;






export default AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken;

