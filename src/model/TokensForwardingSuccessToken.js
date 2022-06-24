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
import TokensForwardingSuccessErc20 from './TokensForwardingSuccessErc20';
import TokensForwardingSuccessErc721 from './TokensForwardingSuccessErc721';
import TokensForwardingSuccessOmni from './TokensForwardingSuccessOmni';

/**
 * The TokensForwardingSuccessToken model module.
 * @module model/TokensForwardingSuccessToken
 * @version 1.6.0
 */
class TokensForwardingSuccessToken {
    /**
     * Constructs a new <code>TokensForwardingSuccessToken</code>.
     * @alias module:model/TokensForwardingSuccessToken
     * @implements module:model/TokensForwardingSuccessErc20
     * @implements module:model/TokensForwardingSuccessErc721
     * @implements module:model/TokensForwardingSuccessOmni
     * @param name {String} Specifies the name of the token.
     * @param symbol {String} Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
     * @param amount {String} Defines the amount of tokens sent with the confirmed transaction.
     * @param contractAddress {String} Specifies the address of the contract.
     * @param tokenId {String} Specifies the ID of the token.
     * @param propertyId {String} Defines the ID of the property for Omni Layer.
     * @param transactionType {String} Defines the type of the transaction.
     * @param createdByTransactionId {String} The transaction ID used to create the token.
     */
    constructor(name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId) { 
        TokensForwardingSuccessErc20.initialize(this, name, symbol, amount, contractAddress);TokensForwardingSuccessErc721.initialize(this, name, symbol, tokenId, contractAddress);TokensForwardingSuccessOmni.initialize(this, name, propertyId, transactionType, createdByTransactionId, amount);
        TokensForwardingSuccessToken.initialize(this, name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, symbol, amount, contractAddress, tokenId, propertyId, transactionType, createdByTransactionId) { 
        obj['name'] = name;
        obj['symbol'] = symbol;
        obj['amount'] = amount;
        obj['contractAddress'] = contractAddress;
        obj['tokenId'] = tokenId;
        obj['propertyId'] = propertyId;
        obj['transactionType'] = transactionType;
        obj['createdByTransactionId'] = createdByTransactionId;
    }

    /**
     * Constructs a <code>TokensForwardingSuccessToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokensForwardingSuccessToken} obj Optional instance to populate.
     * @return {module:model/TokensForwardingSuccessToken} The populated <code>TokensForwardingSuccessToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokensForwardingSuccessToken();
            TokensForwardingSuccessErc20.constructFromObject(data, obj);
            TokensForwardingSuccessErc721.constructFromObject(data, obj);
            TokensForwardingSuccessOmni.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('decimals')) {
                obj['decimals'] = ApiClient.convertToType(data['decimals'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
            }
            if (data.hasOwnProperty('propertyId')) {
                obj['propertyId'] = ApiClient.convertToType(data['propertyId'], 'String');
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
            if (data.hasOwnProperty('createdByTransactionId')) {
                obj['createdByTransactionId'] = ApiClient.convertToType(data['createdByTransactionId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the name of the token.
 * @member {String} name
 */
TokensForwardingSuccessToken.prototype['name'] = undefined;

/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
TokensForwardingSuccessToken.prototype['symbol'] = undefined;

/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
TokensForwardingSuccessToken.prototype['decimals'] = undefined;

/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
TokensForwardingSuccessToken.prototype['amount'] = undefined;

/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */
TokensForwardingSuccessToken.prototype['contractAddress'] = undefined;

/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
TokensForwardingSuccessToken.prototype['tokenId'] = undefined;

/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
TokensForwardingSuccessToken.prototype['propertyId'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} transactionType
 */
TokensForwardingSuccessToken.prototype['transactionType'] = undefined;

/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
TokensForwardingSuccessToken.prototype['createdByTransactionId'] = undefined;


// Implement TokensForwardingSuccessErc20 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
TokensForwardingSuccessErc20.prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
TokensForwardingSuccessErc20.prototype['symbol'] = undefined;
/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
TokensForwardingSuccessErc20.prototype['decimals'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
TokensForwardingSuccessErc20.prototype['amount'] = undefined;
/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
TokensForwardingSuccessErc20.prototype['contractAddress'] = undefined;
// Implement TokensForwardingSuccessErc721 interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
TokensForwardingSuccessErc721.prototype['name'] = undefined;
/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
TokensForwardingSuccessErc721.prototype['symbol'] = undefined;
/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
TokensForwardingSuccessErc721.prototype['tokenId'] = undefined;
/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */
TokensForwardingSuccessErc721.prototype['contractAddress'] = undefined;
// Implement TokensForwardingSuccessOmni interface:
/**
 * Specifies the name of the token.
 * @member {String} name
 */
TokensForwardingSuccessOmni.prototype['name'] = undefined;
/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
TokensForwardingSuccessOmni.prototype['propertyId'] = undefined;
/**
 * Defines the type of the transaction.
 * @member {String} transactionType
 */
TokensForwardingSuccessOmni.prototype['transactionType'] = undefined;
/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
TokensForwardingSuccessOmni.prototype['createdByTransactionId'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
TokensForwardingSuccessOmni.prototype['amount'] = undefined;




export default TokensForwardingSuccessToken;

