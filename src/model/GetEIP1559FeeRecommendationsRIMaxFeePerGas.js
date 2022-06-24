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
 * The GetEIP1559FeeRecommendationsRIMaxFeePerGas model module.
 * @module model/GetEIP1559FeeRecommendationsRIMaxFeePerGas
 * @version 1.6.0
 */
class GetEIP1559FeeRecommendationsRIMaxFeePerGas {
    /**
     * Constructs a new <code>GetEIP1559FeeRecommendationsRIMaxFeePerGas</code>.
     * @alias module:model/GetEIP1559FeeRecommendationsRIMaxFeePerGas
     * @param fast {String} Represents the fast maximum fee per gas, calculated from unconfirmed transactions.
     * @param slow {String} Represents the slow maximum fee per gas, calculated from unconfirmed transactions.
     * @param standard {String} Represents the standard maximum fee per gas, calculated from unconfirmed transactions.
     * @param unit {String} Represents the unit of the maximum fee per gas.
     */
    constructor(fast, slow, standard, unit) { 
        
        GetEIP1559FeeRecommendationsRIMaxFeePerGas.initialize(this, fast, slow, standard, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fast, slow, standard, unit) { 
        obj['fast'] = fast;
        obj['slow'] = slow;
        obj['standard'] = standard;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>GetEIP1559FeeRecommendationsRIMaxFeePerGas</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEIP1559FeeRecommendationsRIMaxFeePerGas} obj Optional instance to populate.
     * @return {module:model/GetEIP1559FeeRecommendationsRIMaxFeePerGas} The populated <code>GetEIP1559FeeRecommendationsRIMaxFeePerGas</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEIP1559FeeRecommendationsRIMaxFeePerGas();

            if (data.hasOwnProperty('fast')) {
                obj['fast'] = ApiClient.convertToType(data['fast'], 'String');
            }
            if (data.hasOwnProperty('slow')) {
                obj['slow'] = ApiClient.convertToType(data['slow'], 'String');
            }
            if (data.hasOwnProperty('standard')) {
                obj['standard'] = ApiClient.convertToType(data['standard'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the fast maximum fee per gas, calculated from unconfirmed transactions.
 * @member {String} fast
 */
GetEIP1559FeeRecommendationsRIMaxFeePerGas.prototype['fast'] = undefined;

/**
 * Represents the slow maximum fee per gas, calculated from unconfirmed transactions.
 * @member {String} slow
 */
GetEIP1559FeeRecommendationsRIMaxFeePerGas.prototype['slow'] = undefined;

/**
 * Represents the standard maximum fee per gas, calculated from unconfirmed transactions.
 * @member {String} standard
 */
GetEIP1559FeeRecommendationsRIMaxFeePerGas.prototype['standard'] = undefined;

/**
 * Represents the unit of the maximum fee per gas.
 * @member {String} unit
 */
GetEIP1559FeeRecommendationsRIMaxFeePerGas.prototype['unit'] = undefined;






export default GetEIP1559FeeRecommendationsRIMaxFeePerGas;

