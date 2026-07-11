const SectionTitle = ({
  subtitle,
  title,
  highlight,
  description,
  center = true,
}) => {
  return (
    <div className={`${center ? "text-center" : ""} mb-16`}>
      {subtitle && (
        <p className="uppercase tracking-[0.3em] text-orange-500 font-semibold">
          {subtitle}
        </p>
      )}

      <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
        {title}{" "}
        {highlight && (
          <span className="text-orange-500">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl mx-auto text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;