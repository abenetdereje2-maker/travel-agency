import { useState, useEffect } from "react";

import destinations from "../../data/destinations";

import DestinationCard from "./DestinationCard";
import EmptyState from "./EmptyState";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 6;

const DestinationGrid = ({
  search,
  continent,
  maxPrice,
  minRating,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, continent, maxPrice, minRating]);

  // Filter destinations
  const filtered = destinations.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase());

    const matchesContinent =
      continent === "All" || item.continent === continent;

    const matchesPrice = item.price <= maxPrice;

    const matchesRating = item.rating >= minRating;

    return (
      matchesSearch &&
      matchesContinent &&
      matchesPrice &&
      matchesRating
    );
  });

  // Total pages
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  // Destinations for current page
  const paginatedDestinations = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Empty state
  if (filtered.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {paginatedDestinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
};

export default DestinationGrid;