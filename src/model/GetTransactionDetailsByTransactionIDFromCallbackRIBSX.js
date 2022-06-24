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
import GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue from './GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue';
import GetXRPRippleTransactionDetailsByTransactionIDRIOffer from './GetXRPRippleTransactionDetailsByTransactionIDRIOffer';
import GetXRPRippleTransactionDetailsByTransactionIDRIReceive from './GetXRPRippleTransactionDetailsByTransactionIDRIReceive';

/**
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBSX model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBSX
 * @version 1.6.0
 */
class GetTransactionDetailsByTransactionIDFromCallbackRIBSX {
    /**
     * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSX</code>.
     * XRP
     * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSX
     * @param additionalData {String} Represents additional data that may be needed.
     * @param offer {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIOffer} 
     * @param receive {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIReceive} 
     * @param sequence {Number} Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
     * @param status {String} Defines the status of the transaction.
     * @param type {String} Defines the type of the transaction.
     * @param value {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue} 
     */
    constructor(additionalData, offer, receive, sequence, status, type, value) { 
        
        GetTransactionDetailsByTransactionIDFromCallbackRIBSX.initialize(this, additionalData, offer, receive, sequence, status, type, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, additionalData, offer, receive, sequence, status, type, value) { 
        obj['additionalData'] = additionalData;
        obj['offer'] = offer;
        obj['receive'] = receive;
        obj['sequence'] = sequence;
        obj['status'] = status;
        obj['type'] = type;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSX</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSX} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSX} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSX</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRIBSX();

            if (data.hasOwnProperty('additionalData')) {
                obj['additionalData'] = ApiClient.convertToType(data['additionalData'], 'String');
            }
            if (data.hasOwnProperty('destinationTag')) {
                obj['destinationTag'] = ApiClient.convertToType(data['destinationTag'], 'Number');
            }
            if (data.hasOwnProperty('offer')) {
                obj['offer'] = GetXRPRippleTransactionDetailsByTransactionIDRIOffer.constructFromObject(data['offer']);
            }
            if (data.hasOwnProperty('receive')) {
                obj['receive'] = GetXRPRippleTransactionDetailsByTransactionIDRIReceive.constructFromObject(data['receive']);
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue.constructFromObject(data['value']);
            }
        }
        return obj;
    }


}

/**
 * Represents additional data that may be needed.
 * @member {String} additionalData
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSX.prototype['additionalData'] = undefined;

/**
 * Defines the destination tag value.
 * @member {Number} destinationTag
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSX.prototype['destinationTag'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIOffer} offer
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSX.prototype['offer'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIReceive} receive
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSX.prototype['receive'] = undefined;

/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSX.prototype['sequence'] = undefined;

/**
 * Defines the status of the transaction.
 * @member {String} status
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSX.prototype['status'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} type
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSX.prototype['type'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue} value
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSX.prototype['value'] = undefined;






export default GetTransactionDetailsByTransactionIDFromCallbackRIBSX;

