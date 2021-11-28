import { mergeTypeDefs } from "@graphql-tools/merge";
import list from "./list";
import genre from "./genre";
import trending from "./trending";
import detail from "./detail";

const mergedTypeDefs = mergeTypeDefs([list, genre, trending, detail]);

export default mergedTypeDefs;
