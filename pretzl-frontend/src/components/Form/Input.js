import { Field } from "formik";
import { useState } from "react";
import "../../Styling/CustomInput.css";
const Input = ({ name, type, placeholder }) => {
  const [value, setvalue] = useState("");
  return (
    <Field
      className=" input-box"
      // value={value}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};
export default Input;

// box-shadow: 1px 2px 10px rgba(169, 169, 169, 0.12);
