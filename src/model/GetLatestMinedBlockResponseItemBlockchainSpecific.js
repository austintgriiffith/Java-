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
import GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin from './GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin';
import GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash from './GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash';
import GetLatestMinedBlockResponseItemBlockchainSpecificDash from './GetLatestMinedBlockResponseItemBlockchainSpecificDash';
import GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin from './GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin';
import GetLatestMinedBlockResponseItemBlockchainSpecificEthereum from './GetLatestMinedBlockResponseItemBlockchainSpecificEthereum';
import GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic from './GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic';
import GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin from './GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin';

/**
 * The GetLatestMinedBlockResponseItemBlockchainSpecific model module.
 * @module model/GetLatestMinedBlockResponseItemBlockchainSpecific
 * @version 2.0.0
 */
class GetLatestMinedBlockResponseItemBlockchainSpecific {
    /**
     * Constructs a new <code>GetLatestMinedBlockResponseItemBlockchainSpecific</code>.
     * @alias module:model/GetLatestMinedBlockResponseItemBlockchainSpecific
     * @implements module:model/GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin
     * @implements module:model/GetLatestMinedBlockResponseItemBlockchainSpecificEthereum
     * @implements module:model/GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic
     * @implements module:model/GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash
     * @implements module:model/GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin
     * @implements module:model/GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin
     * @implements module:model/GetLatestMinedBlockResponseItemBlockchainSpecificDash
     * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
     * @param nonce {String} Represents a random value that can be adjusted to satisfy the proof of work
     * @param size {Number} Represents the total size of the block in Bytes.
     * @param bits {String} Represents a specific sub-unit of Dash. Bits have two-decimal precision.
     * @param chainwork {String} Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
     * @param merkleRoot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
     * @param strippedSize {Number} Defines the numeric representation of the block size excluding the witness data.
     * @param version {Number} Represents the version of the specific block on the blockchain.
     * @param versionHex {String} Is the hexadecimal string representation of the block's version.
     * @param weight {Number} Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
     * @param extraData {String} Represents any data that can be included by the miner in the block.
     * @param gasLimit {String} Defines the total gas limit of all transactions in the block.
     * @param gasUsed {String} Represents the total amount of gas used by all transactions in this block.
     * @param minedInSeconds {Number} Specifies the amount of time required for the block to be mined in seconds.
     * @param sha3Uncles {String} Defines the combined hash of all uncles for a given parent.
     * @param totalDifficulty {String} Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
     */
    constructor(difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty) { 
        GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight);GetLatestMinedBlockResponseItemBlockchainSpecificEthereum.initialize(this, difficulty, nonce, size, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty);GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic.initialize(this, difficulty, nonce, size, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty);GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, version, versionHex);GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight);GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, weight);GetLatestMinedBlockResponseItemBlockchainSpecificDash.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, version, versionHex);
        GetLatestMinedBlockResponseItemBlockchainSpecific.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, versionHex, weight, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty) { 
        obj['difficulty'] = difficulty;
        obj['nonce'] = nonce;
        obj['size'] = size;
        obj['bits'] = bits;
        obj['chainwork'] = chainwork;
        obj['merkleRoot'] = merkleRoot;
        obj['strippedSize'] = strippedSize;
        obj['version'] = version;
        obj['versionHex'] = versionHex;
        obj['weight'] = weight;
        obj['extraData'] = extraData;
        obj['gasLimit'] = gasLimit;
        obj['gasUsed'] = gasUsed;
        obj['minedInSeconds'] = minedInSeconds;
        obj['sha3Uncles'] = sha3Uncles;
        obj['totalDifficulty'] = totalDifficulty;
    }

    /**
     * Constructs a <code>GetLatestMinedBlockResponseItemBlockchainSpecific</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLatestMinedBlockResponseItemBlockchainSpecific} obj Optional instance to populate.
     * @return {module:model/GetLatestMinedBlockResponseItemBlockchainSpecific} The populated <code>GetLatestMinedBlockResponseItemBlockchainSpecific</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLatestMinedBlockResponseItemBlockchainSpecific();
            GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin.constructFromObject(data, obj);
            GetLatestMinedBlockResponseItemBlockchainSpecificEthereum.constructFromObject(data, obj);
            GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic.constructFromObject(data, obj);
            GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash.constructFromObject(data, obj);
            GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin.constructFromObject(data, obj);
            GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin.constructFromObject(data, obj);
            GetLatestMinedBlockResponseItemBlockchainSpecificDash.constructFromObject(data, obj);

            if (data.hasOwnProperty('difficulty')) {
                obj['difficulty'] = ApiClient.convertToType(data['difficulty'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('bits')) {
                obj['bits'] = ApiClient.convertToType(data['bits'], 'String');
            }
            if (data.hasOwnProperty('chainwork')) {
                obj['chainwork'] = ApiClient.convertToType(data['chainwork'], 'String');
            }
            if (data.hasOwnProperty('merkleRoot')) {
                obj['merkleRoot'] = ApiClient.convertToType(data['merkleRoot'], 'String');
            }
            if (data.hasOwnProperty('strippedSize')) {
                obj['strippedSize'] = ApiClient.convertToType(data['strippedSize'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('versionHex')) {
                obj['versionHex'] = ApiClient.convertToType(data['versionHex'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('extraData')) {
                obj['extraData'] = ApiClient.convertToType(data['extraData'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], 'String');
            }
            if (data.hasOwnProperty('minedInSeconds')) {
                obj['minedInSeconds'] = ApiClient.convertToType(data['minedInSeconds'], 'Number');
            }
            if (data.hasOwnProperty('sha3Uncles')) {
                obj['sha3Uncles'] = ApiClient.convertToType(data['sha3Uncles'], 'String');
            }
            if (data.hasOwnProperty('totalDifficulty')) {
                obj['totalDifficulty'] = ApiClient.convertToType(data['totalDifficulty'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['difficulty'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['nonce'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['size'] = undefined;

/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */
GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['bits'] = undefined;

