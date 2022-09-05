import React, { useEffect } from "react";
import { SingleService } from "../../components";
import service from "../../Assets/Images/services/service_6.png";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Service6 = () => {
  useTranslation([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SingleService
      serviceTitle="Customer relationship management CRM, salesforce, dynamics"
      serviceDescription={
        <>
          {t("service6")}
          <br />
          {t("service6_1")}
        </>
      }
      singleServiceImg={service}
    />
  );
};

export default Service6;
