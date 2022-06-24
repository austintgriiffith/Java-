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
 * The ListTokensByAddressRI model module.
 * @module model/ListTokensByAddressRI
 * @version 1.6.0
 */
class ListTokensByAddressRI {
    /**
     * Constructs a new <code>ListTokensByAddressRI</code>.
     * @alias module:model/ListTokensByAddressRI
     * @param confirmedBalance {String} Defines the token balance that has been confirmed.
     * @param contractAddress {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
     * @param name {String} Defines the token's name as a string.
     * @param symbol {String} Defines the token symbol by which the token contract is known. It is usually 3-4 characters in length.
     * @param type {String} Defines the specific token type.
     */
    constructor(confirmedBalance, contractAddress, name, symbol, type) { 
        
        ListTokensByAddressRI.initialize(this, confirmedBalance, contractAddress, name, symbol, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, confirmedBalance, contractAddress, name, symbol, type) { 
        obj['confirmedBalance'] = confirmedBalance;
        obj['contractAddress'] = contractAddress;
        obj['name'] = name;
        obj['symbol'] = symbol;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>ListTokensByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTokensByAddressRI} obj Optional instance to populate.
     * @return {module:model/ListTokensByAddressRI} The populated <code>ListTokensByAddressRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTokensByAddressRI();

            if (data.hasOwnProperty('confirmedBalance')) {
                obj['confirmedBalance'] = ApiClient.convertToType(data['confirmedBalance'], 'String');
            }
            if (data.hasOwnProperty('contractAddress')) {
                obj['contractAddress'] = ApiClient.convertToType(data['contractAddress'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the token balance that has been confirmed.
 * @member {String} confirmedBalance
 */
ListTokensByAddressRI.prototype['confirmedBalance'] = undefined;

/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contractAddress
 */
ListTokensByAddressRI.prototype['contractAddress'] = undefined;

/**
 * Defines the token's name as a string.
 * @member {String} name
 */
ListTokensByAddressRI.prototype['name'] = undefined;

/**
 * Defines the token symbol by which the token contract is known. It is usually 3-4 characters in length.
 * @member {String} symbol
 */
ListTokensByAddressRI.prototype['symbol'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} type
 */
ListTokensByAddressRI.prototype['type'] = undefined;






export default ListTokensByAddressRI;

