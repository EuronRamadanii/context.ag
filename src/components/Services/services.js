import React from "react";
import "../../Assets/css/_services.scss";
import { ServiceBox } from "../../components";
import service_1 from "../../Assets/Images/service_Icons/service1_icon.svg";
import service_2 from "../../Assets/Images/service_Icons/service2_icon.svg";
import service_3 from "../../Assets/Images/service_Icons/service3_icon.svg";
import service_4 from "../../Assets/Images/service_Icons/service4_icon.svg";
import service_5 from "../../Assets/Images/service_Icons/service5_icon.svg";
import service_6 from "../../Assets/Images/service_Icons/service6_icon.svg";
import service_7 from "../../Assets/Images/service_Icons/service7_icon.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { t } from "i18next";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "50px",
        height: "50px",
        padding: "15px",
        alignItems: "center",
        borderRadius: "4px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "50px",
        height: "50px",
        padding: "15px",
        alignItems: "center",
        borderRadius: "4px",
      }}
      onClick={onClick}
    />
  );
}

const Services = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 550,
    autoplaySpeed: 3500,
    slidesToShow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section
      className="services-section"
      data-aos="fade-up"
      data-aos-duration="1800"
    >
      <div className="container">
        <div className="col-lg-12 services-slider">
          <div className="row">
            <h1 className="servicesTitle">{t("services")}</h1>
          </div>
          <Slider {...settings}>
            <div>
              <ServiceBox
                serviceBoxImg={service_1}
                serviceNr={t("service1slider")}
                serviceStep={t("service1slider_1")}
                serviceName={t("service1slider_2")}
                serviceLink="/services/service-1"
              />
            </div>
            <div>
              <ServiceBox
                serviceBoxImg={service_2}
                serviceNr={t("service2slider")}
                serviceStep={t("service2slider_1")}
                serviceName={t("service2slider_2")}
                serviceLink="/services/service-2"
              />
            </div>
            <div>
              <ServiceBox
                serviceBoxImg={service_3}
                serviceNr={t("service3slider")}
                serviceStep={t("service3slider_1")}
                serviceName={t("service3slider_2")}
                serviceLink="/services/service-3"
              />
            </div>
            <div>
              <ServiceBox
                serviceBoxImg={service_4}
                serviceNr={t("service4slider")}
                serviceStep={t("service4slider_1")}
                serviceName={t("service4slider_2")}
                serviceLink="/services/service-4"
              />
            </div>
            <div>
              <ServiceBox
                serviceBoxImg={service_5}
                serviceNr={t("service5slider")}
                serviceStep={t("service5slider_1")}
                serviceName={t("service5slider_2")}
                serviceLink="/services/service-5"
              />
            </div>
            <div>
              <ServiceBox
                serviceBoxImg={service_6}
                serviceNr={t("service6slider")}
                serviceStep={t("service6slider_1")}
                serviceName={t("service6slider_2")}
                serviceLink="/services/service-6"
              />
            </div>
            <div>
              <ServiceBox
                serviceBoxImg={service_7}
                serviceNr={t("service7slider")}
                serviceStep={t("service7slider_1")}
                serviceName={t("service7slider_2")}
                serviceLink="/services/service-7"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services;
