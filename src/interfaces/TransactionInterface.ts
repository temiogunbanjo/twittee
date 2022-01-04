export interface ITransactionInterface {
  id: string;
  merchant: string;
  amount: string;
  transactionDate: string;
  status: string;
  paymentMode: string;
}

export const emptyTransactionBody: ITransactionInterface = {
  id: '',
  merchant: '',
  amount: '0',
  transactionDate: '',
  status: '',
  paymentMode: '',
};
