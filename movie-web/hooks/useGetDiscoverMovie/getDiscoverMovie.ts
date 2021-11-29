import { gql } from "@apollo/client";

export default gql`
  query GetDiscoverMovie($input: ListInput) {
    list(input: $input) {
      error
      message
      data {
        page
        total_pages
        total_results
        results {
          id
          poster_path
          adult
          overview
          release_date
          genre_ids
          original_title
          original_language
          title
          backdrop_path
          popularity
          vote_count
          video
          vote_average
        }
      }
    }
  }
`;
