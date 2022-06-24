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
import GetBlockDetailsByBlockHashFromCallbackRIBSB from './GetBlockDetailsByBlockHashFromCallbackRIBSB';
import GetBlockDetailsByBlockHashFromCallbackRIBSBC from './GetBlockDetailsByBlockHashFromCallbackRIBSBC';
import GetBlockDetailsByBlockHashFromCallbackRIBSBSC from './GetBlockDetailsByBlockHashFromCallbackRIBSBSC';
import GetBlockDetailsByBlockHashFromCallbackRIBSD from './GetBlockDetailsByBlockHashFromCallbackRIBSD';
import GetBlockDetailsByBlockHashFromCallbackRIBSD2 from './GetBlockDetailsByBlockHashFromCallbackRIBSD2';
import GetBlockDetailsByBlockHashFromCallbackRIBSE from './GetBlockDetailsByBlockHashFromCallbackRIBSE';
import GetBlockDetailsByBlockHashFromCallbackRIBSEC from './GetBlockDetailsByBlockHashFromCallbackRIBSEC';
import GetBlockDetailsByBlockHashFromCallbackRIBSL from './GetBlockDetailsByBlockHashFromCallbackRIBSL';
import GetBlockDetailsByBlockHashFromCallbackRIBSX from './GetBlockDetailsByBlockHashFromCallbackRIBSX';
import GetBlockDetailsByBlockHashFromCallbackRIBSZ from './GetBlockDetailsByBlockHashFromCallbackRIBSZ';
import GetBlockDetailsByBlockHashFromCallbackRIBSZ2 from './GetBlockDetailsByBlockHashFromCallbackRIBSZ2';
import GetLatestMinedXRPRippleBlockRITotalCoins from './GetLatestMinedXRPRippleBlockRITotalCoins';
import GetLatestMinedXRPRippleBlockRITotalFees from './GetLatestMinedXRPRippleBlockRITotalFees';

/**
 * The GetBlockDetailsByBlockHashFromCallbackRIBS model module.
 * @module model/GetBlockDetailsByBlockHashFromCallbackRIBS
 * @version 1.6.0
 */
