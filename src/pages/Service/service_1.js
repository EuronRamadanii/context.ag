import React, { useEffect } from "react";
import { SingleService } from "../../components";
import service from "../../Assets/Images/services/service_1.png";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Service1 = () => {
  useTranslation([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SingleService
      key="1"
      serviceTitle="Business goals to IT goals."
      serviceDescription={
        <>
          {t("service1")}
          <br />
          {t("service1_2")}
          <br />
          {t("service1_3")}
          <br />
          <br />
          {t("service1_4")}
        </>
      }
      singleServiceImg={service}
    />
  );
};

export default Service1;
