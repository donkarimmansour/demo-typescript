import Link from "next/link"
import React from "react"


export type PostProps = {
    id: string;
    title: string;
    body: string;
    updatedAt: string;
};

  
const Post = async (data: PostProps) => {

    const { id, title, body, updatedAt } = data  
    
    return (<article className="card-post">

        <Link href={`/${id}/post/${id}`}>
            <img src="/assets/svg/next.svg" alt="" />
        </Link>

        <div className="body">
            <div className="content">
                <Link href={`/${id}/post/${id}`}><p className="title">{title}</p></Link>
                <p className="description">{body}</p>
            </div>

            <div className="actions">
                <span className="dots">:</span>
                <ul>
                    <li className="edit">Edit</li>
                    <li className="delete">delete</li>
                </ul>
            </div>

        </div>

    </article>)
}







export default Post