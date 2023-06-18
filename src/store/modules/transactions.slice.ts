import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DeleteTransactionsProps, ListTransactionsProps, Transaction, TransactionType, UpdateTransactionsProps } from '../../models/transaction.model';
import { ApiService } from '../../services/api.service';

export const listTransactionsAction = createAsyncThunk('transactions/list', async (props: ListTransactionsProps) => {
  const result = await ApiService.listTransactions(props);

  return result;
});

export const deleteTransactionAction = createAsyncThunk('transactions/delete', async (props: DeleteTransactionsProps) => {
  const result = await ApiService.deleteTransaction(props);

  return result;
});

export const updateTransactionAction = createAsyncThunk('transactions/update', async (props: UpdateTransactionsProps) => {
  const result = await ApiService.updateTransaction(props);

  if (result.ok && result.data) {
    const filtro = TransactionType.Income;

    result.data = result.data.filter((item: any) => item.type === filtro);
  }

  return result;
});

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: [] as Transaction[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listTransactionsAction.fulfilled, (_, action) => {
      return action.payload.data?.transactions ?? [];
    });

    builder.addCase(deleteTransactionAction.fulfilled, (_, action) => {
      return action.payload.data ?? [];
    });

    builder.addCase(updateTransactionAction.fulfilled, (_, action) => {
      return action.payload.data ?? [];
    });
  },
});

export default transactionsSlice.reducer;
