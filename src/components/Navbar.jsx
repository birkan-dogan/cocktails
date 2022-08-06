import React from "react";
import { Link } from "react-router-dom";
import logo from "../cocktail.svg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to={"/"}>
          <img src={logo} alt="cocktail db logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "700",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "700",
              }}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
