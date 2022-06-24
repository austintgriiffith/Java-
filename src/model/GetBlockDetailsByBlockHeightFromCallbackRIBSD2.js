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
 * The GetBlockDetailsByBlockHeightFromCallbackRIBSD2 model module.
 * @module model/GetBlockDetailsByBlockHeightFromCallbackRIBSD2
 * @version 1.6.0
 */
class GetBlockDetailsByBlockHeightFromCallbackRIBSD2 {
    /**
     * Constructs a new <code>GetBlockDetailsByBlockHeightFromCallbackRIBSD2</code>.
     * Dogecoin
     * @alias module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSD2
     * @param bits {String} Represents a specific sub-unit of Doge. Bits have two-decimal precision.
     * @param chainwork {String} Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
     * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
     * @param merkleRoot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
     * @param nonce {Number} Represents a random value that can be adjusted to satisfy the proof of work
     * @param size {Number} Represents the total size of the block in Bytes.
     * @param strippedSize {Number} Defines the numeric representation of the block size excluding the witness data.
     * @param version {Number} Represents the version of the specific block on the blockchain.
     * @param weight {Number} Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
     */
    constructor(bits, chainwork, difficulty, merkleRoot, nonce, size, strippedSize, version, weight) { 
        
        GetBlockDetailsByBlockHeightFromCallbackRIBSD2.initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, strippedSize, version, weight);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bits, chainwork, difficulty, merkleRoot, nonce, size, strippedSize, version, weight) { 
        obj['bits'] = bits;
        obj['chainwork'] = chainwork;
        obj['difficulty'] = difficulty;
        obj['merkleRoot'] = merkleRoot;
        obj['nonce'] = nonce;
        obj['size'] = size;
        obj['strippedSize'] = strippedSize;
        obj['version'] = version;
        obj['weight'] = weight;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHeightFromCallbackRIBSD2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSD2} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSD2} The populated <code>GetBlockDetailsByBlockHeightFromCallbackRIBSD2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlockDetailsByBlockHeightFromCallbackRIBSD2();

            if (data.hasOwnProperty('bits')) {
                obj['bits'] = ApiClient.convertToType(data['bits'], 'String');
            }
            if (data.hasOwnProperty('chainwork')) {
                obj['chainwork'] = ApiClient.convertToType(data['chainwork'], 'String');
            }
            if (data.hasOwnProperty('difficulty')) {
                obj['difficulty'] = ApiClient.convertToType(data['difficulty'], 'String');
            }
            if (data.hasOwnProperty('merkleRoot')) {
                obj['merkleRoot'] = ApiClient.convertToType(data['merkleRoot'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('strippedSize')) {
                obj['strippedSize'] = ApiClient.convertToType(data['strippedSize'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents a specific sub-unit of Doge. Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSD2.prototype['bits'] = undefined;

/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSD2.prototype['chainwork'] = undefined;

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSD2.prototype['difficulty'] = undefined;

/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSD2.prototype['merkleRoot'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSD2.prototype['nonce'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSD2.prototype['size'] = undefined;

/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSD2.prototype['strippedSize'] = undefined;

/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSD2.prototype['version'] = undefined;

/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetBlockDetailsByBlockHeightFromCallbackRIBSD2.prototype['weight'] = undefined;






export default GetBlockDetailsByBlockHeightFromCallbackRIBSD2;

