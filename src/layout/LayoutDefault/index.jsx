import { Link, NavLink, Outlet } from "react-router-dom"
import "./LayoutDefault.scss"
function LayoutDefautl() {
    const navLinkActive = (e) => {
        console.log(e);
        return e.isActive ? "nemu__link menu__link--active" : "menu__link"
    }
    return (
        <>
            <div className="layout-default">
                <header className="layout-default__header">
                    <div className="layout-default__logo">Logo</div>
                    <div className="menu">
                        <ul>
                            <li>
                                <NavLink className={navLinkActive} to="/">Trang chu</NavLink>

                            </li>
                            <li>
                                <NavLink className={navLinkActive} to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink className={navLinkActive} to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink className={navLinkActive} to="/blog">Blog</NavLink>
                                <ul className="menu__sub">
                                    <li>
                                        <NavLink className={navLinkActive} to="/blog/news">News</NavLink>

                                    </li>
                                    <li>
                                        <NavLink className={navLinkActive} to="/blog/related">Related</NavLink>

                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink className={navLinkActive} to="/infor-user">Infor User</NavLink>
                            </li>
                        </ul>
                    </div>
                </header>
                <main className="layout-default__main">
                    <Outlet />
                </main>
                <footer className="layout-default__footer">
                    Coppyright @ 2023 by 28tech
                </footer>
            </div>
        </>
    )
}
export default LayoutDefautl;