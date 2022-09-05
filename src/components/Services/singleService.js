import React from "react";
import "../../Assets/css/_service.scss";
import { Header, Footer, Contact } from "../../components";
import AOS from "aos";
import "aos/dist/aos.css";

const SingleService = (props) => {
  AOS.init({ once: true });

  return (
    <div className="Service-page">
      <Header />
      <div className="container">
        <div className="service-content">
          <div className="row">
            <div className="col-lg-7">
              <p
                data-aos="fade-up"
                data-aos-duration="1700"
                className="service"
              >
                {props.serviceNr}
              </p>
              <h1 data-aos="fade-up" data-aos-duration="2000">
                {props.serviceTitle}
              </h1>

              <p data-aos="fade-up" data-aos-duration="2300">
                {props.serviceDescription}
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="2800"
              className="col-lg-5 img-center"
            >
              <img
                className="service-img"
                src={props.singleServiceImg}
                alt="Service"
              />
            </div>
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default SingleService;
