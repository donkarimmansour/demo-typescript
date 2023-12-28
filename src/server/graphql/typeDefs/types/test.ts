
const typeDefs = `#graphql

# Data Types
# ------------------------------------------------------------------------------------
  type Test {
    id: String
    name: String
    createdAt: String
    updatedAt: String
  }

  enum Status {
  SUCCESS
  Failed
 }

  type CreateTestResponse {
    msg: Test
    status: Status!
  }



`;


export default typeDefs;
