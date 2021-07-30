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
 * The CreateTokensTransactionRequestFromAddressRIRecipients model module.
 * @module model/CreateTokensTransactionRequestFromAddressRIRecipients
 * @version 1.2.0
 */
var CreateTokensTransactionRequestFromAddressRIRecipients = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateTokensTransactionRequestFromAddressRIRecipients</code>.
   * @alias module:model/CreateTokensTransactionRequestFromAddressRIRecipients
   * @param address {String} Defines the destination address.
   * @param amount {String} Defines the amount sent to the destination address.
   */
  function CreateTokensTransactionRequestFromAddressRIRecipients(address, amount) {
    _classCallCheck(this, CreateTokensTransactionRequestFromAddressRIRecipients);

    CreateTokensTransactionRequestFromAddressRIRecipients.initialize(this, address, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTokensTransactionRequestFromAddressRIRecipients, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount) {
      obj['address'] = address;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>CreateTokensTransactionRequestFromAddressRIRecipients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTokensTransactionRequestFromAddressRIRecipients} obj Optional instance to populate.
     * @return {module:model/CreateTokensTransactionRequestFromAddressRIRecipients} The populated <code>CreateTokensTransactionRequestFromAddressRIRecipients</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTokensTransactionRequestFromAddressRIRecipients();

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

  return CreateTokensTransactionRequestFromAddressRIRecipients;
}();
/**
 * Defines the destination address.
 * @member {String} address
 */


CreateTokensTransactionRequestFromAddressRIRecipients.prototype['address'] = undefined;
/**
 * Defines the amount sent to the destination address.
 * @member {String} amount
 */

CreateTokensTransactionRequestFromAddressRIRecipients.prototype['amount'] = undefined;
var _default = CreateTokensTransactionRequestFromAddressRIRecipients;
exports["default"] = _default;