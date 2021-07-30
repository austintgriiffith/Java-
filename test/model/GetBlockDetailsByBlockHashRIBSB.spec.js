/**
 * CryptoAPIs
 * Crypto APIs 2.0 is a complex and innovative infrastructure layer that radically simplifies the development of any Blockchain and Crypto related applications. Organized around REST, Crypto APIs 2.0 can assist both novice Bitcoin/Ethereum enthusiasts and crypto experts with the development of their blockchain applications. Crypto APIs 2.0 provides unified endpoints and data, raw data, automatic tokens and coins forwardings, callback functionalities, and much more.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: developers@cryptoapis.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Cryptoapis);
  }
}(this, function(expect, Cryptoapis) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSB();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetBlockDetailsByBlockHashRIBSB', function() {
    it('should create an instance of GetBlockDetailsByBlockHashRIBSB', function() {
      // uncomment below and update the code to test GetBlockDetailsByBlockHashRIBSB
      //var instane = new Cryptoapis.GetBlockDetailsByBlockHashRIBSB();
      //expect(instance).to.be.a(Cryptoapis.GetBlockDetailsByBlockHashRIBSB);
    });

    it('should have the property difficulty (base name: "difficulty")', function() {
      // uncomment below and update the code to test the property difficulty
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSB();
      //expect(instance).to.be();
    });

    it('should have the property nonce (base name: "nonce")', function() {
      // uncomment below and update the code to test the property nonce
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSB();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSB();
      //expect(instance).to.be();
    });

    it('should have the property bits (base name: "bits")', function() {
      // uncomment below and update the code to test the property bits
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSB();
      //expect(instance).to.be();
    });

    it('should have the property chainwork (base name: "chainwork")', function() {
      // uncomment below and update the code to test the property chainwork
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSB();
      //expect(instance).to.be();
    });

    it('should have the property merkleRoot (base name: "merkleRoot")', function() {
      // uncomment below and update the code to test the property merkleRoot
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSB();
      //expect(instance).to.be();
    });

    it('should have the property strippedSize (base name: "strippedSize")', function() {
      // uncomment below and update the code to test the property strippedSize
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSB();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSB();
      //expect(instance).to.be();
    });

    it('should have the property versionHex (base name: "versionHex")', function() {
      // uncomment below and update the code to test the property versionHex
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSB();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instance = new Cryptoapis.GetBlockDetailsByBlockHashRIBSB();
      //expect(instance).to.be();
    });

  });

}));