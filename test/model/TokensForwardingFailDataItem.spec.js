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
    instance = new CryptoApis.TokensForwardingFailDataItem();
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

  describe('TokensForwardingFailDataItem', function() {
    it('should create an instance of TokensForwardingFailDataItem', function() {
      // uncomment below and update the code to test TokensForwardingFailDataItem
      //var instane = new CryptoApis.TokensForwardingFailDataItem();
      //expect(instance).to.be.a(CryptoApis.TokensForwardingFailDataItem);
    });

    it('should have the property blockchain (base name: "blockchain")', function() {
      // uncomment below and update the code to test the property blockchain
      //var instance = new CryptoApis.TokensForwardingFailDataItem();
      //expect(instance).to.be();
    });

    it('should have the property network (base name: "network")', function() {
      // uncomment below and update the code to test the property network
      //var instance = new CryptoApis.TokensForwardingFailDataItem();
      //expect(instance).to.be();
    });

    it('should have the property fromAddress (base name: "fromAddress")', function() {
      // uncomment below and update the code to test the property fromAddress
      //var instance = new CryptoApis.TokensForwardingFailDataItem();
      //expect(instance).to.be();
    });

    it('should have the property toAddress (base name: "toAddress")', function() {
      // uncomment below and update the code to test the property toAddress
      //var instance = new CryptoApis.TokensForwardingFailDataItem();
      //expect(instance).to.be();
    });

    it('should have the property triggerTransactionId (base name: "triggerTransactionId")', function() {
      // uncomment below and update the code to test the property triggerTransactionId
      //var instance = new CryptoApis.TokensForwardingFailDataItem();
      //expect(instance).to.be();
    });

    it('should have the property errorCode (base name: "errorCode")', function() {
      // uncomment below and update the code to test the property errorCode
      //var instance = new CryptoApis.TokensForwardingFailDataItem();
      //expect(instance).to.be();
    });

    it('should have the property errorMessage (base name: "errorMessage")', function() {
      // uncomment below and update the code to test the property errorMessage
      //var instance = new CryptoApis.TokensForwardingFailDataItem();
      //expect(instance).to.be();
    });

  });

}));
