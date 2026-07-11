import { Link } from "react-router-dom";

const SecondaryButton = ({
  children,
  to,
  onClick,
  className = "",
}) => {
  const styles =
    "inline-flex items-center justify-center rounded-full border border-white px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black";

  if (to) {
    return (
      <Link to={to} className={`${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${styles} ${className}`}>
      {children}
    </button>
  );
};

export default SecondaryButton;