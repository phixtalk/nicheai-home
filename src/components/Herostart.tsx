import Image from "next/image";
import heroImg from "@/assets/img/hero-img.png";

export const Herostart = () => {
  return (
    <div className="container-fluid pt-5 bg-primary hero-header mb-5">
      <div className="container pt-5">
        <div className="row g-5 pt-5">
          <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
            <div
              id="niche_home"
              className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight"
            >
              NicheAI
            </div>
            <h1 className="display-4 text-white mb-4 animated slideInRight">
              Personal AI companion for Your Business
            </h1>
            <p className="text-white mb-4 animated slideInRight">
              Empowering businesses with advanced data analysis and insights
              through a user-friendly and conversational interface
            </p>
            <a
              href="https://nicheai-three.vercel.app/sign-in"
              className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight"
            >
              Login
            </a>
            <a
              href="https://nicheai-three.vercel.app/sign-up"
              className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
            >
              Sign Up
            </a>
          </div>
          <div className="col-lg-6 align-self-end text-center text-lg-end">
            <Image
              src={heroImg}
              alt="Hero Image"
              className="img-fluid"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
