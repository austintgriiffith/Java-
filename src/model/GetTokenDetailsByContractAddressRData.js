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
import GetTokenDetailsByContractAddressRI from './GetTokenDetailsByContractAddressRI';

/**
 * The GetTokenDetailsByContractAddressRData model module.
 * @module model/GetTokenDetailsByContractAddressRData
 * @version 1.6.0
 */
class GetTokenDetailsByContractAddressRData {
    /**
     * Constructs a new <code>GetTokenDetailsByContractAddressRData</code>.
     * @alias module:model/GetTokenDetailsByContractAddressRData
     * @param item {module:model/GetTokenDetailsByContractAddressRI} 
     */
    constructor(item) { 
        
        GetTokenDetailsByContractAddressRData.initialize(this, item);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, item) { 
        obj['item'] = item;
    }

    /**
     * Constructs a <code>GetTokenDetailsByContractAddressRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTokenDetailsByContractAddressRData} obj Optional instance to populate.
     * @return {module:model/GetTokenDetailsByContractAddressRData} The populated <code>GetTokenDetailsByContractAddressRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTokenDetailsByContractAddressRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = GetTokenDetailsByContractAddressRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetTokenDetailsByContractAddressRI} item
 */
GetTokenDetailsByContractAddressRData.prototype['item'] = undefined;






export default GetTokenDetailsByContractAddressRData;

