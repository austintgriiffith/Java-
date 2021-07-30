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
 * The CreateCoinsTransactionRequestFromWalletRBDataItemRecipients model module.
 * @module model/CreateCoinsTransactionRequestFromWalletRBDataItemRecipients
 * @version 1.2.0
 */
var CreateCoinsTransactionRequestFromWalletRBDataItemRecipients = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionRequestFromWalletRBDataItemRecipients</code>.
   * @alias module:model/CreateCoinsTransactionRequestFromWalletRBDataItemRecipients
   * @param address {String} Defines the specific recipient/destination address.
   * @param amount {String} Represents the specific amount of the transaction's destination.
   */
  function CreateCoinsTransactionRequestFromWalletRBDataItemRecipients(address, amount) {
    _classCallCheck(this, CreateCoinsTransactionRequestFromWalletRBDataItemRecipients);

    CreateCoinsTransactionRequestFromWalletRBDataItemRecipients.initialize(this, address, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCoinsTransactionRequestFromWalletRBDataItemRecipients, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount) {
      obj['address'] = address;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>CreateCoinsTransactionRequestFromWalletRBDataItemRecipients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionRequestFromWalletRBDataItemRecipients} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionRequestFromWalletRBDataItemRecipients} The populated <code>CreateCoinsTransactionRequestFromWalletRBDataItemRecipients</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCoinsTransactionRequestFromWalletRBDataItemRecipients();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateCoinsTransactionRequestFromWalletRBDataItemRecipients;
}();
/**
 * Defines the specific recipient/destination address.
 * @member {String} address
 */


CreateCoinsTransactionRequestFromWalletRBDataItemRecipients.prototype['address'] = undefined;
/**
 * Represents the specific amount of the transaction's destination.
 * @member {String} amount
 */

CreateCoinsTransactionRequestFromWalletRBDataItemRecipients.prototype['amount'] = undefined;
var _default = CreateCoinsTransactionRequestFromWalletRBDataItemRecipients;
exports["default"] = _default;