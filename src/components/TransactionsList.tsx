import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { TransactionsTable } from './TransactionsTable';
import { Button } from '@mui/material';
import { TransactionType } from '../models/transaction.model';
import { listTransactionsAction } from '../store/modules/transactions.slice';

export const TransactionsList = () => {
  const transactions = useSelector((state: RootState) => state.transactions);
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<any>();

  const listTransactions = (type: TransactionType) => {
    dispatch(
      listTransactionsAction({
        id: user.id,
        type
      })
    );
  };

  return (
    <div>
      <p>Lista de transações:</p>
      <div>
        <Button variant="contained" onClick={() => listTransactions(TransactionType.Income)}>
          Listar Income
        </Button>
        <Button variant="contained" onClick={() => listTransactions(TransactionType.Outcome)}>
          Listar Outcome
        </Button>
      </div>
      <TransactionsTable transactions={transactions} />
    </div>
  );
};
