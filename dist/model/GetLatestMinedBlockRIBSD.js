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
 * The GetLatestMinedBlockRIBSD model module.
 * @module model/GetLatestMinedBlockRIBSD
 * @version 1.2.0
 */
var GetLatestMinedBlockRIBSD = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetLatestMinedBlockRIBSD</code>.
   * Dogecoin
   * @alias module:model/GetLatestMinedBlockRIBSD
   * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
   * @param nonce {Number} Represents a random value that can be adjusted to satisfy the proof of work
   * @param size {Number} Represents the total size of the block in Bytes.
   * @param bits {String} Represents a specific sub-unit of Doge. Bits have two-decimal precision.
   * @param chainwork {String} Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
   * @param merkleRoot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
   * @param strippedSize {Number} Defines the numeric representation of the block size excluding the witness data.
   * @param version {Number} Represents the version of the specific block on the blockchain.
   * @param weight {Number} Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
   */
  function GetLatestMinedBlockRIBSD(difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, weight) {
    _classCallCheck(this, GetLatestMinedBlockRIBSD);

    GetLatestMinedBlockRIBSD.initialize(this, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, weight);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetLatestMinedBlockRIBSD, null, [{
    key: "initialize",
    value: function initialize(obj, difficulty, nonce, size, bits, chainwork, merkleRoot, strippedSize, version, weight) {
      obj['difficulty'] = difficulty;
      obj['nonce'] = nonce;
      obj['size'] = size;
      obj['bits'] = bits;
      obj['chainwork'] = chainwork;
      obj['merkleRoot'] = merkleRoot;
      obj['strippedSize'] = strippedSize;
      obj['version'] = version;
      obj['weight'] = weight;
    }
    /**
     * Constructs a <code>GetLatestMinedBlockRIBSD</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLatestMinedBlockRIBSD} obj Optional instance to populate.
     * @return {module:model/GetLatestMinedBlockRIBSD} The populated <code>GetLatestMinedBlockRIBSD</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetLatestMinedBlockRIBSD();

        if (data.hasOwnProperty('difficulty')) {
          obj['difficulty'] = _ApiClient["default"].convertToType(data['difficulty'], 'String');
        }

        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('bits')) {
          obj['bits'] = _ApiClient["default"].convertToType(data['bits'], 'String');
        }

        if (data.hasOwnProperty('chainwork')) {
          obj['chainwork'] = _ApiClient["default"].convertToType(data['chainwork'], 'String');
        }

        if (data.hasOwnProperty('merkleRoot')) {
          obj['merkleRoot'] = _ApiClient["default"].convertToType(data['merkleRoot'], 'String');
        }

        if (data.hasOwnProperty('strippedSize')) {
          obj['strippedSize'] = _ApiClient["default"].convertToType(data['strippedSize'], 'Number');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _ApiClient["default"].convertToType(data['weight'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GetLatestMinedBlockRIBSD;
}();
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */


GetLatestMinedBlockRIBSD.prototype['difficulty'] = undefined;
/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {Number} nonce
 */

GetLatestMinedBlockRIBSD.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

GetLatestMinedBlockRIBSD.prototype['size'] = undefined;
/**
 * Represents a specific sub-unit of Doge. Bits have two-decimal precision.
 * @member {String} bits
 */

GetLatestMinedBlockRIBSD.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

GetLatestMinedBlockRIBSD.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

GetLatestMinedBlockRIBSD.prototype['merkleRoot'] = undefined;
/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */

GetLatestMinedBlockRIBSD.prototype['strippedSize'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

GetLatestMinedBlockRIBSD.prototype['version'] = undefined;
/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit.
 * @member {Number} weight
 */

GetLatestMinedBlockRIBSD.prototype['weight'] = undefined;
var _default = GetLatestMinedBlockRIBSD;
exports["default"] = _default;