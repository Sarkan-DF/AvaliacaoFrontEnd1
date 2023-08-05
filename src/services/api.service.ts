import axios from 'axios';
import { LoginProps } from '../models/login.model';
import { DeleteTransactionsProps, ListTransactionsProps, UpdateTransactionsProps } from '../models/errands.model';

// const api = axios.create({
//   baseURL: 'http://localhost:8080'
// });

axios.defaults.baseURL = 'http://localhost:8080';

export interface ApiResponse {
  ok: boolean;
  message: string;
  data?: any;
}

export class ApiService {
  public static async listErrands(iduser: string) {
    try {
      const result = await axios.get(`/users/${iduser}/errands`);
      return result.data;
    } catch (error: any) {
      console.log(error.response.data);
      return error.response.data;
    }
  }

  public static async login(props: LoginProps): Promise<ApiResponse> {
    try {
      const result = await axios.post('/users/login', props);

      // result = {...., data: { ok: message: data: }}

      console.log(result.data);

      return result.data;
    } catch (error: any) {
      console.log(error.response.data);
      return error.response.data;
    }
  }

  public static async deleteTransaction(props: DeleteTransactionsProps): Promise<ApiResponse> {
    try {
      const result = await axios.delete(`/users/${props.id}/transactions/${props.idTransaction}`);
      return result.data;
    } catch (error: any) {
      console.log(error.response.data);
      return error.response.data;
    }
  }

  public static async updateTransaction(props: UpdateTransactionsProps): Promise<ApiResponse> {
    try {
      const result = await axios.put(`/users/${props.id}/transactions/${props.idTransaction}`, props);
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
