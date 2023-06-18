import { combineReducers } from '@reduxjs/toolkit';
import transactionsReducer from './modules/transactions.slice';
import userReducer from './modules/user.slice';

export const combinedReducers = combineReducers({
  transactions: transactionsReducer,
  user: userReducer,
});
