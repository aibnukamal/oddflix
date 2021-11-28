import { API_HOST } from "./constants";

export const generateApiUrl = (path: string, params: any) => {
  const searchParams = new URLSearchParams(params);
  const paramString = searchParams.toString();
  const URL = `${API_HOST}${path}?${paramString}`;

  return URL;
};
