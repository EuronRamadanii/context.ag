import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      {/* <label htmlFor={field.name}> {label}</label> */}
      <input
        className="form-control shadow-none"
        {...field}
        {...props}
        autoCapitalize="off"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        style={{ position: "absolute", color: "red" }}
      />
    </div>
  );
};
