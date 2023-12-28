
const typeDefs = `#graphql

# Mutations that are accepted
# ------------------------------------------------------------------------------------


type Mutation {
  addPost(input: addPostInput): Post!
  editPost(input: editPostInput): Post!
  deletePost(id: ID!): Id!
}

`;


export default typeDefs;
