
const typeDefs = `#graphql

# Data Types
# ------------------------------------------------------------------------------------


  type Post {
    id: ID!
    title: String
    body: String
    createdAt: String
    updatedAt: String
  }
 
  type Posts {
    list: [Post!]!
    count: Int!
  }

  type Id {
    id: ID!
  }


  input addPostInput {
    title: String!
    body: String!
  }
  
  input editPostInput {
    id: ID!
    title: String!
    body: String!
  }
  


`;


export default typeDefs;
