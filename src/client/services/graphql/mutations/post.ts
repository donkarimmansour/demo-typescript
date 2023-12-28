import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query getPosts($skip: Int, $take: Int, $q: String, $orderBy: JSON, $select: JSON, $where: JSON) {
      getPosts(input: {skip: $skip, take: $take, q: $q, orderBy: $orderBy, select: $select, where: $where}) {
        count
        posts {
              id
              title
              body
              updatedAt
          }
      }
  }
`;


const GET_POST = gql`
  query getPost($id: ID!) {
      getPost(id: $id) {
        title
        body
        updatedAt
      } 
    }
`;


export default { GET_POSTS, GET_POST }