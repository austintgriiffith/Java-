"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BannedIpAddressDetails = _interopRequireDefault(require("./BannedIpAddressDetails"));

var _InvalidApiKey = _interopRequireDefault(require("./InvalidApiKey"));

var _MissingApiKey = _interopRequireDefault(require("./MissingApiKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetXRPRippleAddressDetailsE401 model module.
 * @module model/GetXRPRippleAddressDetailsE401
 * @version 1.4.0
 */
var GetXRPRippleAddressDetailsE401 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetXRPRippleAddressDetailsE401</code>.
   * @alias module:model/GetXRPRippleAddressDetailsE401
   * @implements module:model/MissingApiKey
   * @implements module:model/InvalidApiKey
   * @param code {String} Specifies an error code, e.g. error 404.
   * @param message {String} Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
   */
  function GetXRPRippleAddressDetailsE401(code, message) {
    _classCallCheck(this, GetXRPRippleAddressDetailsE401);

    _MissingApiKey["default"].initialize(this, code, message);

    _InvalidApiKey["default"].initialize(this, code, message);

    GetXRPRippleAddressDetailsE401.initialize(this, code, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetXRPRippleAddressDetailsE401, null, [{
    key: "initialize",
    value: function initialize(obj, code, message) {
      obj['code'] = code;
      obj['message'] = message;
    }
    /**
     * Constructs a <code>GetXRPRippleAddressDetailsE401</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetXRPRippleAddressDetailsE401} obj Optional instance to populate.
     * @return {module:model/GetXRPRippleAddressDetailsE401} The populated <code>GetXRPRippleAddressDetailsE401</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetXRPRippleAddressDetailsE401();

        _MissingApiKey["default"].constructFromObject(data, obj);

        _InvalidApiKey["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], [_BannedIpAddressDetails["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GetXRPRippleAddressDetailsE401;
}();
/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */


GetXRPRippleAddressDetailsE401.prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

GetXRPRippleAddressDetailsE401.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetails>} details
 */

GetXRPRippleAddressDetailsE401.prototype['details'] = undefined; // Implement MissingApiKey interface:

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */

_MissingApiKey["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

_MissingApiKey["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetails>} details
 */

_MissingApiKey["default"].prototype['details'] = undefined; // Implement InvalidApiKey interface:

/**
 * Specifies an error code, e.g. error 404.
 * @member {String} code
 */

_InvalidApiKey["default"].prototype['code'] = undefined;
/**
 * Specifies the message of the error, i.e. why the error was returned, e.g. error 404 stands for “not found”.
 * @member {String} message
 */

_InvalidApiKey["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BannedIpAddressDetails>} details
 */

_InvalidApiKey["default"].prototype['details'] = undefined;
var _default = GetXRPRippleAddressDetailsE401;
exports["default"] = _default;