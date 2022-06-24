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
import AddressInternalTransactionConfirmedDataItemMinedInBlock from './AddressInternalTransactionConfirmedDataItemMinedInBlock';

/**
 * The AddressInternalTransactionConfirmedDataItem model module.
 * @module model/AddressInternalTransactionConfirmedDataItem
 * @version 1.6.0
 */
class AddressInternalTransactionConfirmedDataItem {
    /**
     * Constructs a new <code>AddressInternalTransactionConfirmedDataItem</code>.
     * Defines an &#x60;item&#x60; as one result.
     * @alias module:model/AddressInternalTransactionConfirmedDataItem
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param address {String} Defines the specific address of the internal transaction.
     * @param minedInBlock {module:model/AddressInternalTransactionConfirmedDataItemMinedInBlock} 
     * @param parentTransactionId {String} Defines the Parent Transaction's unique ID.
     * @param operationId {String} Defines the specific operation's unique ID.
     * @param amount {String} Defines the amount of coins sent with the confirmed transaction.
     * @param unit {String} Defines the unit of the transaction, e.g. Gwei.
     * @param direction {module:model/AddressInternalTransactionConfirmedDataItem.DirectionEnum} Defines whether the transaction is \"incoming\" or \"outgoing\".
     */
    constructor(blockchain, network, address, minedInBlock, parentTransactionId, operationId, amount, unit, direction) { 
        
        AddressInternalTransactionConfirmedDataItem.initialize(this, blockchain, network, address, minedInBlock, parentTransactionId, operationId, amount, unit, direction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, network, address, minedInBlock, parentTransactionId, operationId, amount, unit, direction) { 
        obj['blockchain'] = blockchain;
        obj['network'] = network;
        obj['address'] = address;
        obj['minedInBlock'] = minedInBlock;
        obj['parentTransactionId'] = parentTransactionId;
        obj['operationId'] = operationId;
        obj['amount'] = amount;
        obj['unit'] = unit;
        obj['direction'] = direction;
    }

    /**
     * Constructs a <code>AddressInternalTransactionConfirmedDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressInternalTransactionConfirmedDataItem} obj Optional instance to populate.
     * @return {module:model/AddressInternalTransactionConfirmedDataItem} The populated <code>AddressInternalTransactionConfirmedDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressInternalTransactionConfirmedDataItem();

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
                obj['minedInBlock'] = AddressInternalTransactionConfirmedDataItemMinedInBlock.constructFromObject(data['minedInBlock']);
            }
            if (data.hasOwnProperty('parentTransactionId')) {
                obj['parentTransactionId'] = ApiClient.convertToType(data['parentTransactionId'], 'String');
            }
            if (data.hasOwnProperty('operationId')) {
                obj['operationId'] = ApiClient.convertToType(data['operationId'], 'String');
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
AddressInternalTransactionConfirmedDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
AddressInternalTransactionConfirmedDataItem.prototype['network'] = undefined;

/**
 * Defines the specific address of the internal transaction.
 * @member {String} address
 */
AddressInternalTransactionConfirmedDataItem.prototype['address'] = undefined;

/**
 * @member {module:model/AddressInternalTransactionConfirmedDataItemMinedInBlock} minedInBlock
 */
AddressInternalTransactionConfirmedDataItem.prototype['minedInBlock'] = undefined;

/**
 * Defines the Parent Transaction's unique ID.
 * @member {String} parentTransactionId
 */
AddressInternalTransactionConfirmedDataItem.prototype['parentTransactionId'] = undefined;

/**
 * Defines the specific operation's unique ID.
 * @member {String} operationId
 */
AddressInternalTransactionConfirmedDataItem.prototype['operationId'] = undefined;

/**
 * Defines the amount of coins sent with the confirmed transaction.
 * @member {String} amount
 */
AddressInternalTransactionConfirmedDataItem.prototype['amount'] = undefined;

/**
 * Defines the unit of the transaction, e.g. Gwei.
 * @member {String} unit
 */
AddressInternalTransactionConfirmedDataItem.prototype['unit'] = undefined;

/**
 * Defines whether the transaction is \"incoming\" or \"outgoing\".
 * @member {module:model/AddressInternalTransactionConfirmedDataItem.DirectionEnum} direction
 */
AddressInternalTransactionConfirmedDataItem.prototype['direction'] = undefined;





/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
AddressInternalTransactionConfirmedDataItem['DirectionEnum'] = {

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



export default AddressInternalTransactionConfirmedDataItem;

