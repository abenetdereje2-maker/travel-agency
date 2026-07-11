import { FaStar, FaUsers, FaClock, FaPlaneDeparture } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you'll link to details

const TourCard = ({ tour }) => {
  // Pre-calculate discount percentage if available
  const discountPercent = tour.oldPrice
    ? Math.round(((tour.oldPrice - tour.price) / tour.oldPrice) * 100)
    : null;

  return (
    // 1. Card Container: Refined border radius and elevated shadow
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-orange-500/10">
      
      {/* 2. "Best Seller" Badge: New dynamic badge */}
      {tour.rating >= 4.9 && (
        <div className="absolute top-6 left-6 z-20 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 animate-pulse">
          <FaStar size={12}/> Best Seller
        </div>
      )}

      {/* 3. Image Container: Taller image with gradient overlay */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
        <img
          src={tour.image}
          alt={tour.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        {/* 4. Discount Tag: Styled as a percent off tag */}
        {discountPercent && (
           <span className="absolute top-6 right-6 z-20 rounded-xl bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-lg rotate-1">
             -{discountPercent}%
           </span>
        )}
      </div>

      {/* 5. Content: Cleanly structured with refined typography */}
      <div className="p-7 relative z-10 -mt-8">

        {/* Category as a subtle tag */}
        <span className="inline-block mb-3 rounded-md bg-zinc-800/80 px-3 py-1 text-xs text-zinc-300 backdrop-blur-sm tracking-wide font-medium">
          {tour.category.toUpperCase()}
        </span>

        <h3 className="text-3xl font-extrabold text-white leading-tight tracking-tight">
          {tour.title}
        </h3>

        {/* 6. Info Row: Clearer icon/text alignment */}
        <div className="mt-6 grid grid-cols-2 gap-6 text-white border-t border-white/5 pt-6">
          
          {/* Duration */}
          <div className="flex items-center gap-4">
            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
              <FaClock className="text-orange-500 size-6" />
            </div>
            <div>
               <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Duration</p>
               <p className="font-semibold text-lg">{tour.duration}</p>
            </div>
          </div>

          {/* Guests */}
           <div className="flex items-center gap-4">
            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
              <FaUsers className="text-orange-500 size-6" />
            </div>
            <div>
               <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Max Guests</p>
               <p className="font-semibold text-lg">{tour.guests}</p>
            </div>
          </div>

        </div>

        {/* 7. Rating and Price Footer: Updated layout */}
        <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/5 pt-6">
          
          {/* Rating */}
          <div className="flex items-center gap-2 text-white bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <FaStar className="text-yellow-400 size-5" />
            <span className="font-bold text-lg">{tour.rating}</span>
            <span className="text-zinc-500 text-sm">/ 5.0</span>
          </div>

          {/* Price Section */}
          <div className="text-right">
            {tour.oldPrice && (
               <p className="text-zinc-600 line-through text-sm font-medium">
                 ${tour.oldPrice}
               </p>
            )}
            <h2 className="text-5xl font-extrabold text-orange-400 tracking-tighter leading-none">
              <span className="text-xl font-semibold text-orange-400/70 align-super">$</span>
              {tour.price}
            </h2>
             <p className="text-zinc-600 text-xs mt-0.5">per person</p>
          </div>

        </div>

        {/* 8. Book Now Button: Larger full-width button */}
        <Link
          to={`/tour/${tour.id}`}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-orange-500 px-8 py-5 font-bold text-white text-lg transition-all duration-300 hover:bg-white hover:text-orange-600 shadow-lg shadow-orange-500/20 hover:scale-[1.02]"
        >
          <span>Book This Trip</span>
          <FaPlaneDeparture className="group-hover:translate-x-1 transition-transform" />
        </Link>

      </div>
    </div>
  );
};

export default TourCard;