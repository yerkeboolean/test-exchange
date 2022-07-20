import React from "react";
import { Link, Outlet } from "react-router-dom";
// type LayoutProps = {
//   children: JSX.Element;
// };


// - add styling to navigation
// - add bootstrap ? 
// - get all currencies from redux
// - set and get(localstore) default currency of user


const Layout = () => {
  return (
    <div>
      <h1>My currency app</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="currency">Currency</Link>
      </nav>
      <div> {/* TODO: add dropdown with all currencies */}</div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
