"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListOmniTransactionsByBlockHashRIFee model module.
 * @module model/ListOmniTransactionsByBlockHashRIFee
 * @version 1.6.0
 */
var ListOmniTransactionsByBlockHashRIFee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListOmniTransactionsByBlockHashRIFee</code>.
   * @alias module:model/ListOmniTransactionsByBlockHashRIFee
   * @param amount {String} Defines the amount of the fee.
   * @param unit {String} Defines the unit of the fee.
   */
  function ListOmniTransactionsByBlockHashRIFee(amount, unit) {
    _classCallCheck(this, ListOmniTransactionsByBlockHashRIFee);

    ListOmniTransactionsByBlockHashRIFee.initialize(this, amount, unit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListOmniTransactionsByBlockHashRIFee, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unit) {
      obj['amount'] = amount;
      obj['unit'] = unit;
    }
    /**
     * Constructs a <code>ListOmniTransactionsByBlockHashRIFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListOmniTransactionsByBlockHashRIFee} obj Optional instance to populate.
     * @return {module:model/ListOmniTransactionsByBlockHashRIFee} The populated <code>ListOmniTransactionsByBlockHashRIFee</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListOmniTransactionsByBlockHashRIFee();

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

  return ListOmniTransactionsByBlockHashRIFee;
}();
/**
 * Defines the amount of the fee.
 * @member {String} amount
 */


ListOmniTransactionsByBlockHashRIFee.prototype['amount'] = undefined;
/**
 * Defines the unit of the fee.
 * @member {String} unit
 */

ListOmniTransactionsByBlockHashRIFee.prototype['unit'] = undefined;
var _default = ListOmniTransactionsByBlockHashRIFee;
exports["default"] = _default;