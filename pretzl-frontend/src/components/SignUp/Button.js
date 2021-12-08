import { FiArrowRight } from "react-icons/fi";

const Button = ({ children, ...props }) => {
  const { disabled, onClick, mt } = props;
  

  return (
    <button
      onClick={onClick}
      className={`form-button sm:${mt} ${
        disabled ? "bg-inputField disabled:cursor-not-allowed" : "bg-border"
      }`}
      type="submit"
      disabled={disabled}
    >
      {children}

      {/* <FiArrowRight className="mx-3 h-6 w-6 justify-center items-center" /> */}
    </button>
  );
};

export default Button;
