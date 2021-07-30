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
import GetZilliqaTransactionDetailsByTransactionIDRIFee from './GetZilliqaTransactionDetailsByTransactionIDRIFee';
import ListZilliqaTransactionsByAddressRIRecipients from './ListZilliqaTransactionsByAddressRIRecipients';
import ListZilliqaTransactionsByAddressRISenders from './ListZilliqaTransactionsByAddressRISenders';

/**
 * The ListZilliqaTransactionsByBlockHeightRI model module.
 * @module model/ListZilliqaTransactionsByBlockHeightRI
 * @version 1.2.0
 */
class ListZilliqaTransactionsByBlockHeightRI {
    /**
     * Constructs a new <code>ListZilliqaTransactionsByBlockHeightRI</code>.
     * @alias module:model/ListZilliqaTransactionsByBlockHeightRI
     * @param fee {module:model/GetZilliqaTransactionDetailsByTransactionIDRIFee} 
     * @param gasLimit {Number} Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
     * @param gasPrice {Number} Defines the price of the gas.
     * @param gasUsed {Number} Defines how much of the gas for the block has been used.
     * @param minedInBlockHash {String} Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param nonce {Number} Represents a random value that can be adjusted to satisfy the Proof of Work.
     * @param recipients {Array.<module:model/ListZilliqaTransactionsByAddressRIRecipients>} Defines an object array of the transaction recipients.
     * @param senders {Array.<module:model/ListZilliqaTransactionsByAddressRISenders>} Represents an object of addresses that provide the funds.
     * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix Timestamp.
     * @param transactionHash {String} Represents the hash of the transaction, which is its unique identifier.
     * @param transactionIndex {Number} Defines the numeric representation of the transaction index.
     * @param transactionStatus {String} Defines the status of the transaction, whether it is e.g. pending or complete.
     */
    constructor(fee, gasLimit, gasPrice, gasUsed, minedInBlockHash, nonce, recipients, senders, timestamp, transactionHash, transactionIndex, transactionStatus) { 
        
        ListZilliqaTransactionsByBlockHeightRI.initialize(this, fee, gasLimit, gasPrice, gasUsed, minedInBlockHash, nonce, recipients, senders, timestamp, transactionHash, transactionIndex, transactionStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fee, gasLimit, gasPrice, gasUsed, minedInBlockHash, nonce, recipients, senders, timestamp, transactionHash, transactionIndex, transactionStatus) { 
        obj['fee'] = fee;
        obj['gasLimit'] = gasLimit;
        obj['gasPrice'] = gasPrice;
        obj['gasUsed'] = gasUsed;
        obj['minedInBlockHash'] = minedInBlockHash;
        obj['nonce'] = nonce;
        obj['recipients'] = recipients;
        obj['senders'] = senders;
        obj['timestamp'] = timestamp;
        obj['transactionHash'] = transactionHash;
        obj['transactionIndex'] = transactionIndex;
        obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>ListZilliqaTransactionsByBlockHeightRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListZilliqaTransactionsByBlockHeightRI} obj Optional instance to populate.
     * @return {module:model/ListZilliqaTransactionsByBlockHeightRI} The populated <code>ListZilliqaTransactionsByBlockHeightRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListZilliqaTransactionsByBlockHeightRI();

            if (data.hasOwnProperty('fee')) {
                obj['fee'] = GetZilliqaTransactionDetailsByTransactionIDRIFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'Number');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = ApiClient.convertToType(data['gasPrice'], 'Number');
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], 'Number');
            }
            if (data.hasOwnProperty('minedInBlockHash')) {
                obj['minedInBlockHash'] = ApiClient.convertToType(data['minedInBlockHash'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [ListZilliqaTransactionsByAddressRIRecipients]);
            }
            if (data.hasOwnProperty('senders')) {
                obj['senders'] = ApiClient.convertToType(data['senders'], [ListZilliqaTransactionsByAddressRISenders]);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj['transactionHash'] = ApiClient.convertToType(data['transactionHash'], 'String');
            }
            if (data.hasOwnProperty('transactionIndex')) {
                obj['transactionIndex'] = ApiClient.convertToType(data['transactionIndex'], 'Number');
            }
            if (data.hasOwnProperty('transactionStatus')) {
                obj['transactionStatus'] = ApiClient.convertToType(data['transactionStatus'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetZilliqaTransactionDetailsByTransactionIDRIFee} fee
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['fee'] = undefined;

/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['gasLimit'] = undefined;

/**
 * Defines the price of the gas.
 * @member {Number} gasPrice
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['gasPrice'] = undefined;

/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['gasUsed'] = undefined;

/**
 * Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['minedInBlockHash'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {Number} nonce
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['nonce'] = undefined;

/**
 * Defines an object array of the transaction recipients.
 * @member {Array.<module:model/ListZilliqaTransactionsByAddressRIRecipients>} recipients
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['recipients'] = undefined;

/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/ListZilliqaTransactionsByAddressRISenders>} senders
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['senders'] = undefined;

/**
 * Defines the exact date/time when this block was mined in Unix Timestamp.
 * @member {Number} timestamp
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['timestamp'] = undefined;

/**
 * Represents the hash of the transaction, which is its unique identifier.
 * @member {String} transactionHash
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['transactionHash'] = undefined;

/**
 * Defines the numeric representation of the transaction index.
 * @member {Number} transactionIndex
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['transactionIndex'] = undefined;

/**
 * Defines the status of the transaction, whether it is e.g. pending or complete.
 * @member {String} transactionStatus
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['transactionStatus'] = undefined;






export default ListZilliqaTransactionsByBlockHeightRI;
