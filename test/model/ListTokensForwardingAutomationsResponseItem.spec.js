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
    instance = new CryptoApis.ListTokensForwardingAutomationsResponseItem();
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

  describe('ListTokensForwardingAutomationsResponseItem', function() {
    it('should create an instance of ListTokensForwardingAutomationsResponseItem', function() {
      // uncomment below and update the code to test ListTokensForwardingAutomationsResponseItem
      //var instane = new CryptoApis.ListTokensForwardingAutomationsResponseItem();
      //expect(instance).to.be.a(CryptoApis.ListTokensForwardingAutomationsResponseItem);
    });

    it('should have the property callbackUrl (base name: "callbackUrl")', function() {
      // uncomment below and update the code to test the property callbackUrl
      //var instance = new CryptoApis.ListTokensForwardingAutomationsResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property confirmationsCount (base name: "confirmationsCount")', function() {
      // uncomment below and update the code to test the property confirmationsCount
      //var instance = new CryptoApis.ListTokensForwardingAutomationsResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property createdTimestamp (base name: "createdTimestamp")', function() {
      // uncomment below and update the code to test the property createdTimestamp
      //var instance = new CryptoApis.ListTokensForwardingAutomationsResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property feeAddress (base name: "feeAddress")', function() {
      // uncomment below and update the code to test the property feeAddress
      //var instance = new CryptoApis.ListTokensForwardingAutomationsResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property feePriority (base name: "feePriority")', function() {
      // uncomment below and update the code to test the property feePriority
      //var instance = new CryptoApis.ListTokensForwardingAutomationsResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property fromAddress (base name: "fromAddress")', function() {
      // uncomment below and update the code to test the property fromAddress
      //var instance = new CryptoApis.ListTokensForwardingAutomationsResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property minimumTransferAmount (base name: "minimumTransferAmount")', function() {
      // uncomment below and update the code to test the property minimumTransferAmount
      //var instance = new CryptoApis.ListTokensForwardingAutomationsResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property referenceId (base name: "referenceId")', function() {
      // uncomment below and update the code to test the property referenceId
      //var instance = new CryptoApis.ListTokensForwardingAutomationsResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property toAddress (base name: "toAddress")', function() {
      // uncomment below and update the code to test the property toAddress
      //var instance = new CryptoApis.ListTokensForwardingAutomationsResponseItem();
      //expect(instance).to.be();
    });

    it('should have the property tokenData (base name: "tokenData")', function() {
      // uncomment below and update the code to test the property tokenData
      //var instance = new CryptoApis.ListTokensForwardingAutomationsResponseItem();
      //expect(instance).to.be();
    });

  });

}));
