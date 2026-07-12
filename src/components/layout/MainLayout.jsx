import Navbar from "./Navbar";
import Footer from "./Footer";
import AIChat from "../ai/AIChat";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      {/* AI Assistant */}
      <AIChat />
    </>
  );
};

export default MainLayout;