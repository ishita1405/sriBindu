import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="Sri Bindu Madhav Mandir" />
          <span>Sri Bindu Madhav Mandir</span>
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Puja" onClick={() => setOpen(false)}>Puja</NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={() => setOpen(false)}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/video" onClick={() => setOpen(false)}>Video</NavLink>
          </li>
          <li>
            <NavLink to="/dan" onClick={() => setOpen(false)}>Dan</NavLink>
          </li>
          <li>
            <NavLink to="/shivling-sthapana" onClick={() => setOpen(false)}>
              Shivling Sthapana
            </NavLink>
          </li>
        </ul>

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
