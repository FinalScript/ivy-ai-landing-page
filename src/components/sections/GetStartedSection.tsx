import React from "react";
import { motion } from "framer-motion";

interface GetStartedSectionProps {
  onTryClick: () => void;
}

const GetStartedSection: React.FC<GetStartedSectionProps> = ({ onTryClick }) => {
  return (
    <div id="how-it-works" className="py-24 bg-gradient-to-b from-[#f8f9fc] to-white scroll-mt-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.015] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[#11ba82] font-semibold text-sm tracking-wider uppercase mb-3 block"
          >
            Start Now
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#171919] mb-6"
          >
            Ready To Get <span className="text-[#11ba82]">Organized</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-lg text-[#171919]/70 mb-8"
          >
            Join thousands of students who've transformed their academic experience with Ivy AI.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-12">
              <h3 className="text-2xl font-bold text-[#171919] mb-6">
                Get Started in Minutes
              </h3>
              <ul className="space-y-6">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#11ba82] text-white flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#171919] mb-1">Create a free account</h4>
                    <p className="text-[#171919]/70 text-sm">
                      Sign up with your email or Google account in under 30 seconds.
                    </p>
                  </div>
                </motion.li>
                
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#11ba82] text-white flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#171919] mb-1">Upload your course materials</h4>
                    <p className="text-[#171919]/70 text-sm">
                      Drag and drop your syllabi, class schedules, and assignment lists.
                    </p>
                  </div>
                </motion.li>
                
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#11ba82] text-white flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#171919] mb-1">Start using your smart calendar</h4>
                    <p className="text-[#171919]/70 text-sm">
                      Access your organized schedule from any device, anywhere.
                    </p>
                  </div>
                </motion.li>
              </ul>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <button
                  className="bg-[#11ba82] text-[#fffffa] px-6 py-3 rounded-full text-[16px] font-semibold hover:bg-[#0ea371] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#11ba82]/20 transform hover:-translate-y-1 w-full lg:w-auto"
                  onClick={onTryClick}
                >
                  Try Ivy AI For Free
                </button>
                <p className="text-[#171919]/60 text-sm mt-3">
                  No credit card required
                </p>
              </motion.div>
            </div>
            
            <div className="bg-[#f8f9fc] p-10 lg:p-0 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[#f8f9fc] bg-opacity-80 backdrop-blur-sm"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative z-10 p-6"
              >
                <img 
                  src="/ivy_bg.jpg" 
                  alt="Ivy AI Dashboard Preview" 
                  className="rounded-xl shadow-lg max-w-xs mx-auto"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStartedSection; 