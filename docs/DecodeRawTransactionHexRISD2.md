# Cryptoapis.DecodeRawTransactionHexRISD2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locktime** | **Number** | Represents the time at which a particular transaction can be added to the blockchain. | 
**transactionHash** | **String** | Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions. | 
**vSize** | **Number** | Represents the virtual size of this transaction. | 
**version** | **Number** | Represents transaction version number | 
**vin** | [**[DecodeRawTransactionHexRISD2VinInner]**](DecodeRawTransactionHexRISD2VinInner.md) | Represents the transaction inputs. | 
**vout** | [**[DecodeRawTransactionHexRISD2VoutInner]**](DecodeRawTransactionHexRISD2VoutInner.md) | Represents the transaction outputs. | 
**weight** | **Number** | Represents the size of a block, measured in weight units and including the segwit discount. | [optional] 


