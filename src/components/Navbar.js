import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../utils";

const Navbar = () => {
  const navigate = useNavigate();
  const userIsLoggedIn = isLoggedIn();
  const location = useLocation();
  const isOnLoginPage = location?.pathname === "/login";

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  };

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  function handleLogin() {
    navigate("/login");
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        {userIsLoggedIn && (
          <NavLink
            to="/host"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Host
          </NavLink>
        )}
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        {!isOnLoginPage && (
          <button onClick={userIsLoggedIn ? handleLogout : handleLogin}>
            {userIsLoggedIn ? "Logout" : "Login"}
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
