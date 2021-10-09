import React from "react";


const InputCheckbox = ({ children, ...props }) => {
  const { name,onClick } = props;

  return (
    <label className="mb-3 flex items-center text-primary">
        <input
        type="checkbox"
        onClick={onClick}
        className="checkbox 
        appearance-none text-black border-black rounded-sm focus:outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer"
      />
      <span className="text-textBody text-xs sm:text-base ml-2">
        {" "}
        {children}
      </span>
    </label>
  );
};

export default InputCheckbox;
