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


import ApiClient from "../ApiClient";
import GetAddressDetails402Response from '../model/GetAddressDetails402Response';
import GetAddressDetails409Response from '../model/GetAddressDetails409Response';
import GetAddressDetails415Response from '../model/GetAddressDetails415Response';
import GetAddressDetails422Response from '../model/GetAddressDetails422Response';
import GetAddressDetails429Response from '../model/GetAddressDetails429Response';
import GetAddressDetails500Response from '../model/GetAddressDetails500Response';
import GetLatestMinedZilliqaBlock400Response from '../model/GetLatestMinedZilliqaBlock400Response';
import GetLatestMinedZilliqaBlock401Response from '../model/GetLatestMinedZilliqaBlock401Response';
import GetLatestMinedZilliqaBlock403Response from '../model/GetLatestMinedZilliqaBlock403Response';
import GetLatestMinedZilliqaBlockR from '../model/GetLatestMinedZilliqaBlockR';
import GetTransactionDetailsByTransactionID404Response from '../model/GetTransactionDetailsByTransactionID404Response';
import GetZilliqaAddressDetails400Response from '../model/GetZilliqaAddressDetails400Response';
import GetZilliqaAddressDetails401Response from '../model/GetZilliqaAddressDetails401Response';
import GetZilliqaAddressDetails403Response from '../model/GetZilliqaAddressDetails403Response';
import GetZilliqaAddressDetailsR from '../model/GetZilliqaAddressDetailsR';
import GetZilliqaBlockDetailsByBlockHash400Response from '../model/GetZilliqaBlockDetailsByBlockHash400Response';
import GetZilliqaBlockDetailsByBlockHash401Response from '../model/GetZilliqaBlockDetailsByBlockHash401Response';
import GetZilliqaBlockDetailsByBlockHash403Response from '../model/GetZilliqaBlockDetailsByBlockHash403Response';
import GetZilliqaBlockDetailsByBlockHashR from '../model/GetZilliqaBlockDetailsByBlockHashR';
import GetZilliqaBlockDetailsByBlockHeight400Response from '../model/GetZilliqaBlockDetailsByBlockHeight400Response';
import GetZilliqaBlockDetailsByBlockHeight401Response from '../model/GetZilliqaBlockDetailsByBlockHeight401Response';
import GetZilliqaBlockDetailsByBlockHeight403Response from '../model/GetZilliqaBlockDetailsByBlockHeight403Response';
import GetZilliqaBlockDetailsByBlockHeightR from '../model/GetZilliqaBlockDetailsByBlockHeightR';
import GetZilliqaTransactionDetailsByTransactionID400Response from '../model/GetZilliqaTransactionDetailsByTransactionID400Response';
import GetZilliqaTransactionDetailsByTransactionID401Response from '../model/GetZilliqaTransactionDetailsByTransactionID401Response';
import GetZilliqaTransactionDetailsByTransactionID403Response from '../model/GetZilliqaTransactionDetailsByTransactionID403Response';
import GetZilliqaTransactionDetailsByTransactionIDR from '../model/GetZilliqaTransactionDetailsByTransactionIDR';
import ListTransactionsByBlockHeight404Response from '../model/ListTransactionsByBlockHeight404Response';
import ListZilliqaTransactionsByAddress400Response from '../model/ListZilliqaTransactionsByAddress400Response';
import ListZilliqaTransactionsByAddress401Response from '../model/ListZilliqaTransactionsByAddress401Response';
import ListZilliqaTransactionsByAddress403Response from '../model/ListZilliqaTransactionsByAddress403Response';
import ListZilliqaTransactionsByAddressR from '../model/ListZilliqaTransactionsByAddressR';
import ListZilliqaTransactionsByBlockHash400Response from '../model/ListZilliqaTransactionsByBlockHash400Response';
import ListZilliqaTransactionsByBlockHash401Response from '../model/ListZilliqaTransactionsByBlockHash401Response';
import ListZilliqaTransactionsByBlockHash403Response from '../model/ListZilliqaTransactionsByBlockHash403Response';
import ListZilliqaTransactionsByBlockHashR from '../model/ListZilliqaTransactionsByBlockHashR';
import ListZilliqaTransactionsByBlockHeight400Response from '../model/ListZilliqaTransactionsByBlockHeight400Response';
import ListZilliqaTransactionsByBlockHeight401Response from '../model/ListZilliqaTransactionsByBlockHeight401Response';
import ListZilliqaTransactionsByBlockHeight403Response from '../model/ListZilliqaTransactionsByBlockHeight403Response';
import ListZilliqaTransactionsByBlockHeightR from '../model/ListZilliqaTransactionsByBlockHeightR';

/**
* Zilliqa service.
* @module api/ZilliqaApi
* @version 1.6.0
*/
export default class ZilliqaApi {

