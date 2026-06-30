import type { HttpService } from "@/services/http-service";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

function useData<T>(
  dataService: HttpService,
  requestConfig?: AxiosRequestConfig,
  deps?: any[],
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      setIsLoading(true);
      const { request, cancel } = dataService.getAll<T>(requestConfig);
      request
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) {
            return;
          }
          setError(error.message);
          setIsLoading(false);
        });

      return () => cancel();
    },
    deps ? [...deps] : [],
  );

  return { data, error, isLoading };
}

export default useData;
