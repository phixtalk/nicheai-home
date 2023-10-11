export const Services = () => {
  return (
    <div className="container-fluid bg-light mt-5 py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              Our Services
            </div>
            <h1 className="mb-4">Why NicheAI</h1>
            <p className="mb-4">
              {`NicheAI is not just a tool; it's a strategic partner for your business. We are dedicated to making data analysis accessible, actionable, and impactful for organizations of all sizes. Whether you're a startup looking to gain a competitive edge or an established enterprise aiming to stay ahead in the digital age, NicheAI is your trusted ally in harnessing the power of data.`}
              <br />
              <br />
              {`Join us on the journey towards smarter, data-driven decision-making with NicheAI. Your data has stories to tell, and we're here to help you listen.`}
            </p>
            <a className="btn btn-primary rounded-pill px-4" href="">
              Read More
            </a>
          </div>
          <div className="col-lg-7">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="row g-4">
                  <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div className="service-icon btn-square">
                        <i className="fa fa-users fa-2x"></i>
                      </div>
                      <h5 className="mb-3">Customer Insights</h5>
                      <p>
                        Understand customer behavior, preferences, and
                        satisfaction levels to tailor marketing and product
                        strategies.
                      </p>
                      <a className="btn px-3 mt-auto mx-auto" href="">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div className="service-icon btn-square">
                        <i className="fa fa-robot fa-2x"></i>
                      </div>
                      <h5 className="mb-3">Market Research</h5>
                      <p>
                        Keep a finger on the pulse of market trends and emerging
                        opportunities.
                      </p>
                      <a className="btn px-3 mt-auto mx-auto" href="">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pt-md-4">
                <div className="row g-4">
                  <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div className="service-icon btn-square">
                        <i className="fa fa-cogs fa-2x"></i>
                      </div>
                      <h5 className="mb-3">Operational Efficiency</h5>
                      <p>
                        Optimize processes, identify bottlenecks, and improve
                        resource allocation.
                      </p>
                      <a className="btn px-3 mt-auto mx-auto" href="">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div className="service-icon btn-square">
                        <i className="fa fa-check fa-2x"></i>
                      </div>
                      <h5 className="mb-3">Compliance & Risk Management</h5>
                      <p>
                        Ensure regulatory compliance and proactively mitigate
                        risks.
                      </p>
                      <a className="btn px-3 mt-auto mx-auto" href="">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
