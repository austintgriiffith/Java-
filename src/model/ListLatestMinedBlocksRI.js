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
import ListLatestMinedBlocksRIBS from './ListLatestMinedBlocksRIBS';
import ListLatestMinedBlocksRITotalCoins from './ListLatestMinedBlocksRITotalCoins';
import ListLatestMinedBlocksRITotalFees from './ListLatestMinedBlocksRITotalFees';

/**
 * The ListLatestMinedBlocksRI model module.
 * @module model/ListLatestMinedBlocksRI
 * @version 1.6.0
 */
class ListLatestMinedBlocksRI {
    /**
     * Constructs a new <code>ListLatestMinedBlocksRI</code>.
     * @alias module:model/ListLatestMinedBlocksRI
     * @param hash {String} Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param height {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param previousBlockHash {String} Represents the hash of the previous block, also known as the parent block.
     * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix Timestamp.
     * @param transactionsCount {Number} Represents the total number of all transactions as part of this block.
     * @param totalCoins {module:model/ListLatestMinedBlocksRITotalCoins} 
     * @param totalFees {module:model/ListLatestMinedBlocksRITotalFees} 
     * @param blockchainSpecific {module:model/ListLatestMinedBlocksRIBS} 
     */
    constructor(hash, height, previousBlockHash, timestamp, transactionsCount, totalCoins, totalFees, blockchainSpecific) { 
        
        ListLatestMinedBlocksRI.initialize(this, hash, height, previousBlockHash, timestamp, transactionsCount, totalCoins, totalFees, blockchainSpecific);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, hash, height, previousBlockHash, timestamp, transactionsCount, totalCoins, totalFees, blockchainSpecific) { 
        obj['hash'] = hash;
        obj['height'] = height;
        obj['previousBlockHash'] = previousBlockHash;
        obj['timestamp'] = timestamp;
        obj['transactionsCount'] = transactionsCount;
        obj['totalCoins'] = totalCoins;
        obj['totalFees'] = totalFees;
        obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>ListLatestMinedBlocksRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListLatestMinedBlocksRI} obj Optional instance to populate.
     * @return {module:model/ListLatestMinedBlocksRI} The populated <code>ListLatestMinedBlocksRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListLatestMinedBlocksRI();

            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('previousBlockHash')) {
                obj['previousBlockHash'] = ApiClient.convertToType(data['previousBlockHash'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('transactionsCount')) {
                obj['transactionsCount'] = ApiClient.convertToType(data['transactionsCount'], 'Number');
            }
            if (data.hasOwnProperty('totalCoins')) {
                obj['totalCoins'] = ListLatestMinedBlocksRITotalCoins.constructFromObject(data['totalCoins']);
            }
            if (data.hasOwnProperty('totalFees')) {
                obj['totalFees'] = ListLatestMinedBlocksRITotalFees.constructFromObject(data['totalFees']);
            }
            if (data.hasOwnProperty('blockchainSpecific')) {
                obj['blockchainSpecific'] = ListLatestMinedBlocksRIBS.constructFromObject(data['blockchainSpecific']);
            }
        }
        return obj;
    }


}

/**
 * Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} hash
 */
ListLatestMinedBlocksRI.prototype['hash'] = undefined;

/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} height
 */
ListLatestMinedBlocksRI.prototype['height'] = undefined;

/**
 * Represents the hash of the previous block, also known as the parent block.
 * @member {String} previousBlockHash
 */
ListLatestMinedBlocksRI.prototype['previousBlockHash'] = undefined;

/**
 * Defines the exact date/time when this block was mined in Unix Timestamp.
 * @member {Number} timestamp
 */
ListLatestMinedBlocksRI.prototype['timestamp'] = undefined;

/**
 * Represents the total number of all transactions as part of this block.
 * @member {Number} transactionsCount
 */
ListLatestMinedBlocksRI.prototype['transactionsCount'] = undefined;

/**
 * @member {module:model/ListLatestMinedBlocksRITotalCoins} totalCoins
 */
ListLatestMinedBlocksRI.prototype['totalCoins'] = undefined;

/**
 * @member {module:model/ListLatestMinedBlocksRITotalFees} totalFees
 */
ListLatestMinedBlocksRI.prototype['totalFees'] = undefined;

/**
 * @member {module:model/ListLatestMinedBlocksRIBS} blockchainSpecific
 */
ListLatestMinedBlocksRI.prototype['blockchainSpecific'] = undefined;






export default ListLatestMinedBlocksRI;

