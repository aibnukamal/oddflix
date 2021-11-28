import { mergeResolvers } from "@graphql-tools/merge";
import list from "./list";
import genre from "./genre";
import trending from "./trending";

const mergedResolvers = mergeResolvers([list, genre, trending]);

export default mergedResolvers;