    /**
    * Constructs a new ZilliqaApi. 
    * @alias module:api/ZilliqaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Latest Mined Zilliqa Block
     * Through this endpoint users can obtain information on the latest block that has been mined on the Zilliqa blockchain. Data could include the current and previous block hashes, transaction count, and more.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLatestMinedZilliqaBlockR} and HTTP response
     */
    getLatestMinedZilliqaBlockWithHttpInfo(network, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getLatestMinedZilliqaBlock");
      }

      let pathParams = {
        'network': network
      };
      let queryParams = {
        'context': opts['context']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetLatestMinedZilliqaBlockR;
      return this.apiClient.callApi(
        '/blockchain-data/zilliqa-specific/{network}/blocks/last', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Latest Mined Zilliqa Block
     * Through this endpoint users can obtain information on the latest block that has been mined on the Zilliqa blockchain. Data could include the current and previous block hashes, transaction count, and more.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLatestMinedZilliqaBlockR}
     */
    getLatestMinedZilliqaBlock(network, opts) {
      return this.getLatestMinedZilliqaBlockWithHttpInfo(network, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Zilliqa Address Details
     * Through this endpoint customers can obtain information address details from the Zilliqa blockchain.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Defines the specific transaction's address.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetZilliqaAddressDetailsR} and HTTP response
     */
    getZilliqaAddressDetailsWithHttpInfo(network, address, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getZilliqaAddressDetails");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getZilliqaAddressDetails");
      }

      let pathParams = {
        'network': network,
        'address': address
      };
      let queryParams = {
        'context': opts['context']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetZilliqaAddressDetailsR;
      return this.apiClient.callApi(
        '/blockchain-data/zilliqa-specific/{network}/addresses/{address}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Zilliqa Address Details
     * Through this endpoint customers can obtain information address details from the Zilliqa blockchain.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Defines the specific transaction's address.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetZilliqaAddressDetailsR}
     */
    getZilliqaAddressDetails(network, address, opts) {
      return this.getZilliqaAddressDetailsWithHttpInfo(network, address, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Zilliqa Block Details By Block Hash
     * Through this endpoint customers can obtain block details from the Zilliqa blockchain by providing the block Hash parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetZilliqaBlockDetailsByBlockHashR} and HTTP response
     */
    getZilliqaBlockDetailsByBlockHashWithHttpInfo(network, blockHash, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getZilliqaBlockDetailsByBlockHash");
      }
      // verify the required parameter 'blockHash' is set
      if (blockHash === undefined || blockHash === null) {
        throw new Error("Missing the required parameter 'blockHash' when calling getZilliqaBlockDetailsByBlockHash");
      }

      let pathParams = {
        'network': network,
        'blockHash': blockHash
      };
      let queryParams = {
        'context': opts['context']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetZilliqaBlockDetailsByBlockHashR;
      return this.apiClient.callApi(
        '/blockchain-data/zilliqa-specific/{network}/blocks/hash/{blockHash}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Zilliqa Block Details By Block Hash
     * Through this endpoint customers can obtain block details from the Zilliqa blockchain by providing the block Hash parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetZilliqaBlockDetailsByBlockHashR}
     */
    getZilliqaBlockDetailsByBlockHash(network, blockHash, opts) {
      return this.getZilliqaBlockDetailsByBlockHashWithHttpInfo(network, blockHash, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Zilliqa Block Details By Block Height
     * Through this endpoint customers can obtain block details from the Zilliqa blockchain by providing the block Height parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Number} blockHeight Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetZilliqaBlockDetailsByBlockHeightR} and HTTP response
     */
    getZilliqaBlockDetailsByBlockHeightWithHttpInfo(network, blockHeight, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getZilliqaBlockDetailsByBlockHeight");
      }
      // verify the required parameter 'blockHeight' is set
      if (blockHeight === undefined || blockHeight === null) {
        throw new Error("Missing the required parameter 'blockHeight' when calling getZilliqaBlockDetailsByBlockHeight");
      }

      let pathParams = {
        'network': network,
        'blockHeight': blockHeight
      };
      let queryParams = {
        'context': opts['context']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetZilliqaBlockDetailsByBlockHeightR;
      return this.apiClient.callApi(
        '/blockchain-data/zilliqa-specific/{network}/blocks/height/{blockHeight}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Zilliqa Block Details By Block Height
     * Through this endpoint customers can obtain block details from the Zilliqa blockchain by providing the block Height parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Number} blockHeight Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetZilliqaBlockDetailsByBlockHeightR}
     */
    getZilliqaBlockDetailsByBlockHeight(network, blockHeight, opts) {
      return this.getZilliqaBlockDetailsByBlockHeightWithHttpInfo(network, blockHeight, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Zilliqa Transaction Details by Transaction ID
     * Through this endpoint customers can obtain transaction details on the Zilliqa blockchain by providing a Transaction ID parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionHash String identifier of the transaction
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetZilliqaTransactionDetailsByTransactionIDR} and HTTP response
     */
    getZilliqaTransactionDetailsByTransactionIDWithHttpInfo(network, transactionHash, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getZilliqaTransactionDetailsByTransactionID");
      }
      // verify the required parameter 'transactionHash' is set
      if (transactionHash === undefined || transactionHash === null) {
        throw new Error("Missing the required parameter 'transactionHash' when calling getZilliqaTransactionDetailsByTransactionID");
      }

      let pathParams = {
        'network': network,
        'transactionHash': transactionHash
      };
      let queryParams = {
        'context': opts['context']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetZilliqaTransactionDetailsByTransactionIDR;
      return this.apiClient.callApi(
        '/blockchain-data/zilliqa-specific/{network}/transactions/{transactionHash}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Zilliqa Transaction Details by Transaction ID
     * Through this endpoint customers can obtain transaction details on the Zilliqa blockchain by providing a Transaction ID parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} transactionHash String identifier of the transaction
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetZilliqaTransactionDetailsByTransactionIDR}
     */
    getZilliqaTransactionDetailsByTransactionID(network, transactionHash, opts) {
      return this.getZilliqaTransactionDetailsByTransactionIDWithHttpInfo(network, transactionHash, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Zilliqa Transactions by Address
     * Through this endpoint customers can list transactions on the Zilliqa blockchain by the address parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Defines the specific address of the sender.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListZilliqaTransactionsByAddressR} and HTTP response
     */
    listZilliqaTransactionsByAddressWithHttpInfo(network, address, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listZilliqaTransactionsByAddress");
      }
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listZilliqaTransactionsByAddress");
      }

      let pathParams = {
        'network': network,
        'address': address
      };
      let queryParams = {
        'context': opts['context'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListZilliqaTransactionsByAddressR;
      return this.apiClient.callApi(
        '/blockchain-data/zilliqa-specific/{network}/addresses/{address}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Zilliqa Transactions by Address
     * Through this endpoint customers can list transactions on the Zilliqa blockchain by the address parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} address Defines the specific address of the sender.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListZilliqaTransactionsByAddressR}
     */
    listZilliqaTransactionsByAddress(network, address, opts) {
      return this.listZilliqaTransactionsByAddressWithHttpInfo(network, address, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Zilliqa Transactions By Block Hash
     * Through this endpoint customers can list transactions on the Zilliqa blockchain by the block hash parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListZilliqaTransactionsByBlockHashR} and HTTP response
     */
    listZilliqaTransactionsByBlockHashWithHttpInfo(network, blockHash, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listZilliqaTransactionsByBlockHash");
      }
      // verify the required parameter 'blockHash' is set
      if (blockHash === undefined || blockHash === null) {
        throw new Error("Missing the required parameter 'blockHash' when calling listZilliqaTransactionsByBlockHash");
      }

      let pathParams = {
        'network': network,
        'blockHash': blockHash
      };
      let queryParams = {
        'context': opts['context'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListZilliqaTransactionsByBlockHashR;
      return this.apiClient.callApi(
        '/blockchain-data/zilliqa-specific/{network}/blocks/hash/{blockHash}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Zilliqa Transactions By Block Hash
     * Through this endpoint customers can list transactions on the Zilliqa blockchain by the block hash parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListZilliqaTransactionsByBlockHashR}
     */
    listZilliqaTransactionsByBlockHash(network, blockHash, opts) {
      return this.listZilliqaTransactionsByBlockHashWithHttpInfo(network, blockHash, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Zilliqa Transactions By Block Height
     * Through this endpoint customers can list transactions on the Zilliqa blockchain by the block height parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Number} blockHeight Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListZilliqaTransactionsByBlockHeightR} and HTTP response
     */
    listZilliqaTransactionsByBlockHeightWithHttpInfo(network, blockHeight, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listZilliqaTransactionsByBlockHeight");
      }
      // verify the required parameter 'blockHeight' is set
      if (blockHeight === undefined || blockHeight === null) {
        throw new Error("Missing the required parameter 'blockHeight' when calling listZilliqaTransactionsByBlockHeight");
      }

      let pathParams = {
        'network': network,
        'blockHeight': blockHeight
      };
      let queryParams = {
        'context': opts['context'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListZilliqaTransactionsByBlockHeightR;
      return this.apiClient.callApi(
        '/blockchain-data/zilliqa-specific/{network}/blocks/height/{blockHeight}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Zilliqa Transactions By Block Height
     * Through this endpoint customers can list transactions on the Zilliqa blockchain by the block height parameter.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Number} blockHeight Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListZilliqaTransactionsByBlockHeightR}
     */
    listZilliqaTransactionsByBlockHeight(network, blockHeight, opts) {
      return this.listZilliqaTransactionsByBlockHeightWithHttpInfo(network, blockHeight, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
