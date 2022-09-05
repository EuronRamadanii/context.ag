import React, { useEffect } from "react";
import { SingleService } from "../../components";
import service from "../../Assets/Images/services/service_3.png";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Service3 = () => {
  useTranslation([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SingleService
      serviceTitle="IT Solutions, IT Platform, Software Engineering"
      serviceDescription={
        <>
          {t("service3")}
          <br />
          <br />
          {t("service3_1")}
          <br />
          <br />
          {t("service3_2")}
        </>
      }
      singleServiceImg={service}
    />
  );
};

export default Service3;
