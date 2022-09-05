import React, { useEffect } from "react";
import { SingleService } from "../../components";
import service from "../../Assets/Images/services/service_2.png";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Service2 = () => {
  useTranslation([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SingleService
      serviceTitle="BPM & requirements engineering and management"
      serviceDescription={
        <>
          {t("service2")}
          <br />
          <br />
          {t("service2_1")}
        </>
      }
      singleServiceImg={service}
    />
  );
};

export default Service2;
