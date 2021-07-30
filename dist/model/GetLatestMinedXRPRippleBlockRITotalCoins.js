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
 * The GetLatestMinedXRPRippleBlockRITotalCoins model module.
 * @module model/GetLatestMinedXRPRippleBlockRITotalCoins
 * @version 1.2.0
 */
var GetLatestMinedXRPRippleBlockRITotalCoins = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetLatestMinedXRPRippleBlockRITotalCoins</code>.
   * @alias module:model/GetLatestMinedXRPRippleBlockRITotalCoins
   * @param amount {String} Defines the amount of all coins.
   * @param unit {String} Defines the unit of the amount of all coins.
   */
  function GetLatestMinedXRPRippleBlockRITotalCoins(amount, unit) {
    _classCallCheck(this, GetLatestMinedXRPRippleBlockRITotalCoins);

    GetLatestMinedXRPRippleBlockRITotalCoins.initialize(this, amount, unit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetLatestMinedXRPRippleBlockRITotalCoins, null, [{
    key: "initialize",
    value: function initialize(obj, amount, unit) {
      obj['amount'] = amount;
      obj['unit'] = unit;
    }
    /**
     * Constructs a <code>GetLatestMinedXRPRippleBlockRITotalCoins</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} obj Optional instance to populate.
     * @return {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} The populated <code>GetLatestMinedXRPRippleBlockRITotalCoins</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetLatestMinedXRPRippleBlockRITotalCoins();

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

  return GetLatestMinedXRPRippleBlockRITotalCoins;
}();
/**
 * Defines the amount of all coins.
 * @member {String} amount
 */


GetLatestMinedXRPRippleBlockRITotalCoins.prototype['amount'] = undefined;
/**
 * Defines the unit of the amount of all coins.
 * @member {String} unit
 */

GetLatestMinedXRPRippleBlockRITotalCoins.prototype['unit'] = undefined;
var _default = GetLatestMinedXRPRippleBlockRITotalCoins;
exports["default"] = _default;