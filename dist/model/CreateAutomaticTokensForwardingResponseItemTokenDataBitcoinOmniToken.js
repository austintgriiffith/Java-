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
 * The CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken model module.
 * @module model/CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken
 * @version 2.0.0
 */
var CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken</code>.
   * Bitcoin Omni Token
   * @alias module:model/CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken
   * @param propertyId {Number} Defines the `propertyId` of the Omni Layer token.
   */
  function CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken(propertyId) {
    _classCallCheck(this, CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken);

    CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken.initialize(this, propertyId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken, null, [{
    key: "initialize",
    value: function initialize(obj, propertyId) {
      obj['propertyId'] = propertyId;
    }
    /**
     * Constructs a <code>CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken} The populated <code>CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken();

        if (data.hasOwnProperty('propertyId')) {
          obj['propertyId'] = _ApiClient["default"].convertToType(data['propertyId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken;
}();
/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */


CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken.prototype['propertyId'] = undefined;
var _default = CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken;
exports["default"] = _default;