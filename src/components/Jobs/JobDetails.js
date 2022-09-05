import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../Assets/css/_job.scss";
import Header from "../Layout/Header/header";
import jobs from "../../jobs";
import { useTranslation } from "react-i18next";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";

function JobDetails({}) {
  useTranslation([]);
  const params = useParams();

  const [job, setJob] = useState({});

  useEffect(() => {
    const x = jobs.filter((item) => {
      return item.id == params.id;
    });
    setJob(x[0]);
  }, []);
  return (
    <>
      <Header />
      <ScrollToTop />
      <div className="partt1">
        <div class="parallax" style={{ marginTop: "40px" }}></div>
      </div>
      <div className="container">
        <div>
          <h3 style={{ marginTop: "50px", marginBottom: "50px" }}>Job Brief</h3>
          <div>
            {job.jobBrief?.map((item, index) => (
              <p key={index} className="lists">
                {item}
              </p>
            ))}
          </div>
          <div>
            <h3 style={{ marginTop: "50px", marginBottom: "50px" }}>
              Responsibilities
            </h3>
            <div className="container">
              <ul className="test">
                {job.responsibilities?.map((item, index) => (
                  <li key={index} className="lists">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ marginTop: "50px", marginBottom: "50px" }}>
                Requirements
              </h3>
              <div className="container">
                <ul className="test">
                  {job.requirements?.map((item, index) => (
                    <li key={index} className="lists">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <p style={{ marginTop: "50px" }} className="lists">
                Apply now by sending your CV at:{" "}
                <a className="lists" href="mailto:hr@digitbusiness.ch">
                  hr@digitbusiness.ch
                </a>
              </p>
            </div>
            <div style={{ display: "flex", marginTop: "50px" }}>
              <Link to={"/career"}>
                <button className="goback">
                  <b>Go back</b>
                </button>
              </Link>
              {/* <button>
              <a href="mailto:contacts@digitbusiness.ch">Apply Now</a>
            </button> */}
              {/* <ButtonMailto
              label="Apply Now"
              mailto="mailto:contacts@digitbusiness.ch"
            /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetails;
