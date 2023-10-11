"use client";

import Link from "next/link";
import { smoothScroll } from "@/utils";

export const Navbar = () => {
  return (
    <div className="container-fluid sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark p-0">
          <a href="index.html" className="navbar-brand">
            <h1 className="text-white">
              Niche<span className="text-dark">AI</span>
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler ms-auto me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <Link
                href="#"
                onClick={() => smoothScroll("niche_home")}
                className="nav-item nav-link active"
              >
                Home
              </Link>
              <Link
                href="#"
                onClick={() => smoothScroll("niche_about_us")}
                className="nav-item nav-link"
              >
                About
              </Link>
              <Link
                href="#"
                onClick={() => smoothScroll("niche_services")}
                className="nav-item nav-link"
              >
                Features
              </Link>
              <Link
                href="https://nicheai-three.vercel.app/sign-in"
                className="nav-item nav-link active"
              >
                Login
              </Link>
              <Link
                href="https://nicheai-three.vercel.app/sign-up"
                className="nav-item nav-link"
              >
                Sign Up
              </Link>
            </div>
            <button
              type="button"
              className="btn text-white p-0 d-none d-lg-block"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
