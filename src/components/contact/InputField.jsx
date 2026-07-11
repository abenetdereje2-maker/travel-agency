const InputField = ({
  label,
  type = "text",
  name,
  placeholder,
  textarea = false,
}) => {
  if (textarea) {
    return (
      <div className="relative">
        <label className="mb-3 block text-sm font-semibold uppercase tracking-wide text-zinc-300">
          {label}
        </label>

        <textarea
          name={name}
          rows={6}
          placeholder={placeholder}
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-5
            py-4
            text-white
            placeholder:text-zinc-500
            backdrop-blur-xl
            outline-none
            transition-all
            duration-300
            focus:border-orange-500
            focus:ring-4
            focus:ring-orange-500/20
          "
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <label className="mb-3 block text-sm font-semibold uppercase tracking-wide text-zinc-300">
        {label}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-5
          py-4
          text-white
          placeholder:text-zinc-500
          backdrop-blur-xl
          outline-none
          transition-all
          duration-300
          focus:border-orange-500
          focus:ring-4
          focus:ring-orange-500/20
        "
      />
    </div>
  );
};

export default InputField;