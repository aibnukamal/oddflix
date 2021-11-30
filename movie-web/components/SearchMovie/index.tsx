import { useEffect } from "react";
import { Typography, Space } from "antd";
import Link from "next/link";

import useGetDiscoverMovie from "./../../hooks/useGetDiscoverMovie";
import { IMAGE_HOST } from "../../constants";
import style from "./SearchMovie.module.css";

import ButtonFavorite from "./../ButtonFavorite";

interface SearchMovie {
  genreId: number;
  genreTitle: string;
  sort: string;
  date: string[];
}

const BACKGROUND_MASK =
  "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5))";

const SearchMovie = ({ genreTitle, sort, date }: SearchMovie) => {
  const { Title } = Typography;
  const { loading, data, doRefetch } = useGetDiscoverMovie({});

  useEffect(() => {
    doRefetch({
      sort_by: sort || "popularity.desc",
      release_date_gte: date[0],
      release_date_lte: date[1],
    });
  }, [sort, date]);

  if (loading) return null;

  return (
    <>
      <Title level={3} style={{ margin: "0px 50px 30px" }}>
        {genreTitle}
      </Title>
      <div className={style.listWrapper}>
        <Space
          direction="horizontal"
          style={{ margin: "0px 50px 0px" }}
          size={[8, 16]}
          wrap
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

export default SearchMovie;
