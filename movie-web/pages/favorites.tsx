import Head from "next/head";

import Banner from "./../components/Banner";
import Favorites from "./../components/Favorites";

interface Genres {
  id: number;
  name: string;
}

const Home = () => {
  return (
    <>
      <Head>
        <title>OddFlix | My Favofites Movie</title>
      </Head>

      <Favorites />
    </>
  );
};

export default Home;
