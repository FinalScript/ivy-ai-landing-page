import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import RotatingText from "../../blocks/TextAnimations/RotatingText/RotatingText";

interface HeroSectionProps {
  onTryDemoClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onTryDemoClick }) => {
  return (
    <div className="relative overflow-hidden min-h-screen mb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ivy_bg.jpg"
          alt="Ivy background"
          className="w-full h-full object-contain md:object-cover object-center"
        />
      </div>
      
      {/* Text Content Section */}
      <div className="relative z-10 py-24 md:py-36 min-h-[80vh] flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto text-center px-6 md:px-12 py-12 md:py-16 rounded-xl bg-white/70 backdrop-blur-sm shadow-xl border border-white/20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-extrabold mb-6 text-[#171919] transition-all duration-300 ease-in-out"
          >
            Stay more <span className="text-[#11ba82]">organized</span>
            <br className="hidden md:block" />
            <LayoutGroup>
              <motion.div className="rotating-text-ptag inline-flex items-center">
                <motion.span
                  className="inline-block mr-3"
                  layout
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
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
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </motion.div>
            </LayoutGroup>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[18px] leading-[1.6] text-[#171919]/90 mb-10 font-semibold max-w-2xl mx-auto"
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
              className="bg-[#11ba82] text-[#fffffa] px-8 py-3 rounded-full text-[16px] font-semibold hover:bg-[#0ea371] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#11ba82]/20 transform hover:-translate-y-1"
              onClick={onTryDemoClick}
            >
              Try Interactive Demo
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 