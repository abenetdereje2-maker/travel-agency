import { FaGlobeAfrica, FaDollarSign, FaStar } from "react-icons/fa";
import PrimaryButton from "../common/PrimaryButton";

const continents = [
  "All",
  "Africa",
  "Europe",
  "Asia",
  "North America",
  "South America",
  "Oceania",
];

const ratings = [5, 4, 3, 2];

const FilterSidebar = ({
  continent,
  setContinent,
  maxPrice,
  setMaxPrice,
  minRating,
  setMinRating,
  resetFilters,
}) => {
  return (
    <aside className="sticky top-24 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <h2 className="mb-8 text-2xl font-bold text-white">
        Filters
      </h2>

      {/* Continent */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <FaGlobeAfrica className="text-orange-500" />
          <h3 className="font-semibold text-white">
            Continent
          </h3>
        </div>

        <div className="space-y-3">
          {continents.map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-center gap-3 text-zinc-300"
            >
              <input
                type="radio"
                name="continent"
                value={item}
                checked={continent === item}
                onChange={() => setContinent(item)}
                className="accent-orange-500"
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <FaDollarSign className="text-orange-500" />
          <h3 className="font-semibold text-white">
            Max Price
          </h3>
        </div>

        <input
          type="range"
          min="500"
          max="5000"
          step="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-orange-500"
        />

        <p className="mt-3 text-orange-500 font-semibold">
          ${maxPrice}
        </p>
      </div>

      {/* Rating */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <FaStar className="text-orange-500" />
          <h3 className="font-semibold text-white">
            Minimum Rating
          </h3>
        </div>

        <div className="space-y-3">
          {ratings.map((rating) => (
            <button
              key={rating}
              onClick={() => setMinRating(rating)}
              className={`flex w-full items-center gap-2 rounded-lg p-2 text-left transition ${
                minRating === rating
                  ? "bg-orange-500 text-white"
                  : "text-zinc-300 hover:bg-white/10"
              }`}
            >
              {"★".repeat(rating)}
              {"☆".repeat(5 - rating)}
            </button>
          ))}
        </div>
      </div>

      <PrimaryButton
        className="w-full"
        onClick={resetFilters}
      >
        Reset Filters
      </PrimaryButton>
    </aside>
  );
};

export default FilterSidebar;