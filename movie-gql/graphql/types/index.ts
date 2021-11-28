import { mergeTypeDefs } from "@graphql-tools/merge";
import trending from "./trending";

const mergedTypeDefs = mergeTypeDefs([trending]);

export default mergedTypeDefs;
