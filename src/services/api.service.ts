import axios from 'axios';
import { LoginProps } from '../models/login.model';
import { DeleteTransactionsProps, ListTransactionsProps, UpdateTransactionsProps } from '../models/errands.model';
import { CreateUserProps } from '../models/user.model';

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

export interface ApiResponse {
  ok: boolean;
  message: string;
  data?: any;
}

export class ApiService {
  public static async login(props: LoginProps): Promise<ApiResponse> {
    try {
      const result = await api.post('/users/login', props);

      // result = {...., data: { ok: message: data: }}

      return result.data;
    } catch (error: any) {
      console.log(error.response.data);
      return error.response.data;
    }
  }

  public static async createUser(props: CreateUserProps): Promise<ApiResponse> {
    try {
      // PRIMEIRO SEMPRE A ROTA (MESMA USADA NO BACK), SEGUNDO É BODY (QUANDO FOR POST)
      // {email: '', password: ''}
      const result = await api.post('/users', props);

      // ESSE DATA É O DA REQUISIÇÃO - {ok: boolean, message: string...}
      return result.data;
    } catch (error: any) {
      console.log(error.response.data);
      return error.response.data;
    }
  }

  public static async listErrands(iduser: string) {
    try {
      const result = await api.get(`/users/${iduser}/errands`);
      return result.data;
    } catch (error: any) {
      console.log(error.response.data);
      return error.response.data;
    }
  }

  public static async deleteTransaction(props: DeleteTransactionsProps): Promise<ApiResponse> {
    try {
      const result = await api.delete(`/users/${props.id}/transactions/${props.idTransaction}`);
      return result.data;
    } catch (error: any) {
      console.log(error.response.data);
      return error.response.data;
    }
  }

  public static async updateTransaction(props: UpdateTransactionsProps): Promise<ApiResponse> {
    try {
      const result = await api.put(`/users/${props.id}/transactions/${props.idTransaction}`, props);
      return result.data;
    } catch (error: any) {
      console.log(error.response.data);
      return error.response.data;
    }
  }
}

export async function listTransactions() {
  // ...
}
