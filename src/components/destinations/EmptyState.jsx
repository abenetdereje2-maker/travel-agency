const EmptyState = () => {
  return (
    <div className="rounded-3xl border border-dashed border-white/20 py-24 text-center">
      <h2 className="text-3xl font-bold text-white">
        No destinations found
      </h2>

      <p className="mt-4 text-zinc-400">
        Try changing your search or filters.
      </p>
    </div>
  );
};

export default EmptyState;