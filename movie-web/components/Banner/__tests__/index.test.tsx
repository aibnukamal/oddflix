import React from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import GetTrendingMovieGql from "./../../../hooks/useGetTrendingMovie/getTrendingMovie";
import "@testing-library/jest-dom/extend-expect";
import Banner from "../index";
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

const setupRender = () =>
  render(
    <MockedProvider mocks={gqlMock} addTypename={false}>
      <Banner />
    </MockedProvider>
  );

describe("Banner Component", () => {
  it("should render correctly", async () => {
    const { findByTestId } = setupRender();

    const bannerContainer = await findByTestId("banner_container");

    expect(bannerContainer).toBeInTheDocument();
  });
});
