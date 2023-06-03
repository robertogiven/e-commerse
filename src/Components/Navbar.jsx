import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { globalContext } from "../Contexts/GlobalContext";

export default function Navbar(props) {
  const [globalState, globalDispatch] = useContext(globalContext);
  const location = useLocation();
  // console.log("GlobalState di Navbar.jsx: ", globalState);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            E-Commerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/About"
                  className={`nav-link ${
                    location.pathname === "/About" ? "active" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/DataProductAPI"
                  className={`nav-link ${
                    location.pathname === "/DataProductAPI" ? "active" : ""
                  }`}
                >
                  Data Product API
                </Link>
              </li>
              {globalState.isLogin ? (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Product
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {globalState.isLogin ? (
                <>
                  <li className="nav-item">
                    <Link to="/carts" className="nav-link">
                      <div
                        style={{
                          position: "relative",
                          display: "block",
                          width: "28px",
                          height: "28px",
                          overflow: "hidden",
                        }}
                      >
                        {globalState.carts.length > 0 ? (
                          <>
                            <span
                              style={{
                                position: "absolute",
                                top: "0",
                                right: "0",
                                zIndex: "2",
                                fontSize: "10px",
                                borderRadius: "5px",
                                background: "#d60b28",
                                width: "18px",
                                height: "16px",
                                lineHeight: "16px",
                                display: "block",
                                textAlign: "center",
                                color: "white",
                                fontFamily: "sans-serif",
                                fontWeight: "500",
                              }}
                            >
                              {globalState.carts.length}
                            </span>
                          </>
                        ) : (
                          <></>
                        )}

                        <img
                          src={require("../img/icons/white.png")}
                          alt=""
                          style={{
                            width: "25px",
                            height: "25px",
                            objectFit: "cover",
                            position: "relative",
                            top: "4px",
                            zIndex: "1",
                          }}
                        />
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Hello Rober
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          Profil
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            globalDispatch({
                              type: "PROCESS_LOGOUT",
                            });
                          }}
                          className="dropdown-item"
                          href="#"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      to="/Login"
                      className={`nav-link ${
                        location.pathname === "/Login" ? "active" : ""
                      }`}
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ height: "55px" }}></div>
    </>
  );
}
