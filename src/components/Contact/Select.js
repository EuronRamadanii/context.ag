import React from "react";

// const industrys = [
//   {
//     label: "Computer and technology",
//     value: "computer-and-technology",
//   },
//   {
//     label: "Entertainment",
//     value: "entertainment",
//   },
//   {
//     label: "Finance",
//     value: "finance",
//   },
//   {
//     label: "Agriculture",
//     value: "agriculture",
//   },
//   {
//     label: "Education",
//     value: "education",
//   },
//   {
//     label: "Other",
//     value: "other",
//   },
// ];
const Select = ({ name, value, onChange, error }) => {
  return (
    <div className="col-lg-6">
      {/* <label className="col-form-label">{t("form1")}</label> */}
      <select
        // type="text"
        // value={value}
        // onChange={onChange}
        // className="form-control shadow-none"
        // name={name}
      >
        <option value="Computer and technology">Computer and technology</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Finance">Finance</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Education">Education</option>
        <option value="Other">Other</option>
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
