import { Outlet, Link } from "react-router-dom";
import './style.css';
const Layout = () => {
  return (
    <>
      <nav className="bg">
        <ul>
          <li style={{float:'left',paddingLeft:'20px',paddingTop:'15px'}}>
            <Link to="/">Home</Link>
          </li>
          <li style={{float:'left',paddingLeft:'20px',paddingTop:'15px'}}>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li style={{float:'left',paddingLeft:'20px',paddingTop:'15px'}}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;