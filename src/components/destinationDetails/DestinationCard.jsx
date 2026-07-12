import { Link } from "react-router-dom";

const DestinationCard = ({ destination }) => {
  return (
    <div className="mt-3 overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800 shadow-lg">
      <img
        src={destination.image}
        alt={destination.name}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold text-white">
          📍 {destination.name}
        </h3>

        <p className="mt-1 text-sm text-zinc-400">
          {destination.country}
        </p>

        <div className="mt-4 space-y-2 text-sm text-white">
          <p>⭐ {destination.rating}</p>
          <p>💰 ${destination.price}</p>
          <p>📅 {destination.duration}</p>
          <p>🌍 {destination.continent}</p>
        </div>

        <div className="mt-5 flex gap-3">
          <Link
            to={`/destinations/${destination.id}`}
            className="flex-1 rounded-xl bg-orange-500 py-2 text-center font-semibold text-white transition hover:bg-orange-600"
          >
            View Package
          </Link>

          <button
            className="flex-1 rounded-xl border border-orange-500 py-2 font-semibold text-orange-400 transition hover:bg-orange-500 hover:text-white"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;