class GetBlockDetailsByBlockHashFromCallbackRIBS {
    /**
     * Constructs a new <code>GetBlockDetailsByBlockHashFromCallbackRIBS</code>.
     * @alias module:model/GetBlockDetailsByBlockHashFromCallbackRIBS
     * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSB
     * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSBC
     * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSL
     * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSD
     * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSD2
     * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSE
     * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSBSC
     * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSEC
     * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSZ
     * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSX
     * @implements module:model/GetBlockDetailsByBlockHashFromCallbackRIBSZ2
     * @param bits {String} Represents a specific sub-unit of Zcash. Bits have two-decimal precision
     * @param chainwork {String} Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
     * @param difficulty {String} Defines how difficult it is for a specific miner to mine the block.
     * @param merkleRoot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
     * @param nonce {String} Represents a random value that can be adjusted to satisfy the proof of work
     * @param size {Number} Represents the total size of the block in Bytes.
     * @param strippedSize {Number} Defines the numeric representation of the block size excluding the witness data.
     * @param version {Number} Represents the transaction version number.
     * @param versionHex {String} Is the hexadecimal string representation of the block's version.
     * @param weight {Number} Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
     * @param strippedsize {Number} Defines the numeric representation of the block size excluding the witness data.
     * @param extraData {String} Represents any data that can be included by the miner in the block.
     * @param gasLimit {Number} Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
     * @param gasUsed {Number} Defines how much of the gas for the block has been used.
     * @param minedInSeconds {Number} Specifies the amount of time required for the block to be mined in seconds.
     * @param sha3Uncles {String} Defines the combined hash of all uncles for a given parent.
     * @param totalDifficulty {String} Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
     * @param dsBlock {Number} Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
     * @param dsDifficulty {String} Defines how difficult it is to mine the dsBlocks.
     * @param dsLeader {String} Represents a part of the DS Committee which leads the consensus protocol for the epoch.
     * @param microBlocks {Array.<String>} 
     * @param totalCoins {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} 
     * @param totalFees {module:model/GetLatestMinedXRPRippleBlockRITotalFees} 
     */
    constructor(bits, chainwork, difficulty, merkleRoot, nonce, size, strippedSize, version, versionHex, weight, strippedsize, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, dsBlock, dsDifficulty, dsLeader, microBlocks, totalCoins, totalFees) { 
        GetBlockDetailsByBlockHashFromCallbackRIBSB.initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, strippedSize, version, versionHex, weight);GetBlockDetailsByBlockHashFromCallbackRIBSBC.initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, version, versionHex);GetBlockDetailsByBlockHashFromCallbackRIBSL.initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, strippedsize, version, versionHex, weight);GetBlockDetailsByBlockHashFromCallbackRIBSD.initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, version, versionHex);GetBlockDetailsByBlockHashFromCallbackRIBSD2.initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, strippedSize, version, weight);GetBlockDetailsByBlockHashFromCallbackRIBSE.initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty);GetBlockDetailsByBlockHashFromCallbackRIBSBSC.initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty);GetBlockDetailsByBlockHashFromCallbackRIBSEC.initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty);GetBlockDetailsByBlockHashFromCallbackRIBSZ.initialize(this, difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks);GetBlockDetailsByBlockHashFromCallbackRIBSX.initialize(this, totalCoins, totalFees);GetBlockDetailsByBlockHashFromCallbackRIBSZ2.initialize(this, bits, chainwork, merkleRoot, nonce, size, version);
        GetBlockDetailsByBlockHashFromCallbackRIBS.initialize(this, bits, chainwork, difficulty, merkleRoot, nonce, size, strippedSize, version, versionHex, weight, strippedsize, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, dsBlock, dsDifficulty, dsLeader, microBlocks, totalCoins, totalFees);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bits, chainwork, difficulty, merkleRoot, nonce, size, strippedSize, version, versionHex, weight, strippedsize, extraData, gasLimit, gasUsed, minedInSeconds, sha3Uncles, totalDifficulty, dsBlock, dsDifficulty, dsLeader, microBlocks, totalCoins, totalFees) { 
        obj['bits'] = bits;
        obj['chainwork'] = chainwork;
        obj['difficulty'] = difficulty;
        obj['merkleRoot'] = merkleRoot;
        obj['nonce'] = nonce;
        obj['size'] = size;
        obj['strippedSize'] = strippedSize;
        obj['version'] = version;
        obj['versionHex'] = versionHex;
        obj['weight'] = weight;
        obj['strippedsize'] = strippedsize;
        obj['extraData'] = extraData;
        obj['gasLimit'] = gasLimit;
        obj['gasUsed'] = gasUsed;
        obj['minedInSeconds'] = minedInSeconds;
        obj['sha3Uncles'] = sha3Uncles;
        obj['totalDifficulty'] = totalDifficulty;
        obj['dsBlock'] = dsBlock;
        obj['dsDifficulty'] = dsDifficulty;
        obj['dsLeader'] = dsLeader;
        obj['microBlocks'] = microBlocks;
        obj['totalCoins'] = totalCoins;
        obj['totalFees'] = totalFees;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHashFromCallbackRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHashFromCallbackRIBS} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHashFromCallbackRIBS} The populated <code>GetBlockDetailsByBlockHashFromCallbackRIBS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlockDetailsByBlockHashFromCallbackRIBS();
            GetBlockDetailsByBlockHashFromCallbackRIBSB.constructFromObject(data, obj);
            GetBlockDetailsByBlockHashFromCallbackRIBSBC.constructFromObject(data, obj);
            GetBlockDetailsByBlockHashFromCallbackRIBSL.constructFromObject(data, obj);
            GetBlockDetailsByBlockHashFromCallbackRIBSD.constructFromObject(data, obj);
            GetBlockDetailsByBlockHashFromCallbackRIBSD2.constructFromObject(data, obj);
            GetBlockDetailsByBlockHashFromCallbackRIBSE.constructFromObject(data, obj);
            GetBlockDetailsByBlockHashFromCallbackRIBSBSC.constructFromObject(data, obj);
            GetBlockDetailsByBlockHashFromCallbackRIBSEC.constructFromObject(data, obj);
            GetBlockDetailsByBlockHashFromCallbackRIBSZ.constructFromObject(data, obj);
            GetBlockDetailsByBlockHashFromCallbackRIBSX.constructFromObject(data, obj);
            GetBlockDetailsByBlockHashFromCallbackRIBSZ2.constructFromObject(data, obj);

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
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
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
            if (data.hasOwnProperty('versionHex')) {
                obj['versionHex'] = ApiClient.convertToType(data['versionHex'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('strippedsize')) {
                obj['strippedsize'] = ApiClient.convertToType(data['strippedsize'], 'Number');
            }
            if (data.hasOwnProperty('extraData')) {
                obj['extraData'] = ApiClient.convertToType(data['extraData'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'Number');
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], 'Number');
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
            if (data.hasOwnProperty('uncles')) {
                obj['uncles'] = ApiClient.convertToType(data['uncles'], ['String']);
            }
            if (data.hasOwnProperty('dsBlock')) {
                obj['dsBlock'] = ApiClient.convertToType(data['dsBlock'], 'Number');
            }
            if (data.hasOwnProperty('dsDifficulty')) {
                obj['dsDifficulty'] = ApiClient.convertToType(data['dsDifficulty'], 'String');
            }
            if (data.hasOwnProperty('dsLeader')) {
                obj['dsLeader'] = ApiClient.convertToType(data['dsLeader'], 'String');
            }
            if (data.hasOwnProperty('microBlocks')) {
                obj['microBlocks'] = ApiClient.convertToType(data['microBlocks'], ['String']);
            }
            if (data.hasOwnProperty('totalCoins')) {
                obj['totalCoins'] = GetLatestMinedXRPRippleBlockRITotalCoins.constructFromObject(data['totalCoins']);
            }
            if (data.hasOwnProperty('totalFees')) {
                obj['totalFees'] = GetLatestMinedXRPRippleBlockRITotalFees.constructFromObject(data['totalFees']);
            }
        }
        return obj;
    }


}

