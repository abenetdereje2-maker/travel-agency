import { useState } from "react";

import DestinationHero from "../components/destinations/DestinationHero";
import FilterSidebar from "../components/destinations/FilterSidebar";
import DestinationGrid from "../components/destinations/DestinationGrid";
const Destinations = () => {
  const [search, setSearch] = useState("");
  const [continent, setContinent] = useState("All");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [minRating, setMinRating] = useState(0);

  const resetFilters = () => {
    setSearch("");
    setContinent("All");
    setMaxPrice(5000);
    setMinRating(0);
  };

  return (
    <>
      <DestinationHero
        search={search}
        setSearch={setSearch}
      />

      <section className="bg-black py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[300px_1fr]">
          <FilterSidebar
            continent={continent}
            setContinent={setContinent}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            minRating={minRating}
            setMinRating={setMinRating}
            resetFilters={resetFilters}
          />

          <DestinationGrid
  search={search}
  continent={continent}
  maxPrice={maxPrice}
  minRating={minRating}
/>
        </div>
      </section>
    </>
  );
};

export default Destinations;