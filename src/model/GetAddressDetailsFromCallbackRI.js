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
import GetAddressDetailsFromCallbackRITotalReceived from './GetAddressDetailsFromCallbackRITotalReceived';
import GetAddressDetailsFromCallbackRITotalSpent from './GetAddressDetailsFromCallbackRITotalSpent';
import GetAddressDetailsRIConfirmedBalance from './GetAddressDetailsRIConfirmedBalance';

/**
 * The GetAddressDetailsFromCallbackRI model module.
 * @module model/GetAddressDetailsFromCallbackRI
 * @version 1.6.0
 */
class GetAddressDetailsFromCallbackRI {
    /**
     * Constructs a new <code>GetAddressDetailsFromCallbackRI</code>.
     * @alias module:model/GetAddressDetailsFromCallbackRI
     * @param incomingTransactionsCount {Number} Defines the count of the incoming transactions.
     * @param outgoingTransactionsCount {Number} Defines the count of the outgoing transactions.
     * @param transactionsCount {Number} Represents the total number of confirmed coins transactions for this address, both incoming and outgoing. Applies for coins only **and not** tokens transfers e.g. for Ethereum. `transactionsCount` could result as less than incoming and outgoing transactions put together (e.g. in Bitcoin), due to the fact that one and the same address could be in senders and receivers addresses.
     * @param confirmedBalance {module:model/GetAddressDetailsRIConfirmedBalance} 
     */
    constructor(incomingTransactionsCount, outgoingTransactionsCount, transactionsCount, confirmedBalance) { 
        
        GetAddressDetailsFromCallbackRI.initialize(this, incomingTransactionsCount, outgoingTransactionsCount, transactionsCount, confirmedBalance);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, incomingTransactionsCount, outgoingTransactionsCount, transactionsCount, confirmedBalance) { 
        obj['incomingTransactionsCount'] = incomingTransactionsCount;
        obj['outgoingTransactionsCount'] = outgoingTransactionsCount;
        obj['transactionsCount'] = transactionsCount;
        obj['confirmedBalance'] = confirmedBalance;
    }

    /**
     * Constructs a <code>GetAddressDetailsFromCallbackRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddressDetailsFromCallbackRI} obj Optional instance to populate.
     * @return {module:model/GetAddressDetailsFromCallbackRI} The populated <code>GetAddressDetailsFromCallbackRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAddressDetailsFromCallbackRI();

            if (data.hasOwnProperty('incomingTransactionsCount')) {
                obj['incomingTransactionsCount'] = ApiClient.convertToType(data['incomingTransactionsCount'], 'Number');
            }
            if (data.hasOwnProperty('outgoingTransactionsCount')) {
                obj['outgoingTransactionsCount'] = ApiClient.convertToType(data['outgoingTransactionsCount'], 'Number');
            }
            if (data.hasOwnProperty('transactionsCount')) {
                obj['transactionsCount'] = ApiClient.convertToType(data['transactionsCount'], 'Number');
            }
            if (data.hasOwnProperty('confirmedBalance')) {
                obj['confirmedBalance'] = GetAddressDetailsRIConfirmedBalance.constructFromObject(data['confirmedBalance']);
            }
            if (data.hasOwnProperty('totalReceived')) {
                obj['totalReceived'] = GetAddressDetailsFromCallbackRITotalReceived.constructFromObject(data['totalReceived']);
            }
            if (data.hasOwnProperty('totalSpent')) {
                obj['totalSpent'] = GetAddressDetailsFromCallbackRITotalSpent.constructFromObject(data['totalSpent']);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Defines the count of the incoming transactions.
 * @member {Number} incomingTransactionsCount
 */
GetAddressDetailsFromCallbackRI.prototype['incomingTransactionsCount'] = undefined;

/**
 * Defines the count of the outgoing transactions.
 * @member {Number} outgoingTransactionsCount
 */
GetAddressDetailsFromCallbackRI.prototype['outgoingTransactionsCount'] = undefined;

/**
 * Represents the total number of confirmed coins transactions for this address, both incoming and outgoing. Applies for coins only **and not** tokens transfers e.g. for Ethereum. `transactionsCount` could result as less than incoming and outgoing transactions put together (e.g. in Bitcoin), due to the fact that one and the same address could be in senders and receivers addresses.
 * @member {Number} transactionsCount
 */
GetAddressDetailsFromCallbackRI.prototype['transactionsCount'] = undefined;

/**
 * @member {module:model/GetAddressDetailsRIConfirmedBalance} confirmedBalance
 */
GetAddressDetailsFromCallbackRI.prototype['confirmedBalance'] = undefined;

/**
 * @member {module:model/GetAddressDetailsFromCallbackRITotalReceived} totalReceived
 */
GetAddressDetailsFromCallbackRI.prototype['totalReceived'] = undefined;

/**
 * @member {module:model/GetAddressDetailsFromCallbackRITotalSpent} totalSpent
 */
GetAddressDetailsFromCallbackRI.prototype['totalSpent'] = undefined;

/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */
GetAddressDetailsFromCallbackRI.prototype['sequence'] = undefined;






export default GetAddressDetailsFromCallbackRI;

