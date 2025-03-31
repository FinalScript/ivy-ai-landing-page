import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bell,
  List,
  ArrowRight,
  Calculator,
  Check,
  Target,
  BarChart3,
  Sparkles, // For AI features
  BookOpen, // For Content
  Video,    // For Content
  FileText, // Added missing import
} from "lucide-react";

interface FeaturesSectionProps {
  onExploreClick?: () => void;
}

// Re-use the DashboardCard helper component
const DashboardCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-sm border border-gray-100 p-3 ${className}`}>
    {children}
  </div>
);

// Sample data for Grade Optimizer preview
const gradeOptimizerData = {
  targetGrade: 90,
  currentGrade: 85,
  assignmentsNeeded: [
    { name: "Final Exam", weight: 30, needed: 98 },
    { name: "Project Part 2", weight: 15, needed: 92 },
  ]
};

// Define feature data
const features = [
  {
    title: "AI Priority Manager",
    description: "Focus on what matters most. Ivy AI analyzes deadlines, course weights, and your progress to create an intelligent, prioritized task list.",
    icon: <List size={24} className="text-blue-500" />,
    uiPreview: (
      <DashboardCard className="w-full max-w-sm mx-auto">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-xs font-semibold text-gray-600">Today's Priorities</h4>
          <span className="text-xs font-medium text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded">3 Tasks</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2 p-2 rounded bg-red-50 border border-red-100">
             <span className="w-2 h-2 mt-1 rounded-full bg-red-500 flex-shrink-0"></span>
             <div>
                <p className="text-xs font-semibold text-red-700">CS 202 - Assignment 3</p>
                <p className="text-[10px] text-red-600/80">Due tonight!</p>
             </div>
             <span className="ml-auto text-[9px] font-bold text-red-600">HIGH</span>
           </div>
           <div className="flex items-start gap-2 p-2 rounded bg-orange-50 border border-orange-100">
             <span className="w-2 h-2 mt-1 rounded-full bg-orange-500 flex-shrink-0"></span>
             <div>
                <p className="text-xs font-semibold text-orange-700">MATH 101 - Study for Quiz</p>
                <p className="text-[10px] text-orange-600/80">Quiz tomorrow AM</p>
             </div>
             <span className="ml-auto text-[9px] font-bold text-orange-600">MED</span>
           </div>
           <div className="flex items-start gap-2 p-2 rounded bg-gray-50">
             <Check size={12} className="text-gray-400 mt-0.5 flex-shrink-0"/>
             <div>
                <p className="text-xs font-medium text-gray-700">PSYC 101 - Reading Ch 5</p>
                <p className="text-[10px] text-gray-500">Due Friday</p>
             </div>
           </div>
        </div>
      </DashboardCard>
    )
  },
  {
    title: "Smart Reminders",
    description: "Never miss a beat. Get timely, actionable reminders tailored to assignment complexity and your personal schedule.",
    icon: <Bell size={24} className="text-green-500" />,
    uiPreview: (
      <DashboardCard className="w-full max-w-xs mx-auto">
         <h4 className="text-xs font-semibold text-gray-600 mb-2">Recent Alerts</h4>
         <div className="space-y-2">
          <div className="flex items-start gap-2 p-2 rounded bg-green-50 border border-green-100">
             <Bell size={12} className="text-green-500 mt-0.5 flex-shrink-0"/>
             <div>
                <p className="text-xs font-medium text-gray-700">Reminder: CS 202 Due</p>
                <p className="text-[10px] text-gray-500">Tonight at 11:59 PM</p>
             </div>
           </div>
           <div className="flex items-start gap-2 p-2 rounded bg-gray-50">
             <Bell size={12} className="text-gray-400 mt-0.5 flex-shrink-0"/>
             <div>
                <p className="text-xs font-medium text-gray-700">Study Suggestion</p>
                <p className="text-[10px] text-gray-500">Prep for MATH 101 quiz</p>
             </div>
           </div>
         </div>
         <div className="mt-3 pt-2 border-t border-gray-100 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span className="text-[10px] text-gray-500">Push & Email alerts active</span>
         </div>
       </DashboardCard>
    )
  },
  {
    title: "Curated Study Content",
    description: "Stuck on a topic? Ivy AI finds relevant videos, articles, and practice problems based on your upcoming assignments and tests.",
    icon: <Sparkles size={24} className="text-yellow-500" />,
    uiPreview: (
      <DashboardCard className="w-full max-w-sm mx-auto">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-xs font-semibold text-gray-600">Study Resources for MATH 101 Quiz</h4>
           <BookOpen size={12} className="text-gray-400" />
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2 p-2 rounded bg-yellow-50 border border-yellow-100">
             <Video size={14} className="text-yellow-600 mt-0.5 flex-shrink-0"/>
             <div>
                <p className="text-xs font-semibold text-yellow-800">Khan Academy: Integration by Parts</p>
                <p className="text-[10px] text-yellow-700/80">Video Explainer (12 min)</p>
             </div>
           </div>
           <div className="flex items-start gap-2 p-2 rounded bg-yellow-50 border border-yellow-100">
             <FileText size={14} className="text-yellow-600 mt-0.5 flex-shrink-0"/>
             <div>
                <p className="text-xs font-semibold text-yellow-800">Paul's Online Notes: Trig Substitutions</p>
                <p className="text-[10px] text-yellow-700/80">Reading & Examples</p>
             </div>
           </div>
           <div className="flex items-start gap-2 p-2 rounded bg-gray-50">
             <BarChart3 size={14} className="text-gray-400 mt-0.5 flex-shrink-0"/>
             <div>
                <p className="text-xs font-medium text-gray-700">Practice Problems: Set 3</p>
                <p className="text-[10px] text-gray-500">Focus on sections 5.2-5.4</p>
             </div>
           </div>
        </div>
      </DashboardCard>
    )
  },
  {
    title: "Grade Optimizer",
    description: "Know exactly what scores you need on future assignments and exams to achieve your target course grade.",
    icon: <Calculator size={24} className="text-purple-500" />,
    uiPreview: (
      <DashboardCard className="w-full max-w-xs mx-auto">
         <div className="flex justify-between items-center mb-2">
           <h4 className="text-xs font-semibold text-gray-600">Grade Projection: CS 202</h4>
           <Target size={12} className="text-gray-400" />
         </div>
         <div className="flex justify-between items-baseline mb-2">
            <div className="text-center">
              <p className="text-[10px] text-gray-500 uppercase">Current</p>
              <p className="text-lg font-bold text-gray-800">{gradeOptimizerData.currentGrade}%</p>
            </div>
            <ArrowRight size={14} className="text-gray-400 mx-1"/>
            <div className="text-center">
              <p className="text-[10px] text-purple-500 uppercase">Target</p>
              <p className="text-lg font-bold text-purple-600">{gradeOptimizerData.targetGrade}%</p>
            </div>
         </div>
         <div className="h-1.5 bg-gray-200 rounded-full mb-3 relative">
           <div style={{ width: `${gradeOptimizerData.currentGrade}%`}} className="h-full bg-purple-500 rounded-full"></div>
           <div style={{ left: `${gradeOptimizerData.targetGrade}%` }} className="absolute top-0 bottom-0 w-px bg-purple-600/50"></div>
         </div>
         <div className="mt-3 pt-2 text-center border-t border-gray-100">
           <p className="text-xs text-gray-600">
             Track your progress and see how upcoming assignments impact your path to a {gradeOptimizerData.targetGrade}%.
           </p>
         </div>
       </DashboardCard>
    )
  },
];

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onExploreClick }) => {
  const sectionRef = useRef(null);
  // No need for isInView for the whole section if animating items individually

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 sm:py-24 md:py-28 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Image - More Subtle */}
      <div className="absolute inset-0 z-0 opacity-10"> {/* Even more reduced opacity */}
        <img
          src="/ivy_lecturehall.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-x-0 top-0 h-32 z-1 bg-gradient-to-b from-white via-white to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 z-1 bg-gradient-to-t from-white via-white to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Everything You Need to <span className="text-[#11ba82]">Succeed</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Ivy AI combines powerful AI features into one seamless platform, helping you stay organized, informed, and ahead of the curve.
          </p>
        </motion.div>

        {/* Alternating Feature Blocks */}
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {features.map((feature, index) => {
            const isOdd = index % 2 !== 0;
            const featureRef = useRef(null);
            const featureInView = useInView(featureRef, { once: true, amount: 0.3, margin: "-100px 0px" });

            return (
              <motion.div
                key={index}
                ref={featureRef}
                initial={{ opacity: 0, y: 40 }}
                animate={featureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col ${isOdd ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 lg:gap-16`}
              >
                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left">
                  <div className="inline-flex items-center gap-3 mb-4 bg-gray-100 px-3 py-1 rounded-full">
                    {feature.icon}
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                {/* UI Preview */}
                <div className="md:w-1/2 w-full px-4 md:px-0">
                  <div className="relative rounded-xl shadow-xl border border-gray-200/80 bg-neutral-50 p-4 sm:p-6">
                     {/* Optional: Add browser mock-up frame */}
                     {/* <div className="absolute top-2 left-2 flex space-x-1.5"> ... </div> */}
                    {feature.uiPreview}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button - Reusing style, adjusted text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "-50px 0px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-20 sm:mt-24 md:mt-32"
        >
          <button
            onClick={onExploreClick}
            className="bg-[#11ba82] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#0ea371] transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto group"
          >
            Start Optimizing Your Grades
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection; 