/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['bits'] = undefined;

/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['chainwork'] = undefined;

/**
 * Defines how difficult it is for a specific miner to mine the block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['difficulty'] = undefined;

/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['merkleRoot'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['nonce'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['size'] = undefined;

/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['strippedSize'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['version'] = undefined;

/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['versionHex'] = undefined;

/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['weight'] = undefined;

/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedsize
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['strippedsize'] = undefined;

/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['extraData'] = undefined;

/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['gasLimit'] = undefined;

/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['gasUsed'] = undefined;

/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['minedInSeconds'] = undefined;

/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['sha3Uncles'] = undefined;

/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['totalDifficulty'] = undefined;

/**
 * @member {Array.<String>} uncles
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['uncles'] = undefined;

/**
 * Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
 * @member {Number} dsBlock
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['dsBlock'] = undefined;

/**
 * Defines how difficult it is to mine the dsBlocks.
 * @member {String} dsDifficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['dsDifficulty'] = undefined;

/**
 * Represents a part of the DS Committee which leads the consensus protocol for the epoch.
 * @member {String} dsLeader
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['dsLeader'] = undefined;

/**
 * @member {Array.<String>} microBlocks
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['microBlocks'] = undefined;

/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} totalCoins
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['totalCoins'] = undefined;

/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalFees} totalFees
 */
GetBlockDetailsByBlockHashFromCallbackRIBS.prototype['totalFees'] = undefined;


// Implement GetBlockDetailsByBlockHashFromCallbackRIBSB interface:
/**
 * A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHashFromCallbackRIBSB.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHashFromCallbackRIBSB.prototype['chainwork'] = undefined;
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBSB.prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHashFromCallbackRIBSB.prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */
GetBlockDetailsByBlockHashFromCallbackRIBSB.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashFromCallbackRIBSB.prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetBlockDetailsByBlockHashFromCallbackRIBSB.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHashFromCallbackRIBSB.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHashFromCallbackRIBSB.prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetBlockDetailsByBlockHashFromCallbackRIBSB.prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSBC interface:
/**
 * A sub-unit of BCH equal to 0.000001 BCH, or 100 Satoshi, and is the same as microbitcoincash (μBCH). Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBC.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBC.prototype['chainwork'] = undefined;
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBC.prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBC.prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBC.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBC.prototype['size'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBC.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBC.prototype['versionHex'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSL interface:
/**
 * Represents a specific sub-unit of Litecoin. Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHashFromCallbackRIBSL.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHashFromCallbackRIBSL.prototype['chainwork'] = undefined;
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBSL.prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHashFromCallbackRIBSL.prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */
GetBlockDetailsByBlockHashFromCallbackRIBSL.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashFromCallbackRIBSL.prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedsize
 */
