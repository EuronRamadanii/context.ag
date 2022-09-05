import { ErrorMessage, useField } from "formik";
import { useState } from "react";
import Select from "react-select";

const MultipleSelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  // const data = [
  //   { Services: "Business goals to IT goals", id: 1 },
  //   { Services: "Business Analyses", id: 1 },
  //   { Services: "IT Implementation", id: 1 },
  //   { Services: "Data & Cyber Security", id: 1 },
  //   { Services: "Data Management", id: 1 },
  //   { Services: "IT Support", id: 1 },
  //   { Services: "Business goals to IT goals", id: 1 },
  // ];

  // const [options] = useState(data);

  const state = {
    isVerified: false,
    options: [
      {
        label: "Business goals to IT goals",
        value: "business-goals-to-IT-goals",
      },
      {
        label: "Business Analyses",
        value: "business-analyses",
      },
      {
        label: "IT Implementation",
        value: "IT Implementation",
      },
      {
        label: "IT Setup",
        value: "it-Setup",
      },
      {
        label: "Data & Cyber Security",
        value: "data-&-cyber-security",
      },
      {
        label: "Data Management",
        value: "data-management",
      },
      {
        label: "IT Support",
        value: "it-support",
      },
      {
        label: "All",
        value: "all",
      },
      {
        label: "Other",
        value: "other",
      },
    ],
  };

  return (
    <>
      <label>{label}</label>
      {/* <select
        name="test[]"
        multiple
        {...field}
        {...props}
        // className={
        // 	meta.touched && meta.error
        // 		? "input-error"
        // 		: "form-control shadow-none"
        // }
        className="form-control shadow-none"
      >
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
        <option value="6">Six</option>
        <option value="7">Seven</option>
        <option value="8">Eight</option>

      </select> */}
      {/* <Select options={options} displayValue="Services" {...field}
        className="shadow-none"
        {...props}  /> */}
      <Select
        options={state.options}
        isMulti
        name="services"
        {...field}
        {...props}
        className="shadow-none"
      />
      {/* {meta.touched && meta.error && <div className="error">{meta.error}</div>} */}
      <ErrorMessage
        component="div"
        name={field.name}
        style={{ position: "absolute", color: "red" }}
      />
    </>
  );
};
export default MultipleSelectField;
