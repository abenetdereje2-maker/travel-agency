import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Container from "../common/Container";

const Footer = () => {
  const footerLinks = [
    { title: "Company", links: [{ name: "About Us", to: "/about" }, { name: "Destinations", to: "/destinations" }, { name: "Tours", to: "/tours" }, { name: "Hotels", to: "/hotels" }] },
    { title: "Support", links: [{ name: "FAQ", to: "/faq" }, { name: "Contact", to: "/contact" }, { name: "Privacy Policy", to: "/privacy" }, { name: "Terms & Conditions", to: "/terms" }] },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
      <Container>
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              TravelPro
            </h2>
            <p className="mt-6 text-zinc-400 leading-relaxed max-w-sm">
              Crafting bespoke travel experiences. We turn your dream destinations into unforgettable realities with premium care.
            </p>
            <div className="mt-8 space-y-4 text-zinc-400">
              {[ { Icon: FaMapMarkerAlt, text: "Addis Ababa, Ethiopia" }, { Icon: FaPhoneAlt, text: "+251 900 000 000" }, { Icon: FaEnvelope, text: "info@travelpro.com" } ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-orange-500/20 transition-colors">
                    <item.Icon className="text-orange-500 text-sm" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h3 className="mb-6 font-semibold text-white tracking-wider uppercase text-sm">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.to} className="text-zinc-400 hover:text-orange-500 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div className="lg:col-span-4">
            <h3 className="mb-6 font-semibold text-white tracking-wider uppercase text-sm">Follow Us</h3>
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <button key={i} className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:border-orange-500 hover:text-orange-500 transition-all duration-300">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs gap-4">
          <p>© 2026 TravelPro. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-zinc-300">Privacy</Link>
            <Link to="/terms" className="hover:text-zinc-300">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;