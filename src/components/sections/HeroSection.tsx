import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import RotatingText from "../../blocks/TextAnimations/RotatingText/RotatingText";
import {
  BrainCog,
  Clock,
  GraduationCap,
  Sparkles,
  Zap,
  FileSearch,
} from "lucide-react";

// Feature cards data for the floating elements
const featureCards = [
  {
    text: "AI Optimized Schedule",
    icon: <GraduationCap className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />,
    color: "#11ba82",
    rotation: 8,
    delay: 0.8,
    position: { top: "12%", right: "2%" },
    scale: 1.0
  },
  {
    text: "Smart Deadline Reminders",
    icon: <Clock className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />,
    color: "#3b82f6",
    rotation: -5,
    delay: 1.2,
    position: { top: "30%", right: "12%" },
    scale: 0.9
  },
  {
    text: "Workload Prediction",
    icon: <BrainCog className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />,
    color: "#8b5cf6",
    rotation: 5,
    delay: 1.6,
    position: { bottom: "20%", right: "8%" },
    scale: 0.95
  },
  {
    text: "Syllabus Auto-Extract",
    icon: <Sparkles className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />,
    color: "#ec4899",
    rotation: -6,
    delay: 2.0,
    position: { top: "12%", left: "4%" },
    scale: 0.95
  },
  {
    text: "Study Time Optimizer",
    icon: <Zap className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />,
    color: "#f59e0b",
    rotation: 7,
    delay: 2.4,
    position: { top: "45%", left: "2%" },
    scale: 0.9
  },
  {
    text: "Assignment Tracker",
    icon: <FileSearch className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />,
    color: "#06b6d4",
    rotation: -6,
    delay: 2.8,
    position: { bottom: "15%", left: "7%" },
    scale: 0.95
  },
  {
    text: "Grade Tracker",
    icon: <BrainCog className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />,
    color: "#14b8a6",
    rotation: -8,
    delay: 3.2,
    position: { top: "28%", left: "10%" },
    scale: 1.0
  }
];

interface HeroSectionProps {
  onTryDemoClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onTryDemoClick }) => {
  return (
    <div className="relative overflow-hidden min-h-[80vh] sm:min-h-screen mb-8 sm:mb-10 lg:mb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ivy_bg.jpg"
          alt="Ivy background"
          className="w-full h-full object-contain md:object-cover object-center scale-[1.05] md:scale-100"
        />
      </div>
      
      {/* Text Content Section */}
      <div className="relative z-10 py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 min-h-[60vh] xs:min-h-[65vh] md:min-h-[80vh] flex items-center justify-center">
        <div className="w-full max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-center px-3 xs:px-4 sm:px-6 md:px-8 py-4 xs:py-6 sm:py-8 md:py-10 rounded-lg md:rounded-xl bg-white/70 backdrop-blur-sm shadow-md sm:shadow-lg md:shadow-xl border border-white/20 scale-[0.9] xs:scale-[0.95] sm:scale-100">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-extrabold mb-3 xs:mb-4 md:mb-6 text-[#171919] transition-all duration-300 ease-in-out"
          >
            Stay more <span className="text-[#11ba82]">organized</span>
            <br className="hidden xs:block" />
            <LayoutGroup>
              <motion.div className="rotating-text-ptag inline-flex items-center">
                <motion.span
                  className="inline-block mr-1.5 xs:mr-2 md:mr-3"
                  layout
                  transition={{ type: "spring", damping: 25, stiffness: 400 }}
                >
                  and less{" "}
                </motion.span>
                <RotatingText
                  texts={[
                    "stressed",
                    "overwhelmed",
                    "anxious",
                    "worried",
                    "exhausted",
                  ]}
                  className="text-[#11ba82] font-extrabold"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 xs:pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 25, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </motion.div>
            </LayoutGroup>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6] text-[#171919]/90 mb-4 xs:mb-6 md:mb-8 lg:mb-10 font-semibold max-w-[280px] xs:max-w-xs sm:max-w-xl md:max-w-2xl mx-auto"
          >
            Upload your course outlines and schedules—our AI instantly creates
            a smart calendar that syncs with your favorite calendar apps.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              className="bg-[#11ba82] text-[#fffffa] px-4 xs:px-5 sm:px-6 md:px-8 py-1.5 xs:py-2 sm:py-2.5 md:py-3 rounded-full text-[12px] xs:text-[14px] md:text-[16px] font-semibold hover:bg-[#0ea371] transition-all duration-300 shadow-md lg:shadow-lg transform hover:-translate-y-1"
              onClick={onTryDemoClick}
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Feature cards that pop in */}
      {featureCards.map((card, index) => (
        <motion.div 
          key={index}
          className="absolute z-20 px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-md sm:shadow-lg text-[10px] xs:text-xs sm:text-sm font-semibold hidden lg:flex"
          style={{ 
            backgroundColor: card.color,
            color: "white",
            transform: `rotate(${card.rotation}deg)`,
            ...card.position
          }}
          initial={{ opacity: 0, y: 20, scale: card.scale * 0.8, rotate: card.rotation }}
          animate={{ opacity: 1, y: 0, scale: card.scale, rotate: card.rotation }}
          transition={{ 
            delay: card.delay,
            duration: 0.5,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{
            scale: card.scale * 1.1,
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.2 }
          }}
        >
          <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
            <span className="line-clamp-1">{card.text}</span>
            {card.icon}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSection; 