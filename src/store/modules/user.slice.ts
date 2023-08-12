import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateUserProps, User } from '../../models/user.model';
import { ApiResponse, ApiService } from '../../services/api.service';
import { LoginProps } from '../../models/login.model';

export const loginAction = createAsyncThunk('user/loginAction', async (props: LoginProps) => {
  const result = await ApiService.login(props);
  return result;
});

/// PRIMEIRO - user - SEGUNDO - createUserAction
export const createUserAction = createAsyncThunk('user/createUserAction', async (props: CreateUserProps) => {
  const result = await ApiService.createUser(props);
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
    setInitialState(state) {
      state = initialState;
      return state;
    }
    // Quando não tem api
  },
  extraReducers(builder) {
    // --------- LOGIN ---------------
    // QUANDO ESTÁ PENDENTE
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

    // --------- CREATE USER ---------------
    // QUANDO ESTÁ PENDENTE
    builder.addCase(createUserAction.pending, state => {
      state.loading = true;
    });
    // CASO DE CERTO  OU SEJA TUA API RESPONDER - BOM OU RUIM
    builder.addCase(createUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.ok = action.payload.ok;
      state.message = action.payload.message;

      if (action.payload.ok) {
        state.data = action.payload.data;
      }
    });
    // QUANDO A API DER RUIM
    builder.addCase(createUserAction.rejected, state => {
      state.ok = false;
    });
  }
});

export default userSlice.reducer;
export const { setInitialState } = userSlice.actions;
