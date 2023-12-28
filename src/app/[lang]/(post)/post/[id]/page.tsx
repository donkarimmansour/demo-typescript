import queries from "@/client/services/graphql/queries";
import PostContainer from "@/client/ui/containers/blog/posts/Post";
import { useQuery } from "@apollo/client";
import { Metadata } from "next";
import { notFound, redirect } from 'next/navigation'


export const dynamic = "force-dynamic";
export const dynamicParams = false


// export async function generateStaticParams() {
//   const { data } = useQuery(queries.Post.GET_POSTS);
 
//   return data.getPosts.list.map((post: PostType) => ({
//     id: post.id,
//   }))
// }



// export async function generateMetadata({ params: { id } }: { params: { id: string } }): Promise<Metadata> {

//   if (!id) {
//     notFound()
//   }

//   const { data } = useQuery(queries.Post.GET_POST, { variables: { id }});

//   return {
//     title: { absolute: `${data.title}` },
//     description: `${data.body}`
//   }
// }

// export const getItem = cache(async (id: string) => {
//     const item = await db.item.findUnique({ id })
//     return item
//   })


const page = ({ params: { id } }: { params: { id: string } }) => {

      // const { data } = await getClient().query({ query });
      
    // if (!id) {
    //   redirect('/')
    // }

    return (<PostContainer id={id}/>)

}


export default page