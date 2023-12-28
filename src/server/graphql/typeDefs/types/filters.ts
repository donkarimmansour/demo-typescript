
const typeDefs = `#graphql

# Data Types
# ------------------------------------------------------------------------------------

scalar JSON

input Filters {
  take: Int
  skip: Int
  q: String
  orderBy: JSON
  where: JSON
  select: JSON
  include: JSON
}

`;


export default typeDefs;
