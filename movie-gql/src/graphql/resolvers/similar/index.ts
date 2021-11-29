import fetch from "node-fetch";
import { API_KEY } from "./../../../constants";
import { generateApiUrl } from "./../../../helpers";

const DEFAULT_PARAMS = {
  language: "en-US",
  page: "1",
};

const list = async (arg: any) => {
  const params = {
    ...DEFAULT_PARAMS,
    api_key: API_KEY,
  };

  const MOVIE_ID = arg?.id || 0;

  if (!MOVIE_ID) {
    return {
      error: true,
      message: `Movie ID cannot be null`,
      data: null,
    };
  }

  const URL = generateApiUrl(`/movie/${MOVIE_ID}/similar`, params);

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return {
      error: true,
      message: `An error has occured: ${response.status}`,
      data: null,
    };
  }

  const data = await response.json();

  return {
    error: false,
    message: "",
    data,
  };
};

const resolvers = {
  Query: {
    similar: async (_: unknown, obj: any) => {
      const { input } = obj;
      const data = await list(input);

      return data;
    },
  },
};

export default resolvers;
