import { getPostsArgs } from "@/server/graphql/resolvers/queries/post";
import { Prisma } from "prisma/generated/mongodb";
 

const handleQuery = (args: getPostsArgs, fields: Array<string>): any => {

    const { where, select, include, orderBy= { id: "asc" }, take, skip, q } = args.input
    
    const query: Prisma.PostFindManyArgs = {
        orderBy,
    };

    if (!!q) {
        const SQ: Array<object> = [];

        fields.forEach((field: string) => {
            SQ.push({ [field]: { contains: q, mode: 'insensitive' } });
        });

        query.where = { ...query.where, OR: SQ }
    }

    !!take && (query.take = take)
    !!skip && (query.skip = skip)
    !!where && (query.where = where)
    !!select && (query.select = select)
    //!!include && (query.include = include)
    

    return query

}


export default handleQuery