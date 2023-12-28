
const typeDefs = `#graphql

# Queries that are accepted
# ------------------------------------------------------------------------------------
  type Query {
    getPosts(input: Filters): Posts!
    getPost(id: ID!): Post!
  }


`;


export default typeDefs;
