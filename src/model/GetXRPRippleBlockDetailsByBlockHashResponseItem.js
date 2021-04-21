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
import GetXRPRippleBlockDetailsByBlockHashResponseItemTotalCoins from './GetXRPRippleBlockDetailsByBlockHashResponseItemTotalCoins';
import GetXRPRippleBlockDetailsByBlockHeightResponseItemTotalFees from './GetXRPRippleBlockDetailsByBlockHeightResponseItemTotalFees';

/**
 * The GetXRPRippleBlockDetailsByBlockHashResponseItem model module.
 * @module model/GetXRPRippleBlockDetailsByBlockHashResponseItem
 * @version 2.0.0
 */
class GetXRPRippleBlockDetailsByBlockHashResponseItem {
    /**
     * Constructs a new <code>GetXRPRippleBlockDetailsByBlockHashResponseItem</code>.
     * @alias module:model/GetXRPRippleBlockDetailsByBlockHashResponseItem
     * @param blockHash {String} Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param blockHeight {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param nextBlockHash {String} Represents the hash of the next block. When this is the last block of the blockchain this value will be an empty string.
     * @param previousBlockHash {String} Represents the hash of the previous block, also known as the parent block.
     * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix Timestamp.
     * @param totalCoins {module:model/GetXRPRippleBlockDetailsByBlockHashResponseItemTotalCoins} 
     * @param totalFees {module:model/GetXRPRippleBlockDetailsByBlockHeightResponseItemTotalFees} 
     * @param transactionsCount {Number} Represents the total number of all transactions as part of this block.
     */
    constructor(blockHash, blockHeight, nextBlockHash, previousBlockHash, timestamp, totalCoins, totalFees, transactionsCount) { 
        
        GetXRPRippleBlockDetailsByBlockHashResponseItem.initialize(this, blockHash, blockHeight, nextBlockHash, previousBlockHash, timestamp, totalCoins, totalFees, transactionsCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockHash, blockHeight, nextBlockHash, previousBlockHash, timestamp, totalCoins, totalFees, transactionsCount) { 
        obj['blockHash'] = blockHash;
        obj['blockHeight'] = blockHeight;
        obj['nextBlockHash'] = nextBlockHash;
        obj['previousBlockHash'] = previousBlockHash;
        obj['timestamp'] = timestamp;
        obj['totalCoins'] = totalCoins;
        obj['totalFees'] = totalFees;
        obj['transactionsCount'] = transactionsCount;
    }

    /**
     * Constructs a <code>GetXRPRippleBlockDetailsByBlockHashResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetXRPRippleBlockDetailsByBlockHashResponseItem} obj Optional instance to populate.
     * @return {module:model/GetXRPRippleBlockDetailsByBlockHashResponseItem} The populated <code>GetXRPRippleBlockDetailsByBlockHashResponseItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetXRPRippleBlockDetailsByBlockHashResponseItem();

            if (data.hasOwnProperty('blockHash')) {
                obj['blockHash'] = ApiClient.convertToType(data['blockHash'], 'String');
            }
            if (data.hasOwnProperty('blockHeight')) {
                obj['blockHeight'] = ApiClient.convertToType(data['blockHeight'], 'Number');
            }
            if (data.hasOwnProperty('nextBlockHash')) {
                obj['nextBlockHash'] = ApiClient.convertToType(data['nextBlockHash'], 'String');
            }
            if (data.hasOwnProperty('previousBlockHash')) {
                obj['previousBlockHash'] = ApiClient.convertToType(data['previousBlockHash'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('totalCoins')) {
                obj['totalCoins'] = GetXRPRippleBlockDetailsByBlockHashResponseItemTotalCoins.constructFromObject(data['totalCoins']);
            }
            if (data.hasOwnProperty('totalFees')) {
                obj['totalFees'] = GetXRPRippleBlockDetailsByBlockHeightResponseItemTotalFees.constructFromObject(data['totalFees']);
            }
            if (data.hasOwnProperty('transactionsCount')) {
                obj['transactionsCount'] = ApiClient.convertToType(data['transactionsCount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} blockHash
 */
GetXRPRippleBlockDetailsByBlockHashResponseItem.prototype['blockHash'] = undefined;

/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} blockHeight
 */
GetXRPRippleBlockDetailsByBlockHashResponseItem.prototype['blockHeight'] = undefined;

/**
 * Represents the hash of the next block. When this is the last block of the blockchain this value will be an empty string.
 * @member {String} nextBlockHash
 */
GetXRPRippleBlockDetailsByBlockHashResponseItem.prototype['nextBlockHash'] = undefined;

/**
 * Represents the hash of the previous block, also known as the parent block.
 * @member {String} previousBlockHash
 */
GetXRPRippleBlockDetailsByBlockHashResponseItem.prototype['previousBlockHash'] = undefined;

/**
 * Defines the exact date/time when this block was mined in Unix Timestamp.
 * @member {Number} timestamp
 */
GetXRPRippleBlockDetailsByBlockHashResponseItem.prototype['timestamp'] = undefined;

/**
 * @member {module:model/GetXRPRippleBlockDetailsByBlockHashResponseItemTotalCoins} totalCoins
 */
GetXRPRippleBlockDetailsByBlockHashResponseItem.prototype['totalCoins'] = undefined;

/**
 * @member {module:model/GetXRPRippleBlockDetailsByBlockHeightResponseItemTotalFees} totalFees
 */
GetXRPRippleBlockDetailsByBlockHashResponseItem.prototype['totalFees'] = undefined;

/**
 * Represents the total number of all transactions as part of this block.
 * @member {Number} transactionsCount
 */
GetXRPRippleBlockDetailsByBlockHashResponseItem.prototype['transactionsCount'] = undefined;






export default GetXRPRippleBlockDetailsByBlockHashResponseItem;

