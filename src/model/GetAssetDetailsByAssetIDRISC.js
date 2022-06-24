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
 * The GetAssetDetailsByAssetIDRISC model module.
 * @module model/GetAssetDetailsByAssetIDRISC
 * @version 1.6.0
 */
class GetAssetDetailsByAssetIDRISC {
    /**
     * Constructs a new <code>GetAssetDetailsByAssetIDRISC</code>.
     * Crypto Type Data
     * @alias module:model/GetAssetDetailsByAssetIDRISC
     * @param _1hourPriceChangeInPercentage {String} Represents the percentage of the asset's current price against the its price from 1 hour ago.
     * @param _1weekPriceChangeInPercentage {String} Represents the percentage of the asset's current price against the its price from 1 week ago.
     * @param _24hoursPriceChangeInPercentage {String} Represents the percentage of the asset's current price against the its price from 24 hours ago.
     * @param _24hoursTradingVolume {String} Represents the trading volume of the asset for the time frame of 24 hours.
     * @param assetType {module:model/GetAssetDetailsByAssetIDRISC.AssetTypeEnum} Represent a subtype of the crypto assets. Could be COIN or TOKEN.
     * @param circulatingSupply {String} Represents the amount of the asset that is circulating on the market and in public hands.
     * @param marketCapInUSD {String} Defines the total market value of the asset's circulating supply in USD.
     * @param maxSupply {String} Represents the maximum amount of all coins of a specific asset that will ever exist in its lifetime.
     */
    constructor(_1hourPriceChangeInPercentage, _1weekPriceChangeInPercentage, _24hoursPriceChangeInPercentage, _24hoursTradingVolume, assetType, circulatingSupply, marketCapInUSD, maxSupply) { 
        
        GetAssetDetailsByAssetIDRISC.initialize(this, _1hourPriceChangeInPercentage, _1weekPriceChangeInPercentage, _24hoursPriceChangeInPercentage, _24hoursTradingVolume, assetType, circulatingSupply, marketCapInUSD, maxSupply);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _1hourPriceChangeInPercentage, _1weekPriceChangeInPercentage, _24hoursPriceChangeInPercentage, _24hoursTradingVolume, assetType, circulatingSupply, marketCapInUSD, maxSupply) { 
        obj['1HourPriceChangeInPercentage'] = _1hourPriceChangeInPercentage;
        obj['1WeekPriceChangeInPercentage'] = _1weekPriceChangeInPercentage;
        obj['24HoursPriceChangeInPercentage'] = _24hoursPriceChangeInPercentage;
        obj['24HoursTradingVolume'] = _24hoursTradingVolume;
        obj['assetType'] = assetType;
        obj['circulatingSupply'] = circulatingSupply;
        obj['marketCapInUSD'] = marketCapInUSD;
        obj['maxSupply'] = maxSupply;
    }

    /**
     * Constructs a <code>GetAssetDetailsByAssetIDRISC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAssetDetailsByAssetIDRISC} obj Optional instance to populate.
     * @return {module:model/GetAssetDetailsByAssetIDRISC} The populated <code>GetAssetDetailsByAssetIDRISC</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAssetDetailsByAssetIDRISC();

            if (data.hasOwnProperty('1HourPriceChangeInPercentage')) {
                obj['1HourPriceChangeInPercentage'] = ApiClient.convertToType(data['1HourPriceChangeInPercentage'], 'String');
            }
            if (data.hasOwnProperty('1WeekPriceChangeInPercentage')) {
                obj['1WeekPriceChangeInPercentage'] = ApiClient.convertToType(data['1WeekPriceChangeInPercentage'], 'String');
            }
            if (data.hasOwnProperty('24HoursPriceChangeInPercentage')) {
                obj['24HoursPriceChangeInPercentage'] = ApiClient.convertToType(data['24HoursPriceChangeInPercentage'], 'String');
            }
            if (data.hasOwnProperty('24HoursTradingVolume')) {
                obj['24HoursTradingVolume'] = ApiClient.convertToType(data['24HoursTradingVolume'], 'String');
            }
            if (data.hasOwnProperty('assetType')) {
                obj['assetType'] = ApiClient.convertToType(data['assetType'], 'String');
            }
            if (data.hasOwnProperty('circulatingSupply')) {
                obj['circulatingSupply'] = ApiClient.convertToType(data['circulatingSupply'], 'String');
            }
            if (data.hasOwnProperty('marketCapInUSD')) {
                obj['marketCapInUSD'] = ApiClient.convertToType(data['marketCapInUSD'], 'String');
            }
            if (data.hasOwnProperty('maxSupply')) {
                obj['maxSupply'] = ApiClient.convertToType(data['maxSupply'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Represents the percentage of the asset's current price against the its price from 1 hour ago.
 * @member {String} 1HourPriceChangeInPercentage
 */
GetAssetDetailsByAssetIDRISC.prototype['1HourPriceChangeInPercentage'] = undefined;

/**
 * Represents the percentage of the asset's current price against the its price from 1 week ago.
 * @member {String} 1WeekPriceChangeInPercentage
 */
GetAssetDetailsByAssetIDRISC.prototype['1WeekPriceChangeInPercentage'] = undefined;

/**
 * Represents the percentage of the asset's current price against the its price from 24 hours ago.
 * @member {String} 24HoursPriceChangeInPercentage
 */
GetAssetDetailsByAssetIDRISC.prototype['24HoursPriceChangeInPercentage'] = undefined;

/**
 * Represents the trading volume of the asset for the time frame of 24 hours.
 * @member {String} 24HoursTradingVolume
 */
GetAssetDetailsByAssetIDRISC.prototype['24HoursTradingVolume'] = undefined;

/**
 * Represent a subtype of the crypto assets. Could be COIN or TOKEN.
 * @member {module:model/GetAssetDetailsByAssetIDRISC.AssetTypeEnum} assetType
 */
GetAssetDetailsByAssetIDRISC.prototype['assetType'] = undefined;

/**
 * Represents the amount of the asset that is circulating on the market and in public hands.
 * @member {String} circulatingSupply
 */
GetAssetDetailsByAssetIDRISC.prototype['circulatingSupply'] = undefined;

/**
 * Defines the total market value of the asset's circulating supply in USD.
 * @member {String} marketCapInUSD
 */
GetAssetDetailsByAssetIDRISC.prototype['marketCapInUSD'] = undefined;

/**
 * Represents the maximum amount of all coins of a specific asset that will ever exist in its lifetime.
 * @member {String} maxSupply
 */
GetAssetDetailsByAssetIDRISC.prototype['maxSupply'] = undefined;





/**
 * Allowed values for the <code>assetType</code> property.
 * @enum {String}
 * @readonly
 */
GetAssetDetailsByAssetIDRISC['AssetTypeEnum'] = {

    /**
     * value: "coin"
     * @const
     */
    "coin": "coin",

    /**
     * value: "token"
     * @const
     */
    "token": "token"
};



export default GetAssetDetailsByAssetIDRISC;

