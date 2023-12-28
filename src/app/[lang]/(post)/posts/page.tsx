import PostsContainer from "@/client/ui/containers/blog/posts/Posts";
import { Metadata } from "next";
import { FC, Suspense } from "react";


export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: '...',
  description: '...', 
} 
     
type pageProps = {
  params: { lang : string }
}

const Page: FC<pageProps> = ({ params: { lang } }) => {  
  

    return (
      <>
        <Suspense fallback={<p>Loading weather...</p>}>
          <PostsContainer />
        </Suspense>

      </>

);

}




export default Page