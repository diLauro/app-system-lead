import axios from "axios";
import { useEffect, useState } from "react";

export function useRequest<T>(
  url: string,
  payload: T | null,
  id: number | string | undefined | null = null
) {
  const request = axios.create({
    baseURL: `${import.meta.env.VITE_GATEWAY_BASE_URL}`,
  });

  const [dataResponse, setDataResponse] = useState<any>(null);

  const [saving, setSaving] = useState<boolean>(false);
  const [send, setSend] = useState<boolean>(false);

  async function submitPost() {
    setSaving(true);
    await request
      .post(url, payload)
      .then((res) => {
        setDataResponse(res);
      })
      .catch((err) => {})
      .finally(() => {
        setSaving(false);
      });
  }

  async function submitPut() {
    setSaving(true);
    await request
      .put(url, payload)
      .then(() => {})
      .catch((err) => {})
      .finally(() => {
        setSaving(false);
      });
  }

  useEffect(() => {
    if (send) {
      if (id) {
        submitPut();
      } else {
        submitPost();
      }
      setSend(false);
    }
  }, [send]);

  return {
    setSend,
    saving,
    dataResponse,
    setDataResponse,
  };
}
