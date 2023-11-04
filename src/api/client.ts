import Axios, { AxiosInstance } from 'axios';
import { RequestConfig } from './types';

type ApiConfiguration = any;

export type IApiClient = {
  post<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config?: RequestConfig,
  ): Promise<TResponse>;
};

export class ApiClient implements IApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = Axios.create({
      baseURL: 'localhost:3001/',
      responseType: 'json',
      timeout: 1000,
      withCredentials: true,
    });
  }

  async post<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config: RequestConfig = {},
  ) {
    try {
      const res = this.client.post<TResponse>(path, payload, config);

      return res;
    } catch (e) {
      handleServiceError(e);
    }
  }
}
