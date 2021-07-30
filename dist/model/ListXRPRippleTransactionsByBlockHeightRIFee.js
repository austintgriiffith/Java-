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
 * The ListXRPRippleTransactionsByBlockHeightRIFee model module.
 * @module model/ListXRPRippleTransactionsByBlockHeightRIFee
 * @version 1.2.0
 */
var ListXRPRippleTransactionsByBlockHeightRIFee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListXRPRippleTransactionsByBlockHeightRIFee</code>.
   * @alias module:model/ListXRPRippleTransactionsByBlockHeightRIFee
   * @param amount {String} 
   * @param unit {String} 
   */
  function ListXRPRippleTransactionsByBlockHeightRIFee(amount, unit) {
    _classCallCheck(this, ListXRPRippleTransactionsByBlockHeightRIFee);

    ListXRPRippleTransactionsByBlockHeightRIFee.initialize(this, amount, unit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListXRPRippleTransactionsByBlockHeightRIFee, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unit) {
      obj['amount'] = amount;
      obj['unit'] = unit;
    }
    /**
     * Constructs a <code>ListXRPRippleTransactionsByBlockHeightRIFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByBlockHeightRIFee} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByBlockHeightRIFee} The populated <code>ListXRPRippleTransactionsByBlockHeightRIFee</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListXRPRippleTransactionsByBlockHeightRIFee();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListXRPRippleTransactionsByBlockHeightRIFee;
}();
/**
 * @member {String} amount
 */


ListXRPRippleTransactionsByBlockHeightRIFee.prototype['amount'] = undefined;
/**
 * @member {String} unit
 */

ListXRPRippleTransactionsByBlockHeightRIFee.prototype['unit'] = undefined;
var _default = ListXRPRippleTransactionsByBlockHeightRIFee;
exports["default"] = _default;