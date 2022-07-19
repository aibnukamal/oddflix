import * as request from "supertest";
import { app } from "../index";
import { gql } from "mercurius-codegen";

describe(`Integration`, () => {
  beforeEach(async () => {
    // Wait for our server to become ready to respond to requests
    await app.ready();
  });

  /**
   * GraphQL Query: add(...)
   */
  describe(`Query List Genres`, () => {
    it(`Should return correct schema`, async () => {
      const query = gql`
        query {
          detail(input: { id: 580489 }) {
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

      await request(app.server)
        .post("/graphql")
        .send({
          query,
        })
        .expect(200);
    });
  });
});
