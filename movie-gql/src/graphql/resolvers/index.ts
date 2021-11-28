import { mergeResolvers } from "@graphql-tools/merge";
import list from "./list";
import genre from "./genre";
import trending from "./trending";
import detail from "./detail";

const mergedResolvers = mergeResolvers([list, genre, trending, detail]);

export default mergedResolvers;
