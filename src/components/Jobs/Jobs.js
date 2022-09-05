import jobs from "../../jobs";
import Job from "./Job";
import "../../Assets/css/_job.scss";

const Jobs = ({}) => {
  return (
    <div className="jobs">
      {jobs.map((d) => {
        return <Job key={d.id} data={d} />;
      })}
    </div>
  );
};

export default Jobs;
