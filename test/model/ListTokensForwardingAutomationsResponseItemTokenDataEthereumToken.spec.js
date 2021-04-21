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
    instance = new CryptoApis.ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken();
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

  describe('ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken', function() {
    it('should create an instance of ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken', function() {
      // uncomment below and update the code to test ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken
      //var instane = new CryptoApis.ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken();
      //expect(instance).to.be.a(CryptoApis.ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken);
    });

    it('should have the property contractAddress (base name: "contractAddress")', function() {
      // uncomment below and update the code to test the property contractAddress
      //var instance = new CryptoApis.ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken();
      //expect(instance).to.be();
    });

  });

}));
