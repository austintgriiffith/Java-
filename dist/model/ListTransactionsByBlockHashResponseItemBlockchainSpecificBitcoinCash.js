"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin = _interopRequireDefault(require("./ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin"));

var _ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout = _interopRequireDefault(require("./ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash model module.
 * @module model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash
 * @version 2.0.0
 */
var ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash</code>.
   * Bitcoin Cash
   * @alias module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param version {Number} Represents transaction version number.
   * @param vin {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin>} Represents the transaction inputs.
   * @param vout {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout>} Represents the transaction outputs.
   */
  function ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash(locktime, size, version, vin, vout) {
    _classCallCheck(this, ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash);

    ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash.initialize(this, locktime, size, version, vin, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, version, vin, vout) {
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }
    /**
     * Constructs a <code>ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash} The populated <code>ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash();

        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */


ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin>} vin
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout>} vout
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash.prototype['vout'] = undefined;
var _default = ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash;
exports["default"] = _default;