import React from "react";
import Input from "./Input";
import "../../Styling/CustomInput.css";

import FormErrorMessage from "./FormErrorMessage";

export const CustomField = (props) => {
  const { name, req } = props;

  return (
    <div className=" input-container ">
      <Input {...props} />
      <FormErrorMessage name={name} />
    </div>
  );
};

export default CustomField;
