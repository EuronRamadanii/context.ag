import React from "react";
import { Link } from "react-router-dom";

const ServiceBox = (props) => {
  return (
    <div className="service-box">
      <div className="service-box-content">
        {/* <h3 className='service-number'>{props.serviceStep}</h3> */}
        <img
          src={props.serviceBoxImg}
          className="service-box-img"
          alt="ServiceBoxImg"
        />
        <h3 className="service-count">{props.serviceNr}</h3>
        <p className="service-desc">{props.serviceName}</p>
        <p className="explore-link">
          <Link to={props.serviceLink} className="explore">
            Explore
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                fill="#0B0033"
              />
            </svg>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ServiceBox;
