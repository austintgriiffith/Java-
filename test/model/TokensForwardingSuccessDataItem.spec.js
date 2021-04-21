/**
 * Crypto APIs
 * Crypto APIs 2.0 is a complex and innovative infrastructure layer that radically simplifies the development of any Blockchain and Crypto related applications. Organized around REST, Crypto APIs 2.0 can assist both novice Bitcoin/Ethereum enthusiasts and crypto experts with the development of their blockchain applications. Crypto APIs 2.0 provides unified endpoints and data, raw data, automatic tokens and coins forwardings, callback functionalities, and much more.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: bizdev@cryptoapis.io
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
    factory(root.expect, root.CryptoApis);
  }
}(this, function(expect, CryptoApis) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CryptoApis.TokensForwardingSuccessDataItem();
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

  describe('TokensForwardingSuccessDataItem', function() {
    it('should create an instance of TokensForwardingSuccessDataItem', function() {
      // uncomment below and update the code to test TokensForwardingSuccessDataItem
      //var instane = new CryptoApis.TokensForwardingSuccessDataItem();
      //expect(instance).to.be.a(CryptoApis.TokensForwardingSuccessDataItem);
    });

    it('should have the property blockchain (base name: "blockchain")', function() {
      // uncomment below and update the code to test the property blockchain
      //var instance = new CryptoApis.TokensForwardingSuccessDataItem();
      //expect(instance).to.be();
    });

    it('should have the property network (base name: "network")', function() {
      // uncomment below and update the code to test the property network
      //var instance = new CryptoApis.TokensForwardingSuccessDataItem();
      //expect(instance).to.be();
    });

    it('should have the property fromAddress (base name: "fromAddress")', function() {
      // uncomment below and update the code to test the property fromAddress
      //var instance = new CryptoApis.TokensForwardingSuccessDataItem();
      //expect(instance).to.be();
    });

    it('should have the property toAddress (base name: "toAddress")', function() {
      // uncomment below and update the code to test the property toAddress
      //var instance = new CryptoApis.TokensForwardingSuccessDataItem();
      //expect(instance).to.be();
    });

    it('should have the property spentFeesAmount (base name: "spentFeesAmount")', function() {
      // uncomment below and update the code to test the property spentFeesAmount
      //var instance = new CryptoApis.TokensForwardingSuccessDataItem();
      //expect(instance).to.be();
    });

    it('should have the property spentFeesUnit (base name: "spentFeesUnit")', function() {
      // uncomment below and update the code to test the property spentFeesUnit
      //var instance = new CryptoApis.TokensForwardingSuccessDataItem();
      //expect(instance).to.be();
    });

    it('should have the property triggerTransactionId (base name: "triggerTransactionId")', function() {
      // uncomment below and update the code to test the property triggerTransactionId
      //var instance = new CryptoApis.TokensForwardingSuccessDataItem();
      //expect(instance).to.be();
    });

    it('should have the property forwardingTransactionId (base name: "forwardingTransactionId")', function() {
      // uncomment below and update the code to test the property forwardingTransactionId
      //var instance = new CryptoApis.TokensForwardingSuccessDataItem();
      //expect(instance).to.be();
    });

    it('should have the property tokenType (base name: "tokenType")', function() {
      // uncomment below and update the code to test the property tokenType
      //var instance = new CryptoApis.TokensForwardingSuccessDataItem();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new CryptoApis.TokensForwardingSuccessDataItem();
      //expect(instance).to.be();
    });

  });

}));
