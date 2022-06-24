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
 * The BroadcastTransactionFailDataItem model module.
 * @module model/BroadcastTransactionFailDataItem
 * @version 1.6.0
 */
class BroadcastTransactionFailDataItem {
    /**
     * Constructs a new <code>BroadcastTransactionFailDataItem</code>.
     * Defines an &#x60;item&#x60; as one result.
     * @alias module:model/BroadcastTransactionFailDataItem
     * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
     * @param transactionId {String} Defines the unique ID of the specific transaction, i.e. its identification number.
     * @param errorMessage {String} Represents the error message received for the transaction.
     */
    constructor(blockchain, network, transactionId, errorMessage) { 
        
        BroadcastTransactionFailDataItem.initialize(this, blockchain, network, transactionId, errorMessage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockchain, network, transactionId, errorMessage) { 
        obj['blockchain'] = blockchain;
        obj['network'] = network;
        obj['transactionId'] = transactionId;
        obj['errorMessage'] = errorMessage;
    }

    /**
     * Constructs a <code>BroadcastTransactionFailDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BroadcastTransactionFailDataItem} obj Optional instance to populate.
     * @return {module:model/BroadcastTransactionFailDataItem} The populated <code>BroadcastTransactionFailDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BroadcastTransactionFailDataItem();

            if (data.hasOwnProperty('blockchain')) {
                obj['blockchain'] = ApiClient.convertToType(data['blockchain'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('errorMessage')) {
                obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
BroadcastTransactionFailDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
BroadcastTransactionFailDataItem.prototype['network'] = undefined;

/**
 * Defines the unique ID of the specific transaction, i.e. its identification number.
 * @member {String} transactionId
 */
BroadcastTransactionFailDataItem.prototype['transactionId'] = undefined;

/**
 * Represents the error message received for the transaction.
 * @member {String} errorMessage
 */
BroadcastTransactionFailDataItem.prototype['errorMessage'] = undefined;






export default BroadcastTransactionFailDataItem;

