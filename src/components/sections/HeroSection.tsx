import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import RotatingText from "../../blocks/TextAnimations/RotatingText/RotatingText";

interface HeroSectionProps {
  onTryDemoClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onTryDemoClick }) => {
  return (
    <div className="relative overflow-visible min-h-[80vh] sm:min-h-screen mb-10 sm:mb-12 lg:mb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ivy_bg2.jpg"
          alt="Ivy background"
          className="w-full h-full object-contain md:object-cover object-center scale-[1.05] md:scale-100"
        />
      </div>
      
      {/* Semi-transparent overlay for better text readability - removed blur */}
      <div className="absolute inset-0 z-1 bg-white/20"></div>
      
      {/* Text Content Section */}
      <div className="relative z-10 min-h-[50vh] xs:min-h-[65vh] md:min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-extrabold mb-6 sm:mb-8 md:mb-10 text-[#171919] text-center max-w-4xl mx-auto [text-shadow:0_1px_2px_rgba(255,255,255,0.8),0_2px_4px_rgba(255,255,255,0.4)]"
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
          className="text-xs sm:text-md md:text-lg leading-[1.6] text-gray-800 mb-8 sm:mb-10 md:mb-12 font-semibold max-w-lg sm:max-w-lg md:max-w-2xl mx-auto text-center"
        >
          Upload your course outlines and schedules—our AI instantly creates
          a smart calendar that syncs with your favorite calendar apps.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button
            className="bg-[#11ba82] text-[#fffffa] px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg md:text-xl font-semibold hover:bg-[#0ea371] transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            onClick={onTryDemoClick}
          >
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection; 