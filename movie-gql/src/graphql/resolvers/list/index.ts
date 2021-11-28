import fetch from "node-fetch";
import { API_KEY } from "./../../../constants";
import { generateApiUrl } from "./../../../helpers";

const DEFAULT_PARAMS = {
  language: "en-US",
  sort_by: "popularity.desc",
  include_adult: "false",
  include_video: "false",
  page: "1",
  with_watch_monetization_types: "flatrate",
};

const list = async (arg: any) => {
  const params = {
    ...DEFAULT_PARAMS,
    ...arg,
    api_key: API_KEY,
  };

  const URL = generateApiUrl("/discover/movie", params);

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
    list: async (_: unknown, obj: any) => {
      const { input } = obj;
      const data = await list(input);
      return data;
    },
  },
};

export default resolvers;
