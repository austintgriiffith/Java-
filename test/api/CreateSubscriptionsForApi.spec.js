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
    instance = new CryptoApis.CreateSubscriptionsForApi();
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

  describe('CreateSubscriptionsForApi', function() {
    describe('minedTransaction', function() {
      it('should call minedTransaction successfully', function(done) {
        //uncomment below and update the code to test minedTransaction
        //instance.minedTransaction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newBlock', function() {
      it('should call newBlock successfully', function(done) {
        //uncomment below and update the code to test newBlock
        //instance.newBlock(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newConfirmedCoinsTransactions', function() {
      it('should call newConfirmedCoinsTransactions successfully', function(done) {
        //uncomment below and update the code to test newConfirmedCoinsTransactions
        //instance.newConfirmedCoinsTransactions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newConfirmedCoinsTransactionsAndEachConfirmation', function() {
      it('should call newConfirmedCoinsTransactionsAndEachConfirmation successfully', function(done) {
        //uncomment below and update the code to test newConfirmedCoinsTransactionsAndEachConfirmation
        //instance.newConfirmedCoinsTransactionsAndEachConfirmation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newConfirmedTokensTransactions', function() {
      it('should call newConfirmedTokensTransactions successfully', function(done) {
        //uncomment below and update the code to test newConfirmedTokensTransactions
        //instance.newConfirmedTokensTransactions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newConfirmedTokensTransactionsAndEachConfirmation', function() {
      it('should call newConfirmedTokensTransactionsAndEachConfirmation successfully', function(done) {
        //uncomment below and update the code to test newConfirmedTokensTransactionsAndEachConfirmation
        //instance.newConfirmedTokensTransactionsAndEachConfirmation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newUnconfirmedCoinsTransactions', function() {
      it('should call newUnconfirmedCoinsTransactions successfully', function(done) {
        //uncomment below and update the code to test newUnconfirmedCoinsTransactions
        //instance.newUnconfirmedCoinsTransactions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newUnconfirmedTokensTransactions', function() {
      it('should call newUnconfirmedTokensTransactions successfully', function(done) {
        //uncomment below and update the code to test newUnconfirmedTokensTransactions
        //instance.newUnconfirmedTokensTransactions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
