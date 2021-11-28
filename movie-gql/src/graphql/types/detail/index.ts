import { gql } from "mercurius-codegen";

const typeDefs = gql`
  input DetailInput {
    id: Int!
  }

  type Query {
    detail(input: DetailInput): Detail
  }

  type DetailGenres {
    id: Int
    name: String
  }

  type DetailProductionCompanies {
    id: Int
    logo_path: String
    name: String
    origin_country: String
  }

  type DetailProductionCountries {
    iso_3166_1: String
    name: String
  }

  type DetailSpokenLanguages {
    iso_639_1: String
    name: String
  }

  type ResultDetail {
    adult: Boolean
    backdrop_path: String
    belongs_to_collection: String
    budget: Int
    genres: [DetailGenres]
    homepage: String
    id: Int
    imdb_id: String
    original_language: String
    original_title: String
    overview: String
    popularity: Float
    poster_path: String
    production_companies: [DetailProductionCompanies]
    production_countries: [DetailProductionCountries]
    release_date: String
    revenue: Int
    runtime: Int
    spoken_languages: [DetailSpokenLanguages]
    status: String
    tagline: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
  }

  type Detail {
    error: Boolean
    message: String
    data: ResultDetail
  }
`;

export default typeDefs;
