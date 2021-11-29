import { gql } from "mercurius-codegen";

const typeDefs = gql`
  input SimilarInput {
    page: String
    language: String
    id: Int!
  }

  type Query {
    similar(input: SimilarInput): ListSimilar
  }

  type ListSimilarResult {
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

  type ListSimilarData {
    page: Int
    total_results: Int
    total_pages: Int
    results: [ListSimilarResult]
  }

  type ListSimilar {
    error: Boolean
    message: String
    data: ListSimilarData
  }
`;

export default typeDefs;
