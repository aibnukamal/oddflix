import React from "react";
import useGetTrendingMovie from "./../../hooks/useGetTrendingMovie";
import { useMovie } from "./../../context/Movie";
import BannerView from "./Banner.view";

const Banner = () => {
  const { loading, data } = useGetTrendingMovie({});
  const { genres } = useMovie();

  return <BannerView loading={loading} data={data} genres={genres} />;
};

export default Banner;
