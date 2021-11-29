import Head from "next/head";

import { useMovie } from "./../context/Movie";
import Banner from "./../components/Banner";
import MovieCategory from "./../components/MovieCategory";

interface Genres {
  id: number;
  name: string;
}

const Home = () => {
  const { genres } = useMovie();

  return (
    <>
      <Head>
        <title>OddFlix | Discover Movie</title>
      </Head>

      <Banner />

      {genres.map(({ id, name }: Genres) => (
        <MovieCategory key={id} genreId={id} genreTitle={name} />
      ))}
    </>
  );
};

export default Home;
