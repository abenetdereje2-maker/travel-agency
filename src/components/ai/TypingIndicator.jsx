const TypingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="rounded-2xl rounded-bl-md bg-zinc-800 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-orange-500"></span>
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-orange-500"
            style={{ animationDelay: "0.15s" }}
          ></span>
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-orange-500"
            style={{ animationDelay: "0.3s" }}
          ></span>
        </div>

        <p className="mt-2 text-xs text-zinc-400">
          Luxe Travel AI is thinking...
        </p>
      </div>
    </div>
  );
};

export default TypingIndicator;