/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['chainwork'] = undefined;

/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['merkleRoot'] = undefined;

/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['strippedSize'] = undefined;

/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['version'] = undefined;

/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['versionHex'] = undefined;

/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['weight'] = undefined;

/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['extraData'] = undefined;

/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['gasLimit'] = undefined;

/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['gasUsed'] = undefined;

/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['minedInSeconds'] = undefined;

/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['sha3Uncles'] = undefined;

/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
GetLatestMinedBlockResponseItemBlockchainSpecific.prototype['totalDifficulty'] = undefined;


// Implement GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin.prototype['size'] = undefined;
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin.prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin.prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin.prototype['weight'] = undefined;
// Implement GetLatestMinedBlockResponseItemBlockchainSpecificEthereum interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereum.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereum.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereum.prototype['size'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereum.prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereum.prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereum.prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereum.prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereum.prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereum.prototype['totalDifficulty'] = undefined;
// Implement GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic.prototype['size'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic.prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic.prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic.prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic.prototype['minedInSeconds'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic.prototype['sha3Uncles'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
GetLatestMinedBlockResponseItemBlockchainSpecificEthereumClassic.prototype['totalDifficulty'] = undefined;
// Implement GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash.prototype['size'] = undefined;
/**
 * A sub-unit of BCH equal to 0.000001 BCH, or 100 Satoshi, and is the same as microbitcoincash (μBCH). Bits have two-decimal precision.
 * @member {String} bits
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash.prototype['merkleRoot'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetLatestMinedBlockResponseItemBlockchainSpecificBitcoinCash.prototype['versionHex'] = undefined;
// Implement GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin.prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Litecoin. Bits have two-decimal precision.
 * @member {String} bits
 */
GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin.prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin.prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetLatestMinedBlockResponseItemBlockchainSpecificLitecoin.prototype['weight'] = undefined;
// Implement GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin.prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Doge. Bits have two-decimal precision.
 * @member {String} bits
 */
GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin.prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin.prototype['version'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetLatestMinedBlockResponseItemBlockchainSpecificDogecoin.prototype['weight'] = undefined;
// Implement GetLatestMinedBlockResponseItemBlockchainSpecificDash interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetLatestMinedBlockResponseItemBlockchainSpecificDash.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetLatestMinedBlockResponseItemBlockchainSpecificDash.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetLatestMinedBlockResponseItemBlockchainSpecificDash.prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */
GetLatestMinedBlockResponseItemBlockchainSpecificDash.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetLatestMinedBlockResponseItemBlockchainSpecificDash.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetLatestMinedBlockResponseItemBlockchainSpecificDash.prototype['merkleRoot'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetLatestMinedBlockResponseItemBlockchainSpecificDash.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetLatestMinedBlockResponseItemBlockchainSpecificDash.prototype['versionHex'] = undefined;




export default GetLatestMinedBlockResponseItemBlockchainSpecific;

