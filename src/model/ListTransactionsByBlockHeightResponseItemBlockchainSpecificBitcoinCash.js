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
import ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin from './ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin';
import ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout from './ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout';

/**
 * The ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash model module.
 * @module model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash
 * @version 2.0.0
 */
class ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash {
    /**
     * Constructs a new <code>ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash</code>.
     * Bitcoin Cash
     * @alias module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash
     * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
     * @param size {Number} Represents the total size of this transaction.
     * @param version {Number} Represents the total size of this transaction.
     * @param vin {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin>} Represents the transaction inputs.
     * @param vout {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout>} Represents the transaction outputs.
     */
    constructor(locktime, size, version, vin, vout) { 
        
        ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash.initialize(this, locktime, size, version, vin, vout);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, size, version, vin, vout) { 
        obj['locktime'] = locktime;
        obj['size'] = size;
        obj['version'] = version;
        obj['vin'] = vin;
        obj['vout'] = vout;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash} The populated <code>ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash();

            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout]);
            }
        }
        return obj;
    }


}

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash.prototype['size'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} version
 */
ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin>} vin
 */
ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout>} vout
 */
ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash.prototype['vout'] = undefined;






export default ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash;

