import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query ($skip: Int, $take: Int, $q: String, $orderBy: JSON, $select: JSON, $where: JSON) {
      getPosts(input: {skip: $skip, take: $take, q: $q, orderBy: $orderBy, select: $select, where: $where}) {
        count
        list {
              id
              title
              body
              updatedAt
          }
      }
  }
`;



// {
//     "id": "64e6285865040c9a7a98f768",
//     "title": "...",
//     "body": "...",
//     "0skip": 1,
//     "0take": 3,
//     "0q": "b",
//     "0orderBy": { "id": "desc"},
//     "0select": { "id": true, "title": true, "body": true, "updatedAt": true},
//     "where": { "title": { "contains": "sev", "mode": "insensitive"} },
// }



const GET_POST = gql`
  query ($id: ID!) {
      getPost(id: $id) {
        title
        body
        updatedAt
      } 
    }
`;


export default { GET_POSTS, GET_POST }