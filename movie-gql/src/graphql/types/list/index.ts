import { gql } from "mercurius-codegen";

const typeDefs = gql`
  input ListInput {
    page: String
    language: String
    sort_by: String
    include_adult: String
    include_video: String
    with_watch_monetization_types: String
    with_genres: Int
    release_date_gte: String
    release_date_lte: String
  }

  type Query {
    list(input: ListInput): List
  }

  type Result {
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

  type ListData {
    page: Int
    total_results: Int
    total_pages: Int
    results: [Result]
  }

  type List {
    error: Boolean
    message: String
    data: ListData
  }
`;

export default typeDefs;
