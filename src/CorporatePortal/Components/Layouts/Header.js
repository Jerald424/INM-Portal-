import React from "react";
import "./layouts.css";
import { useLocation, Link } from "react-router-dom";
export default function Header() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a
                class={`nav-link ${
                  location.pathname === "/" && "text-primary fw-bold"
                }`}
                href="#"
              >
                Dashboard
              </a>

              <a
                class="nav-link active dropdown-toggle d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-current="page"
                href="#"
              >
                {" "}
                <p
                  className={`m-0  ${
                    location.pathname === "/studentPage" &&
                    "text-primary fw-bold"
                  }`}
                >
                  Students{" "}
                </p>
              </a>
              <ul className="dropdown-menu nav-dropdown ">
                <li>
                  <Link class="dropdown-item" to="/studentPage">
                    Go student page
                  </Link>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Communitywise
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Relionwise
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Economic Statuswise
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Other State Students
                  </a>
                </li>

                <li>
                  <a class="dropdown-item" href="#">
                    Programmewise
                  </a>
                </li>
              </ul>
              <a
                class="nav-link active dropdown-toggle d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-current="page"
                href="#"
              >
                <p
                  className={`m-0 ${
                    location.pathname === "/feesPage" && "text-primary fw-bold"
                  }`}
                >
                  {" "}
                  Fees{" "}
                </p>
              </a>
              <ul className="dropdown-menu nav-dropdown ">
                <li>
                  <Link class="dropdown-item" to="/feesPage">
                    Fees Page
                  </Link>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Daily Collection
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Fee Reconciliation Detail
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img
              src={require("../../assets/nav-avatar.png")}
              className="nav-top-icon"
            />
          </a>
        </div>
      </nav>
    </div>
  );
}
