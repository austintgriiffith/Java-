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
import ListOmniTransactionsByBlockHeightRI from './ListOmniTransactionsByBlockHeightRI';

/**
 * The ListOmniTransactionsByBlockHeightRData model module.
 * @module model/ListOmniTransactionsByBlockHeightRData
 * @version 1.6.0
 */
class ListOmniTransactionsByBlockHeightRData {
    /**
     * Constructs a new <code>ListOmniTransactionsByBlockHeightRData</code>.
     * @alias module:model/ListOmniTransactionsByBlockHeightRData
     * @param limit {Number} Defines how many items should be returned in the response per page basis.
     * @param offset {Number} The starting index of the response items, i.e. where the response should start listing the returned items.
     * @param total {Number} Defines the total number of items returned in the response.
     * @param items {Array.<module:model/ListOmniTransactionsByBlockHeightRI>} 
     */
    constructor(limit, offset, total, items) { 
        
        ListOmniTransactionsByBlockHeightRData.initialize(this, limit, offset, total, items);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, limit, offset, total, items) { 
        obj['limit'] = limit;
        obj['offset'] = offset;
        obj['total'] = total;
        obj['items'] = items;
    }

    /**
     * Constructs a <code>ListOmniTransactionsByBlockHeightRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListOmniTransactionsByBlockHeightRData} obj Optional instance to populate.
     * @return {module:model/ListOmniTransactionsByBlockHeightRData} The populated <code>ListOmniTransactionsByBlockHeightRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListOmniTransactionsByBlockHeightRData();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ListOmniTransactionsByBlockHeightRI]);
            }
        }
        return obj;
    }


}

/**
 * Defines how many items should be returned in the response per page basis.
 * @member {Number} limit
 */
ListOmniTransactionsByBlockHeightRData.prototype['limit'] = undefined;

/**
 * The starting index of the response items, i.e. where the response should start listing the returned items.
 * @member {Number} offset
 */
ListOmniTransactionsByBlockHeightRData.prototype['offset'] = undefined;

/**
 * Defines the total number of items returned in the response.
 * @member {Number} total
 */
ListOmniTransactionsByBlockHeightRData.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/ListOmniTransactionsByBlockHeightRI>} items
 */
ListOmniTransactionsByBlockHeightRData.prototype['items'] = undefined;






export default ListOmniTransactionsByBlockHeightRData;

