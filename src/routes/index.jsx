import PrivateRouter from "../components/PrivateRouters";
import LayoutDefautl from "../layout/LayoutDefault";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogAll from "../pages/Blog/BlogAll";
import BlogDetall from "../pages/Blog/BlogDetall";
import BlogNews from "../pages/Blog/BlogMenu";
import BlogRelated from "../pages/Blog/BlogRelated";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import InforUser from "../pages/InforUser";
import Login from "../pages/Login";

export const routes=[
    {
        path: "/",
        element: <LayoutDefautl/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/blog",
                element:<Blog/>,
                children: [
                    {
                       index: true,
                        element:<BlogAll/>
                    },
                    {
                        path:"news",
                        element:<BlogNews/>
                    },
                    {
                        path:"related",
                        element:<BlogRelated/>
                    },
                    {
                        path:"id",
                        element:<BlogDetall/>
                    },
                ]
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"*",
                element:<Error404/>
            },
            {
               
                element:<PrivateRouter/>,
                children:[
                    {
                        path: "infor-user",
                        element: <InforUser/>
                    }
                ]
            },
        ]
    }
];
{/* <Routes>
        <Route path="/" element={<LayoutDefautl />}>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} >
            <Route index element={<BlogAll />} />
            <Route path="news" element={<BlogNews />} />
            <Route path="related" element={<BlogRelated />} />
            <Route path=":id" element={<BlogDetall />} />
          </Route>

          <Route path="login" element={<Login />} />

          <Route path="*" element={<Error404 />} />
          <Route element={<PrivateRouter/>}>
            <Route path="infor-user" element={<InforUser />} />
          </Route>
        </Route>

      </Routes> */}