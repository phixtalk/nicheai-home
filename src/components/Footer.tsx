"use client";

import { smoothScroll } from "@/utils";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white-50 footer pt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" className="d-inline-block mb-3">
              <h1 className="text-white">
                Niche<span className="text-primary">AI</span>
              </h1>
            </a>
            <p className="mb-0">
              Explore the potential of AI for your business
            </p>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
            <h5 className="text-white mb-4">Get In Touch</h5>
            <p>
              <i className="fa fa-map-marker-alt me-3"></i>Houston, Texas, USA
            </p>
            <p>
              <i className="fa fa-phone-alt me-3"></i>+012 345 67890
            </p>
            <p>
              <i className="fa fa-envelope me-3"></i>info@example.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-youtube"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
            <h5 className="text-white mb-4">Popular Link</h5>
            <Link
              className="btn btn-link"
              href="#"
              onClick={() => smoothScroll("niche_about_us")}
            >
              About Us
            </Link>
            <a className="btn btn-link" href="#">
              Privacy Policy
            </a>
            <a className="btn btn-link" href="#">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
      <div className="container wow fadeIn" data-wow-delay="0.1s">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="#">
                NicheAI
              </a>
              , All Right Reserved. Designed By{" "}
              <a className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="#">Home</a>
                <a href="#">Cookies</a>
                <a href="#">Help</a>
                <a href="#">FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
