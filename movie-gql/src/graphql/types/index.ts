import { mergeTypeDefs } from "@graphql-tools/merge";
import list from "./list";
import genre from "./genre";
import trending from "./trending";

const mergedTypeDefs = mergeTypeDefs([list, genre, trending]);

export default mergedTypeDefs;
