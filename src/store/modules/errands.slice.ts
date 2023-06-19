import { createAsyncThunk, createSlice, isAction } from '@reduxjs/toolkit';
import { Errand } from '../../models/errands.model';
import { ApiService } from '../../services/api.service';

export const listErrandsAction = createAsyncThunk('errands/list', async () => {
  const result = await ApiService.listErrands('6047fc73-3f88-4210-9173-aefa878fceae');
  console.log(result.data);
  return result.data?.errands ?? [];
});

export const errandsSlice = createSlice({
  name: 'errands',
  initialState: [] as Errand[],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(listErrandsAction.pending, (state, action) => {
      console.log('listErrands iniciou...');
    });
    builder.addCase(listErrandsAction.fulfilled, (state, action) => {
      console.log('listErrands finalizado!');
      console.log(action.payload);

      return action.payload;
    });
  }
});

export default errandsSlice.reducer;
