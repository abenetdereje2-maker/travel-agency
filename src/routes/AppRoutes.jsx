import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import DestinationDetails from "../pages/DestinationDetails";
import Tours from "../pages/Tours";
import Hotels from "../pages/Hotels";
//import Booking from "../pages/Booking";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/destination/:id" element={<DestinationDetails  />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/hotels" element={<Hotels />} />
     
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route
  path="/destinations"
  element={<Destinations />}
/>
<Route
  path="/destinations/:id"
  element={<DestinationDetails />}
/>
    </Routes>
    
  );
};

export default AppRoutes;