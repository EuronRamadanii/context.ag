import React, { useEffect } from "react";
import { SingleService } from "../../components";
import service from "../../Assets/Images/services/service_4.png";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Service4 = () => {
  useTranslation([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SingleService
      serviceTitle="IT Setup based on step 2, Digital Content and Digital Marketing"
      serviceDescription={
        <>
          {t("service4")}
          <br />
          <br />
          {t("service4_1")}
          <br />
          <br />
          {t("service4_2")}
        </>
      }
      singleServiceImg={service}
    />
  );
};

export default Service4;
