import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "react-feather"; // You can use any icons, or install react-feather for these
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true); // Scrolling down, hide navbar
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false); // Scrolling up, show navbar
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      className={`fixed w-full bg-white/80 backdrop-blur-sm z-50 px-4 py-3 shadow-sm transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isHidden ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Animated Logo */}
          <motion.img
            src={logo}
            alt="Babble Logo"
            className="w-30 h-10 object-contain"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Features", "About", "Contact Us"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-pink-500 transition-colors relative group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
            </motion.a>
          ))}
          <motion.button
            className="px-6 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            Join Us
          </motion.button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="text-gray-600" size={24} />
          ) : (
            <Menu className="text-gray-600" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-40 pt-20 px-4 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            {["Home", "Features", "About", "Contact Us"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-pink-500 py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              className="w-full px-6 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              Join Us
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
