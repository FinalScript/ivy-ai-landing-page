import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { CheckCircle2, Bell, List } from "lucide-react";

const FeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4, margin: "-50px 0px" });
  
  // Start the auto-rotation only when the section is in view
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isInView) {
      // Set initial feature only when section comes into view
      setActiveFeature(0);
      
      // Small delay before starting the rotation to ensure the components are visible first
      const timer = setTimeout(() => {
        interval = setInterval(() => {
          setActiveFeature((current) => current !== null ? (current + 1) % 3 : 0);
        }, 6000);
      }, 500);
      
      return () => {
        clearTimeout(timer);
        if (interval) clearInterval(interval);
      };
    }
    
    return () => {};
  }, [isInView]);

  // Progress bar animation duration (in milliseconds)
  const progressDuration = 6000;

  // Only render content when section is in view and activeFeature is set
  const showContent = isInView && activeFeature !== null;

  return (
    <section 
      ref={sectionRef}
      className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-72 h-72 md:w-96 md:h-96 bg-[#11ba82]/10 rounded-full blur-[80px] md:blur-[100px]"></div>
        <div className="absolute -bottom-40 -left-40 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-[80px] md:blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
          >
            Work <span className="text-[#11ba82]">Smarter</span>, Not Harder
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm xs:text-base sm:text-lg text-gray-700 max-w-xl sm:max-w-2xl mx-auto"
          >
            Ivy AI supercharges your academic productivity with intelligent features
            designed for students
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Feature selector (tabs) */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden border border-gray-200/60 scale-[0.9] sm:scale-95 md:scale-100 origin-top">
              {/* Feature 1: Priority Manager */}
              <motion.div
                className={`p-4 sm:p-6 border-l-4 cursor-pointer transition-all duration-300 ${
                  showContent && activeFeature === 0
                    ? "border-[#11ba82] bg-green-50/50"
                    : "border-transparent hover:bg-gray-50"
                }`}
                onClick={() => showContent && setActiveFeature(0)}
                whileHover={{ x: showContent && activeFeature === 0 ? 0 : 5 }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className={`mt-1 p-1.5 sm:p-2 rounded-full ${
                      showContent && activeFeature === 0
                        ? "bg-[#11ba82] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <List className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                      AI-Powered Priority Manager
                    </h3>
                    <p className="text-xs xs:text-sm sm:text-base text-gray-600">
                      Smart algorithms analyze your deadlines, course weights, and study
                      habits to create the perfect academic to-do list.
                    </p>
                    {showContent && activeFeature === 0 && (
                      <motion.div
                        className="h-1 bg-gray-200 rounded-full mt-3 sm:mt-4 overflow-hidden"
                        initial={{ width: "100%" }}
                        key={`progress-0-${activeFeature}`}
                      >
                        <motion.div
                          className="h-full bg-[#11ba82]"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: progressDuration / 1000,
                            ease: "linear",
                          }}
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Feature 2: Smart Notifications */}
              <motion.div
                className={`p-4 sm:p-6 border-l-4 cursor-pointer transition-all duration-300 ${
                  showContent && activeFeature === 1
                    ? "border-[#11ba82] bg-green-50/50"
                    : "border-transparent hover:bg-gray-50"
                }`}
                onClick={() => showContent && setActiveFeature(1)}
                whileHover={{ x: showContent && activeFeature === 1 ? 0 : 5 }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className={`mt-1 p-1.5 sm:p-2 rounded-full ${
                      showContent && activeFeature === 1
                        ? "bg-[#11ba82] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                      Smart Notifications
                    </h3>
                    <p className="text-xs xs:text-sm sm:text-base text-gray-600">
                      Get timely reminders tailored to each assignment's complexity
                      and your personal work style. No more cramming or missed deadlines.
                    </p>
                    {showContent && activeFeature === 1 && (
                      <motion.div
                        className="h-1 bg-gray-200 rounded-full mt-3 sm:mt-4 overflow-hidden"
                        initial={{ width: "100%" }}
                        key={`progress-1-${activeFeature}`}
                      >
                        <motion.div
                          className="h-full bg-[#11ba82]"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: progressDuration / 1000,
                            ease: "linear",
                          }}
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Feature 3: Grade Optimizer */}
              <motion.div
                className={`p-4 sm:p-6 border-l-4 cursor-pointer transition-all duration-300 ${
                  showContent && activeFeature === 2
                    ? "border-[#11ba82] bg-green-50/50"
                    : "border-transparent hover:bg-gray-50"
                }`}
                onClick={() => showContent && setActiveFeature(2)}
                whileHover={{ x: showContent && activeFeature === 2 ? 0 : 5 }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className={`mt-1 p-1.5 sm:p-2 rounded-full ${
                      showContent && activeFeature === 2
                        ? "bg-[#11ba82] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                      Grade Optimizer
                    </h3>
                    <p className="text-xs xs:text-sm sm:text-base text-gray-600">
                      Track your progress and see exactly what grades you need on
                      future assignments to reach your target GPA.
                    </p>
                    {showContent && activeFeature === 2 && (
                      <motion.div
                        className="h-1 bg-gray-200 rounded-full mt-3 sm:mt-4 overflow-hidden"
                        initial={{ width: "100%" }}
                        key={`progress-2-${activeFeature}`}
                      >
                        <motion.div
                          className="h-full bg-[#11ba82]"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: progressDuration / 1000,
                            ease: "linear",
                          }}
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Feature showcase area */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md mx-auto scale-[0.85] xs:scale-[0.9] sm:scale-95 md:scale-100 origin-top">
              {/* Priority Manager Card */}
              <AnimatePresence>
                {showContent && activeFeature === 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 100,
                    }}
                    className="absolute inset-0 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6 overflow-hidden"
                  >
                    <div className="mb-4 flex justify-between items-center">
                      <h3 className="text-base xs:text-lg sm:text-xl font-semibold">Today's Priorities</h3>
                      <div className="text-xs xs:text-sm text-[#11ba82] font-medium bg-green-50 px-2 py-1 rounded-full">
                        3 Tasks
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      {/* Task 1 */}
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-100"
                      >
                        <div className="flex justify-between mb-1.5 sm:mb-2">
                          <h4 className="text-xs xs:text-sm sm:text-base font-semibold text-blue-800">
                            CS 202 - Assignment 3
                          </h4>
                          <span className="text-[10px] xs:text-xs px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded font-medium">
                            High
                          </span>
                        </div>
                        <div className="flex justify-between text-[10px] xs:text-xs sm:text-sm">
                          <span className="text-blue-700">Due in 2 days</span>
                          <span className="text-blue-700">30% of grade</span>
                        </div>
                        <div className="mt-2 sm:mt-3 h-1.5 bg-blue-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "65%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-blue-600"
                          />
                        </div>
                      </motion.div>

                      {/* Task 2 */}
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-purple-50 p-3 sm:p-4 rounded-lg border border-purple-100"
                      >
                        <div className="flex justify-between mb-1.5 sm:mb-2">
                          <h4 className="text-xs xs:text-sm sm:text-base font-semibold text-purple-800">
                            MATH 201 - Study for Quiz
                          </h4>
                          <span className="text-[10px] xs:text-xs px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded font-medium">
                            Medium
                          </span>
                        </div>
                        <div className="flex justify-between text-[10px] xs:text-xs sm:text-sm">
                          <span className="text-purple-700">Tomorrow</span>
                          <span className="text-purple-700">15% of grade</span>
                        </div>
                        <div className="mt-2 sm:mt-3 h-1.5 bg-purple-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "30%" }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="h-full bg-purple-600"
                          />
                        </div>
                      </motion.div>

                      {/* Task 3 */}
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-100"
                      >
                        <div className="flex justify-between mb-1.5 sm:mb-2">
                          <h4 className="text-xs xs:text-sm sm:text-base font-semibold text-green-800">
                            PSYC 101 - Reading
                          </h4>
                          <span className="text-[10px] xs:text-xs px-1.5 py-0.5 bg-green-100 text-green-700 rounded font-medium">
                            Low
                          </span>
                        </div>
                        <div className="flex justify-between text-[10px] xs:text-xs sm:text-sm">
                          <span className="text-green-700">Friday</span>
                          <span className="text-green-700">5% of grade</span>
                        </div>
                        <div className="mt-2 sm:mt-3 h-1.5 bg-green-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "10%" }}
                            transition={{ duration: 1, delay: 0.9 }}
                            className="h-full bg-green-600"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Smart Notifications Card */}
              <AnimatePresence>
                {showContent && activeFeature === 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 100,
                    }}
                    className="absolute inset-0 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6 overflow-hidden rotate-2"
                    whileHover={{ rotate: 0 }}
                  >
                    <div className="mb-4 flex justify-between items-center">
                      <h3 className="text-base xs:text-lg sm:text-xl font-semibold">Your Notifications</h3>
                      <div className="text-xs xs:text-sm text-orange-600 font-medium bg-orange-50 px-2 py-1 rounded-full">
                        New: 2
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      {/* Notification 1 */}
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-100 flex items-start gap-3"
                      >
                        <div className="bg-blue-100 rounded-full p-1.5 sm:p-2 flex-shrink-0 mt-0.5">
                          <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-xs xs:text-sm sm:text-base font-semibold text-blue-800 mb-0.5 sm:mb-1">
                            CS 202 Assignment Due Soon
                          </h4>
                          <p className="text-[10px] xs:text-xs sm:text-sm text-blue-700">
                            Your assignment is due in 2 days. You've completed approximately 65%.
                            Estimated time to finish: 3 hours.
                          </p>
                          <div className="mt-1.5 sm:mt-2 text-[10px] xs:text-xs text-blue-900 font-medium">
                            2 hours ago
                          </div>
                        </div>
                      </motion.div>

                      {/* Notification 2 */}
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-purple-50 p-3 sm:p-4 rounded-lg border border-purple-100 flex items-start gap-3"
                      >
                        <div className="bg-purple-100 rounded-full p-1.5 sm:p-2 flex-shrink-0 mt-0.5">
                          <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="text-xs xs:text-sm sm:text-base font-semibold text-purple-800 mb-0.5 sm:mb-1">
                            MATH 201 Quiz Tomorrow
                          </h4>
                          <p className="text-[10px] xs:text-xs sm:text-sm text-purple-700">
                            Your quiz is scheduled for tomorrow at 11:00 AM. Based on previous
                            quizzes, we recommend studying Chapters 5-7 with focus on
                            integration techniques.
                          </p>
                          <div className="mt-1.5 sm:mt-2 text-[10px] xs:text-xs text-purple-900 font-medium">
                            5 hours ago
                          </div>
                        </div>
                      </motion.div>

                      {/* Notification 3 */}
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200 flex items-start gap-3"
                      >
                        <div className="bg-gray-100 rounded-full p-1.5 sm:p-2 flex-shrink-0 mt-0.5">
                          <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
                        </div>
                        <div>
                          <h4 className="text-xs xs:text-sm sm:text-base font-semibold text-gray-800 mb-0.5 sm:mb-1">
                            Weekly Summary
                          </h4>
                          <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600">
                            You completed 8/10 tasks this week. Your productivity increased by
                            15% compared to last week. Great job keeping up with your schedule!
                          </p>
                          <div className="mt-1.5 sm:mt-2 text-[10px] xs:text-xs text-gray-700 font-medium">
                            Yesterday
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Grade Optimizer Card */}
              <AnimatePresence>
                {showContent && activeFeature === 2 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 100,
                    }}
                    className="absolute inset-0 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6 overflow-hidden"
                  >
                    <div className="mb-4 flex justify-between items-center">
                      <h3 className="text-base xs:text-lg sm:text-xl font-semibold">Grade Projection</h3>
                      <div className="text-xs xs:text-sm text-[#11ba82] font-medium bg-green-50 px-2 py-1 rounded-full">
                        CS 202
                      </div>
                    </div>

                    <div className="space-y-4 sm:space-y-5">
                      {/* Current Grade */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 p-3 sm:p-4 rounded-lg"
                      >
                        <div className="flex justify-between mb-1 sm:mb-2">
                          <h4 className="text-xs xs:text-sm sm:text-base font-semibold text-gray-800">
                            Current Grade
                          </h4>
                          <span className="text-base xs:text-lg sm:text-xl font-bold text-green-600">
                            88%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "88%" }}
                            transition={{ duration: 1.5, delay: 0.3 }}
                            className="h-full bg-green-500"
                          />
                        </div>
                        <div className="mt-1 sm:mt-2 flex justify-between items-center text-[10px] xs:text-xs sm:text-sm text-gray-600">
                          <span>0%</span>
                          <span>Target: 90%</span>
                          <span>100%</span>
                        </div>
                      </motion.div>

                      {/* Upcoming Assignments */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-100"
                      >
                        <h4 className="text-xs xs:text-sm sm:text-base font-semibold text-blue-800 mb-2 sm:mb-3">
                          Upcoming Assignments
                        </h4>
                        
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] xs:text-xs sm:text-sm text-blue-800">
                              Assignment 3 (30%)
                            </span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-semibold text-blue-800">
                              Need: 85%+
                            </span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] xs:text-xs sm:text-sm text-blue-800">
                              Final Project (40%)
                            </span>
                            <span className="text-[10px] xs:text-xs sm:text-sm font-semibold text-blue-800">
                              Need: 92%+
                            </span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Recommendation */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-100"
                      >
                        <h4 className="text-xs xs:text-sm sm:text-base font-semibold text-green-800 mb-1.5 sm:mb-2">
                          AI Recommendation
                        </h4>
                        <p className="text-[10px] xs:text-xs sm:text-sm text-green-700">
                          To achieve your target grade of A-, focus on the final project. 
                          Based on your performance in similar assignments, you'll 
                          need approximately 15 hours of focused work on the project.
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 