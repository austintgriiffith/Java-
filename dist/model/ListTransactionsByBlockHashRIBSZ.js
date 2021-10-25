"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListConfirmedTransactionsByAddressRIBSZVShieldedOutput = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSZVShieldedOutput"));

var _ListConfirmedTransactionsByAddressRIBSZVShieldedSpend = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSZVShieldedSpend"));

var _ListConfirmedTransactionsByAddressRIBSZVout = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSZVout"));

var _ListTransactionsByBlockHashRIBSZVJoinSplit = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSZVJoinSplit"));

var _ListTransactionsByBlockHashRIBSZVin = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSZVin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByBlockHashRIBSZ model module.
 * @module model/ListTransactionsByBlockHashRIBSZ
 * @version 1.3.0
 */
var ListTransactionsByBlockHashRIBSZ = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHashRIBSZ</code>.
   * Zcash
   * @alias module:model/ListTransactionsByBlockHashRIBSZ
   * @param bindingSig {String} It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
   * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
   * @param joinSplitPubKey {String} Represents an encoding of a JoinSplitSig public validating key.
   * @param joinSplitSig {String} Is used to sign transactions that contain at least one JoinSplit description.
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param vJoinSplit {Array.<module:model/ListTransactionsByBlockHashRIBSZVJoinSplit>} Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
   * @param vShieldedOutput {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVShieldedOutput>} Object Array representation of transaction output descriptions
   * @param vShieldedSpend {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVShieldedSpend>} Object Array representation of transaction spend descriptions
   * @param valueBalance {String} Defines the transaction value balance.
   * @param version {Number} Numeric representation of the transaction Represents the transaction version number.
   * @param versionGroupId {String} Represents the transaction version group ID.
   * @param vin {Array.<module:model/ListTransactionsByBlockHashRIBSZVin>} Object Array representation of transaction inputs
   * @param vout {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVout>} Object Array representation of transaction outputs
   */
  function ListTransactionsByBlockHashRIBSZ(bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout) {
    _classCallCheck(this, ListTransactionsByBlockHashRIBSZ);

    ListTransactionsByBlockHashRIBSZ.initialize(this, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHashRIBSZ, null, [{
    key: "initialize",
    value: function initialize(obj, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout) {
      obj['bindingSig'] = bindingSig;
      obj['expiryHeight'] = expiryHeight;
      obj['joinSplitPubKey'] = joinSplitPubKey;
      obj['joinSplitSig'] = joinSplitSig;
      obj['locktime'] = locktime;
      obj['overwintered'] = overwintered;
      obj['size'] = size;
      obj['vJoinSplit'] = vJoinSplit;
      obj['vShieldedOutput'] = vShieldedOutput;
      obj['vShieldedSpend'] = vShieldedSpend;
      obj['valueBalance'] = valueBalance;
      obj['version'] = version;
      obj['versionGroupId'] = versionGroupId;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }
    /**
     * Constructs a <code>ListTransactionsByBlockHashRIBSZ</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashRIBSZ} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashRIBSZ} The populated <code>ListTransactionsByBlockHashRIBSZ</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHashRIBSZ();

        if (data.hasOwnProperty('bindingSig')) {
          obj['bindingSig'] = _ApiClient["default"].convertToType(data['bindingSig'], 'String');
        }

        if (data.hasOwnProperty('expiryHeight')) {
          obj['expiryHeight'] = _ApiClient["default"].convertToType(data['expiryHeight'], 'Number');
        }

        if (data.hasOwnProperty('joinSplitPubKey')) {
          obj['joinSplitPubKey'] = _ApiClient["default"].convertToType(data['joinSplitPubKey'], 'String');
        }

        if (data.hasOwnProperty('joinSplitSig')) {
          obj['joinSplitSig'] = _ApiClient["default"].convertToType(data['joinSplitSig'], 'String');
        }

        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }

        if (data.hasOwnProperty('overwintered')) {
          obj['overwintered'] = _ApiClient["default"].convertToType(data['overwintered'], 'Boolean');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('vJoinSplit')) {
          obj['vJoinSplit'] = _ApiClient["default"].convertToType(data['vJoinSplit'], [_ListTransactionsByBlockHashRIBSZVJoinSplit["default"]]);
        }

        if (data.hasOwnProperty('vShieldedOutput')) {
          obj['vShieldedOutput'] = _ApiClient["default"].convertToType(data['vShieldedOutput'], [_ListConfirmedTransactionsByAddressRIBSZVShieldedOutput["default"]]);
        }

        if (data.hasOwnProperty('vShieldedSpend')) {
          obj['vShieldedSpend'] = _ApiClient["default"].convertToType(data['vShieldedSpend'], [_ListConfirmedTransactionsByAddressRIBSZVShieldedSpend["default"]]);
        }

        if (data.hasOwnProperty('valueBalance')) {
          obj['valueBalance'] = _ApiClient["default"].convertToType(data['valueBalance'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('versionGroupId')) {
          obj['versionGroupId'] = _ApiClient["default"].convertToType(data['versionGroupId'], 'String');
        }

        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListTransactionsByBlockHashRIBSZVin["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_ListConfirmedTransactionsByAddressRIBSZVout["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListTransactionsByBlockHashRIBSZ;
}();
/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */


ListTransactionsByBlockHashRIBSZ.prototype['bindingSig'] = undefined;
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */

ListTransactionsByBlockHashRIBSZ.prototype['expiryHeight'] = undefined;
/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */

ListTransactionsByBlockHashRIBSZ.prototype['joinSplitPubKey'] = undefined;
/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */

ListTransactionsByBlockHashRIBSZ.prototype['joinSplitSig'] = undefined;
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

ListTransactionsByBlockHashRIBSZ.prototype['locktime'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */

ListTransactionsByBlockHashRIBSZ.prototype['overwintered'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

ListTransactionsByBlockHashRIBSZ.prototype['size'] = undefined;
/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSZVJoinSplit>} vJoinSplit
 */

ListTransactionsByBlockHashRIBSZ.prototype['vJoinSplit'] = undefined;
/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVShieldedOutput>} vShieldedOutput
 */

ListTransactionsByBlockHashRIBSZ.prototype['vShieldedOutput'] = undefined;
/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVShieldedSpend>} vShieldedSpend
 */

ListTransactionsByBlockHashRIBSZ.prototype['vShieldedSpend'] = undefined;
/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */

ListTransactionsByBlockHashRIBSZ.prototype['valueBalance'] = undefined;
/**
 * Numeric representation of the transaction Represents the transaction version number.
 * @member {Number} version
 */

ListTransactionsByBlockHashRIBSZ.prototype['version'] = undefined;
/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */

ListTransactionsByBlockHashRIBSZ.prototype['versionGroupId'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSZVin>} vin
 */

ListTransactionsByBlockHashRIBSZ.prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVout>} vout
 */

ListTransactionsByBlockHashRIBSZ.prototype['vout'] = undefined;
var _default = ListTransactionsByBlockHashRIBSZ;
exports["default"] = _default;