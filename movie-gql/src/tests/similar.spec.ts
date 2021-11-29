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
  describe(`Query List Genre`, () => {
    it(`Should return correct schema`, async () => {
      const query = gql`
        query {
          similar(input: { id: 512195 }) {
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

      await request(app.server)
        .post("/graphql")
        .send({
          query,
        })
        .expect(200);
    });
  });
});
