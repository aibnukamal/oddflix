import { gql } from "@apollo/client";

export default gql`
  query GetDetailMovie($input: DetailInput) {
    detail(input: $input) {
      error
      message
      data {
        adult
        backdrop_path
        budget
        genres {
          id
          name
        }
        homepage
        id
        imdb_id
        original_language
        original_title
        overview
        popularity
        poster_path
        production_companies {
          id
          logo_path
          name
          origin_country
        }
        production_countries {
          iso_3166_1
          name
        }
        release_date
        revenue
        runtime
        spoken_languages {
          iso_639_1
          name
        }
        status
        tagline
        title
        video
        vote_average
        vote_count
      }
    }
  }
`;
