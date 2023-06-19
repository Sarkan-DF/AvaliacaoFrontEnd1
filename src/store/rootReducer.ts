import { combineReducers } from '@reduxjs/toolkit';
import errandsReducer from './modules/errands.slice';
import userReducer from './modules/user.slice';

export const combinedReducers = combineReducers({
  errands: errandsReducer,
  user: userReducer
});
