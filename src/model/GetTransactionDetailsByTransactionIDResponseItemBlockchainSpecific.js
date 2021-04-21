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
import GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin from './GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin';
import GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash from './GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash';
import GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash from './GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash';
import GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVin from './GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVin';
import GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVout from './GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVout';
import GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin from './GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin';
import GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum from './GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum';
import GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic from './GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic';
import GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassicGasPrice from './GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassicGasPrice';
import GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin from './GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin';

/**
 * The GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific model module.
 * @module model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific
 * @version 2.0.0
 */
class GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific</code>.
     * @alias module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific
     * @implements module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin
     * @implements module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash
     * @implements module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin
     * @implements module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin
     * @implements module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash
     * @implements module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum
     * @implements module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic
     * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
     * @param size {Number} Represents the total size of this transaction.
     * @param vSize {Number} Represents the virtual size of this transaction.
     * @param version {Number} Represents transaction version number.
     * @param vin {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVin>} Represents the transaction inputs.
     * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVout>} Represents the transaction outputs.
     * @param vsize {Number} Represents the virtual size of this transaction.
     * @param contract {String} Represents the specific transaction contract.
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     * @param gasPrice {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassicGasPrice} 
     * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
     * @param inputData {String} Represents additional information that is required for the transaction.
     * @param nonce {String} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     * @param transactionStatus {String} Represents the status of this transaction.
     */
    constructor(locktime, size, vSize, version, vin, vout, vsize, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) { 
        GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin.initialize(this, locktime, size, vSize, version, vin, vout);GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash.initialize(this, locktime, size, version, vin, vout);GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin.initialize(this, locktime, size, version, vin, vout, vsize);GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin.initialize(this, locktime, size, version, vin, vout);GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash.initialize(this, locktime, size, version, vin, vout);GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);
        GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.initialize(this, locktime, size, vSize, version, vin, vout, vsize, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, locktime, size, vSize, version, vin, vout, vsize, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) { 
        obj['locktime'] = locktime;
        obj['size'] = size;
        obj['vSize'] = vSize;
        obj['version'] = version;
        obj['vin'] = vin;
        obj['vout'] = vout;
        obj['vsize'] = vsize;
        obj['contract'] = contract;
        obj['gasLimit'] = gasLimit;
        obj['gasPrice'] = gasPrice;
        obj['gasUsed'] = gasUsed;
        obj['inputData'] = inputData;
        obj['nonce'] = nonce;
        obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific} The populated <code>GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific();
            GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin.constructFromObject(data, obj);
            GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash.constructFromObject(data, obj);
            GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin.constructFromObject(data, obj);
            GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin.constructFromObject(data, obj);
            GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash.constructFromObject(data, obj);
            GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum.constructFromObject(data, obj);
            GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic.constructFromObject(data, obj);

            if (data.hasOwnProperty('locktime')) {
                obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('vSize')) {
                obj['vSize'] = ApiClient.convertToType(data['vSize'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], [GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVin]);
            }
            if (data.hasOwnProperty('vout')) {
                obj['vout'] = ApiClient.convertToType(data['vout'], [GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVout]);
            }
            if (data.hasOwnProperty('vsize')) {
                obj['vsize'] = ApiClient.convertToType(data['vsize'], 'Number');
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassicGasPrice.constructFromObject(data['gasPrice']);
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], 'String');
            }
            if (data.hasOwnProperty('inputData')) {
                obj['inputData'] = ApiClient.convertToType(data['inputData'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
            }
            if (data.hasOwnProperty('transactionStatus')) {
                obj['transactionStatus'] = ApiClient.convertToType(data['transactionStatus'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['vSize'] = undefined;

/**
 * Represents transaction version number.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVin>} vin
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVout>} vout
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['vout'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['vsize'] = undefined;

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassicGasPrice} gasPrice
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['nonce'] = undefined;

/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['transactionStatus'] = undefined;


// Implement GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin.prototype['vSize'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinVin>} vin
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinVout>} vout
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin.prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash.prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCashVin>} vin
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCashVout>} vout
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash.prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin.prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin>} vin
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVout>} vout
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin.prototype['vout'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin.prototype['vsize'] = undefined;
// Implement GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin.prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoinVin>} vin
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoinVout>} vout
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin.prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash.prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVin>} vin
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVout>} vout
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash.prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumGasPrice} gasPrice
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum.prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum.prototype['transactionStatus'] = undefined;
// Implement GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassicGasPrice} gasPrice
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic.prototype['nonce'] = undefined;




export default GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific;

