"use client";

import queries from "@/client/services/graphql/queries";
import PostCard from "@/client/ui/layouts/card/post/Post";
import { useQuery } from "@apollo/client";
import { FC } from "react";


const Post: FC<{ id: string }> = ({ id }) => {  

    const { loading, error, data } = useQuery(queries.Post.GET_POST, { variables: { id }});

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;    
    
    return ( <PostCard {...data.getPost}/>
    )

}


export default Post