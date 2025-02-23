import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom"
import GoBack from "../../components/GoBack";

function BlogDetall(){
    const params=useParams();
    const [post,setPost]=useState();
    useEffect(()=>{
        fetch(`https://dummyjson.com/posts/${params.id}`)
        .then(res=>res.json())
        .then(data=>{
            //console.log(data);
            setPost(data);
        })
    },[])
    console.log(post)
    return(
        <>
            <GoBack/>
           {post&&(
                <>
                <h1>{post.title}</h1>
                <div>{post.body}</div>
                </>
           )}
        </>
    )
}
export default BlogDetall