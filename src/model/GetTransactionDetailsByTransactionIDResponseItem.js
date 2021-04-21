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
import GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific from './GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific';
import GetTransactionDetailsByTransactionIDResponseItemFee from './GetTransactionDetailsByTransactionIDResponseItemFee';
import GetTransactionDetailsByTransactionIDResponseItemRecipients from './GetTransactionDetailsByTransactionIDResponseItemRecipients';
import GetTransactionDetailsByTransactionIDResponseItemSenders from './GetTransactionDetailsByTransactionIDResponseItemSenders';

/**
 * The GetTransactionDetailsByTransactionIDResponseItem model module.
 * @module model/GetTransactionDetailsByTransactionIDResponseItem
 * @version 2.0.0
 */
class GetTransactionDetailsByTransactionIDResponseItem {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDResponseItem</code>.
     * @alias module:model/GetTransactionDetailsByTransactionIDResponseItem
     * @param index {Number} Represents the index position of the transaction in the specific block.
     * @param recipients {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemRecipients>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
     * @param senders {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemSenders>} Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
     * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
     * @param transactionHash {String} Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
     * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
     * @param fee {module:model/GetTransactionDetailsByTransactionIDResponseItemFee} 
     * @param isConfirmed {Boolean} Defines whether the transaction is mined/confirmed or not. If it is \"false\", it means the transaction is still in the Mempool waiting to be included in a block. Value \"true\" means that this transaction is already confirmed and included in a block.
     * @param blockchainSpecific {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific} 
     */
    constructor(index, recipients, senders, timestamp, transactionHash, transactionId, fee, isConfirmed, blockchainSpecific) { 
        
        GetTransactionDetailsByTransactionIDResponseItem.initialize(this, index, recipients, senders, timestamp, transactionHash, transactionId, fee, isConfirmed, blockchainSpecific);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, index, recipients, senders, timestamp, transactionHash, transactionId, fee, isConfirmed, blockchainSpecific) { 
        obj['index'] = index;
        obj['recipients'] = recipients;
        obj['senders'] = senders;
        obj['timestamp'] = timestamp;
        obj['transactionHash'] = transactionHash;
        obj['transactionId'] = transactionId;
        obj['fee'] = fee;
        obj['isConfirmed'] = isConfirmed;
        obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDResponseItem} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDResponseItem} The populated <code>GetTransactionDetailsByTransactionIDResponseItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDResponseItem();

            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('minedInBlockHash')) {
                obj['minedInBlockHash'] = ApiClient.convertToType(data['minedInBlockHash'], 'String');
            }
            if (data.hasOwnProperty('minedInBlockHeight')) {
                obj['minedInBlockHeight'] = ApiClient.convertToType(data['minedInBlockHeight'], 'Number');
            }
            if (data.hasOwnProperty('recipients')) {
                obj['recipients'] = ApiClient.convertToType(data['recipients'], [GetTransactionDetailsByTransactionIDResponseItemRecipients]);
            }
            if (data.hasOwnProperty('senders')) {
                obj['senders'] = ApiClient.convertToType(data['senders'], [GetTransactionDetailsByTransactionIDResponseItemSenders]);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj['transactionHash'] = ApiClient.convertToType(data['transactionHash'], 'String');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = GetTransactionDetailsByTransactionIDResponseItemFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('isConfirmed')) {
                obj['isConfirmed'] = ApiClient.convertToType(data['isConfirmed'], 'Boolean');
            }
            if (data.hasOwnProperty('blockchainSpecific')) {
                obj['blockchainSpecific'] = GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.constructFromObject(data['blockchainSpecific']);
            }
        }
        return obj;
    }


}

/**
 * Represents the index position of the transaction in the specific block.
 * @member {Number} index
 */
GetTransactionDetailsByTransactionIDResponseItem.prototype['index'] = undefined;

/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */
GetTransactionDetailsByTransactionIDResponseItem.prototype['minedInBlockHash'] = undefined;

/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */
GetTransactionDetailsByTransactionIDResponseItem.prototype['minedInBlockHeight'] = undefined;

/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemRecipients>} recipients
 */
GetTransactionDetailsByTransactionIDResponseItem.prototype['recipients'] = undefined;

/**
 * Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemSenders>} senders
 */
GetTransactionDetailsByTransactionIDResponseItem.prototype['senders'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
GetTransactionDetailsByTransactionIDResponseItem.prototype['timestamp'] = undefined;

/**
 * Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
 * @member {String} transactionHash
 */
GetTransactionDetailsByTransactionIDResponseItem.prototype['transactionHash'] = undefined;

/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */
GetTransactionDetailsByTransactionIDResponseItem.prototype['transactionId'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDResponseItemFee} fee
 */
GetTransactionDetailsByTransactionIDResponseItem.prototype['fee'] = undefined;

/**
 * Defines whether the transaction is mined/confirmed or not. If it is \"false\", it means the transaction is still in the Mempool waiting to be included in a block. Value \"true\" means that this transaction is already confirmed and included in a block.
 * @member {Boolean} isConfirmed
 */
GetTransactionDetailsByTransactionIDResponseItem.prototype['isConfirmed'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific} blockchainSpecific
 */
GetTransactionDetailsByTransactionIDResponseItem.prototype['blockchainSpecific'] = undefined;






export default GetTransactionDetailsByTransactionIDResponseItem;

