"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem model module.
 * @module model/NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem
 * @version 2.0.0
 */
var NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem</code>.
   * @alias module:model/NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem
   * @param address {String} Represents the address of the transaction, per which the result is returned.
   * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
   */
  function NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem(address, callbackUrl) {
    _classCallCheck(this, NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem);

    NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem.initialize(this, address, callbackUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, address, callbackUrl) {
      obj['address'] = address;
      obj['callbackUrl'] = callbackUrl;
    }
    /**
     * Constructs a <code>NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem} obj Optional instance to populate.
     * @return {module:model/NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem} The populated <code>NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('allowDuplicates')) {
          obj['allowDuplicates'] = _ApiClient["default"].convertToType(data['allowDuplicates'], 'Boolean');
        }

        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }

        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }

        if (data.hasOwnProperty('confirmationsCount')) {
          obj['confirmationsCount'] = _ApiClient["default"].convertToType(data['confirmationsCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem;
}();
/**
 * Represents the address of the transaction, per which the result is returned.
 * @member {String} address
 */


NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem.prototype['address'] = undefined;
/**
 * Specifies a flag that permits or denies the creation of duplicate addresses.
 * @member {Boolean} allowDuplicates
 * @default false
 */

NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem.prototype['allowDuplicates'] = false;
/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs.
 * @member {String} callbackSecretKey
 */

NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem.prototype['callbackSecretKey'] = undefined;
/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs.
 * @member {String} callbackUrl
 */

NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem.prototype['callbackUrl'] = undefined;
/**
 * Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block.
 * @member {Number} confirmationsCount
 */

NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem.prototype['confirmationsCount'] = undefined;
var _default = NewConfirmedTokensTransactionsAndEachConfirmationRequestBodyDataItem;
exports["default"] = _default;