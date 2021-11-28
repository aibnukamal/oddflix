import { gql } from "mercurius-codegen";

const typeDefs = gql`
  input TrendingInput {
    media_type: String
    time_window: String
  }

  type Query {
    trending(input: TrendingInput): TrendingList
  }

  type TrendingResult {
    adult: Boolean
    backdrop_path: String
    genre_ids: [Int]
    id: Int
    original_language: String
    original_title: String
    overview: String
    popularity: Float
    poster_path: String
    release_date: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
  }

  type TrendingData {
    page: Int
    total_results: Int
    total_pages: Int
    results: [TrendingResult]
  }

  type TrendingList {
    error: Boolean
    message: String
    data: TrendingData
  }
`;

export default typeDefs;
