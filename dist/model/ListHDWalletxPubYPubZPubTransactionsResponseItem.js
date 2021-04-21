"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListHDWalletxPubYPubZPubTransactionsResponseItemFee = _interopRequireDefault(require("./ListHDWalletxPubYPubZPubTransactionsResponseItemFee"));

var _ListHDWalletxPubYPubZPubTransactionsResponseItemRecipients = _interopRequireDefault(require("./ListHDWalletxPubYPubZPubTransactionsResponseItemRecipients"));

var _ListHDWalletxPubYPubZPubTransactionsResponseItemSenders = _interopRequireDefault(require("./ListHDWalletxPubYPubZPubTransactionsResponseItemSenders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListHDWalletxPubYPubZPubTransactionsResponseItem model module.
 * @module model/ListHDWalletxPubYPubZPubTransactionsResponseItem
 * @version 2.0.0
 */
var ListHDWalletxPubYPubZPubTransactionsResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListHDWalletxPubYPubZPubTransactionsResponseItem</code>.
   * @alias module:model/ListHDWalletxPubYPubZPubTransactionsResponseItem
   * @param index {Number} Represents the index position of the transaction in the block.
   * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param minedInBlockHeight {Number} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
   * @param recipients {Array.<module:model/ListHDWalletxPubYPubZPubTransactionsResponseItemRecipients>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param senders {Array.<module:model/ListHDWalletxPubYPubZPubTransactionsResponseItemSenders>} Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionHash {String} Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
   * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
   * @param fee {module:model/ListHDWalletxPubYPubZPubTransactionsResponseItemFee} 
   */
  function ListHDWalletxPubYPubZPubTransactionsResponseItem(index, minedInBlockHash, minedInBlockHeight, recipients, senders, timestamp, transactionHash, transactionId, fee) {
    _classCallCheck(this, ListHDWalletxPubYPubZPubTransactionsResponseItem);

    ListHDWalletxPubYPubZPubTransactionsResponseItem.initialize(this, index, minedInBlockHash, minedInBlockHeight, recipients, senders, timestamp, transactionHash, transactionId, fee);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListHDWalletxPubYPubZPubTransactionsResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, index, minedInBlockHash, minedInBlockHeight, recipients, senders, timestamp, transactionHash, transactionId, fee) {
      obj['index'] = index;
      obj['minedInBlockHash'] = minedInBlockHash;
      obj['minedInBlockHeight'] = minedInBlockHeight;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['timestamp'] = timestamp;
      obj['transactionHash'] = transactionHash;
      obj['transactionId'] = transactionId;
      obj['fee'] = fee;
    }
    /**
     * Constructs a <code>ListHDWalletxPubYPubZPubTransactionsResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListHDWalletxPubYPubZPubTransactionsResponseItem} obj Optional instance to populate.
     * @return {module:model/ListHDWalletxPubYPubZPubTransactionsResponseItem} The populated <code>ListHDWalletxPubYPubZPubTransactionsResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListHDWalletxPubYPubZPubTransactionsResponseItem();

        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }

        if (data.hasOwnProperty('minedInBlockHash')) {
          obj['minedInBlockHash'] = _ApiClient["default"].convertToType(data['minedInBlockHash'], 'String');
        }

        if (data.hasOwnProperty('minedInBlockHeight')) {
          obj['minedInBlockHeight'] = _ApiClient["default"].convertToType(data['minedInBlockHeight'], 'Number');
        }

        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_ListHDWalletxPubYPubZPubTransactionsResponseItemRecipients["default"]]);
        }

        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_ListHDWalletxPubYPubZPubTransactionsResponseItemSenders["default"]]);
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }

        if (data.hasOwnProperty('transactionHash')) {
          obj['transactionHash'] = _ApiClient["default"].convertToType(data['transactionHash'], 'String');
        }

        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ListHDWalletxPubYPubZPubTransactionsResponseItemFee["default"].constructFromObject(data['fee']);
        }
      }

      return obj;
    }
  }]);

  return ListHDWalletxPubYPubZPubTransactionsResponseItem;
}();
/**
 * Represents the index position of the transaction in the block.
 * @member {Number} index
 */


ListHDWalletxPubYPubZPubTransactionsResponseItem.prototype['index'] = undefined;
/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */

ListHDWalletxPubYPubZPubTransactionsResponseItem.prototype['minedInBlockHash'] = undefined;
/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */

ListHDWalletxPubYPubZPubTransactionsResponseItem.prototype['minedInBlockHeight'] = undefined;
/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/ListHDWalletxPubYPubZPubTransactionsResponseItemRecipients>} recipients
 */

ListHDWalletxPubYPubZPubTransactionsResponseItem.prototype['recipients'] = undefined;
/**
 * Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/ListHDWalletxPubYPubZPubTransactionsResponseItemSenders>} senders
 */

ListHDWalletxPubYPubZPubTransactionsResponseItem.prototype['senders'] = undefined;
/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */

ListHDWalletxPubYPubZPubTransactionsResponseItem.prototype['timestamp'] = undefined;
/**
 * Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
 * @member {String} transactionHash
 */

ListHDWalletxPubYPubZPubTransactionsResponseItem.prototype['transactionHash'] = undefined;
/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */

ListHDWalletxPubYPubZPubTransactionsResponseItem.prototype['transactionId'] = undefined;
/**
 * @member {module:model/ListHDWalletxPubYPubZPubTransactionsResponseItemFee} fee
 */

ListHDWalletxPubYPubZPubTransactionsResponseItem.prototype['fee'] = undefined;
var _default = ListHDWalletxPubYPubZPubTransactionsResponseItem;
exports["default"] = _default;