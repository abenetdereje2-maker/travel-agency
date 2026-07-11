import { useParams } from "react-router-dom";
import HeroBanner from "../components/destinationDetails/HeroBanner";
import BookingCard from "../components/destinationDetails/BookingCard";
import destinationDetails from "../data/destinationDetails";
import QuickFacts from "../components/destinationDetails/QuickFacts";
const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinationDetails.find((dest) => dest.id === Number(id));

  if (!destination) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <h1 className="text-4xl font-bold text-white">Destination Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Premium Hero Banner */}
      <HeroBanner destination={destination} />

      {/* Main Content Container */}
      <section className="relative z-20 pb-24 -mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3 items-start">
            
            {/* LEFT SIDE: Content */}
            <div className="space-y-8 lg:col-span-2">
              <br/>
              {/* About Section */}
              <div className="rounded-[2rem] border border-white/10 bg-zinc-900/50 p-10 backdrop-blur-xl">
                <h2 className="mb-6 text-3xl font-bold text-white">About This Destination</h2>
                <p className="text-lg leading-relaxed text-zinc-400">
                  {destination.description}
                </p>
              </div><br/>
              <QuickFacts destination={destination} />

              {/* Refined Quick Facts Grid */}<br/>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "📍", label: "Location", val: destination.country },
                  { icon: "⭐", label: "Rating", val: `${destination.rating}/5` },
                  { icon: "⏱️", label: "Duration", val: destination.duration },
                  { icon: "👥", label: "Group Size", val: "2 - 12 People" }
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/5 bg-zinc-900/40 p-6 hover:bg-zinc-800 transition-colors">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">{item.label}</p>
                    <p className="text-lg font-bold text-white mt-1">{item.val}</p>
                  </div>
                ))}
              </div>
            </div><br/>
    
            {/* RIGHT SIDE: Sticky Booking Card */}
            <aside className="lg:sticky lg:top-28">
              <BookingCard destination={destination} />
            </aside>

          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetails;