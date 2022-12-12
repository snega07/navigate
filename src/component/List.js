import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav style={{float:'left'}}>
        <ul>
          <li  style={{float:'left',paddingLeft:'30px'}}>
            <Link to="/">Home</Link>
          </li>
          <li  style={{float:'left', paddingLeft:'30px'}}>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li  style={{float:'left', paddingLeft:'30px'}}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;