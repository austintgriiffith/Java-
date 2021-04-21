"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListUnconfirmedOmniTransactionsByPropertyIDResponseItem = _interopRequireDefault(require("./ListUnconfirmedOmniTransactionsByPropertyIDResponseItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListUnconfirmedOmniTransactionsByPropertyIDResponseData model module.
 * @module model/ListUnconfirmedOmniTransactionsByPropertyIDResponseData
 * @version 2.0.0
 */
var ListUnconfirmedOmniTransactionsByPropertyIDResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnconfirmedOmniTransactionsByPropertyIDResponseData</code>.
   * @alias module:model/ListUnconfirmedOmniTransactionsByPropertyIDResponseData
   * @param offset {Number} The starting index of the response items, i.e. where the response should start listing the returned items.
   * @param limit {Number} Defines how many items should be returned in the response per page basis.
   * @param total {Number} Defines the total number of items returned in the response.
   * @param items {Array.<module:model/ListUnconfirmedOmniTransactionsByPropertyIDResponseItem>} 
   */
  function ListUnconfirmedOmniTransactionsByPropertyIDResponseData(offset, limit, total, items) {
    _classCallCheck(this, ListUnconfirmedOmniTransactionsByPropertyIDResponseData);

    ListUnconfirmedOmniTransactionsByPropertyIDResponseData.initialize(this, offset, limit, total, items);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListUnconfirmedOmniTransactionsByPropertyIDResponseData, null, [{
    key: "initialize",
    value: function initialize(obj, offset, limit, total, items) {
      obj['offset'] = offset;
      obj['limit'] = limit;
      obj['total'] = total;
      obj['items'] = items;
    }
    /**
     * Constructs a <code>ListUnconfirmedOmniTransactionsByPropertyIDResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedOmniTransactionsByPropertyIDResponseData} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedOmniTransactionsByPropertyIDResponseData} The populated <code>ListUnconfirmedOmniTransactionsByPropertyIDResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUnconfirmedOmniTransactionsByPropertyIDResponseData();

        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_ListUnconfirmedOmniTransactionsByPropertyIDResponseItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListUnconfirmedOmniTransactionsByPropertyIDResponseData;
}();
/**
 * The starting index of the response items, i.e. where the response should start listing the returned items.
 * @member {Number} offset
 */


ListUnconfirmedOmniTransactionsByPropertyIDResponseData.prototype['offset'] = undefined;
/**
 * Defines how many items should be returned in the response per page basis.
 * @member {Number} limit
 */

ListUnconfirmedOmniTransactionsByPropertyIDResponseData.prototype['limit'] = undefined;
/**
 * Defines the total number of items returned in the response.
 * @member {Number} total
 */

ListUnconfirmedOmniTransactionsByPropertyIDResponseData.prototype['total'] = undefined;
/**
 * @member {Array.<module:model/ListUnconfirmedOmniTransactionsByPropertyIDResponseItem>} items
 */

ListUnconfirmedOmniTransactionsByPropertyIDResponseData.prototype['items'] = undefined;
var _default = ListUnconfirmedOmniTransactionsByPropertyIDResponseData;
exports["default"] = _default;