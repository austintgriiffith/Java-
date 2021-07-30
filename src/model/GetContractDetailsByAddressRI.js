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
 * The GetContractDetailsByAddressRI model module.
 * @module model/GetContractDetailsByAddressRI
 * @version 1.2.0
 */
class GetContractDetailsByAddressRI {
    /**
     * Constructs a new <code>GetContractDetailsByAddressRI</code>.
     * @alias module:model/GetContractDetailsByAddressRI
     * @param tokenDecimals {String} Defines the number of decimals that the token possesses.
     * @param tokenType {String} Defines the type of the token.
     * @param totalSupply {String} Defines the total number of tokens created that exist on the market minus the ones that have been burned.
     */
    constructor(tokenDecimals, tokenType, totalSupply) { 
        
        GetContractDetailsByAddressRI.initialize(this, tokenDecimals, tokenType, totalSupply);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tokenDecimals, tokenType, totalSupply) { 
        obj['tokenDecimals'] = tokenDecimals;
        obj['tokenType'] = tokenType;
        obj['totalSupply'] = totalSupply;
    }

    /**
     * Constructs a <code>GetContractDetailsByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetContractDetailsByAddressRI} obj Optional instance to populate.
     * @return {module:model/GetContractDetailsByAddressRI} The populated <code>GetContractDetailsByAddressRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetContractDetailsByAddressRI();

            if (data.hasOwnProperty('tokenDecimals')) {
                obj['tokenDecimals'] = ApiClient.convertToType(data['tokenDecimals'], 'String');
            }
            if (data.hasOwnProperty('tokenName')) {
                obj['tokenName'] = ApiClient.convertToType(data['tokenName'], 'String');
            }
            if (data.hasOwnProperty('tokenSymbol')) {
                obj['tokenSymbol'] = ApiClient.convertToType(data['tokenSymbol'], 'String');
            }
            if (data.hasOwnProperty('tokenType')) {
                obj['tokenType'] = ApiClient.convertToType(data['tokenType'], 'String');
            }
            if (data.hasOwnProperty('totalSupply')) {
                obj['totalSupply'] = ApiClient.convertToType(data['totalSupply'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines the number of decimals that the token possesses.
 * @member {String} tokenDecimals
 */
GetContractDetailsByAddressRI.prototype['tokenDecimals'] = undefined;

/**
 * Specifies the token's name.
 * @member {String} tokenName
 */
GetContractDetailsByAddressRI.prototype['tokenName'] = undefined;

/**
 * Defines the unique symbol of the token.
 * @member {String} tokenSymbol
 */
GetContractDetailsByAddressRI.prototype['tokenSymbol'] = undefined;

/**
 * Defines the type of the token.
 * @member {String} tokenType
 */
GetContractDetailsByAddressRI.prototype['tokenType'] = undefined;

/**
 * Defines the total number of tokens created that exist on the market minus the ones that have been burned.
 * @member {String} totalSupply
 */
GetContractDetailsByAddressRI.prototype['totalSupply'] = undefined;






export default GetContractDetailsByAddressRI;
