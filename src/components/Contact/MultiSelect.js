import { ErrorMessage, useField } from "formik";
import Select from "react-select";

const MultiSelect = ({ label, props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <Select
        options={props.options}
        // {...field}
        // {...props}
        // className={
        // 	meta.touched && meta.error
        // 		? "input-error"
        // 		: "form-control shadow-none"
        // }
        className="form-control shadow-none"
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
export default MultiSelect;
