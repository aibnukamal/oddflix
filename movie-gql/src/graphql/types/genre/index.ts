import { gql } from "mercurius-codegen";

const typeDefs = gql`
  input GenreInput {
    type: String
  }

  type Query {
    genre(input: GenreInput): Genre
  }

  type ResultGenre {
    id: Int
    name: String
  }

  type GenreData {
    genres: [ResultGenre]
  }

  type Genre {
    error: Boolean
    message: String
    data: GenreData
  }
`;

export default typeDefs;
