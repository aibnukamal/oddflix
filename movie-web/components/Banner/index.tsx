import Link from "next/link";
import { Carousel, Button, Typography, Space, Tooltip } from "antd";
import { StarFilled, LikeFilled, PlaySquareFilled } from "@ant-design/icons";

import useGetTrendingMovie from "./../../hooks/useGetTrendingMovie";
import { useMovie } from "./../../context/Movie";
import style from "./Banner.module.css";
import { IMAGE_HOST } from "./../../constants";
import { getGenre } from "../../helpers";

import ButtonFavorite from "../ButtonFavorite";

const BACKGROUND_MASK =
  "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 21, 40, 100) 90%), linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 21, 40, 100) 100%)";

const Banner = () => {
  const { Title, Text } = Typography;
  const { loading, data } = useGetTrendingMovie({});
  const { genres } = useMovie();

  if (loading) return null;

  return (
    <Carousel autoplay speed={1000} effect="fade">
      {data.map((value) => {
        const {
          id,
          title,
          original_title,
          genre_ids,
          popularity,
          vote_average,
          poster_path,
          overview,
          backdrop_path,
        } = value;
        return (
          <div key={id}>
            <div
              className={style.itemWrapper}
              style={{
                background: `${BACKGROUND_MASK}, url(${IMAGE_HOST}/original${
                  backdrop_path || poster_path
                })`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            >
              <div className={style.textWrapper}>
                <Title level={2} style={{ marginBottom: "30px" }}>
                  {original_title || title}
                </Title>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ marginBottom: "30px" }}
                >
                  <Link href={`/discover/${id}`}>
                    <Button ghost icon={<PlaySquareFilled />} size="large">
                      Watch
                    </Button>
                  </Link>
                  <ButtonFavorite simple={false} value={value} />
                </Space>
                <Space direction="horizontal" size="middle">
                  <Title style={{ margin: 0 }} level={5}>
                    {getGenre(genre_ids, genres)}
                  </Title>
                  |
                  <Tooltip placement="top" title="Popularity" color="blue">
                    <Space direction="horizontal" size="middle">
                      <StarFilled />
                      <Title style={{ margin: 0 }} level={5}>
                        {popularity}
                      </Title>
                    </Space>
                  </Tooltip>
                  |
                  <Tooltip placement="top" title="Vote" color="blue">
                    <Space direction="horizontal" size="middle">
                      <Button ghost size="small">
                        {vote_average}
                      </Button>
                    </Space>
                  </Tooltip>
                </Space>
                <Text style={{ width: "400px" }}>{overview}</Text>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Banner;
