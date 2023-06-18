/* eslint-disable react/react-in-jsx-scope */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Transaction, TransactionType } from '../models/transaction.model';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransactionAction, updateTransactionAction } from '../store/modules/transactions.slice';
import { RootState } from '../store';
import React from 'react';

export interface TransactionsTableProps {
  transactions: Transaction[];
}

export const TransactionsTable = (props: TransactionsTableProps) => {
  const dispatch = useDispatch<any>();
  const user = useSelector((state: RootState) => state.user);

  const deletarTransaction = (idTransaction: string) => {
    dispatch(
      deleteTransactionAction({
        id: user.id,
        idTransaction
      })
    );
  };

  const mudarType = (idTransaction: string, oldType: TransactionType) => {
    const type = oldType == TransactionType.Income ? TransactionType.Outcome : TransactionType.Income;

    dispatch(
      updateTransactionAction({
        id: user.id,
        idTransaction,
        type
      })
    );
  };

  return (
    <div>
      <p>Tabela de Transações:</p>
      <Button variant="contained">Criar Transação</Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Toggle type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.transactions.map((row: Transaction) => (
              <TableRow
                key={row.id}
                sx={{
                  '&:last-child td, &:last-child th': {
                    border: 0
                  }
                }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.value}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">
                  <Button variant="outlined" onClick={() => deletarTransaction(row.id)}>
                    Deletar
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button variant="outlined" onClick={() => mudarType(row.id, row.type as TransactionType)}>
                    {row.type === TransactionType.Income ? 'Mudar para outcome' : 'Mudar para income'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
