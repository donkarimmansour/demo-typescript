

import Mutations from "./mutations";
import Queries from "./queries";
import Types from "./types";


const typeDefs = [...Types, ...Queries, Mutations];

export default typeDefs;


