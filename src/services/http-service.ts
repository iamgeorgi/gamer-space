import type { AxiosRequestConfig } from "axios";
import apiClient from "../services/api-client";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface GameQuery {
  platforms?: string;
  genres?: number;
  ordering?: string;
  search?: string;
}

export class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>(requestConfig?: AxiosRequestConfig) {
    const controller = new AbortController();

    const request = apiClient.get<FetchResponse<T>>(this.endpoint, {
      signal: controller.signal,
      ...requestConfig
    });

    return { request, cancel: () => controller.abort() };
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
