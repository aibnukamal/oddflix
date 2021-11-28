import { mergeResolvers } from "@graphql-tools/merge";
import trending from "./trending";

const mergedResolvers = mergeResolvers([trending]);

export default mergedResolvers;
