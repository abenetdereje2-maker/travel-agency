import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineBars3BottomRight,
  HiOutlineXMark,
} from "react-icons/hi2";
import Logo from "./Logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/destinations", label: "Destinations" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 z-50 w-full py-6"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center rounded-full border border-white/10 bg-black/80 px-6 py-3 backdrop-blur-xl">

            {/* Logo */}
            <Link to="/">
              <Logo />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 font-medium"
                      : "text-white hover:text-orange-500 transition"
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Button */}
            <div className="flex justify-end lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-3xl text-white"
              >
                {menuOpen ? (
                  <HiOutlineXMark />
                ) : (
                  <HiOutlineBars3BottomRight />
                )}
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-black pt-32"
          >
            <nav className="flex flex-col items-center gap-8 text-2xl">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500"
                      : "text-white hover:text-orange-500"
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;