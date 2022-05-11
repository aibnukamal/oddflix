import React from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import GetTrendingMovieGql from "./../../../hooks/useGetTrendingMovie/getTrendingMovie";
import "@testing-library/jest-dom/extend-expect";
import BannerController from "../Banner.controller";
import BannerView from "../Banner.view";
import BannerItemView from "../Banner.item.view";
import GetTrendingMovieResponse from "../__data_mocks__/getTrendingMovie";

const gqlMock = [
  {
    request: {
      query: GetTrendingMovieGql,
      variables: { media_type: "all", time_window: "week" },
    },
    result: GetTrendingMovieResponse,
  },
];

describe("Banner Component", () => {
  it("should render correctly", async () => {
    const { findByTestId } = render(
      <MockedProvider mocks={gqlMock} addTypename={false}>
        <BannerController />
      </MockedProvider>
    );

    const bannerContainer = await findByTestId("banner_container");

    expect(bannerContainer).toBeInTheDocument();
  });

  it("should render loading", async () => {
    const { findByTestId } = render(
      <BannerView loading={true} data={[]} genres={[]} />
    );

    const bannerContainer = await findByTestId("banner_loading");

    expect(bannerContainer).toBeInTheDocument();
  });

  it("should poster path if backdrop not exist", async () => {
    const { findByTestId } = render(
      <BannerItemView
        id={1}
        genres={[]}
        title="title"
        original_title="original_title"
        genre_ids={[]}
        popularity={4}
        vote_average={4}
        poster_path="poster_path"
        overview="overview"
        backdrop_path=""
        alldata={{}}
      />
    );

    const bannerContainer = await findByTestId("banner_loading");

    expect(bannerContainer).toBeInTheDocument();
  });
});
