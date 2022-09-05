// import React, { useEffect, useState } from "react";
import "../../Assets/css/_job.scss";
import { Link } from "react-router-dom";
// import jobs from "../../jobs"
import AOS from "aos";
import "aos/dist/aos.css";
const Job = (props) => {
  AOS.init({ once: true });
  return (
    <div className={"job-container container"}>
      <div className="part1">
        <div className="company">
          {/* <span className="cname">{props.data.company}</span> */}
          {/* {props.data.new && <span className="new">new!</span>} */}
          {/* {props.data.featured && <span className="featured">featured</span>} */}
        </div>

        <div className="positionn">
          <h4>{props.data.position}</h4>
        </div>

        <div className="details">
          <span>&nbsp;•&nbsp;</span>
          <span>{props.data.contract}</span>
          <br />
          <span>&nbsp;•&nbsp;</span>
          <span>{props.data.postedAt}</span>

          {/* <span>&nbsp;•&nbsp;</span> */}
          {/* <span>{props.data.location}</span> */}
        </div>
      </div>
      <div className="part2">
        {/* <button>View More</button> */}
        <Link to={"/jobDetails/" + props.data.id}>
          <button>
            {" "}
            <b> Apply</b>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Job;
