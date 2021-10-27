import {
  AddressInterface,
  AssetValue,
  Balance,
  PsetBase64,
  Recipient,
  Transaction,
  TransactionHex,
  Utxo,
} from './types';

/**
 * Define the Marina provider methods.
 * Provided by marina extension at window.marina
 */
export interface CoinosProvider {
  getNetwork(): Promise<'liquid' | 'regtest'>;

  sendTransaction(
    recipients: Recipient[],
    feeAsset?: string
  ): Promise<TransactionHex>;

  signTransaction(pset: PsetBase64): Promise<PsetBase64>;

  getCoins(): Promise<Utxo[]>;

  getTransactions(): Promise<Transaction[]>;

  getBalances(): Promise<Balance[]>;

  getNextAddress(): Promise<AddressInterface>;

  getNextChangeAddress(): Promise<AddressInterface>;

  approveSpend(toApprove: AssetValue[]): Promise<PsetBase64>;
}
