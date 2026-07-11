import { Link } from "react-router-dom";

const PrimaryButton = ({
  children,
  to,
  onClick,
  type = "button",
  className = "",
}) => {
  const styles =
    "inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105";

  if (to) {
    return (
      <Link to={to} className={`${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles} ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;