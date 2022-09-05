import React, { useEffect } from "react";
import { SingleService } from "../../components";
import service from "../../Assets/Images/services/service_5.png";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Service5 = () => {
  useTranslation([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SingleService
      serviceTitle="Data / information security internal, access management, cyber security"
      serviceDescription={
        <>
          {t("service5")}
          <br />
          <br />
          {t("service5_1")}
        </>
      }
      singleServiceImg={service}
    />
  );
};

export default Service5;
