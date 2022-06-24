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
 * The ConfirmedTokensTransactionForCertainAmountOrHigherErc721 model module.
 * @module model/ConfirmedTokensTransactionForCertainAmountOrHigherErc721
 * @version 1.6.0
 */
class ConfirmedTokensTransactionForCertainAmountOrHigherErc721 {
    /**
     * Constructs a new <code>ConfirmedTokensTransactionForCertainAmountOrHigherErc721</code>.
     * ERC-721
     * @alias module:model/ConfirmedTokensTransactionForCertainAmountOrHigherErc721
     * @param name {String} Specifies the name of the token.
     * @param symbol {String} Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
     * @param tokenId {String} Specifies the ID of the token.
     * @param contractAddress {String} Specifies the address of the contract.
     */
    constructor(name, symbol, tokenId, contractAddress) { 
        
        ConfirmedTokensTransactionForCertainAmountOrHigherErc721.initialize(this, name, symbol, tokenId, contractAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, symbol, tokenId, contractAddress) { 
        obj['name'] = name;
        obj['symbol'] = symbol;
        obj['tokenId'] = tokenId;
        obj['contractAddress'] = contractAddress;
    }

    /**
     * Constructs a <code>ConfirmedTokensTransactionForCertainAmountOrHigherErc721</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherErc721} obj Optional instance to populate.
     * @return {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherErc721} The populated <code>ConfirmedTokensTransactionForCertainAmountOrHigherErc721</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfirmedTokensTransactionForCertainAmountOrHigherErc721();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
            }
            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the name of the token.
 * @member {String} name
 */
ConfirmedTokensTransactionForCertainAmountOrHigherErc721.prototype['name'] = undefined;

/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
ConfirmedTokensTransactionForCertainAmountOrHigherErc721.prototype['symbol'] = undefined;

/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
ConfirmedTokensTransactionForCertainAmountOrHigherErc721.prototype['tokenId'] = undefined;

/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */
ConfirmedTokensTransactionForCertainAmountOrHigherErc721.prototype['contractAddress'] = undefined;






export default ConfirmedTokensTransactionForCertainAmountOrHigherErc721;
