import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../models/user.model';
import { ApiResponse, ApiService } from '../../services/api.service';
import { LoginProps } from '../../models/login.model';

export const loginAction = createAsyncThunk('users/login', async (props: LoginProps) => {
  const result = await ApiService.login(props);
  return result;
});

const initialState: ApiResponse & { loading: boolean } = {
  ok: false,
  loading: false,
  message: '',
  data: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Quando não tem api
  },
  extraReducers(builder) {
    // QAUANDO ESTÁ PENDENTE
    builder.addCase(loginAction.pending, state => {
      state.loading = true;
    });
    // CASO DE CERTO  OU SEJA TUA API RESPONDER - BOM OU RUIM
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.ok = action.payload.ok;
      state.message = action.payload.message;

      if (action.payload.ok) {
        state.data = action.payload.data;
      }
    });
    // QUANDO A API DER RUIM
    builder.addCase(loginAction.rejected, state => {
      state.ok = false;
    });
  }
});

export default userSlice.reducer;
