import { createAsyncThunk, createSlice, isAction } from '@reduxjs/toolkit';
import { Errand } from '../../models/errands.model';
import { ApiService } from '../../services/api.service';

interface ListErrandsProps {
  idUser: string;
}

export const listErrandsAction = createAsyncThunk('errands/list', async (props: ListErrandsProps) => {
  const result = await ApiService.listErrands(props.idUser);
  return result.data ?? [];
});

export const errandsSlice = createSlice({
  name: 'errands',
  initialState: [] as Errand[],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(listErrandsAction.pending, (state, action) => {
      // console.log('listErrands iniciou...');
    });
    builder.addCase(listErrandsAction.fulfilled, (state, action) => {
      // console.log('listErrands finalizado!');
      console.log(action.payload);

      return action.payload;
    });
  }
});

export default errandsSlice.reducer;
