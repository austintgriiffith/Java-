"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddTokensToExistingFromAddressRBDataItem = _interopRequireDefault(require("./AddTokensToExistingFromAddressRBDataItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AddTokensToExistingFromAddressRBData model module.
 * @module model/AddTokensToExistingFromAddressRBData
 * @version 1.2.0
 */
var AddTokensToExistingFromAddressRBData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddTokensToExistingFromAddressRBData</code>.
   * @alias module:model/AddTokensToExistingFromAddressRBData
   * @param item {module:model/AddTokensToExistingFromAddressRBDataItem} 
   */
  function AddTokensToExistingFromAddressRBData(item) {
    _classCallCheck(this, AddTokensToExistingFromAddressRBData);

    AddTokensToExistingFromAddressRBData.initialize(this, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddTokensToExistingFromAddressRBData, null, [{
    key: "initialize",
    value: function initialize(obj, item) {
      obj['item'] = item;
    }
    /**
     * Constructs a <code>AddTokensToExistingFromAddressRBData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddTokensToExistingFromAddressRBData} obj Optional instance to populate.
     * @return {module:model/AddTokensToExistingFromAddressRBData} The populated <code>AddTokensToExistingFromAddressRBData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddTokensToExistingFromAddressRBData();

        if (data.hasOwnProperty('item')) {
          obj['item'] = _AddTokensToExistingFromAddressRBDataItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return AddTokensToExistingFromAddressRBData;
}();
/**
 * @member {module:model/AddTokensToExistingFromAddressRBDataItem} item
 */


AddTokensToExistingFromAddressRBData.prototype['item'] = undefined;
var _default = AddTokensToExistingFromAddressRBData;
exports["default"] = _default;