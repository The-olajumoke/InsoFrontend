import React, { useState } from "react";

import { Field } from "formik";
import "../../Styling/CustomInput.css";
import { FiEye } from "react-icons/fi";
import { Hidden } from "@mui/material";
const Input = ({ name, type, placeholder }) => {
  const [newType, setnewType] = useState(type);
    const showPassword=()=>{
  {newType=="password"? setnewType("text"):setnewType("password")}
    }
  return (
    <>
      {type === "password" ? (
        <div className=" relative ">
          <Field
            className=" input-box"
            name={name}
            type={newType}
            placeholder={placeholder}
          />
          <FiEye
            className={`${newType=="text"?"text-primary":"text-textBody"}  absolute  right-3 top-0 bottom-0 m-0 h-full cursor-pointer`} onClick={showPassword}
          />
        </div>
      ) : (
        <Field
          className=" input-box"
          name={name}
          type={newType}
          placeholder={placeholder}
        />
      )}
    </>
  );
};
export default Input;
