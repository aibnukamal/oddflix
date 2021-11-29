import fetch from "node-fetch";
import { API_KEY } from "./../../../constants";
import { generateApiUrl } from "./../../../helpers";

enum DEFAULT_PARAMS {
  media_type = "all",
  time_window = "week",
}

const list = async (arg: any) => {
  const params = {
    api_key: API_KEY,
  };

  const MEDIA_TYPE = arg?.media_type || DEFAULT_PARAMS.media_type;
  const TIME_WINDOW = arg?.time_window || DEFAULT_PARAMS.time_window;

  const API_PATH = `/trending/${MEDIA_TYPE}/${TIME_WINDOW}`;
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
    trending: async (_: unknown, obj: any) => {
      const { input } = obj;
      const data = await list(input);
      return data;
    },
  },
};

export default resolvers;
