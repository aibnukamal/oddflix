import React, { useContext, useState } from "react";
import useGetGenres from "./../../hooks/useGetGenres";

export enum SET_FAVORITES {
  add = "add",
  remove = "remove",
}

const setFavorites = (type: SET_FAVORITES, value: Record<string, any>) => {};
const isFavorite = (value: Record<string, any>) => Boolean;

export const MovieContext = React.createContext({
  genres: [],
  favorites: [],
  setFavorites: setFavorites,
  isFavorite: isFavorite,
});

const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { loading, data } = useGetGenres({});

  if (loading) return null;

  const doSetFavorites = (type: SET_FAVORITES, value: Record<string, any>) => {
    if (type === SET_FAVORITES.add) {
      setFavorites([...favorites, value]);
    } else {
      setFavorites(favorites.filter(({ id }) => id !== value.id));
    }
  };

  const isFavorite = (value: Record<string, any>) => {
    const loved = favorites.find((item) => item.id === value.id);

    return Boolean(loved);
  };

  const state = {
    genres: data,
    favorites,
    setFavorites: doSetFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={state}>{children}</MovieContext.Provider>
  );
};

export const useMovie = () => useContext(MovieContext);

export default MovieProvider;
