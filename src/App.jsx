import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Error404 from "./pages/Error404"
import LayoutDefautl from "./layout/LayoutDefault"
import Blog from "./pages/Blog"
import BlogNews from "./pages/Blog/BlogMenu"
import BlogRelated from "./pages/Blog/BlogRelated"
import BlogAll from "./pages/Blog/BlogAll"
import BlogDetall from "./pages/Blog/BlogDetall"
import InforUser from "./pages/InforUser"
import Login from "./pages/Login"
import PrivateRouter from "./components/PrivateRouters"

import AllRoute from "./components/AllRoute"
function App() {
  return (
    <>
      <AllRoute/>
      {/* <LayoutDefautl/> */}
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
    </>
  )
}

export default App
