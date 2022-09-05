import React, { useEffect } from "react";
import { SingleService } from "../../components";
import service from "../../Assets/Images/services/service_7.png";
import { useTranslation } from "react-i18next";
const Service7 = () => {
  useTranslation([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SingleService
      serviceTitle="IT support helpdesk for all above services and lev 1-3"
      serviceDescription={
        <>
          We provide the comprehensive and advanced support you need every step
          of the journey because, at DigIT, we believe that your business
          deserves a partner that’s invested in your success from the start. Our
          IT Helpdesk can assist at levels 1 to 3 as you need when you need it.
          <br />
          <br />
          Let’s make your Org FINE to Shine.
        </>
      }
      singleServiceImg={service}
    />
  );
};

export default Service7;
