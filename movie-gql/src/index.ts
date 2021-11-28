import fastify, { FastifyInstance } from "fastify";
import fastifyCors from "fastify-cors";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { Server, IncomingMessage, ServerResponse } from "http";
import mercurius from "mercurius";

import resolvers from "./graphql/resolvers";
import types from "./graphql/types";

export const app: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({ logger: false });

// register cors
app.register(fastifyCors);

app.register(mercurius, {
  schema: makeExecutableSchema({
    typeDefs: types,
    resolvers: resolvers,
  }),
  graphiql: true,
});

const port = process.env.PORT || 5000;

const start = async (): Promise<void> => {
  try {
    await app.listen(port);
    console.log(`Listening on port ${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
