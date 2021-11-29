import { useState } from "react";
import { notification } from "antd";

import { useQuery } from "@apollo/client";

import getTrendingMovie from "./getTrendingMovie";

const DEFAULT_PARAMS = {
  media_type: "all",
  time_window: "week",
};

const useGetTrendingMovie = (input: object) => {
  const [variables, setVariables] = useState(DEFAULT_PARAMS);

  const { loading, data, error, refetch } = useQuery(getTrendingMovie, {
    ssr: false,
    variables: {
      input: {
        ...DEFAULT_PARAMS,
        ...input,
      },
    },
    onError: (err) => {
      const { graphQLErrors = [] } = err || {};
      const errorMessage =
        graphQLErrors[0]?.message || "Get Trending Movie failed";
      notification.error({
        message: "Error",
        description: errorMessage,
      });
    },
  });

  const doRefetch = (newVal: any) => {
    setVariables((prev) => ({ ...prev, ...newVal }));
    refetch({
      input: {
        ...variables,
        ...newVal,
      },
    });
  };

  const resp = data?.trending?.data?.results || [];

  return {
    loading,
    data: resp,
    error,
    doRefetch,
  };
};

export default useGetTrendingMovie;
