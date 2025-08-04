import React from "react";
import { motion, type Transition, type Variants } from "framer-motion";
import {
  ArrowRight,
  Upload,
  Calendar,
  BellRing,
  Folder,
  File,
  Settings2,
  ChevronRight,
  ChevronLeft,
  ListOrdered
} from "lucide-react";

interface GetStartedSectionProps {
  onGetStartedClick: () => void;
}

// Helper component for dashboard-like cards
const DashboardCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-sm border border-gray-100 p-3 ${className}`}>
    {children}
  </div>
);

const GetStartedSection: React.FC<GetStartedSectionProps> = ({
  onGetStartedClick,
}) => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const blockVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 25, stiffness: 120 } as Transition,
    },
  };

  // Define steps with new UI previews matching the dashboard style
  const steps = [
    {
      title: "Upload Your Syllabi",
      description: "Effortlessly bring in all your course materials.",
      icon: <Upload size={20} className="text-blue-500" />, // Main icon for the block
      gridClass: "md:col-span-1 lg:col-span-2 lg:row-span-1", // Spanning
      uiPreview: (
        <div className="w-full h-full bg-gray-50 p-4 rounded-b-lg border-t border-gray-200 flex items-center justify-center">
          <DashboardCard className="w-full max-w-xs">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-xs font-semibold text-gray-600">Documents</h4>
              <Settings2 size={12} className="text-gray-400" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-gray-100 rounded">
                <Folder size={14} className="text-blue-500" />
                <span className="text-xs font-medium text-gray-700">Syllabi</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-50">
                <File size={14} className="text-gray-400" />
                <span className="text-xs text-gray-600">CS 202_Syllabus.pdf</span>
              </div>
               <div className="flex items-center gap-2 p-2 rounded bg-blue-500/10 border border-blue-500/30">
                <Upload size={14} className="text-blue-500" />
                <span className="text-xs font-semibold text-blue-600">Upload New...</span>
              </div>
            </div>
          </DashboardCard>
        </div>
      ),
    },
    {
      title: "Review Your Schedule",
      description: "Visualize your entire semester at a glance.",
      icon: <Calendar size={20} className="text-purple-500" />,
      gridClass: "md:col-span-1 lg:col-span-2 lg:row-span-2", // Spanning
      uiPreview: (
        <div className="w-full h-full bg-gray-50 p-4 rounded-b-lg border-t border-gray-200 flex flex-col gap-3">
          {/* Mini Calendar */}
          <DashboardCard className="flex-1">
             <div className="flex justify-between items-center mb-2">
               <h4 className="text-xs font-semibold text-gray-600">April 2024</h4>
               <div className="flex gap-1">
                  <ChevronLeft size={14} className="text-gray-400"/>
                  <ChevronRight size={14} className="text-gray-400"/>
               </div>
             </div>
             <div className="grid grid-cols-7 gap-1 text-center">
               {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <div key={`day-header-${i}`} className="text-[10px] font-medium text-gray-400">{d}</div>)}
               {Array.from({ length: 14 }).map((_, i) => (
                 <div key={i} className={`text-xs p-1 rounded aspect-square flex items-center justify-center relative ${
                    i === 1 ? 'ring-2 ring-blue-500 ring-inset text-blue-600 font-semibold' :
                    i === 3 ? 'bg-purple-100 text-purple-600 font-semibold' :
                    i === 6 ? 'bg-green-100 text-green-600' :
                              'text-gray-500'
                 }`}>
                   {i + 1}
                 </div>
               ))}
             </div>
           </DashboardCard>
           {/* Mini Course List & Upcoming Dates - Split into two columns */}
           <DashboardCard className="flex-1 flex flex-col sm:flex-row gap-4">
              {/* Left Column: My Courses */}
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-gray-600 mb-2">My Courses</h4>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="text-xs text-gray-600">CS 202 - Data Structures</span>
                  </div>
                   <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="text-xs text-gray-600">MATH 101 - Calculus II</span>
                  </div>
                   <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-xs text-gray-600">PSYC 101 - Intro Psych</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    <span className="text-xs text-gray-600">PHYS 110 - Mechanics</span>
                  </div>
                   <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span className="text-xs text-gray-600">ENGL 105 - Lit Seminar</span>
                  </div>
                </div>
              </div>
              {/* Right Column: Upcoming Dates */}
              <div className="flex-1 sm:border-l sm:pl-4 border-gray-100">
                <h4 className="text-xs font-semibold text-gray-600 mb-2">Upcoming Dates</h4>
                 <div className="space-y-1.5">
                    {/* Item for the 4th */}
                    <div className="flex items-center gap-2 p-1.5 rounded bg-purple-50 border border-purple-100">
                       <span className="text-[10px] font-semibold text-purple-600 bg-purple-100 px-1 rounded">Apr 4</span>
                       <span className="text-xs text-gray-700">MATH 101 Midterm</span>
                    </div>
                    {/* Item for the 7th */}
                     <div className="flex items-center gap-2 p-1.5 rounded bg-green-50 border border-green-100">
                       <span className="text-[10px] font-semibold text-green-600 bg-green-100 px-1 rounded">Apr 7</span>
                       <span className="text-xs text-gray-700">PSYC 101 Reading Due</span>
                    </div>
                 </div>
              </div>
           </DashboardCard>
        </div>
      ),
    },
    {
      title: "Stay On Track",
      description: "Never miss a deadline with smart reminders.",
      icon: <BellRing size={20} className="text-green-500" />,
      gridClass: "md:col-span-2 lg:col-span-2 lg:row-span-1", // Spanning
      uiPreview: (
        <div className="w-full h-full bg-gray-50 p-4 rounded-b-lg border-t border-gray-200 flex items-center justify-center">
          <DashboardCard className="w-full max-w-sm">
             <h4 className="text-xs font-semibold text-gray-600 mb-2">Today's Overview</h4>
             <div className="space-y-2">
              <div className="flex items-start gap-2 p-2 rounded bg-red-50 border border-red-100">
                 <span className="w-2 h-2 mt-1 rounded-full bg-red-500 flex-shrink-0"></span>
                 <div>
                    <p className="text-[11px] font-semibold text-red-700">PSYC 101 Assignment</p>
                    <p className="text-[10px] text-red-600/80">Due tonight at 11:59 PM</p>
                 </div>
                 <span className="ml-auto text-[9px] font-bold text-red-600">PRIORITY</span>
               </div>
               <div className="flex items-start gap-2 p-2 rounded bg-gray-50">
                 <ListOrdered size={12} className="text-gray-400 mt-0.5 flex-shrink-0"/>
                 <div>
                    <p className="text-xs font-medium text-gray-700">Upcoming: MATH 101 Quiz</p>
                    <p className="text-[10px] text-gray-500">Due in 3 days</p>
                 </div>
               </div>
             </div>
             {/* Added Email Notification Info */}
             <div className="mt-3 pt-2 border-t border-gray-100 flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span className="text-[10px] text-gray-500">Email notifications enabled</span>
             </div>
          </DashboardCard>
        </div>
      ),
    },
  ];

  return (
    <section 
      id="how-it-works" 
      className="pt-20 pb-10 sm:pb-12 md:pb-14 lg:pb-16 bg-white relative overflow-hidden scroll-mt-32"
    >
      {/* Full Bleed Bottom Background - Adding vertical centering */}
      <div className="absolute inset-0 z-0 opacity-20 flex items-center justify-center">
        <img
          src="/ivy_hiw.png"
          alt=""
          className="w-full h-full max-h-[700px] object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Main Content Area (remains z-10) */} 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Add specific id here for scrolling */}
        <motion.div
          id="how-it-works-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20 pt-12 md:pt-16 relative z-20 scroll-mt-32"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 pt-6">
            How Ivy AI <span className="text-[#11ba82]">Streamlines Your Studies</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Focus on learning, not logistics. Ivy AI automates the tedious parts of managing your academic life.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(250px,_auto)] lg:auto-rows-[minmax(280px,_auto)]" // Added relative z-10
        >
          {/* Bottom Background for Grid Area - REMOVED from here */}
          {/* <div className="absolute inset-0 z-0 overflow-hidden rounded-xl" aria-hidden="true"> ... </div> */}

          {/* Grid Items - Remain above background */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={blockVariants}
              className={`bg-neutral-50 rounded-xl shadow-md border border-gray-200/80 overflow-hidden flex flex-col ${step.gridClass || ''}`}
            >
              {/* Minimal Text Header */}
              <div className="p-5 sm:p-6 border-b border-gray-200">
                <div className="flex items-center gap-3 mb-1.5">
                   {step.icon} {/* Use the main icon defined */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
              {/* UI Preview Area (takes remaining space) */}
              <div className="flex-grow min-h-0"> {/* flex-grow + min-h-0 needed for flex child */} 
                {step.uiPreview}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }} // Faster delay
          className="text-center mt-16 sm:mt-20 md:mt-24"
        >
          <button
            onClick={onGetStartedClick}
            className="relative inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 overflow-hidden font-medium text-white bg-gradient-to-r from-[#11ba82] via-[#0ea371] to-[#0d9868] rounded-full shadow-lg group hover:shadow-xl transition-shadow duration-300"
          >
            <span className="relative text-base sm:text-lg font-semibold flex items-center gap-2 z-10">
              Get Started For Free
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </button>
          <p className="mt-3 sm:mt-4 text-sm text-gray-500">
            No credit card required. Simplify your semester today.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection; 