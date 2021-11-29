import { mergeResolvers } from "@graphql-tools/merge";
import list from "./list";
import genre from "./genre";
import trending from "./trending";
import detail from "./detail";
import similar from "./similar";

const mergedResolvers = mergeResolvers([
  list,
  genre,
  trending,
  detail,
  similar,
]);

export default mergedResolvers;
