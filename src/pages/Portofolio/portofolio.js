import React, { useEffect } from "react";
import { Header, Footer } from "../../components";
import "../../Assets/css/_products.scss";
import { useTranslation } from "react-i18next";
import PortofolioComponent from "../../components/Portofolio/PortofolioComponent";

const Portofolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTranslation([]);
  return (
    <div>
      <Header />
      <PortofolioComponent />
      <Footer />
    </div>
  );
};

export default Portofolio;
