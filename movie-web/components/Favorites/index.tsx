import Link from "next/link";
import { Typography, Space, Button } from "antd";

import { useMovie } from "./../../context/Movie";
import { IMAGE_HOST } from "../../constants";
import style from "./Favorites.module.css";

import ButtonFavorites from "./../ButtonFavorite";

const BACKGROUND_MASK =
  "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5))";

const MovieCategory = () => {
  const { Title } = Typography;
  const { favorites } = useMovie();

  if (!favorites.length) {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: "500px",
          flexDirection: "column",
        }}
      >
        <Title level={3} style={{ margin: "auto auto 0px" }}>
          You don't have Favorites Movies
        </Title>
        <Link href="/">
          <Button ghost size="large" style={{ margin: "10px auto" }}>
            Browse Movie
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Title level={3} style={{ margin: "30px 50px 30px" }}>
        My Favorites Movie
      </Title>
      <div className={style.listWrapper}>
        <Space
          direction="horizontal"
          style={{ margin: "0px 50px 0px" }}
          size={[8, 16]}
          wrap
        >
          {favorites.map((value) => {
            const { id, poster_path } = value;

            return (
              <div style={{ position: "relative", cursor: "pointer" }}>
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
                <div
                  style={{ position: "absolute", top: "100px", left: "17px" }}
                >
                  <ButtonFavorites simple={false} value={value} />
                </div>
              </div>
            );
          })}
        </Space>
      </div>
    </>
  );
};

export default MovieCategory;
