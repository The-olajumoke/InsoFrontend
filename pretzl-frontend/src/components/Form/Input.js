import { Field } from "formik";
import "../../Styling/CustomInput.css";
const Input = ({ name, type, placeholder }) => {
  return (
    <Field
     className=" input-box"
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};
export default Input;

