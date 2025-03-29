import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Bell, List, ArrowRight, Calculator } from "lucide-react";

interface FeaturesSectionProps {
  onExploreClick?: () => void;
}

// Define interfaces for our data structures
interface Assignment {
  name: string;
  weight: number;
  completed: boolean;
}

interface GradeData {
  targetGrade: number;
  currentGrade: number;
  completedWeight: number;
  assignments: Assignment[];
}

interface CalculationResult {
  averageNeeded: number;
  assignmentNeeds: Record<string, number>;
  message: string | null;
}

// Sample grade data that would normally come from a real student's data
const sampleGradeData: GradeData = {
  targetGrade: 90, // Target grade of 90%
  currentGrade: 80, // Current grade of 80%
  completedWeight: 0.70, // 70% of total grade has been completed
  assignments: [
    { name: "Assignment 3", weight: 0.10, completed: false },
    { name: "Final Project", weight: 0.20, completed: false },
    // Total future weight: 0.30 (30%)
  ]
};

// Simplified calculation that returns hardcoded values as specified
const calculateNeededScores = (): CalculationResult => {
  // Hardcoded average needed for display purposes
  const averageNeeded = 67; // This is an approximate average of 100% and 50%
  
  // Hardcoded message
  const message = null; // No message needed since we're hardcoding the values
  
  // Hardcoded assignment needs according to user specification
  const assignmentNeeds: Record<string, number> = {
    "Assignment 3": 100, // 100% needed on Assignment 3
    "Final Project": 50   // 50% needed on Final Project
  };
  
  return {
    averageNeeded,
    assignmentNeeds,
    message
  };
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onExploreClick }) => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [animationKey, setAnimationKey] = useState(0); // Add state to force re-render of progress bars
  const sectionRef = useRef(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1, margin: "0px 0px -200px 0px" });
  
  // Only render content when section is in view and activeFeature is set
  const showContent = isInView && activeFeature !== null;
  
  // Function to clear the current interval
  const clearCurrentInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);
  
  // Function to start a new rotation interval
  const startNewInterval = useCallback(() => {
    clearCurrentInterval();
    
    intervalRef.current = setInterval(() => {
      setActiveFeature((current) => {
        const next = current !== null ? (current + 1) % 3 : 0;
        setAnimationKey(prevKey => prevKey + 1); // Increment animation key to force re-render
        return next;
      });
    }, progressDuration);
  }, [clearCurrentInterval]);
  
  // Handle manual feature selection
  const handleFeatureSelect = useCallback((index: number) => {
    if (!showContent || activeFeature === index) return;
    
    setActiveFeature(index);
    setAnimationKey(prevKey => prevKey + 1); // Force re-render of progress bar
    
    // Restart the interval timer
    clearCurrentInterval();
    startNewInterval();
  }, [showContent, activeFeature, clearCurrentInterval, startNewInterval]);
  
  // Start the auto-rotation only when the section is in view
  useEffect(() => {
    if (isInView) {
      // Set initial feature only when section comes into view
      setActiveFeature(0);
      
      // Small delay before starting the rotation to ensure the components are visible first
      const timer = setTimeout(() => {
        startNewInterval();
      }, 500);
      
      return () => {
        clearTimeout(timer);
        clearCurrentInterval();
      };
    }
    
    return () => {
      clearCurrentInterval();
    };
  }, [isInView, clearCurrentInterval, startNewInterval]);
  
  // Clean up on component unmount
  useEffect(() => {
    return () => {
      clearCurrentInterval();
    };
  }, [clearCurrentInterval]);

  // Progress bar animation duration (in milliseconds)
  const progressDuration = 7000;
  
  // Calculate needed scores using our utility function
  const { averageNeeded, assignmentNeeds, message } = calculateNeededScores();

  return (
    <section 
      id="features"
      ref={sectionRef}
      className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-50">
        <img
          src="/ivy_lecturehall.jpg"
          alt="Lecture hall background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* White gradient fade at the top */}
      <div className="absolute inset-x-0 top-0 h-64 z-1 bg-gradient-to-b from-white via-white via-95% to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-10">
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
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl overflow-hidden border border-gray-100 scale-[0.9] sm:scale-95 md:scale-100 origin-top">
              {/* Feature 1: Priority Manager */}
              <motion.div
                className={`p-4 sm:p-6 border-l-4 cursor-pointer transition-all duration-300 ${
                  showContent && activeFeature === 0
                    ? "border-[#11ba82] bg-green-50/50"
                    : "border-transparent hover:bg-gray-50"
                }`}
                onClick={() => handleFeatureSelect(0)}
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
                        key={`progress-0-${animationKey}`}
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
                onClick={() => handleFeatureSelect(1)}
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
                        key={`progress-1-${animationKey}`}
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
                onClick={() => handleFeatureSelect(2)}
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
                    <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
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
                        key={`progress-2-${animationKey}`}
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
                            80%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "80%" }}
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
                          Scores Needed for Target ({sampleGradeData.targetGrade}%)
                        </h4>
                        
                        {/* Show message if target is unreachable or already achieved */}
                        {message && (
                          <div className="mb-2 p-1.5 bg-yellow-100 rounded text-[10px] xs:text-xs sm:text-sm text-yellow-800">
                            {message}
                          </div>
                        )}
                        
                        {/* Show average needed across all assignments */}
                        <div className="mb-3 p-2 bg-blue-100 rounded">
                          <p className="text-xs xs:text-sm text-center font-semibold text-blue-900">
                            Need to average ~{Math.round(averageNeeded)}% on remaining assignments
                          </p>
                        </div>
                        
                        <div className="space-y-2 sm:space-y-3">
                          {sampleGradeData.assignments.map((assignment, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span className="text-[10px] xs:text-xs sm:text-sm text-blue-800">
                                {assignment.name} ({(assignment.weight * 100)}% of grade)
                              </span>
                              <span className="text-[10px] xs:text-xs sm:text-sm font-semibold text-blue-800">
                                Need: {Math.round(assignmentNeeds[assignment.name])}%
                              </span>
                            </div>
                          ))}
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
                          To reach your target grade of {sampleGradeData.targetGrade}% from your current {sampleGradeData.currentGrade}%, 
                          you should aim for 100% on Assignment 3 and at least 50% on the Final Project.
                          This strategy prioritizes the smaller assignment first, which is a practical approach to grade improvement.
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Add 'Try For Free' button at the bottom of the section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-10 sm:mt-12 md:mt-16"
        >
          <button
            onClick={onExploreClick}
            className="bg-[#11ba82] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-[#0ea371] transition-all duration-300 shadow-md flex items-center gap-2 mx-auto"
          >
            Try For Free
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection; 