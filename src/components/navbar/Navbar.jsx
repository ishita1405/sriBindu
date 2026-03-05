import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="Sri Bindu Madhav Mandir" />
          <span>Sri Bindu Madhav Mandir</span>
        </Link>

        {/* Navigation Links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/puja"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              Puja
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/gallery"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/video"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              Video
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/dan"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              Dan
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/shivlingStapana"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              Shivling Sthapana
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;