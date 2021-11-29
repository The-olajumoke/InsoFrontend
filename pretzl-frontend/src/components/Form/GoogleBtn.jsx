import React from "react";
import img from "../../Exports/Google.svg";
function GoogleBtn() {
  return (
    <button className="form-button text-primary shadow-md">
      <img src={img} alt="" className="googleImg" />
      Sign up with Google
    </button>
  );
}

export default GoogleBtn;
