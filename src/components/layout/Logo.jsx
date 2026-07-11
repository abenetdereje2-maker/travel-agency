const Logo = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
        T
      </div>

      <div>
        <h2 className="text-xl font-bold text-white">
          Travel<span className="text-orange-500">Pro</span>
        </h2>

        <p className="text-xs text-zinc-400 -mt-1">
          Explore The World
        </p>
      </div>
    </div>
  );
};

export default Logo;