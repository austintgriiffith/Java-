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
import GetTransactionDetailsByTransactionIDRIBSECGasPrice from './GetTransactionDetailsByTransactionIDRIBSECGasPrice';

/**
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBSEC model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBSEC
 * @version 1.6.0
 */
class GetTransactionDetailsByTransactionIDFromCallbackRIBSEC {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSEC</code>.
     * Ethereum Classic
     * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSEC
     * @param contract {String} Represents the specific transaction contract.
     * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
     * @param gasPrice {module:model/GetTransactionDetailsByTransactionIDRIBSECGasPrice} 
     * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
     * @param inputData {String} Represents additional information that is required for the transaction.
     * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
     */
    constructor(contract, gasLimit, gasPrice, gasUsed, inputData, nonce) { 
        
        GetTransactionDetailsByTransactionIDFromCallbackRIBSEC.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contract, gasLimit, gasPrice, gasUsed, inputData, nonce) { 
        obj['contract'] = contract;
        obj['gasLimit'] = gasLimit;
        obj['gasPrice'] = gasPrice;
        obj['gasUsed'] = gasUsed;
        obj['inputData'] = inputData;
        obj['nonce'] = nonce;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSEC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSEC} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSEC} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSEC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRIBSEC();

            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ApiClient.convertToType(data['contract'], 'String');
            }
            if (data.hasOwnProperty('gasLimit')) {
                obj['gasLimit'] = ApiClient.convertToType(data['gasLimit'], 'String');
            }
            if (data.hasOwnProperty('gasPrice')) {
                obj['gasPrice'] = GetTransactionDetailsByTransactionIDRIBSECGasPrice.constructFromObject(data['gasPrice']);
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], 'String');
            }
            if (data.hasOwnProperty('inputData')) {
                obj['inputData'] = ApiClient.convertToType(data['inputData'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSEC.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSEC.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSECGasPrice} gasPrice
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSEC.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSEC.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSEC.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSEC.prototype['nonce'] = undefined;






export default GetTransactionDetailsByTransactionIDFromCallbackRIBSEC;

