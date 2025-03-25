import React from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8f9fc] text-[#171919] py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4 col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#11ba82]">Ivy</span>
              <span className="text-2xl font-bold text-[#171919]">AI</span>
            </Link>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              Empowering students with AI-driven organization tools for
              academic success. Upload your syllabus and let us handle the rest.
            </p>
            <div className="flex space-x-4 pt-2">
              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="#" 
                className="w-9 h-9 rounded-full bg-[#11ba82]/10 flex items-center justify-center text-[#11ba82]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 6C21.1 6.5 20.1 6.9 19 7.1C20.1 6.5 21 5.5 21.4 4.2C20.4 4.8 19.3 5.3 18.1 5.5C17.1 4.5 15.7 3.9 14 3.9C10.9 3.9 8.3 6.5 8.3 9.6C8.3 10.1 8.4 10.5 8.5 10.9C3.9 10.7 0.7 8.4 -1.3 5C-1.9 5.9 -2.2 6.9 -2.2 8C-2.2 10 -1.2 11.7 0.3 12.7C-0.6 12.6 -1.4 12.4 -2.1 12V12.1C-2.1 14.8 -0.2 17 2.3 17.5C2.8 17.6 3.4 17.7 4 17.7C4.4 17.7 4.9 17.6 5.3 17.5C4.5 19.7 2.5 21.2 0.1 21.3C1.7 22.7 3.7 23.5 5.9 23.5C14 23.5 18.5 17.8 18.5 12.9V12.3C19.6 11.6 20.4 10.8 21.1 9.8L22 6Z" fill="currentColor"/>
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="#" 
                className="w-9 h-9 rounded-full bg-[#11ba82]/10 flex items-center justify-center text-[#11ba82]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C15.4 8 15 8.4 15 9C15 9.6 15.4 10 16 10C16.6 10 17 9.6 17 9C17 8.4 16.6 8 16 8ZM12 10C9.8 10 8 11.8 8 14C8 16.2 9.8 18 12 18C14.2 18 16 16.2 16 14C16 11.8 14.2 10 12 10ZM12 16C10.9 16 10 15.1 10 14C10 12.9 10.9 12 12 12C13.1 12 14 12.9 14 14C14 15.1 13.1 16 12 16ZM12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM19 17.5C19 17.8 18.8 18 18.5 18H5.5C5.2 18 5 17.8 5 17.5V6.5C5 6.2 5.2 6 5.5 6H18.5C18.8 6 19 6.2 19 6.5V17.5Z" fill="currentColor"/>
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="#" 
                className="w-9 h-9 rounded-full bg-[#11ba82]/10 flex items-center justify-center text-[#11ba82]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" fill="currentColor"/>
                </svg>
              </motion.a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#171919]">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <motion.a
                  whileHover={{ x: 3 }}
                  href="#features"
                  className="text-gray-600 hover:text-[#11ba82] transition-colors inline-block"
                >
                  Features
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 3 }}
                  href="#how-it-works"
                  className="text-gray-600 hover:text-[#11ba82] transition-colors inline-block"
                >
                  How It Works
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 3 }}
                  href="#"
                  className="text-gray-600 hover:text-[#11ba82] transition-colors inline-block"
                >
                  Early Access
                </motion.a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#171919]">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <motion.a
                  whileHover={{ x: 3 }}
                  href="#"
                  className="text-gray-600 hover:text-[#11ba82] transition-colors inline-block"
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 3 }}
                  href="#"
                  className="text-gray-600 hover:text-[#11ba82] transition-colors inline-block"
                >
                  Contact
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 3 }}
                  href="#"
                  className="text-gray-600 hover:text-[#11ba82] transition-colors inline-block"
                >
                  Privacy Policy
                </motion.a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Ivy AI. All rights reserved.
          </p>
          <p className="mt-4 md:mt-0">
            Made with 💚 for students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 