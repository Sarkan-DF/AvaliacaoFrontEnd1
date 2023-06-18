export enum TransactionType {
    Income = 'I',
    Outcome = 'O',
}

export interface Transaction {
    id: string;
    value: number;
    type: string;
    title: string;
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
