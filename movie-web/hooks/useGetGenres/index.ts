import { useState } from "react";
import { notification } from "antd";

import { useQuery } from "@apollo/client";

import getGenres from "./getGenres";

const DEFAULT_PARAMS = {
  type: "movie",
};

const useGetDiscoverMovie = (input: object) => {
  const [variables, setVariables] = useState(DEFAULT_PARAMS);

  const { loading, data, error, refetch } = useQuery(getGenres, {
    ssr: false,
    variables: {
      input: {
        ...DEFAULT_PARAMS,
        ...input,
      },
    },
    onError: (err) => {
      const { graphQLErrors = [] } = err || {};
      const errorMessage = graphQLErrors[0]?.message || "Get Genres failed";
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

  const resp = data?.genre?.data?.genres || [];

  return {
    loading,
    data: resp,
    error,
    doRefetch,
  };
};

export default useGetDiscoverMovie;
