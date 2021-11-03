import React from "react";
import Input from "./Input";
import "../../Styling/CustomInput.css";

import FormErrorMessage from "./FormErrorMessage";

export const CustomField = (props) => {
  const { name, label, req } = props;
  
  return (
    <div className=" input-container">
      <label className="label" htmlFor="name">
        {label}
        {req ? (
          <span className=" text-btnText ml-2">{req}</span>
        ) : (
          <span
            className={` ${name == "alternativeEmail"?"hidden":"flex"} ml-1 `}
            style={{ color: "red" }}
          >
            *
          </span>
        )}
      </label>
      <Input {...props} />
      <FormErrorMessage name={name} />
    </div>
  );
};

export default CustomField;
