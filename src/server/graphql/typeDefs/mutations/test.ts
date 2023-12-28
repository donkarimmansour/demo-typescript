
const typeDefs = `#graphql

# Mutations that are accepted
# ------------------------------------------------------------------------------------
  type Mutation {
    createTest(name: String!): CreateTestResponse
  }

`;


export default typeDefs;
