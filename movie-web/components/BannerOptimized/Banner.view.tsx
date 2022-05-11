import React from "react";
import { Carousel } from "antd";
import BannerItemView from "./Banner.item.view";

const Banner = ({ data, loading, genres }) => {
  if (loading) return <div data-testid="banner_loading"></div>;

  return (
    <div data-testid="banner_container">
      <Carousel autoplay speed={1000} effect="fade">
        {data.map((value) => {
          const {
            id,
            title,
            original_title,
            genre_ids,
            popularity,
            vote_average,
            poster_path,
            overview,
            backdrop_path,
          } = value;
          return (
            <div key={id}>
              <BannerItemView
                id={id}
                genres={genres}
                title={title}
                original_title={original_title}
                genre_ids={genre_ids}
                popularity={popularity}
                vote_average={vote_average}
                poster_path={poster_path}
                overview={overview}
                backdrop_path={backdrop_path}
                alldata={value}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
