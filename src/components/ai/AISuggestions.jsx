const suggestions = [
  {
    emoji: "🌴",
    text: "Best Honeymoon Destination",
  },
  {
    emoji: "👨‍👩‍👧",
    text: "Family Vacation",
  },
  {
    emoji: "💰",
    text: "Budget Trip",
  },
  {
    emoji: "🏖",
    text: "Beach Holiday",
  },
  {
    emoji: "🇫🇷",
    text: "Tell me about Paris",
  },
  {
    emoji: "🇯🇵",
    text: "Tell me about Tokyo",
  },
];

const AISuggestions = ({ onSelect }) => {
  return (
    <div className="px-4 pt-3">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {suggestions.map((item, index) => (
          <button
            key={index}
            onClick={() => onSelect(item.text)}
            className="whitespace-nowrap rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-white transition hover:border-orange-500 hover:bg-orange-500"
          >
            {item.emoji} {item.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AISuggestions;