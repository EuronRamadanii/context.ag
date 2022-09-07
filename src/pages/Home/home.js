import React from "react";
import "../../Assets/css/_home.scss";
import prog_1 from "../../Assets/Images/testt.png";
import prog_2 from "../../Assets/Images/testt2.svg";
import prog_3 from "../../Assets/Images/testt3.svg";
import { Header, Footer, Contact, Services } from "../../components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";
import banner from "../../Assets/Images/banner.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import microsoft from "../../Assets/Images/MicrosoftPartner.png";
import ick from "../../Assets/Images/ICKPartner.png";
import amazon from "../../Assets/Images/AmazonPartner.png";
import { HiLightBulb } from "react-icons/hi";
import { FaHorseHead } from "react-icons/fa";
// import { IoPeople } from "react-icons/";

const settings = {
  infinite: true,
  autoplay: true,
  speed: 1400,
  autoplaySpeed: 3500,
  slidesToShow: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Home = () => {
  const { t } = useTranslation([]);
  AOS.init({
    once: false,
  });

  return (
    <div className="Home-page">
      <ScrollToTop />
      <Header />
      <section className="main-home">
        <div className="container">
          <div className="main-home-content">
            <h1
              className="heading-w aos-item"
              data-aos="zoom-in"
              data-aos-duration="1700"
            >
              {t("where1")}
              <br />
              {t("where2")}
            </h1>
            <h1
              className="heading-m"
              data-aos="zoom-in"
              data-aos-duration="1700"
            >
              {t("where")}
            </h1>
            <button
              className="btn_getStarted"
              onClick={() => window.location.replace("/#contact")}
              data-aos="zoom-in"
              data-aos-duration="2300"
            >
              {t("getStarted")}
            </button>
          </div>
        </div>
      </section>
      <section className="boxes">
        <div className="content firstBox">
          <HiLightBulb
            size={100}
            style={{ paddingBottom: "", textAlign: "center" }}
          />
          <h2 style={{ paddingTop: "30px" }}>Beratung</h2>
          <p>
            Methodische Beratung zu den Themen Qualitäts-, Prozess-, &
            Risikomanagement sowie Unterstützung bei Abstimmungen mit Kunden und
            Zulieferern.
          </p>
        </div>
        <div className="content secondBox">
          <FaHorseHead size={100} />
          <h2 style={{ paddingTop: "30px" }}>Entwicklung</h2>
          <p>
            Moderation von Risikoanalysen im Rahmen der Projektarbeit.
            Unterstützung zum Thema Funktionale Sicherheit.
          </p>
        </div>
        <div className="content thirdBox">
          <FaHorseHead size={100} />
          <h2 style={{ paddingTop: "30px" }}>Schulung</h2>
          <p>
            Durchführung von qualitativen Methoden-Schulungen & Fortbildungen.
          </p>
        </div>
      </section>
      <section className="container about-section" id="about">
        <div className="what-we-do">
          <div className="row">
            <div className="col-lg-5">
              <h1 data-aos="fade-up" data-aos-duration="1800">
                {t("whatwedo2")}
              </h1>
            </div>
            <div className="col-lg-7">
              <p className="pdd-60" data-aos="fade-up" data-aos-duration="1800">
                {t("whatwedo")}
              </p>
              <p data-aos="fade-up" data-aos-duration="2000">
                {t("atdigit")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="banner">
        <div data-aos="fade-up" data-aos-duration="1800">
          <Link to="/products">
            <Slider {...settings}>
              <div>
                <img src={banner} alt="" className="offer" />
              </div>
              <div>
                <img src={banner} alt="" className="offer" />
              </div>
            </Slider>
          </Link>
        </div>
      </section>
      <section className="container unique-section">
        <div className="why-is-unique">
          <div className="row">
            <div
              className="col-lg-5"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <h1 className="unique-w">
                {t("whydigit")}
                <br />
                {t("whydigit2")}
              </h1>
              <h1 className="unique-m">{t("whydigitunique")}</h1>
            </div>
            <div className="col-lg-7 phases">
              <p data-aos="fade-up" data-aos-duration="1800">
                {t("digunique")}
              </p>
              <div className="row phase-conf-prog">
                <div
                  className="col-lg-4"
                  data-aos="fade-up"
                  data-aos-duration="1900"
                >
                  <img src={prog_1} className="img-phases" alt="Phases" />
                  <p>{t("unique1")}</p>
                </div>
                <div
                  className="col-lg-4"
                  data-aos="fade-up"
                  data-aos-duration="2200"
                >
                  <img
                    src={prog_2}
                    className="img-phases"
                    alt="Configuration"
                  />
                  <p>{t("unique2")}</p>
                </div>
                <div
                  className="col-lg-4"
                  data-aos="fade-up"
                  data-aos-duration="2300"
                >
                  <img src={prog_3} className="img-phases" alt="Progress" />
                  <p>{t("unique3")}</p>
                </div>
              </div>
              <p data-aos="fade-up" data-aos-duration="2500">
                {t("recognizing")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <Services />
      </section>
      <section className="container">
        <div className="partners">
          <h1>Our Partners</h1>
          <img
            src={microsoft}
            alt="Micorosft Partner"
            data-aos="fade-up"
            data-aos-duration="2700"
          />
          <img
            src={ick}
            alt="ICK Partner"
            data-aos="fade-up"
            data-aos-duration="2700"
          />
          <img
            src={amazon}
            alt="ICK Partner"
            data-aos="fade-up"
            data-aos-duration="2700"
          />
        </div>
      </section>
      <section>
        <div>
          <h1 style={{ marginLeft: "36%", paddingBottom: "20px" }}>
            WIR STELLEN UNS VOR
          </h1>
          <div style={{ display: "flex" }} className="topPhoto">
            <img
              src="https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg"
              style={{ height: "400px", width: "400px" }}
            />
            <p>
              Nichts geschieht ohne Risiko, aber ohne Risiko geschieht auch
              nichts. Walter Scheel
            </p>
          </div>
          <p style={{ marginLeft: "14%" }}>Michael Fürsich | CEO</p>
        </div>
        <div className="photos">
          <div className="photo">
            <img
              src="https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg"
              style={{ height: "400px", width: "400px" }}
            />
            <p>Nichts geschieht ohne Risiko</p>
          </div>
          <div className="photo">
            <img
              src="https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg"
              style={{ height: "400px", width: "400px" }}
            />
            <p>Nichts geschieht ohne Risiko</p>
          </div>
          <div className="photo">
            <img
              src="https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg"
              style={{ height: "400px", width: "400px" }}
            />
            <p>Nichts geschieht ohne Risiko</p>
          </div>
          <div className="photo">
            <img
              src="https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg"
              style={{ height: "400px", width: "400px" }}
            />
            <p>Nichts geschieht ohne Risiko</p>
          </div>
          <div className="photo">
            <img
              src="https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg"
              style={{ height: "400px", width: "400px" }}
            />
            <p>Nichts geschieht ohne Risiko</p>
          </div>
          <div className="photo">
            <img
              src="https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg"
              style={{ height: "400px", width: "400px" }}
            />
            <p>Nichts geschieht ohne Risiko</p>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
