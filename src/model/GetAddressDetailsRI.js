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
import GetAddressDetailsRIConfirmedBalance from './GetAddressDetailsRIConfirmedBalance';
import GetAddressDetailsRITotalReceived from './GetAddressDetailsRITotalReceived';
import GetAddressDetailsRITotalSpent from './GetAddressDetailsRITotalSpent';

/**
 * The GetAddressDetailsRI model module.
 * @module model/GetAddressDetailsRI
 * @version 1.2.0
 */
class GetAddressDetailsRI {
    /**
     * Constructs a new <code>GetAddressDetailsRI</code>.
     * @alias module:model/GetAddressDetailsRI
     * @param transactionsCount {Number} Represents the total number of confirmed coins transactions for this address, both incoming and outgoing. Applies for coins only **and not** tokens transfers e.g. for Ethereum. `transactionsCount` could result as less than incoming and outgoing transactions put together (e.g. in Bitcoin), due to the fact that one and the same address could be in senders and receivers addresses.
     * @param confirmedBalance {module:model/GetAddressDetailsRIConfirmedBalance} 
     * @param totalReceived {module:model/GetAddressDetailsRITotalReceived} 
     * @param totalSpent {module:model/GetAddressDetailsRITotalSpent} 
     * @param incomingTransactionsCount {Number} Numeric representation of the received transaction count of the address
     * @param outgoingTransactionsCount {Number} Numeric representation of the sent transaction count of the address
     */
    constructor(transactionsCount, confirmedBalance, totalReceived, totalSpent, incomingTransactionsCount, outgoingTransactionsCount) { 
        
        GetAddressDetailsRI.initialize(this, transactionsCount, confirmedBalance, totalReceived, totalSpent, incomingTransactionsCount, outgoingTransactionsCount);
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
     * Constructs a <code>GetAddressDetailsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddressDetailsRI} obj Optional instance to populate.
     * @return {module:model/GetAddressDetailsRI} The populated <code>GetAddressDetailsRI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAddressDetailsRI();

            if (data.hasOwnProperty('transactionsCount')) {
                obj['transactionsCount'] = ApiClient.convertToType(data['transactionsCount'], 'Number');
            }
            if (data.hasOwnProperty('confirmedBalance')) {
                obj['confirmedBalance'] = GetAddressDetailsRIConfirmedBalance.constructFromObject(data['confirmedBalance']);
            }
            if (data.hasOwnProperty('totalReceived')) {
                obj['totalReceived'] = GetAddressDetailsRITotalReceived.constructFromObject(data['totalReceived']);
            }
            if (data.hasOwnProperty('totalSpent')) {
                obj['totalSpent'] = GetAddressDetailsRITotalSpent.constructFromObject(data['totalSpent']);
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
GetAddressDetailsRI.prototype['transactionsCount'] = undefined;

/**
 * @member {module:model/GetAddressDetailsRIConfirmedBalance} confirmedBalance
 */
GetAddressDetailsRI.prototype['confirmedBalance'] = undefined;

/**
 * @member {module:model/GetAddressDetailsRITotalReceived} totalReceived
 */
GetAddressDetailsRI.prototype['totalReceived'] = undefined;

/**
 * @member {module:model/GetAddressDetailsRITotalSpent} totalSpent
 */
GetAddressDetailsRI.prototype['totalSpent'] = undefined;

/**
 * Numeric representation of the received transaction count of the address
 * @member {Number} incomingTransactionsCount
 */
GetAddressDetailsRI.prototype['incomingTransactionsCount'] = undefined;

/**
 * Numeric representation of the sent transaction count of the address
 * @member {Number} outgoingTransactionsCount
 */
GetAddressDetailsRI.prototype['outgoingTransactionsCount'] = undefined;






export default GetAddressDetailsRI;
