
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from "@apollo/server";
import typeDefs from "@/server/graphql/typeDefs/index";
import resolvers from "@/server/graphql/resolvers/index";
import prismaContext from "@/server/providers/libs/prisma";
import getLocale from '@/client/providers/libs/getLocale';
import { NextRequest } from 'next/server';


const server = new ApolloServer({ typeDefs, resolvers });


const handler = startServerAndCreateNextHandler(server, {
  context: async (req: NextRequest) => ({ prisma: prismaContext().prisma, session: {}, lang: await getLocale(req) }),
});


export { handler as GET, handler as POST };
