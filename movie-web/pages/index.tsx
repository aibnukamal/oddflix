import Head from "next/head";

import { useMovie } from "./../context/Movie";

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
    </>
  );
};

export default Home;
