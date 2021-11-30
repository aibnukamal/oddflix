import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import { Typography, Space, Tooltip, Button } from "antd";
import {
  StarFilled,
  LikeFilled,
  PlaySquareFilled,
  GlobalOutlined,
} from "@ant-design/icons";

import useGetDetailMovie from "./../../hooks/useGetDetailMovie";
import { IMAGE_HOST } from "./../../constants";
import style from "./../../styles/Discover.module.css";
import ButtonFavorite from "./../../components/ButtonFavorite";
import { generateTime } from "./../../helpers";

import MovieSimilar from "./../../components/MovieSimilar";

const BACKGROUND_MASK =
  "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 21, 40, 100) 90%), linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 21, 40, 100) 100%)";

const Discover = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { Title, Text } = Typography;
  const id = Number(pid);

  const { loading, data } = useGetDetailMovie({ id });
  const date = data?.release_date?.split("-") || "";

  if (loading) return null;

  return (
    <>
      <Head>
        <title>OddFlix | Discover Movie</title>
      </Head>

      <div>
        <div
          className={style.itemWrapper}
          style={{
            background: `${BACKGROUND_MASK}, url(${IMAGE_HOST}/original${
              data?.backdrop_path || data?.poster_path
            })`,
            backgroundSize: "cover",
          }}
        >
          <div className={style.textWrapper}>
            <Title level={1} style={{ marginBottom: "0px" }}>
              {data?.original_title || data?.title}
            </Title>
            <Text italic style={{ marginBottom: "30px" }}>
              {data?.tagline}
            </Text>
            <Space
              direction="horizontal"
              size="middle"
              style={{ marginBottom: "10px" }}
            >
              <Tooltip placement="top" title="Release Date" color="blue">
                <Title style={{ margin: 0 }} level={5}>
                  {date[0]}
                </Title>
              </Tooltip>

              {data?.adult && (
                <Button ghost size="small">
                  18+
                </Button>
              )}
              <Tooltip placement="top" title="Duration" color="blue">
                <Title style={{ margin: 0 }} level={5}>
                  {generateTime(data?.runtime)}
                </Title>
              </Tooltip>

              <Tooltip placement="top" title="Rating" color="blue">
                <Button ghost size="small">
                  {data?.vote_average}
                </Button>
              </Tooltip>
            </Space>
            <Space direction="horizontal" size="middle">
              <Title style={{ margin: 0 }} level={5}>
                {(data?.genres || []).map(({ name }) => name).join(", ")}
              </Title>
              |
              <Tooltip placement="top" title="Popularity" color="blue">
                <Space direction="horizontal" size="middle">
                  <StarFilled />
                  <Title style={{ margin: 0 }} level={5}>
                    {data?.popularity}
                  </Title>
                </Space>
              </Tooltip>
              |
              <Tooltip placement="top" title="Vote" color="blue">
                <Space direction="horizontal" size="middle">
                  <LikeFilled />
                  <Title style={{ margin: 0 }} level={5}>
                    {data?.vote_count}
                  </Title>
                </Space>
              </Tooltip>
            </Space>
            <Text style={{ width: "400px", marginBottom: "10px" }}>
              {data?.overview}
            </Text>

            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ width: "400px" }}>
                {(data?.production_companies || [])
                  .map(({ name }) => name)
                  .join(", ")}
              </li>
              <li style={{ width: "400px" }}>
                {(data?.production_countries || [])
                  .map(({ name }) => name)
                  .join(", ")}
              </li>
              <li style={{ width: "400px" }}>
                {(data?.spoken_languages || [])
                  .map(({ name }) => name)
                  .join(", ")}
              </li>
            </ul>

            <Space direction="horizontal" size="middle">
              <Button ghost icon={<PlaySquareFilled />} size="large">
                Play
              </Button>
              <ButtonFavorite
                simple={false}
                value={{ id: data?.id, poster_path: data?.poster_path }}
              />
              {data?.homepage && (
                <Link href={data?.homepage}>
                  <Button ghost icon={<GlobalOutlined />} size="large">
                    Website
                  </Button>
                </Link>
              )}
            </Space>
          </div>
        </div>
      </div>

      <MovieSimilar genreId={id} genreTitle="Similar Movies" />
    </>
  );
};

export default Discover;
