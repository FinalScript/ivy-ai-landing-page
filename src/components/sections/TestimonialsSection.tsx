import React from "react";
import { motion } from "framer-motion";

const TestimonialsSection: React.FC = () => {
  return (
    <div className="py-24 bg-white overflow-hidden relative">
      {/* Background decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#11ba82]/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[#11ba82] font-semibold text-sm tracking-wider uppercase mb-3 block"
          >
            Student Experiences
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#171919] mb-6"
          >
            What Our Users <span className="text-[#11ba82]">Say</span>
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#f8f9fc] p-8 rounded-2xl border border-gray-100 shadow-md relative"
          >
            <div className="absolute -top-5 left-8 text-[#11ba82] text-6xl opacity-20">"</div>
            <p className="text-[#171919]/80 italic mb-6 relative z-10">
              "Ivy AI saved me from missing multiple assignment deadlines. The automatic extraction from my syllabus was so accurate!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">JS</span>
              </div>
              <div>
                <h4 className="text-[#171919] font-semibold">Jamie Smith</h4>
                <p className="text-[#171919]/60 text-sm">Computer Science Major</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#f8f9fc] p-8 rounded-2xl border border-gray-100 shadow-md relative md:mt-8"
          >
            <div className="absolute -top-5 left-8 text-[#11ba82] text-6xl opacity-20">"</div>
            <p className="text-[#171919]/80 italic mb-6 relative z-10">
              "As someone with ADHD, keeping track of all my classes was impossible before Ivy AI. Now everything is organized in one place!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">AR</span>
              </div>
              <div>
                <h4 className="text-[#171919] font-semibold">Alex Rodriguez</h4>
                <p className="text-[#171919]/60 text-sm">Biology Major</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#f8f9fc] p-8 rounded-2xl border border-gray-100 shadow-md relative"
          >
            <div className="absolute -top-5 left-8 text-[#11ba82] text-6xl opacity-20">"</div>
            <p className="text-[#171919]/80 italic mb-6 relative z-10">
              "The reminders are perfectly timed. Ivy AI seems to know exactly when I need to start working on assignments to finish them on time."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">KT</span>
              </div>
              <div>
                <h4 className="text-[#171919] font-semibold">Kelly Thompson</h4>
                <p className="text-[#171919]/60 text-sm">Psychology Major</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection; 