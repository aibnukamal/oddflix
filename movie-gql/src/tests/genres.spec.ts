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
          genre {
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

      await request(app.server)
        .post("/graphql")
        .send({
          query,
        })
        .expect(200);
    });
  });
});
