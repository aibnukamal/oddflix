import { Typography, Space } from "antd";
import Link from "next/link";

import useGetSimilarMovie from "./../../hooks/useGetSimilarMovie";
import { IMAGE_HOST } from "../../constants";
import style from "./MovieList.module.css";

import ButtonFavorite from "./../ButtonFavorite";

interface MovieSimilar {
  genreId: number;
  genreTitle: string;
}

const BACKGROUND_MASK =
  "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5))";

const MovieSimilar = ({ genreId, genreTitle }: MovieSimilar) => {
  const { Title } = Typography;
  const { loading, data } = useGetSimilarMovie({ id: Number(genreId) });

  if (loading) return null;

  return (
    <>
      <Title level={3} style={{ margin: "0px 50px 30px" }}>
        {genreTitle}
      </Title>
      <div className={style.listWrapper}>
        <Space
          direction="horizontal"
          size="middle"
          style={{ margin: "0px 50px 0px" }}
        >
          {data.map((value) => {
            const { id, poster_path } = value;

            return (
              <div style={{ position: "relative", cursor: "pointer" }}>
                <div style={{ position: "absolute", right: "8px", top: "5px" }}>
                  <ButtonFavorite simple value={value} />
                </div>
                <Link key={id} href={`/discover/${id}`}>
                  <div
                    key={id}
                    className={style.poster}
                    style={{
                      background: `${BACKGROUND_MASK}, url('${IMAGE_HOST}/original/${poster_path}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </Link>
              </div>
            );
          })}
        </Space>
      </div>
    </>
  );
};

export default MovieSimilar;
