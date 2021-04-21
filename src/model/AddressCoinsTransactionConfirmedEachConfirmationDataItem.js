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
import AddressCoinsTransactionConfirmedEachConfirmationDataItemMinedInBlock from './AddressCoinsTransactionConfirmedEachConfirmationDataItemMinedInBlock';

/**
 * The AddressCoinsTransactionConfirmedEachConfirmationDataItem model module.
 * @module model/AddressCoinsTransactionConfirmedEachConfirmationDataItem
 * @version 2.0.0
 */
class AddressCoinsTransactionConfirmedEachConfirmationDataItem {
    /**
     * Constructs a new <code>AddressCoinsTransactionConfirmedEachConfirmationDataItem</code>.
     * Defines an &#x60;item&#x60; as one result.
     * @alias module:model/AddressCoinsTransactionConfirmedEachConfirmationDataItem
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param address {String} Defines the specific address to which the transaction has been sent.
     * @param minedInBlock {module:model/AddressCoinsTransactionConfirmedEachConfirmationDataItemMinedInBlock} 
     * @param transactionId {String} Defines the unique ID of the specific transaction, i.e. its identification number.
     * @param currentConfirmations {Number} Defines the number of currently received confirmations for the transaction.
     * @param targetConfirmations {Number} Defines the number of confirmation transactions requested as callbacks, i.e. the system can notify till the n-th confirmation.
     * @param amount {String} Defines the amount of coins sent with the confirmed transaction.
     * @param unit {String} Defines the unit of the transaction, e.g. BTC.
     * @param direction {module:model/AddressCoinsTransactionConfirmedEachConfirmationDataItem.DirectionEnum} Defines whether the transaction is \"incoming\" or \"outgoing\".
     */
    constructor(blockchain, network, address, minedInBlock, transactionId, currentConfirmations, targetConfirmations, amount, unit, direction) { 
        
        AddressCoinsTransactionConfirmedEachConfirmationDataItem.initialize(this, blockchain, network, address, minedInBlock, transactionId, currentConfirmations, targetConfirmations, amount, unit, direction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, network, address, minedInBlock, transactionId, currentConfirmations, targetConfirmations, amount, unit, direction) { 
        obj['blockchain'] = blockchain;
        obj['network'] = network;
        obj['address'] = address;
        obj['minedInBlock'] = minedInBlock;
        obj['transactionId'] = transactionId;
        obj['currentConfirmations'] = currentConfirmations;
        obj['targetConfirmations'] = targetConfirmations;
        obj['amount'] = amount;
        obj['unit'] = unit;
        obj['direction'] = direction;
    }

    /**
     * Constructs a <code>AddressCoinsTransactionConfirmedEachConfirmationDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressCoinsTransactionConfirmedEachConfirmationDataItem} obj Optional instance to populate.
     * @return {module:model/AddressCoinsTransactionConfirmedEachConfirmationDataItem} The populated <code>AddressCoinsTransactionConfirmedEachConfirmationDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressCoinsTransactionConfirmedEachConfirmationDataItem();

            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('minedInBlock')) {
                obj['minedInBlock'] = AddressCoinsTransactionConfirmedEachConfirmationDataItemMinedInBlock.constructFromObject(data['minedInBlock']);
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('currentConfirmations')) {
                obj['currentConfirmations'] = ApiClient.convertToType(data['currentConfirmations'], 'Number');
            }
            if (data.hasOwnProperty('targetConfirmations')) {
                obj['targetConfirmations'] = ApiClient.convertToType(data['targetConfirmations'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
AddressCoinsTransactionConfirmedEachConfirmationDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
AddressCoinsTransactionConfirmedEachConfirmationDataItem.prototype['network'] = undefined;

/**
 * Defines the specific address to which the transaction has been sent.
 * @member {String} address
 */
AddressCoinsTransactionConfirmedEachConfirmationDataItem.prototype['address'] = undefined;

/**
 * @member {module:model/AddressCoinsTransactionConfirmedEachConfirmationDataItemMinedInBlock} minedInBlock
 */
AddressCoinsTransactionConfirmedEachConfirmationDataItem.prototype['minedInBlock'] = undefined;

/**
 * Defines the unique ID of the specific transaction, i.e. its identification number.
 * @member {String} transactionId
 */
AddressCoinsTransactionConfirmedEachConfirmationDataItem.prototype['transactionId'] = undefined;

/**
 * Defines the number of currently received confirmations for the transaction.
 * @member {Number} currentConfirmations
 */
AddressCoinsTransactionConfirmedEachConfirmationDataItem.prototype['currentConfirmations'] = undefined;

/**
 * Defines the number of confirmation transactions requested as callbacks, i.e. the system can notify till the n-th confirmation.
 * @member {Number} targetConfirmations
 */
AddressCoinsTransactionConfirmedEachConfirmationDataItem.prototype['targetConfirmations'] = undefined;

/**
 * Defines the amount of coins sent with the confirmed transaction.
 * @member {String} amount
 */
AddressCoinsTransactionConfirmedEachConfirmationDataItem.prototype['amount'] = undefined;

/**
 * Defines the unit of the transaction, e.g. BTC.
 * @member {String} unit
 */
AddressCoinsTransactionConfirmedEachConfirmationDataItem.prototype['unit'] = undefined;

/**
 * Defines whether the transaction is \"incoming\" or \"outgoing\".
 * @member {module:model/AddressCoinsTransactionConfirmedEachConfirmationDataItem.DirectionEnum} direction
 */
AddressCoinsTransactionConfirmedEachConfirmationDataItem.prototype['direction'] = undefined;





/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
AddressCoinsTransactionConfirmedEachConfirmationDataItem['DirectionEnum'] = {

    /**
     * value: "incoming"
     * @const
     */
    "incoming": "incoming",

    /**
     * value: "outgoing"
     * @const
     */
    "outgoing": "outgoing"
};



export default AddressCoinsTransactionConfirmedEachConfirmationDataItem;

