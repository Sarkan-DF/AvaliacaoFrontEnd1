import axios from 'axios';
import { LoginProps } from '../models/login.model';
import { DeleteTransactionsProps, ListTransactionsProps, UpdateTransactionsProps } from '../models/transaction.model';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

interface ApiResponse {
    ok: boolean;
    message: string;
    data?: any;
}

export class ApiService {
  public static async listTransactions(props: ListTransactionsProps): Promise<ApiResponse> {
    try {
      const result = await api.get(`/users/${props.id}/transactions?type=${props.type}`);
      return result.data;
    } catch (error: any) {
      console.log(error.response.data);
      return error.response.data;
    }
  }

  public static async login(props: LoginProps): Promise<ApiResponse> {
    try {
      const result = await api.post('/users/login', props);
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
