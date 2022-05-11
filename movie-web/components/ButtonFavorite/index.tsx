import React from "react";
import { Button, Tooltip } from "antd";
import { HeartFilled } from "@ant-design/icons";

import { useMovie, SET_FAVORITES } from "./../../context/Movie";

interface ButtonFavorite {
  simple: Boolean;
  value: Record<string, any>;
}

const ButonFavorite = ({ value, simple = false }: ButtonFavorite) => {
  const { setFavorites, isFavorite } = useMovie();
  const isLoved = isFavorite(value);

  const handleClickFavorite = (value: Record<string, any>) => {
    setFavorites(isLoved ? SET_FAVORITES.remove : SET_FAVORITES.add, value);
  };

  return (
    <Tooltip
      placement="top"
      title={`${isLoved ? "Remove from" : "Add to"} favorite`}
      color="blue"
    >
      {simple ? (
        <HeartFilled
          style={{ color: isLoved ? "#cf1322" : "#fff" }}
          onClick={() => handleClickFavorite(value)}
        />
      ) : (
        <Button
          ghost
          icon={<HeartFilled style={{ color: isLoved ? "#cf1322" : "#fff" }} />}
          size="large"
          onClick={() => handleClickFavorite(value)}
        >
          {isLoved ? "Remove" : "Favorite"}
        </Button>
      )}
    </Tooltip>
  );
};

export default ButonFavorite;