GetBlockDetailsByBlockHashFromCallbackRIBSL.prototype['strippedsize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHashFromCallbackRIBSL.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHashFromCallbackRIBSL.prototype['versionHex'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetBlockDetailsByBlockHashFromCallbackRIBSL.prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSD interface:
/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHashFromCallbackRIBSD.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHashFromCallbackRIBSD.prototype['chainwork'] = undefined;
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBSD.prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHashFromCallbackRIBSD.prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */
GetBlockDetailsByBlockHashFromCallbackRIBSD.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashFromCallbackRIBSD.prototype['size'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHashFromCallbackRIBSD.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetBlockDetailsByBlockHashFromCallbackRIBSD.prototype['versionHex'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSD2 interface:
/**
 * Represents a specific sub-unit of Doge. Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHashFromCallbackRIBSD2.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHashFromCallbackRIBSD2.prototype['chainwork'] = undefined;
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBSD2.prototype['difficulty'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHashFromCallbackRIBSD2.prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */
GetBlockDetailsByBlockHashFromCallbackRIBSD2.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashFromCallbackRIBSD2.prototype['size'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetBlockDetailsByBlockHashFromCallbackRIBSD2.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHashFromCallbackRIBSD2.prototype['version'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */
GetBlockDetailsByBlockHashFromCallbackRIBSD2.prototype['weight'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSE interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBSE.prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetBlockDetailsByBlockHashFromCallbackRIBSE.prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
GetBlockDetailsByBlockHashFromCallbackRIBSE.prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
GetBlockDetailsByBlockHashFromCallbackRIBSE.prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
GetBlockDetailsByBlockHashFromCallbackRIBSE.prototype['minedInSeconds'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetBlockDetailsByBlockHashFromCallbackRIBSE.prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetBlockDetailsByBlockHashFromCallbackRIBSE.prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashFromCallbackRIBSE.prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBSE.prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
GetBlockDetailsByBlockHashFromCallbackRIBSE.prototype['uncles'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSBSC interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBSC.prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBSC.prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBSC.prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBSC.prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in second
 * @member {Number} minedInSeconds
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBSC.prototype['minedInSeconds'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBSC.prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBSC.prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBSC.prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block
 * @member {String} totalDifficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBSC.prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
GetBlockDetailsByBlockHashFromCallbackRIBSBSC.prototype['uncles'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSEC interface:
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBSEC.prototype['difficulty'] = undefined;
/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetBlockDetailsByBlockHashFromCallbackRIBSEC.prototype['extraData'] = undefined;
/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
GetBlockDetailsByBlockHashFromCallbackRIBSEC.prototype['gasLimit'] = undefined;
/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
GetBlockDetailsByBlockHashFromCallbackRIBSEC.prototype['gasUsed'] = undefined;
/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
GetBlockDetailsByBlockHashFromCallbackRIBSEC.prototype['minedInSeconds'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetBlockDetailsByBlockHashFromCallbackRIBSEC.prototype['nonce'] = undefined;
/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetBlockDetailsByBlockHashFromCallbackRIBSEC.prototype['sha3Uncles'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashFromCallbackRIBSEC.prototype['size'] = undefined;
/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBSEC.prototype['totalDifficulty'] = undefined;
/**
 * @member {Array.<String>} uncles
 */
GetBlockDetailsByBlockHashFromCallbackRIBSEC.prototype['uncles'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSZ interface:
/**
 * Defines how difficult it is for a specific miner to mine the block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['difficulty'] = undefined;
/**
 * Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
 * @member {Number} dsBlock
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['dsBlock'] = undefined;
/**
 * Defines how difficult it is to mine the dsBlocks.
 * @member {String} dsDifficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['dsDifficulty'] = undefined;
/**
 * Represents a part of the DS Committee which leads the consensus protocol for the epoch.
 * @member {String} dsLeader
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['dsLeader'] = undefined;
/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['gasLimit'] = undefined;
/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['gasUsed'] = undefined;
/**
 * @member {Array.<String>} microBlocks
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['microBlocks'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSX interface:
/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} totalCoins
 */
GetBlockDetailsByBlockHashFromCallbackRIBSX.prototype['totalCoins'] = undefined;
/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalFees} totalFees
 */
GetBlockDetailsByBlockHashFromCallbackRIBSX.prototype['totalFees'] = undefined;
// Implement GetBlockDetailsByBlockHashFromCallbackRIBSZ2 interface:
/**
 * Represents a specific sub-unit of Zcash. Bits have two-decimal precision
 * @member {String} bits
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ2.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ2.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ2.prototype['merkleRoot'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ2.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ2.prototype['size'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ2.prototype['version'] = undefined;




export default GetBlockDetailsByBlockHashFromCallbackRIBS;

