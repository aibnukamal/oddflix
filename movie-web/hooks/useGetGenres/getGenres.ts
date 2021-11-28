import { gql } from "@apollo/client";

export default gql`
  query GetGenres($input: GenreInput) {
    genre(input: $input) {
      error
      message
      data {
        genres {
          id
          name
        }
      }
    }
  }
`;
