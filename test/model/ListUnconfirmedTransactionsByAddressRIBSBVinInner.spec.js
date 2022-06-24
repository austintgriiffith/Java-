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
    instance = new Cryptoapis.ListUnconfirmedTransactionsByAddressRIBSBVinInner();
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

  describe('ListUnconfirmedTransactionsByAddressRIBSBVinInner', function() {
    it('should create an instance of ListUnconfirmedTransactionsByAddressRIBSBVinInner', function() {
      // uncomment below and update the code to test ListUnconfirmedTransactionsByAddressRIBSBVinInner
      //var instance = new Cryptoapis.ListUnconfirmedTransactionsByAddressRIBSBVinInner();
      //expect(instance).to.be.a(Cryptoapis.ListUnconfirmedTransactionsByAddressRIBSBVinInner);
    });

    it('should have the property addresses (base name: "addresses")', function() {
      // uncomment below and update the code to test the property addresses
      //var instance = new Cryptoapis.ListUnconfirmedTransactionsByAddressRIBSBVinInner();
      //expect(instance).to.be();
    });

    it('should have the property scriptSig (base name: "scriptSig")', function() {
      // uncomment below and update the code to test the property scriptSig
      //var instance = new Cryptoapis.ListUnconfirmedTransactionsByAddressRIBSBVinInner();
      //expect(instance).to.be();
    });

    it('should have the property sequence (base name: "sequence")', function() {
      // uncomment below and update the code to test the property sequence
      //var instance = new Cryptoapis.ListUnconfirmedTransactionsByAddressRIBSBVinInner();
      //expect(instance).to.be();
    });

    it('should have the property txid (base name: "txid")', function() {
      // uncomment below and update the code to test the property txid
      //var instance = new Cryptoapis.ListUnconfirmedTransactionsByAddressRIBSBVinInner();
      //expect(instance).to.be();
    });

    it('should have the property txinwitness (base name: "txinwitness")', function() {
      // uncomment below and update the code to test the property txinwitness
      //var instance = new Cryptoapis.ListUnconfirmedTransactionsByAddressRIBSBVinInner();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new Cryptoapis.ListUnconfirmedTransactionsByAddressRIBSBVinInner();
      //expect(instance).to.be();
    });

    it('should have the property vout (base name: "vout")', function() {
      // uncomment below and update the code to test the property vout
      //var instance = new Cryptoapis.ListUnconfirmedTransactionsByAddressRIBSBVinInner();
      //expect(instance).to.be();
    });

  });

}));
