import { Typography, Space } from "antd";
import Link from "next/link";

import useGetDiscoverMovie from "./../../hooks/useGetDiscoverMovie";
import { IMAGE_HOST } from "../../constants";
import style from "./MovieList.module.css";

import ButtonFavorite from "./../ButtonFavorite";

interface MovieCategory {
  genreId: number;
  genreTitle: string;
}

const BACKGROUND_MASK =
  "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5))";

const MovieCategory = ({ genreId, genreTitle }: MovieCategory) => {
  const { Title } = Typography;
  const { loading, data } = useGetDiscoverMovie({
    with_genres: genreId.toString(),
  });

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
              <div key={id} style={{ position: "relative", cursor: "pointer" }}>
                <div style={{ position: "absolute", right: "8px", top: "5px" }}>
                  <ButtonFavorite simple value={value} />
                </div>
                <Link href={`/discover/${id}`}>
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

export default MovieCategory;
