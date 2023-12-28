
const typeDefs = `#graphql

# Queries that are accepted
# ------------------------------------------------------------------------------------
  type Query {
    getTests(): [User!]!
  }


`;


export default typeDefs;
