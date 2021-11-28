export const getGenre = (ids: number[], list: Record<string, any>[]) => {
  const genre = list.filter(({ id }) => ids.includes(id));

  return genre.map(({ name }) => name).join(", ");
};
