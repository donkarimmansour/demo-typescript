import { ApolloServer } from "@apollo/server";
import typeDefs from "@/server/graphql/typeDefs/index";
import resolvers from "@/server/graphql/resolvers/index";
import { PostProps } from "@/client/ui/layouts/card/post/Post";


beforeAll(() => {
    const server = new ApolloServer({ typeDefs, resolvers });
});

describe("/api/graphql", () => {


    it("return a post by ID", async () => {

        const result = await server.executeOperation( { query: GET_POSTS, variables: { id: "" } });

        const post: PostProps = result?.data

        expect(post).toEqual(
            expect.objectContaining({
                id: expect.any(String),
                title: expect.any(String),
                body: expect.any(String),
                updatedAt: expect.stringMatching(/^[a-zA-Z0-9]$/),
            }),
        )

        // expect(post).toHaveProperty("id")
        // expect(post).toHaveProperty("title")
        // expect(post).toHaveProperty("body")
        // expect(post).toHaveProperty("updatedAt")


     });


    it("should return a list of users", async () => {

        const result = await server.executeOperation( { query: GET_POST });

        const posts = result?.data

        expect(posts).toHaveLength(5);
        
    });

});


