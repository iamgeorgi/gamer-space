import apiClient from "../services/api-client";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface GameQuery {
  platforms?: string;
  genres?: string;
  ordering?: string;
  search?: string;
}

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>(query?: GameQuery) {
    const controller = new AbortController();

    const request = apiClient.get<FetchResponse<T>>(this.endpoint, {
      signal: controller.signal,
      params: query
    });

    return { request, cancel: () => controller.abort() };
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
