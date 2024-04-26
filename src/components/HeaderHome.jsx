//rafce
import React from "react";
import { NavLink } from "react-router-dom";

const HeaderHome = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        React hook
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
              className={({ isActive }) =>
                isActive ? "nav-link bg-white text-dark" : "nav-link"
              }
              to="/"
            >
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
              className={({ isActive }) =>
                isActive ? "nav-link bg-white text-dark" : "nav-link"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
              className={({ isActive }) =>
                isActive ? "nav-link bg-white text-dark" : "nav-link"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
              className={({ isActive }) =>
                isActive ? "nav-link bg-white text-dark" : "nav-link"
              }
              to="/register"
            >
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
              className={({ isActive }) =>
                isActive ? "nav-link bg-white text-dark" : "nav-link"
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
              className={({ isActive }) =>
                isActive ? "nav-link bg-white text-dark" : "nav-link"
              }
              to="/form"
            >
              Form Demo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) =>
                isActive ? { border: "1px solid orange" } : {}
              }
              className={({ isActive }) =>
                isActive ? "nav-link bg-white text-dark" : "nav-link"
              }
              to="/formik"
            >
              Formik Demo
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Redux Demo
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/number-state">
                Number State
              </NavLink>
              <NavLink className="dropdown-item" to="/chat-app">
                Action 2
              </NavLink>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default HeaderHome;
