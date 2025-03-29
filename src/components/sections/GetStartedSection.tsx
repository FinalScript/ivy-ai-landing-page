import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Upload, Calendar, CheckCircle2, FileText, BookOpen, BellRing } from "lucide-react";

interface GetStartedSectionProps {
  onGetStartedClick: () => void;
}

const GetStartedSection: React.FC<GetStartedSectionProps> = ({
  onGetStartedClick,
}) => {
  // Steps animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        delay: 0.1,
      },
    },
  };

  const steps = [
    {
      number: "01",
      title: "Upload Your Syllabi",
      description: "Drag & drop your course materials - our AI extracts all critical deadlines automatically",
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#ec4899]" />,
      illustration: <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#ec4899]" />,
      color: "#ec4899",
      image: "/upload-syllabi.png",
      alt: "Syllabus upload interface showing drag & drop area"
    },
    {
      number: "02",
      title: "Review Your Schedule",
      description: "Confirm extracted dates and adjust your personalized academic calendar",
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#a855f7]" />,
      illustration: <Calendar className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#a855f7]" />,
      color: "#a855f7",
      image: "/calendar-view.png",
      alt: "Calendar interface showing academic schedule with deadlines"
    },
    {
      number: "03",
      title: "Stay On Track",
      description: "Get smart reminders and visualize your semester with AI-optimized scheduling",
      icon: <BellRing className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#11ba82]" />,
      illustration: <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#11ba82]" />,
      color: "#11ba82",
      image: "/notifications-view.png",
      alt: "Notification interface showing smart reminders and progress tracking"
    }
  ];

  return (
    <section id="how-it-works" className="py-10 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            How Ivy AI <span className="text-[#11ba82]">Works</span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Three simple steps to transform your academic life
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16 sm:space-y-24 md:space-y-32 relative"
        >
          {/* Main Timeline Line */}
          <div className="absolute left-0 md:left-[38px] top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step indicator */}
              <div className="flex flex-col md:flex-row items-start">
                {/* Left side with step number - only visible on md and larger */}
                <div className="hidden md:flex flex-col items-center relative z-20 mr-10">
                  <div className="w-[76px] h-[76px] rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                    <span className="text-2xl font-bold" style={{ color: step.color }}>{step.number}</span>
                  </div>
                </div>
                
                {/* Right side with content and screenshot */}
                <div className="flex-1">
                  <motion.div 
                    variants={stepVariants}
                    className="mb-6 sm:mb-8"
                  >
                    {/* Mobile step indicator - only visible below md breakpoint */}
                    <div className="flex items-center mb-4 md:hidden">
                      <div className="w-[50px] h-[50px] rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center mr-3">
                        <span className="text-xl font-bold" style={{ color: step.color }}>{step.number}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold">
                        {step.title}
                      </h3>
                    </div>
                    
                    {/* Desktop heading - only visible on md and larger */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 hidden md:block">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl">
                      {step.description}
                    </p>
                  </motion.div>
                  
                  {/* App screenshot/mockup */}
                  <motion.div 
                    variants={imageVariants}
                    className="rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white"
                  >
                    {/* Placeholder for image */}
                    <div className="w-full bg-gray-100 flex items-center justify-center overflow-hidden" style={{ minHeight: index === 0 ? '400px' : '450px' }}>
                      <div className="w-full h-full bg-white">
                        {index === 0 && (
                          <div className="w-full h-full bg-white p-4 sm:p-6 relative">
                            <div className="border-2 border-dashed border-[#ec4899]/30 rounded-lg h-full min-h-[350px] flex flex-col items-center justify-center">
                              <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-[#ec4899] mb-3" />
                              <div className="text-center max-w-md mx-auto">
                                <h4 className="text-lg sm:text-xl font-semibold text-[#ec4899] mb-1">Drop your syllabus files here</h4>
                                <p className="text-sm text-gray-600 mb-2">Our AI will automatically extract assignment details, deadlines, and course requirements</p>
                                <div className="text-xs text-gray-500 mb-4 italic">
                                  This is just a demonstration - no actual file upload is required
                                </div>
                                <button className="px-5 py-2 bg-[#ec4899] text-white rounded-full text-sm font-medium cursor-default">
                                  Browse Files
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {index === 1 && (
                          <div className="w-full h-full bg-white p-4 sm:p-6 relative">
                            {/* Mobile-specific view with just extracted classes */}
                            <div className="md:hidden">
                              {/* Calendar preview for mobile */}
                              <div className="border border-[#a855f7]/20 shadow-sm rounded-lg bg-white overflow-hidden mb-4">
                                <div className="bg-[#a855f7]/10 px-4 py-3 border-b border-[#a855f7]/10 flex justify-between items-center">
                                  <h4 className="font-semibold text-[#a855f7]">March 2025</h4>
                                  <div className="flex gap-2">
                                    <button className="p-1 rounded hover:bg-[#a855f7]/10 cursor-default">
                                      <Calendar className="w-4 h-4 text-[#a855f7]" />
                                    </button>
                                  </div>
                                </div>
                                <div className="p-3">
                                  <div className="grid grid-cols-7 gap-1">
                                    {['S','M','T','W','T','F','S'].map((day, i) => (
                                      <div key={`day-${i}`} className="text-xs text-center font-semibold text-gray-500 py-1">
                                        {day}
                                      </div>
                                    ))}
                                    {Array.from({ length: 21 }).map((_, i) => (
                                      <div 
                                        key={i} 
                                        className={`aspect-square flex flex-col items-center justify-center text-xs rounded-md 
                                          ${i === 14 ? 'bg-[#a855f7] text-white' : i % 7 === 0 || i % 7 === 6 ? 'text-gray-400' : ''}`}
                                      >
                                        <span>{i + 1}</span>
                                        {i === 14 && <div className="w-1 h-1 bg-white rounded-full mt-0.5"></div>}
                                        {i === 7 && <div className="w-1 h-1 bg-[#ec4899] rounded-full mt-0.5"></div>}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              
                              {/* Extracted Classes only */}
                              <div className="border border-[#a855f7]/20 shadow-sm rounded-lg bg-white overflow-hidden">
                                <div className="bg-[#a855f7]/10 px-4 py-3 border-b border-[#a855f7]/10">
                                  <h4 className="font-semibold text-[#a855f7]">Extracted Classes</h4>
                                </div>
                                <div className="p-4 space-y-4 h-full">
                                  <div className="rounded-md bg-[#a855f7]/5 p-3 border-l-2 border-[#a855f7]">
                                    <div className="font-semibold text-[#a855f7] text-sm">CS 101: Intro to Programming</div>
                                    <div className="text-xs text-gray-600 mt-1">Prof. Johnson • MWF 9:00-10:30am</div>
                                    <div className="mt-2 flex flex-wrap gap-1.5">
                                      <span className="text-xs bg-[#a855f7]/10 text-[#a855f7] px-1.5 py-0.5 rounded">3 Assignments</span>
                                      <span className="text-xs bg-[#a855f7]/10 text-[#a855f7] px-1.5 py-0.5 rounded">2 Exams</span>
                                    </div>
                                  </div>

                                  <div className="rounded-md bg-[#ec4899]/5 p-3 border-l-2 border-[#ec4899]">
                                    <div className="font-semibold text-[#ec4899] text-sm">MATH 201: Calculus II</div>
                                    <div className="text-xs text-gray-600 mt-1">Prof. Garcia • TR 11:00-12:30pm</div>
                                    <div className="mt-2 flex flex-wrap gap-1.5">
                                      <span className="text-xs bg-[#ec4899]/10 text-[#ec4899] px-1.5 py-0.5 rounded">4 Problem Sets</span>
                                      <span className="text-xs bg-[#ec4899]/10 text-[#ec4899] px-1.5 py-0.5 rounded">3 Exams</span>
                                    </div>
                                  </div>

                                  <div className="rounded-md bg-[#11ba82]/5 p-3 border-l-2 border-[#11ba82]">
                                    <div className="font-semibold text-[#11ba82] text-sm">PHYS 202: Mechanics</div>
                                    <div className="text-xs text-gray-600 mt-1">Prof. Smith • MWF 1:00-2:30pm</div>
                                    <div className="mt-2 flex flex-wrap gap-1.5">
                                      <span className="text-xs bg-[#11ba82]/10 text-[#11ba82] px-1.5 py-0.5 rounded">5 Labs</span>
                                      <span className="text-xs bg-[#11ba82]/10 text-[#11ba82] px-1.5 py-0.5 rounded">2 Exams</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Desktop full view */}
                            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                              {/* Calendar side */}
                              <div className="border border-[#a855f7]/20 shadow-sm rounded-lg h-full bg-white overflow-hidden">
                                <div className="bg-[#a855f7]/10 px-4 py-3 flex justify-between items-center border-b border-[#a855f7]/10">
                                  <h4 className="font-semibold text-[#a855f7]">September 2023</h4>
                                  <div className="flex gap-2">
                                    <button className="p-1 rounded hover:bg-[#a855f7]/10 cursor-default">
                                      <Calendar className="w-4 h-4 text-[#a855f7]" />
                                    </button>
                                  </div>
                                </div>
                                <div className="grid grid-cols-7 gap-1 p-2">
                                  {['S','M','T','W','T','F','S'].map((day, i) => (
                                    <div key={`day-${i}`} className="text-xs text-center font-semibold text-gray-500 py-1">
                                      {day}
                                    </div>
                                  ))}
                                  {Array.from({ length: 30 }).map((_, i) => (
                                    <div 
                                      key={i} 
                                      className={`aspect-square flex flex-col items-center justify-center text-xs rounded-md 
                                        ${i === 14 ? 'bg-[#a855f7] text-white' : 'hover:bg-[#a855f7]/5'}`}
                                    >
                                      <span>{i + 1}</span>
                                      {i === 14 && <div className="w-1 h-1 bg-white rounded-full mt-0.5"></div>}
                                      {i === 7 && <div className="w-1 h-1 bg-[#ec4899] rounded-full mt-0.5"></div>}
                                      {i === 21 && <div className="w-1 h-1 bg-[#11ba82] rounded-full mt-0.5"></div>}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Class details side */}
                              <div className="border border-[#a855f7]/20 shadow-sm rounded-lg h-full bg-white overflow-hidden flex flex-col">
                                <div className="bg-[#a855f7]/10 px-4 py-3 border-b border-[#a855f7]/10">
                                  <h4 className="font-semibold text-[#a855f7]">Extracted Classes</h4>
                                </div>
                                <div className="p-2 space-y-2 flex-1 overflow-y-auto">
                                  <div className="rounded-md bg-[#a855f7]/5 p-3 border-l-2 border-[#a855f7]">
                                    <div className="font-semibold text-[#a855f7] text-sm">CS 101: Intro to Programming</div>
                                    <div className="text-xs text-gray-600">Prof. Johnson • MWF 9:00-10:30am</div>
                                    <div className="mt-1 flex gap-1">
                                      <span className="text-xs bg-[#a855f7]/10 text-[#a855f7] px-1.5 py-0.5 rounded">3 Assignments</span>
                                      <span className="text-xs bg-[#a855f7]/10 text-[#a855f7] px-1.5 py-0.5 rounded">2 Exams</span>
                                    </div>
                                  </div>
                                  
                                  <div className="rounded-md bg-[#ec4899]/5 p-3 border-l-2 border-[#ec4899]">
                                    <div className="font-semibold text-[#ec4899] text-sm">MATH 201: Calculus II</div>
                                    <div className="text-xs text-gray-600">Prof. Garcia • TR 11:00-12:30pm</div>
                                    <div className="mt-1 flex gap-1">
                                      <span className="text-xs bg-[#ec4899]/10 text-[#ec4899] px-1.5 py-0.5 rounded">4 Problem Sets</span>
                                      <span className="text-xs bg-[#ec4899]/10 text-[#ec4899] px-1.5 py-0.5 rounded">3 Exams</span>
                                    </div>
                                  </div>
                                  
                                  <div className="rounded-md bg-[#11ba82]/5 p-3 border-l-2 border-[#11ba82]">
                                    <div className="font-semibold text-[#11ba82] text-sm">PHYS 202: Mechanics</div>
                                    <div className="text-xs text-gray-600">Prof. Smith • MWF 1:00-2:30pm</div>
                                    <div className="mt-1 flex gap-1">
                                      <span className="text-xs bg-[#11ba82]/10 text-[#11ba82] px-1.5 py-0.5 rounded">5 Labs</span>
                                      <span className="text-xs bg-[#11ba82]/10 text-[#11ba82] px-1.5 py-0.5 rounded">2 Exams</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {index === 2 && (
                          <div className="w-full h-full bg-white p-4 sm:p-6 relative">
                            {/* Mobile-specific view */}
                            <div className="md:hidden">
                              <div className="border border-[#11ba82]/20 shadow-sm rounded-lg bg-white overflow-hidden min-h-[350px]">
                                <div className="bg-[#11ba82]/10 px-4 py-3 rounded-t-lg border-b border-[#11ba82]/10 flex justify-between items-center">
                                  <h4 className="font-semibold text-[#11ba82]">Upcoming Deadlines</h4>
                                </div>
                                <div className="p-4 space-y-3">
                                  <div className="flex items-center gap-3 p-3 rounded-lg bg-[#11ba82]/5 border border-[#11ba82]/10">
                                    <div className="p-2 bg-[#11ba82]/10 rounded-full">
                                      <BellRing className="w-5 h-5 text-[#11ba82]" />
                                    </div>
                                    <div>
                                      <div className="font-medium">PHYS 202 Quiz</div>
                                      <div className="text-xs text-gray-600">Tomorrow</div>
                                    </div>
                                    <div className="ml-auto text-xs text-[#11ba82] font-medium bg-[#11ba82]/10 px-2 py-1 rounded-full">High Priority</div>
                                  </div>
                                  
                                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                                    <div className="p-2 bg-gray-100 rounded-full">
                                      <FileText className="w-5 h-5 text-gray-500" />
                                    </div>
                                    <div>
                                      <div className="font-medium">ECON 101 Paper</div>
                                      <div className="text-xs text-gray-600">Due in 5 days</div>
                                    </div>
                                    <div className="ml-auto text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded-full">Medium</div>
                                  </div>
                                  
                                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                                    <div className="p-2 bg-gray-100 rounded-full">
                                      <BookOpen className="w-5 h-5 text-gray-500" />
                                    </div>
                                    <div>
                                      <div className="font-medium">CS 202 Reading</div>
                                      <div className="text-xs text-gray-600">Due next week - Not started</div>
                                    </div>
                                    <div className="ml-auto text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">Low</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Desktop view */}
                            <div className="hidden md:block">
                              <div className="bg-[#11ba82]/10 px-4 py-3 rounded-t-lg mb-2 flex justify-between items-center">
                                <h4 className="font-semibold text-[#11ba82]">Upcoming Deadlines</h4>
                              </div>
                              <div className="p-4 space-y-3">
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#11ba82]/5 border border-[#11ba82]/10">
                                  <div className="p-2 bg-[#11ba82]/10 rounded-full">
                                    <BellRing className="w-5 h-5 text-[#11ba82]" />
                                  </div>
                                  <div>
                                    <div className="font-medium">PHYS 202 Quiz Tomorrow</div>
                                    <div className="text-xs text-gray-600">10:00 AM - Study chapters 5-7</div>
                                  </div>
                                  <div className="ml-auto text-xs text-[#11ba82] font-medium bg-[#11ba82]/10 px-2 py-1 rounded-full">High Priority</div>
                                </div>
                                
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                                  <div className="p-2 bg-gray-100 rounded-full">
                                    <FileText className="w-5 h-5 text-gray-500" />
                                  </div>
                                  <div>
                                    <div className="font-medium">ECON 101 Paper</div>
                                    <div className="text-xs text-gray-600">Due in 5 days - 40% complete</div>
                                  </div>
                                  <div className="ml-auto text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded-full">Medium</div>
                                </div>
                                
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                                  <div className="p-2 bg-gray-100 rounded-full">
                                    <BookOpen className="w-5 h-5 text-gray-500" />
                                  </div>
                                  <div>
                                    <div className="font-medium">CS 202 Reading</div>
                                    <div className="text-xs text-gray-600">Due next week - Not started</div>
                                  </div>
                                  <div className="ml-auto text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">Low</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16 sm:mt-20 md:mt-24 relative"
        >
          <button
            onClick={onGetStartedClick}
            className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-medium text-white bg-gradient-to-r from-[#11ba82] via-[#0ea371] to-[#0d9868] rounded-full shadow-lg group"
          >
            <span className="relative text-base sm:text-lg font-semibold flex items-center gap-2 z-10">
              Try For Free
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </button>
          <p className="mt-3 sm:mt-4 text-sm text-gray-500">
            No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection; 