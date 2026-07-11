const Badge = ({ children, className = "" }) => {
  return (
    <span
      className={`rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;