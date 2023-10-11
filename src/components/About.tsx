import Image from "next/image";
import aboutImg from "@/assets/img/about-img.jpg";

export const About = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img">
              <Image
                src={aboutImg}
                alt="about image"
                className="img-fluid"
                priority
              />
            </div>
          </div>
          <div
            id="niche_about_us"
            className="col-lg-6 wow fadeIn"
            data-wow-delay="0.5s"
          >
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              About Us
            </div>
            <h1 className="mb-4">
              We Make Your Business Smarter with Artificial Intelligence
            </h1>
            <p className="mb-4">
              NicheAI seamlessly integrates cutting-edge technology into every
              facet of your operations. From in-depth data analysis to
              predictive insights, our AI solutions empower you to make informed
              decisions, identify hidden opportunities, and navigate challenges
              with precision.
            </p>
            <p className="mb-4">
              {`Elevate your business intelligence with our innovative AI-driven tools, ensuring that every move you make is backed by the intelligence needed for success in today's dynamic and competitive landscape`}
            </p>

            <div className="d-flex align-items-center mt-4">
              <a className="btn btn-outline-primary btn-square me-3" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-primary btn-square me-3" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-primary btn-square me-3" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-outline-primary btn-square" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
