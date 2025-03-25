import React from "react";
import { motion } from "framer-motion";
import { FileText, Bell, Calendar, AlertCircle, GraduationCap } from "lucide-react";

interface FeaturesSectionProps {
  onExploreClick: () => void;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onExploreClick }) => {
  return (
    <div id="features" className="py-24 bg-[#f8f9fc] scroll-mt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[#11ba82] font-semibold text-sm tracking-wider uppercase mb-3 block"
          >
            Key Features
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#171919] mb-6"
          >
            Why Students <span className="text-[#11ba82]">Love</span> Ivy AI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-lg text-[#171919]/70 mb-12"
          >
            Our powerful tools are designed specifically for academic success, helping you manage your time effectively.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Feature Cards */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex gap-6 items-start"
            >
              <div className="bg-[#eff8f5] p-4 rounded-xl">
                <FileText className="w-8 h-8 text-[#11ba82]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#171919] mb-2">
                  Intelligent Document Analysis
                </h3>
                <p className="text-[#171919]/70 leading-relaxed">
                  Our AI understands the structure of academic documents, extracting deadlines, requirements, and schedules with remarkable accuracy.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex gap-6 items-start"
            >
              <div className="bg-[#eff8f5] p-4 rounded-xl">
                <Bell className="w-8 h-8 text-[#11ba82]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#171919] mb-2">
                  Adaptive Notifications
                </h3>
                <p className="text-[#171919]/70 leading-relaxed">
                  Personalized reminders based on your study habits and task urgency—never miss another deadline again.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex gap-6 items-start"
            >
              <div className="bg-[#eff8f5] p-4 rounded-xl">
                <Calendar className="w-8 h-8 text-[#11ba82]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#171919] mb-2">
                  Cross-Platform Integration
                </h3>
                <p className="text-[#171919]/70 leading-relaxed">
                  Sync with all major calendar services—keep your schedule updated across all your devices automatically.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Right Side - Feature Showcase */}
          <div className="relative">
            {/* Priority Manager Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 relative z-10"
            >
              {/* Header */}
              <div className="p-3 flex items-center bg-gray-50 rounded-lg mb-4">
                <div className="flex items-center space-x-1.5">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="ml-4 text-sm font-medium text-gray-500">Ivy AI Priority Manager</div>
              </div>
              
              {/* Task Items */}
              <div className="space-y-3">
                {/* Physics Assignment */}
                <div className="flex items-center justify-between bg-[#11ba82]/5 p-3 rounded-lg border border-[#11ba82]/10 hover:shadow-md hover:-translate-y-1 transition-all duration-150 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#11ba82]/10 rounded-full">
                      <FileText className="w-5 h-5 text-[#11ba82]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Physics Assignment</h4>
                      <p className="text-xs text-gray-500">Due tomorrow • 15% of grade</p>
                    </div>
                  </div>
                  <div className="text-xs bg-[#11ba82] text-white px-2.5 py-1 rounded-full">
                    High Priority
                  </div>
                </div>
                
                {/* CS202 Lecture */}
                <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg border border-blue-100 hover:shadow-md hover:-translate-y-1 transition-all duration-150 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">CS202 Lecture</h4>
                      <p className="text-xs text-gray-500">Today, 9:00 AM • Room 302</p>
                    </div>
                  </div>
                  <div className="text-xs bg-blue-500 text-white px-2.5 py-1 rounded-full">
                    Upcoming
                  </div>
                </div>
                
                {/* Midterm Exam */}
                <div className="flex items-center justify-between bg-amber-50 p-3 rounded-lg border border-amber-100 hover:shadow-md hover:-translate-y-1 transition-all duration-150 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-100 rounded-full">
                      <AlertCircle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Midterm Exam</h4>
                      <p className="text-xs text-gray-500">In 5 days • Covers Ch. 1-5</p>
                    </div>
                  </div>
                  <div className="text-xs bg-amber-500 text-white px-2.5 py-1 rounded-full">
                    Study Now
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-6">
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "30%" }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-[#11ba82] rounded-full"
                  ></motion.div>
                </div>
                <p className="mt-2 text-xs text-right text-gray-500">85% of semester complete</p>
              </div>
            </motion.div>
            
            {/* Notification Alert with Tailwind rotation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 right-8 bg-white rounded-2xl px-5 py-4 shadow-md border border-gray-100 max-w-[220px] !rotate-2 hover:!rotate-0 hover:!-translate-y-1 hover:!shadow-lg transition-all duration-300 delay-100 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-red-100 rounded-full">
                  <Bell className="w-4 h-4 text-red-600" />
                </div>
                <div className="text-sm font-semibold text-gray-900">Smart Alert</div>
              </div>
              <p className="text-xs text-gray-700">
                Your Physics assignment is due tomorrow. Based on your schedule, we recommend starting now.
              </p>
            </motion.div>
            
            {/* Simple shadow */}
            <div className="absolute -bottom-4 left-1/4 w-1/2 h-4 bg-black/5 blur-xl rounded-full"></div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <button 
              className="bg-[#11ba82] text-white px-6 py-3 rounded-full text-[16px] font-semibold hover:bg-[#0ea371] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#11ba82]/20 transform hover:-translate-y-1"
              onClick={onExploreClick}
            >
              Explore All Features
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; 