import { GraphQLError } from "graphql";
import { Post } from "@/server/providers/libs/validators/index";
import handleQuery from "@/server/providers/helper/handleQuery";
import { Prisma, PrismaClient } from "@db/mongodb";



export type getPostsArgs = {
    input: {
      take?: number;
      skip?: number;
      q?: string;
      include?: object;
      orderBy?: Prisma.PostOrderByWithAggregationInput;
      select?: Prisma.PostSelect;
      where?: Prisma.PostWhereInput;
    }
  };

  

const getPosts = async (_: null, args: getPostsArgs, context: {session: any, prisma: PrismaClient}) => {

    try {
        const { prisma } = context;

        const query = handleQuery(args, ["title", "body"])

        const [list, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({ where: query.where })
        ]);        

        return { list, count }

    } catch (error: any) {        
        throw new GraphQLError("somethings got wrong", { extensions: { code: 'BAD_REQUEST' } });
    } 

}


const getPost = async (_: null, args: { id: string }, context: {session: any, prisma: PrismaClient}) => {
    
    try {
        
        const { id } = args;
        const { prisma } = context;     
        
        const validatorRes = Post.get.safeParse({ id })

        if (!validatorRes.success) {
            throw new GraphQLError(id);

        }else if (!id) {
            throw new GraphQLError("you must to enter your id");
        }

        const post = await prisma.post.findUnique({ where: { id } });        

        return post

    } catch (error: any) {
        console.log("error", error);
        throw new GraphQLError("somethings got wrong", { extensions: { code: 'BAD_USER_INPUT' } });
    }

}


export default { getPosts, getPost }

