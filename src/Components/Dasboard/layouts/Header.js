import React from "react";
import "./layouts.css";

export default function Header() {
  return (
    <div className="top-navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid top-navbar">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">
            Navbar
          </a>

          <div
            class="collapse navbar-collapse nav-content nav-items"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <div className="d-block d-lg-none">
                <li class="nav-item">
                  <a class="nav-link active">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
              </div>
            </ul>
            <div className="d-none d-lg-block">
              <h5>Colllage Site </h5>
            </div>
            <div className="d-none d-lg-block">
              <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
