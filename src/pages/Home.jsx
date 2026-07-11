import Hero from "../components/home/Hero";
import PopularDestinations from "../components/home/PopularDestinations";
import FeaturedTours from "../components/home/FeaturedTours";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Statistics from "../components/home/Statistics";
import TrustedPartners from "../components/home/TrustedPartners";
import Newsletter from "../components/home/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <FeaturedTours />
      <WhyChooseUs />
        <Statistics />
         <TrustedPartners />
        
    </>
  );
};

export default Home;