import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchAll<T>(endpoint: string) {
  const request = axios.create({
    baseURL: import.meta.env.VITE_GATEWAY_BASE_URL,
  });

  const [dataList, setDataList] = useState<T | any | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);

  async function getDomanins() {
    setIsLoading(false);
    await request
      .get(`${endpoint}`)
      .then((response) => {
        setDataList(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getDomanins();
  }, []);

  useEffect(() => {
    if (reload) {
      setReload(false);
      getDomanins();
    }
  }, [reload]);

  return { dataList, setDataList, error, isLoading, setReload };
}
