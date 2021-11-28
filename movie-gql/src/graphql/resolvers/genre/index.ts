import fetch from "node-fetch";
import { API_KEY } from "./../../../constants";
import { generateApiUrl } from "./../../../helpers";

const DEFAULT_PARAMS = {
  language: "en-US",
};

const list = async (arg: any) => {
  const params = {
    ...DEFAULT_PARAMS,
    api_key: API_KEY,
  };

  const GENRE_TYPE = arg?.type || "movie";
  const API_PATH = `/genre/${GENRE_TYPE}/list`;
  const URL = generateApiUrl(API_PATH, params);

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
    genre: async (_: unknown, obj: any) => {
      const { input } = obj;
      const data = await list(input);
      return data;
    },
  },
};

export default resolvers;
