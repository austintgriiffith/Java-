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
    instance = new Cryptoapis.InformativeApi();
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

  describe('InformativeApi', function() {
    describe('getTransactionRequestDetails', function() {
      it('should call getTransactionRequestDetails successfully', function(done) {
        //uncomment below and update the code to test getTransactionRequestDetails
        //instance.getTransactionRequestDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWalletAssetDetails', function() {
      it('should call getWalletAssetDetails successfully', function(done) {
        //uncomment below and update the code to test getWalletAssetDetails
        //instance.getWalletAssetDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWalletTransactionDetailsByTransactionID', function() {
      it('should call getWalletTransactionDetailsByTransactionID successfully', function(done) {
        //uncomment below and update the code to test getWalletTransactionDetailsByTransactionID
        //instance.getWalletTransactionDetailsByTransactionID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAllAssetsByWalletID', function() {
      it('should call listAllAssetsByWalletID successfully', function(done) {
        //uncomment below and update the code to test listAllAssetsByWalletID
        //instance.listAllAssetsByWalletID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAllAssetsFromAllWallets', function() {
      it('should call listAllAssetsFromAllWallets successfully', function(done) {
        //uncomment below and update the code to test listAllAssetsFromAllWallets
        //instance.listAllAssetsFromAllWallets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDepositAddresses', function() {
      it('should call listDepositAddresses successfully', function(done) {
        //uncomment below and update the code to test listDepositAddresses
        //instance.listDepositAddresses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listSupportedTokens', function() {
      it('should call listSupportedTokens successfully', function(done) {
        //uncomment below and update the code to test listSupportedTokens
        //instance.listSupportedTokens(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listWalletTransactions', function() {
      it('should call listWalletTransactions successfully', function(done) {
        //uncomment below and update the code to test listWalletTransactions
        //instance.listWalletTransactions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
