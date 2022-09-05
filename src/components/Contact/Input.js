import React from "react";

const Input = ({ name, value, onChange, error }) => {
  return (
    <div>
      {/* <label className="col-form-label">{t("form1")}</label> */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="form-control shadow-none"
        name={name}
      ></input>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
