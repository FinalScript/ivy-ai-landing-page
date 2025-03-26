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

  const steps = [
    {
      number: "01",
      title: "Upload Your Syllabi",
      description: "Drag & drop your course materials - our AI extracts all critical deadlines automatically",
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#ec4899]" />,
      illustration: <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#ec4899]" />,
      bgGradient: "from-[#ec4899] to-[#f29c86]",
      lightBg: "from-[#fbe7d5]/30 to-[#fcf1eb]/50",
      borderColor: "border-[#fbe7d5]/20"
    },
    {
      number: "02",
      title: "Review Your Schedule",
      description: "Confirm extracted dates and adjust your personalized academic calendar",
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#a855f7]" />,
      illustration: <Calendar className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#a855f7]" />,
      bgGradient: "from-[#a855f7] to-[#8b5cf6]",
      lightBg: "from-[#e1d3f0]/30 to-[#f1ecfa]/50",
      borderColor: "border-[#e1d3f0]/20"
    },
    {
      number: "03",
      title: "Stay On Track",
      description: "Get smart reminders and visualize your semester with AI-optimized scheduling",
      icon: <BellRing className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#11ba82]" />,
      illustration: <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#11ba82]" />,
      bgGradient: "from-[#11ba82] to-[#0ea371]",
      lightBg: "from-[#d2f5e8]/30 to-[#e7faf3]/50",
      borderColor: "border-[#d2f5e8]/20"
    }
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-b from-white via-[#faf6f2]/30 to-[#f0f9f5]/40">
      {/* Background gradient */}
      <div className="absolute -top-40 -right-40 w-72 h-72 md:w-96 md:h-96 bg-[#11ba82]/10 rounded-full blur-[80px] md:blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-72 h-72 md:w-96 md:h-96 bg-[#d6bce6]/20 rounded-full blur-[80px] md:blur-[100px]"></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-[#f8d6bc]/10 rounded-full blur-[70px]"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
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
          className="relative pb-4 sm:pb-6"
        >
          {/* Timeline vertical line */}
          <div className="absolute left-[22px] sm:left-[30px] md:left-[38px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ec4899] via-[#a855f7] to-[#11ba82]"></div>
          
          {/* Steps */}
          <div className="space-y-8 sm:space-y-12 md:space-y-16 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                variants={stepVariants}
                className="flex items-start gap-4 sm:gap-6 md:gap-8"
              >
                {/* Step number circle */}
                <div className={`relative z-10 flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 md:w-18 md:h-18 rounded-full bg-gradient-to-br ${step.bgGradient} flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-xs sm:text-sm md:text-base font-bold">{step.number}</span>
                  
                  {/* Decorative circles */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.4 }}
                    className={`absolute -left-3 -top-3 w-4 h-4 rounded-full opacity-40 blur-[1px] bg-gradient-to-br ${step.bgGradient}`}
                  ></motion.div>
                </div>
                
                {/* Content card */}
                <motion.div 
                  className={`flex-1 bg-white/90 backdrop-blur-sm rounded-xl border ${step.borderColor} shadow-lg p-4 sm:p-5 md:p-6 flex justify-between items-center gap-4 overflow-hidden`}
                  whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      {step.icon}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Illustration */}
                  <div className={`hidden sm:flex w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${step.lightBg} flex-shrink-0 items-center justify-center`}>
                    {step.illustration}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10 sm:mt-12 md:mt-14 relative"
        >
          {/* Decorative elements around the button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="absolute w-full h-full inset-0 pointer-events-none overflow-hidden"
          >
            <div className="absolute top-1/4 -left-8 w-20 h-20 rounded-full bg-gradient-to-br from-[#f8d6bc]/10 to-[#f8d6bc]/5 blur-xl"></div>
            <div className="absolute bottom-1/3 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#d6bce6]/10 to-[#d6bce6]/5 blur-xl"></div>
            <div className="absolute top-0 left-1/4 w-1 h-1 rounded-full bg-[#f29c86]/70"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#8b5cf6]/60"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-[#11ba82]/70"></div>
          </motion.div>
          
          <button
            onClick={onGetStartedClick}
            className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-medium text-white bg-gradient-to-r from-[#11ba82] via-[#0ea371] to-[#0d9868] rounded-full shadow-lg group"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="absolute -inset-px bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-full blur-sm transition-opacity duration-300"></span>
            <span className="relative text-base sm:text-lg font-semibold flex items-center gap-2 z-10">
              Get Started Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </button>
          <p className="mt-3 sm:mt-4 text-sm text-gray-500">
            No credit card required • Free for students
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection; 