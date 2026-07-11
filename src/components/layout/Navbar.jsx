import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import Logo from "./Logo";

const Navbar = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/destinations", label: "Destinations" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 py-6"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid layout used to perfectly center the navigation */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center px-6 py-3 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl">
          
          {/* Logo (Left) */}
          <Link to="/" className="flex items-center justify-start">
            <Logo />
          </Link>

          {/* Navigation (Center) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-orange-500" : "text-white hover:text-orange-500"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Toggle (Right) */}
          <div className="flex justify-end lg:hidden">
            <button className="text-3xl text-white hover:text-orange-500 transition-colors">
              <HiOutlineBars3BottomRight />
            </button>
          </div>
          
          {/* Spacer for desktop layout balance */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;