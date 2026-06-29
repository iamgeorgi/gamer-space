import type { GameQuery, HttpService } from "@/services/http-service";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

function useData<T>(dataService: HttpService) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [queryParams, setQueryParams] = useState<GameQuery>({});

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = dataService.getAll<T>(queryParams);
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
  }, [queryParams]);

  return { data, error, isLoading, queryParams, setQueryParams };
}

export default useData;
