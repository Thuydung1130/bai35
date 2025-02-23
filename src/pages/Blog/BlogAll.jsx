import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function BlogAll(){
    const [post,setPost]=useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/posts")
        .then(res=>res.json())
        .then(data=>{
            //console.log(data);
            setPost(data.posts);
        })
    },[])
    // console.log(post);
    return(
        <>
            <ul>
            {post.map(item=>(
                <li key={item.id}>
                    <Link to={"/blog/"+item.id} >
                    {item.title}
                    </Link>
                    
                </li>
            ))}
            </ul>
        </>
    )
}
export default BlogAll;