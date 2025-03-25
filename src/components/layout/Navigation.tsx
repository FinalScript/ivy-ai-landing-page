import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import React from "react";

interface NavigationProps {
  scrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 backdrop-blur-md z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-lg font-bold flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className={`text-xl ${scrolled ? 'text-[#11ba82]' : 'text-[#11ba82]'}`}>Ivy</span>
              <span className={`${scrolled ? 'text-[#171919]' : 'text-[#171919]'}`}>AI</span>
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a
              href="#features"
              className={`text-[15px] hover:text-[#11ba82] transition-colors font-semibold ${
                scrolled ? 'text-gray-600' : 'text-[#171919]'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Features
            </motion.a>
            <motion.a
              href="#how-it-works"
              className={`text-[15px] hover:text-[#11ba82] transition-colors font-semibold ${
                scrolled ? 'text-gray-600' : 'text-[#171919]'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              How It Works
            </motion.a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/"
                className={`
                  px-5 py-2 rounded-full text-[15px] font-semibold transition-all duration-300
                  ${scrolled 
                    ? 'bg-[#11ba82] text-[#fffffa] shadow-lg hover:shadow-xl hover:shadow-[#11ba82]/20' 
                    : 'bg-[#11ba82] text-[#fffffa] shadow-lg hover:shadow-xl hover:shadow-[#11ba82]/20'
                  }
                `}
              >
                Try Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 