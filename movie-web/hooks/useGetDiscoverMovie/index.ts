import { useState } from "react";
import { notification } from "antd";

import { useQuery } from "@apollo/client";

import getDiscoverMovie from "./getDiscoverMovie";

const DEFAULT_PARAMS = {
  language: "en-US",
  sort_by: "popularity.desc",
  page: "1",
  with_watch_monetization_types: "flatrate",
};

const useGetDiscoverMovie = (input: Record<string, string>) => {
  const [variables, setVariables] = useState(DEFAULT_PARAMS);

  const { loading, data, error, refetch } = useQuery(getDiscoverMovie, {
    ssr: false,
    variables: {
      input: {
        ...DEFAULT_PARAMS,
        ...input,
        release_date_gte: input?.release_date_gte || "",
        release_date_lte: input?.release_date_lte || "",
      },
    },
    onError: (err) => {
      const { graphQLErrors = [] } = err || {};
      const errorMessage =
        graphQLErrors[0]?.message || "Get Discover Movie failed";
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

  const resp = data?.list?.data?.results || [];

  return {
    loading,
    data: resp,
    error,
    doRefetch,
  };
};

export default useGetDiscoverMovie;
