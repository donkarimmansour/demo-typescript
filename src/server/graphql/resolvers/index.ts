import Mutations from "./mutations";
import Queries from "./queries";
import Subscription from "./subscriptions";
import GraphQLJSON from 'graphql-type-json';

const Query = {Query: {...Queries}}
const Mutation = {Mutation: {...Mutations}}

export default { JSON: GraphQLJSON, ...Query, ...Mutation }