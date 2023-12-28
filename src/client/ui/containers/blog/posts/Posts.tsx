import { getClient } from "@/client/providers/libs/getClient";
import useTranslation from "@/client/providers/libs/useTranslation";
import queries from "@/client/services/graphql/queries";
import PostCard, { PostProps } from "@/client/ui/layouts/card/post/Post"
import { useQuery } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import React, { FC, useContext } from "react"
import { i18nConfig } from "@/client/providers/utils/i18n.config";
import { useCurrentLocaleContext } from "@/client/ui/providers/LanguageContext";
import LanguageSwitcher from "@/client/ui/components/Customize/LanguageSwitcher/LanguageSwitcher";
import sleep from "@/client/providers/utils/sleep";

type pageProps = {

}

const Posts: FC<pageProps> = async () => {

  //await sleep(5000)

  //const { loading, error, data } = useQuery(queries.Post.GET_POSTS);
 // const { data } = useSuspenseQuery<any>(queries.Post.GET_POSTS);

  const { data } = await getClient().query({
    query: queries.Post.GET_POSTS,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  //  const { lang, changeLang } = useCurrentLocaleContext();
  //  const dict = await useTranslation(lang) 

 const { getPosts: { count, list } } = data;


  return (
    <>


      {/* <p>{dict.navigation.home}</p>  */}

      <LanguageSwitcher />
      
      {!!list.length &&
        list.map((post: PostProps, PI: number) => {
          return <PostCard key={PI} {...post} />;
        })}

    </>
  );
}


export default Posts
