import { Outlet } from "react-router-dom";

function Blog(){
    return(
        <>
            <h1>trang tin tuc</h1>
            <Outlet/>
        </>
    )
}
export default Blog;