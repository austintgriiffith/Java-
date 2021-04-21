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

/**
 * The ListAssetsDetailsResponseItemLatestRate model module.
 * @module model/ListAssetsDetailsResponseItemLatestRate
 * @version 2.0.0
 */
class ListAssetsDetailsResponseItemLatestRate {
    /**
     * Constructs a new <code>ListAssetsDetailsResponseItemLatestRate</code>.
     * Specifies the latest price of the asset.
     * @alias module:model/ListAssetsDetailsResponseItemLatestRate
     * @param amount {String} Specifies the amount of the latest price of the asset.
     * @param unit {String} Specifies the unit of the latest price of the asset.
     */
    constructor(amount, unit) { 
        
        ListAssetsDetailsResponseItemLatestRate.initialize(this, amount, unit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, unit) { 
        obj['amount'] = amount;
        obj['unit'] = unit;
    }

    /**
     * Constructs a <code>ListAssetsDetailsResponseItemLatestRate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAssetsDetailsResponseItemLatestRate} obj Optional instance to populate.
     * @return {module:model/ListAssetsDetailsResponseItemLatestRate} The populated <code>ListAssetsDetailsResponseItemLatestRate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAssetsDetailsResponseItemLatestRate();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('calculationTimestamp')) {
                obj['calculationTimestamp'] = ApiClient.convertToType(data['calculationTimestamp'], 'Number');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the amount of the latest price of the asset.
 * @member {String} amount
 */
ListAssetsDetailsResponseItemLatestRate.prototype['amount'] = undefined;

/**
 * Defines when the price was calculated in UNIX timestamp.
 * @member {Number} calculationTimestamp
 */
ListAssetsDetailsResponseItemLatestRate.prototype['calculationTimestamp'] = undefined;

/**
 * Specifies the unit of the latest price of the asset.
 * @member {String} unit
 */
ListAssetsDetailsResponseItemLatestRate.prototype['unit'] = undefined;






export default ListAssetsDetailsResponseItemLatestRate;

