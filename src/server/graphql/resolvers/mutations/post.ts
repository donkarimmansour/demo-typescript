import { PrismaClient } from "@prisma/client";
import { GraphQLError } from "graphql";




type addPostArgs = {
    input: {
        title: string;
        body: string;
    };
};
  
type editPostArgs = {
    input: {
        id: string;
        title: string;
        body: string;
    };
};

  

// mutation addPost($title: String!, $body: String!) {

//     addPost(input: {title: $title, body: $body}) {
//       title
//       body
//       updatedAt 
//     }
   
//   }

const addPost = async (_: null, args: addPostArgs, context: {session: any, prisma: PrismaClient}) => {
   
      
    try {
 
  
         
        const {title, body } = args.input;
        const { prisma } = context;
         
         
        if (!title) {
            throw new GraphQLError("you must to enter your title");
        }else if(!body){
            
            throw new GraphQLError("you must to enter your body");
        }

 
 
        const post = await prisma.post.create({ data: { title, body } });         
                
        if (!!post) {
            return post

        } else {
            throw new GraphQLError("somethings got wrong");
        }

    } catch (error: any) {
        console.log("error", error);
        throw new GraphQLError(error?.message);
    }


}



// mutation editPost($id: ID!, $title: String!, $body: String!) {
  
//     editPost(input: {id: $id, title: $title, body: $body} ) {
//       id
//       title
//       body
//       updatedAt
//     }
//   }
const editPost = async (_: null, args: editPostArgs, context: {session: any, prisma: PrismaClient}) => {
  
    try {

        const { id, title, body } = args.input;
        const { prisma } = context;

        if (!id) {
            throw new GraphQLError("you must to enter your id");
        }else if (!title) {
            throw new GraphQLError("you must to enter your title");
        }else if(!body){
            throw new GraphQLError("you must to enter your body");
        }

        const post = await prisma.post.update({ where: { id }, data: { title, body } });

        if (!!post) {
            return post
        } else {
            throw new GraphQLError("somethings got wrong");
        }

    } catch (error: any) {
        console.log("error", error);
        throw new GraphQLError(error?.message);
    }


}



// mutation deletePost($id: ID!) {

//     deletePost(id: $id) {
//     id
//     }
//   }

const deletePost = async (_: null, args: { id: string }, context: {session: any, prisma: PrismaClient}) => {
   
    try {

        const { id } = args;
        const { prisma } = context;


        if (!id) {
            throw new GraphQLError("you must to enter your id");
        }

        const deleted = await prisma.post.delete({ where: { id } });
        
        
        if (!!deleted) {
            return {id}
        } else {
            throw new GraphQLError("somethings got wrong");
        }

    } catch (error: any) {
        console.log("error", error);
        throw new GraphQLError(error?.message);
    }

}



export default { addPost, editPost, deletePost }

