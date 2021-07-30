"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListBlockchainEventsSubscriptionsRData = _interopRequireDefault(require("./ListBlockchainEventsSubscriptionsRData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListBlockchainEventsSubscriptionsR model module.
 * @module model/ListBlockchainEventsSubscriptionsR
 * @version 1.2.0
 */
var ListBlockchainEventsSubscriptionsR = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListBlockchainEventsSubscriptionsR</code>.
   * @alias module:model/ListBlockchainEventsSubscriptionsR
   * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
   * @param requestId {String} Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
   * @param data {module:model/ListBlockchainEventsSubscriptionsRData} 
   */
  function ListBlockchainEventsSubscriptionsR(apiVersion, requestId, data) {
    _classCallCheck(this, ListBlockchainEventsSubscriptionsR);

    ListBlockchainEventsSubscriptionsR.initialize(this, apiVersion, requestId, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListBlockchainEventsSubscriptionsR, null, [{
    key: "initialize",
    value: function initialize(obj, apiVersion, requestId, data) {
      obj['apiVersion'] = apiVersion;
      obj['requestId'] = requestId;
      obj['data'] = data;
    }
    /**
     * Constructs a <code>ListBlockchainEventsSubscriptionsR</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListBlockchainEventsSubscriptionsR} obj Optional instance to populate.
     * @return {module:model/ListBlockchainEventsSubscriptionsR} The populated <code>ListBlockchainEventsSubscriptionsR</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListBlockchainEventsSubscriptionsR();

        if (data.hasOwnProperty('apiVersion')) {
          obj['apiVersion'] = _ApiClient["default"].convertToType(data['apiVersion'], 'String');
        }

        if (data.hasOwnProperty('requestId')) {
          obj['requestId'] = _ApiClient["default"].convertToType(data['requestId'], 'String');
        }

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ListBlockchainEventsSubscriptionsRData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return ListBlockchainEventsSubscriptionsR;
}();
/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */


ListBlockchainEventsSubscriptionsR.prototype['apiVersion'] = undefined;
/**
 * Defines the ID of the request. The `requestId` is generated by Crypto APIs and it's unique for every request.
 * @member {String} requestId
 */

ListBlockchainEventsSubscriptionsR.prototype['requestId'] = undefined;
/**
 * In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
 * @member {String} context
 */

ListBlockchainEventsSubscriptionsR.prototype['context'] = undefined;
/**
 * @member {module:model/ListBlockchainEventsSubscriptionsRData} data
 */

ListBlockchainEventsSubscriptionsR.prototype['data'] = undefined;
var _default = ListBlockchainEventsSubscriptionsR;
exports["default"] = _default;