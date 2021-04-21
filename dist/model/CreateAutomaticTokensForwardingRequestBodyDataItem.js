"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateAutomaticTokensForwardingRequestBodyTokenData = _interopRequireDefault(require("./CreateAutomaticTokensForwardingRequestBodyTokenData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateAutomaticTokensForwardingRequestBodyDataItem model module.
 * @module model/CreateAutomaticTokensForwardingRequestBodyDataItem
 * @version 2.0.0
 */
var CreateAutomaticTokensForwardingRequestBodyDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAutomaticTokensForwardingRequestBodyDataItem</code>.
   * @alias module:model/CreateAutomaticTokensForwardingRequestBodyDataItem
   * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
   * @param confirmationsCount {String} Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
   * @param feePriority {module:model/CreateAutomaticTokensForwardingRequestBodyDataItem.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"SLOW\", \"STANDARD\" or \"FAST\".
   * @param minimumTransferAmount {String} Represents the minimum transfer amount of the currency in the `fromAddress` that can be allowed for an automatic forwarding.
   * @param toAddress {String} Represents the hash of the address the currency is forwarded to.
   * @param tokenData {module:model/CreateAutomaticTokensForwardingRequestBodyTokenData} 
   */
  function CreateAutomaticTokensForwardingRequestBodyDataItem(callbackUrl, confirmationsCount, feePriority, minimumTransferAmount, toAddress, tokenData) {
    _classCallCheck(this, CreateAutomaticTokensForwardingRequestBodyDataItem);

    CreateAutomaticTokensForwardingRequestBodyDataItem.initialize(this, callbackUrl, confirmationsCount, feePriority, minimumTransferAmount, toAddress, tokenData);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAutomaticTokensForwardingRequestBodyDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, callbackUrl, confirmationsCount, feePriority, minimumTransferAmount, toAddress, tokenData) {
      obj['callbackUrl'] = callbackUrl;
      obj['confirmationsCount'] = confirmationsCount;
      obj['feePriority'] = feePriority;
      obj['minimumTransferAmount'] = minimumTransferAmount;
      obj['toAddress'] = toAddress;
      obj['tokenData'] = tokenData;
    }
    /**
     * Constructs a <code>CreateAutomaticTokensForwardingRequestBodyDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticTokensForwardingRequestBodyDataItem} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticTokensForwardingRequestBodyDataItem} The populated <code>CreateAutomaticTokensForwardingRequestBodyDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAutomaticTokensForwardingRequestBodyDataItem();

        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }

        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }

        if (data.hasOwnProperty('confirmationsCount')) {
          obj['confirmationsCount'] = _ApiClient["default"].convertToType(data['confirmationsCount'], 'String');
        }

        if (data.hasOwnProperty('feePriority')) {
          obj['feePriority'] = _ApiClient["default"].convertToType(data['feePriority'], 'String');
        }

        if (data.hasOwnProperty('minimumTransferAmount')) {
          obj['minimumTransferAmount'] = _ApiClient["default"].convertToType(data['minimumTransferAmount'], 'String');
        }

        if (data.hasOwnProperty('toAddress')) {
          obj['toAddress'] = _ApiClient["default"].convertToType(data['toAddress'], 'String');
        }

        if (data.hasOwnProperty('tokenData')) {
          obj['tokenData'] = _CreateAutomaticTokensForwardingRequestBodyTokenData["default"].constructFromObject(data['tokenData']);
        }
      }

      return obj;
    }
  }]);

  return CreateAutomaticTokensForwardingRequestBodyDataItem;
}();
/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs.
 * @member {String} callbackSecretKey
 */


CreateAutomaticTokensForwardingRequestBodyDataItem.prototype['callbackSecretKey'] = undefined;
/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
 * @member {String} callbackUrl
 */

CreateAutomaticTokensForwardingRequestBodyDataItem.prototype['callbackUrl'] = undefined;
/**
 * Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
 * @member {String} confirmationsCount
 */

CreateAutomaticTokensForwardingRequestBodyDataItem.prototype['confirmationsCount'] = undefined;
/**
 * Represents the fee priority of the automation, whether it is \"SLOW\", \"STANDARD\" or \"FAST\".
 * @member {module:model/CreateAutomaticTokensForwardingRequestBodyDataItem.FeePriorityEnum} feePriority
 */

CreateAutomaticTokensForwardingRequestBodyDataItem.prototype['feePriority'] = undefined;
/**
 * Represents the minimum transfer amount of the currency in the `fromAddress` that can be allowed for an automatic forwarding.
 * @member {String} minimumTransferAmount
 */

CreateAutomaticTokensForwardingRequestBodyDataItem.prototype['minimumTransferAmount'] = undefined;
/**
 * Represents the hash of the address the currency is forwarded to.
 * @member {String} toAddress
 */

CreateAutomaticTokensForwardingRequestBodyDataItem.prototype['toAddress'] = undefined;
/**
 * @member {module:model/CreateAutomaticTokensForwardingRequestBodyTokenData} tokenData
 */

CreateAutomaticTokensForwardingRequestBodyDataItem.prototype['tokenData'] = undefined;
/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */

CreateAutomaticTokensForwardingRequestBodyDataItem['FeePriorityEnum'] = {
  /**
   * value: "slow"
   * @const
   */
  "slow": "slow",

  /**
   * value: "standard"
   * @const
   */
  "standard": "standard",

  /**
   * value: "fast"
   * @const
   */
  "fast": "fast"
};
var _default = CreateAutomaticTokensForwardingRequestBodyDataItem;
exports["default"] = _default;