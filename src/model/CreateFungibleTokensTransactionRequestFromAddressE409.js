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
import BannedIpAddressDetailsInner from './BannedIpAddressDetailsInner';
import InvalidData from './InvalidData';
import WalletAsAServiceAddressBalanceNotEnough from './WalletAsAServiceAddressBalanceNotEnough';
import WalletAsAServiceTokenNotSupported from './WalletAsAServiceTokenNotSupported';
import WalletAsAServiceWalletBalanceNotEnough from './WalletAsAServiceWalletBalanceNotEnough';

/**
 * The CreateFungibleTokensTransactionRequestFromAddressE409 model module.
 * @module model/CreateFungibleTokensTransactionRequestFromAddressE409
 * @version 1.6.0
 */
class CreateFungibleTokensTransactionRequestFromAddressE409 {
    /**
     * Constructs a new <code>CreateFungibleTokensTransactionRequestFromAddressE409</code>.
     * @alias module:model/CreateFungibleTokensTransactionRequestFromAddressE409
     * @implements module:model/InvalidData
     * @implements module:model/WalletAsAServiceWalletBalanceNotEnough
     * @implements module:model/WalletAsAServiceAddressBalanceNotEnough
     * @implements module:model/WalletAsAServiceTokenNotSupported
     * @param code {String} Specifies an error code, e.g. error 404.
     * @param message {String} Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
     */
    constructor(code, message) { 
        InvalidData.initialize(this, code, message);WalletAsAServiceWalletBalanceNotEnough.initialize(this, code, message);WalletAsAServiceAddressBalanceNotEnough.initialize(this, code, message);WalletAsAServiceTokenNotSupported.initialize(this, code, message);
        CreateFungibleTokensTransactionRequestFromAddressE409.initialize(this, code, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, message) { 
        obj['code'] = code;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>CreateFungibleTokensTransactionRequestFromAddressE409</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFungibleTokensTransactionRequestFromAddressE409} obj Optional instance to populate.
     * @return {module:model/CreateFungibleTokensTransactionRequestFromAddressE409} The populated <code>CreateFungibleTokensTransactionRequestFromAddressE409</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFungibleTokensTransactionRequestFromAddressE409();
            InvalidData.constructFromObject(data, obj);
            WalletAsAServiceWalletBalanceNotEnough.constructFromObject(data, obj);
            WalletAsAServiceAddressBalanceNotEnough.constructFromObject(data, obj);
            WalletAsAServiceTokenNotSupported.constructFromObject(data, obj);

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], [BannedIpAddressDetailsInner]);
            }
        }
        return obj;
    }


}

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
CreateFungibleTokensTransactionRequestFromAddressE409.prototype['code'] = undefined;

/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
CreateFungibleTokensTransactionRequestFromAddressE409.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
CreateFungibleTokensTransactionRequestFromAddressE409.prototype['details'] = undefined;


// Implement InvalidData interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
InvalidData.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
InvalidData.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
InvalidData.prototype['details'] = undefined;
// Implement WalletAsAServiceWalletBalanceNotEnough interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
WalletAsAServiceWalletBalanceNotEnough.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
WalletAsAServiceWalletBalanceNotEnough.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
WalletAsAServiceWalletBalanceNotEnough.prototype['details'] = undefined;
// Implement WalletAsAServiceAddressBalanceNotEnough interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
WalletAsAServiceAddressBalanceNotEnough.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
WalletAsAServiceAddressBalanceNotEnough.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
WalletAsAServiceAddressBalanceNotEnough.prototype['details'] = undefined;
// Implement WalletAsAServiceTokenNotSupported interface:
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */
WalletAsAServiceTokenNotSupported.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */
WalletAsAServiceTokenNotSupported.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetailsInner>} details
 */
WalletAsAServiceTokenNotSupported.prototype['details'] = undefined;




export default CreateFungibleTokensTransactionRequestFromAddressE409;

