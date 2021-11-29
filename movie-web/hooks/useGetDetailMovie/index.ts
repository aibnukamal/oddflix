import { useState } from "react";
import { notification } from "antd";

import { useQuery } from "@apollo/client";

import getDetailMovie from "./getDetailMovie";

const DEFAULT_PARAMS = {
  id: 0,
};

const useGetDetailMovie = (input: object) => {
  const [variables, setVariables] = useState(DEFAULT_PARAMS);

  const { loading, data, error, refetch } = useQuery(getDetailMovie, {
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
        graphQLErrors[0]?.message || "Get Detail Movie failed";
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

  const resp = data?.detail?.data || {};

  return {
    loading,
    data: resp,
    error,
    doRefetch,
  };
};

export default useGetDetailMovie;
