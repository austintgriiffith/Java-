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
import GetAddressDetailsResponseItemConfirmedBalance from './GetAddressDetailsResponseItemConfirmedBalance';
import GetAddressDetailsResponseItemTotalReceived from './GetAddressDetailsResponseItemTotalReceived';
import GetAddressDetailsResponseItemTotalSpent from './GetAddressDetailsResponseItemTotalSpent';

/**
 * The GetAddressDetailsResponseItem model module.
 * @module model/GetAddressDetailsResponseItem
 * @version 2.0.0
 */
class GetAddressDetailsResponseItem {
    /**
     * Constructs a new <code>GetAddressDetailsResponseItem</code>.
     * @alias module:model/GetAddressDetailsResponseItem
     * @param transactionsCount {Number} Represents the total number of confirmed coins transactions for this address, both incoming and outgoing. Applies for coins only **and not** tokens transfers e.g. for Ethereum. `transactionsCount` could result as less than incoming and outgoing transactions put together (e.g. in Bitcoin), due to the fact that one and the same address could be in senders and receivers addresses.
     * @param confirmedBalance {module:model/GetAddressDetailsResponseItemConfirmedBalance} 
     * @param totalReceived {module:model/GetAddressDetailsResponseItemTotalReceived} 
     * @param totalSpent {module:model/GetAddressDetailsResponseItemTotalSpent} 
     * @param incomingTransactionsCount {Number} Defines the count of all confirmed incoming transactions from the address for coins. This applies to **coins** only, **not** to tokens transfers e.g. for Ethereum.
     * @param outgoingTransactionsCount {Number} Defines the count of all confirmed outgoing transactions from the address for coins. This applies to **coins** only, **not** to tokens transfers e.g. for Ethereum.
     */
    constructor(transactionsCount, confirmedBalance, totalReceived, totalSpent, incomingTransactionsCount, outgoingTransactionsCount) { 
        
        GetAddressDetailsResponseItem.initialize(this, transactionsCount, confirmedBalance, totalReceived, totalSpent, incomingTransactionsCount, outgoingTransactionsCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transactionsCount, confirmedBalance, totalReceived, totalSpent, incomingTransactionsCount, outgoingTransactionsCount) { 
        obj['transactionsCount'] = transactionsCount;
        obj['confirmedBalance'] = confirmedBalance;
        obj['totalReceived'] = totalReceived;
        obj['totalSpent'] = totalSpent;
        obj['incomingTransactionsCount'] = incomingTransactionsCount;
        obj['outgoingTransactionsCount'] = outgoingTransactionsCount;
    }

    /**
     * Constructs a <code>GetAddressDetailsResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddressDetailsResponseItem} obj Optional instance to populate.
     * @return {module:model/GetAddressDetailsResponseItem} The populated <code>GetAddressDetailsResponseItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAddressDetailsResponseItem();

            if (data.hasOwnProperty('transactionsCount')) {
                obj['transactionsCount'] = ApiClient.convertToType(data['transactionsCount'], 'Number');
            }
            if (data.hasOwnProperty('confirmedBalance')) {
                obj['confirmedBalance'] = GetAddressDetailsResponseItemConfirmedBalance.constructFromObject(data['confirmedBalance']);
            }
            if (data.hasOwnProperty('totalReceived')) {
                obj['totalReceived'] = GetAddressDetailsResponseItemTotalReceived.constructFromObject(data['totalReceived']);
            }
            if (data.hasOwnProperty('totalSpent')) {
                obj['totalSpent'] = GetAddressDetailsResponseItemTotalSpent.constructFromObject(data['totalSpent']);
            }
            if (data.hasOwnProperty('incomingTransactionsCount')) {
                obj['incomingTransactionsCount'] = ApiClient.convertToType(data['incomingTransactionsCount'], 'Number');
            }
            if (data.hasOwnProperty('outgoingTransactionsCount')) {
                obj['outgoingTransactionsCount'] = ApiClient.convertToType(data['outgoingTransactionsCount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Represents the total number of confirmed coins transactions for this address, both incoming and outgoing. Applies for coins only **and not** tokens transfers e.g. for Ethereum. `transactionsCount` could result as less than incoming and outgoing transactions put together (e.g. in Bitcoin), due to the fact that one and the same address could be in senders and receivers addresses.
 * @member {Number} transactionsCount
 */
GetAddressDetailsResponseItem.prototype['transactionsCount'] = undefined;

/**
 * @member {module:model/GetAddressDetailsResponseItemConfirmedBalance} confirmedBalance
 */
GetAddressDetailsResponseItem.prototype['confirmedBalance'] = undefined;

/**
 * @member {module:model/GetAddressDetailsResponseItemTotalReceived} totalReceived
 */
GetAddressDetailsResponseItem.prototype['totalReceived'] = undefined;

/**
 * @member {module:model/GetAddressDetailsResponseItemTotalSpent} totalSpent
 */
GetAddressDetailsResponseItem.prototype['totalSpent'] = undefined;

/**
 * Defines the count of all confirmed incoming transactions from the address for coins. This applies to **coins** only, **not** to tokens transfers e.g. for Ethereum.
 * @member {Number} incomingTransactionsCount
 */
GetAddressDetailsResponseItem.prototype['incomingTransactionsCount'] = undefined;

/**
 * Defines the count of all confirmed outgoing transactions from the address for coins. This applies to **coins** only, **not** to tokens transfers e.g. for Ethereum.
 * @member {Number} outgoingTransactionsCount
 */
GetAddressDetailsResponseItem.prototype['outgoingTransactionsCount'] = undefined;






export default GetAddressDetailsResponseItem;

