export enum TransactionType {
  Income = 'I',
  Outcome = 'O'
}

export interface Errand {
  id: string;
  title: string;
  description: string;
}

export interface DeleteTransactionsProps {
  id: string;
  idTransaction: string;
}

export interface UpdateTransactionsProps {
  id: string;
  idTransaction: string;
  value?: number;
  type?: TransactionType;
}

export interface ListTransactionsProps {
  id: string;
  type: TransactionType;
}
