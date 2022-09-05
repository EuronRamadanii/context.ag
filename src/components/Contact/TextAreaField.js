// import { ErrorMessage, useField } from "formik";
// import React from "react";
// // import { Form, Label } from "semantic-ui-react";

// // interface Props {
// // 	placeholder: string;
// // 	name: string;
// // 	rows: number;
// // 	label?: string;
// // }

// export const TextAreaField = ({ label, ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//     <div className="mb-2">
//       {/* <label htmlFor={field.name}> {label}</label> */}
//       <textarea className="form-control shadow-none" {...field} {...props} />
//       <ErrorMessage
//         component="div"
//         name={field.name}
//         style={{ position: "absolute", color: "red" }}
//       />
//     </div>
//   );
// };

import React from "react";

const TextAreaField = ({ name, value, onChange, error }) => {
  return (
    <div>
      {/* <label className="col-form-label">{t("form1")}</label> */}
      <textarea
        type="text"
        value={value}
        onChange={onChange}
        className="form-control shadow-none"
        name={name}
      ></textarea>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextAreaField;
