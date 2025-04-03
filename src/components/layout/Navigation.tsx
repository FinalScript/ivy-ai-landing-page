import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import React from "react";

interface NavigationProps {
  scrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ scrolled }) => {
  // Simple scroll function with fixed offset
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.hash.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Get the top of the element relative to the document
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        
        // Use a fixed offset from the top (100px)
        const fixedOffset = 100;
        
        // Scroll to the position with smooth behavior
        window.scrollTo({
          top: targetPosition - fixedOffset,
          behavior: "smooth"
        });
        
        // Update the URL hash
        history.pushState(null, "", `#${targetId}`);
      }
    }
  };

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
              <img src="/ivy_logo.png" alt="Ivy AI Logo" className="h-24 w-auto" />
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a
              href="#features"
              onClick={scrollToSection}
              className={`text-[15px] hover:text-[#11ba82] transition-colors font-semibold ${
                scrolled ? 'text-gray-600' : 'text-[#171919]'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Features
            </motion.a>
            <motion.a
              href="#testimonials"
              onClick={scrollToSection}
              className={`text-[15px] hover:text-[#11ba82] transition-colors font-semibold ${
                scrolled ? 'text-gray-600' : 'text-[#171919]'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Testimonials
            </motion.a>
            <motion.a
              href="#how-it-works-title"
              onClick={scrollToSection}
              className={`text-[15px] hover:text-[#11ba82] transition-colors font-semibold ${
                scrolled ? 'text-gray-600' : 'text-[#171919]'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              How It Works
            </motion.a>
            <motion.a
              href="#pricing"
              onClick={scrollToSection}
              className={`text-[15px] hover:text-[#11ba82] transition-colors font-semibold ${
                scrolled ? 'text-gray-600' : 'text-[#171919]'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Pricing
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
                  px-5 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-300
                  ${scrolled 
                    ? 'bg-[#11ba82] text-[#fffffa] shadow-lg hover:shadow-xl hover:shadow-[#11ba82]/20' 
                    : 'bg-[#11ba82] text-[#fffffa] shadow-lg hover:shadow-xl hover:shadow-[#11ba82]/20'
                  }
                `}
              >
                Try For Free
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;