export const getGenre = (ids: number[], list: Record<string, any>[]) => {
  const genre = list.filter(({ id }) => ids.includes(id));

  return genre.map(({ name }) => name).join(", ");
};

export const getFavorite = (ids: number[], list: Record<string, any>[]) => {
  const genre = list.filter(({ id }) => ids.includes(id));

  return genre.map(({ name }) => name).join(", ");
};

export const generateTime = (value: number) => {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;

  return `${hours}h ${minutes}m`;
};
