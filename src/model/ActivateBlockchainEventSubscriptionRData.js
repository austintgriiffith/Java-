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
import ActivateBlockchainEventSubscriptionRI from './ActivateBlockchainEventSubscriptionRI';

/**
 * The ActivateBlockchainEventSubscriptionRData model module.
 * @module model/ActivateBlockchainEventSubscriptionRData
 * @version 1.4.0
 */
class ActivateBlockchainEventSubscriptionRData {
    /**
     * Constructs a new <code>ActivateBlockchainEventSubscriptionRData</code>.
     * @alias module:model/ActivateBlockchainEventSubscriptionRData
     * @param item {module:model/ActivateBlockchainEventSubscriptionRI} 
     */
    constructor(item) { 
        
        ActivateBlockchainEventSubscriptionRData.initialize(this, item);
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
     * Constructs a <code>ActivateBlockchainEventSubscriptionRData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivateBlockchainEventSubscriptionRData} obj Optional instance to populate.
     * @return {module:model/ActivateBlockchainEventSubscriptionRData} The populated <code>ActivateBlockchainEventSubscriptionRData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivateBlockchainEventSubscriptionRData();

            if (data.hasOwnProperty('item')) {
                obj['item'] = ActivateBlockchainEventSubscriptionRI.constructFromObject(data['item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ActivateBlockchainEventSubscriptionRI} item
 */
ActivateBlockchainEventSubscriptionRData.prototype['item'] = undefined;






export default ActivateBlockchainEventSubscriptionRData;
