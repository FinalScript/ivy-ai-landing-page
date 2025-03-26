import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "Ivy AI transformed my college experience. No more late-night panic trying to remember due dates. It extracted all my deadlines from my syllabus and organized everything perfectly.",
    name: "Alex Johnson",
    title: "Computer Science Major",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    content:
      "As someone with ADHD, keeping track of all my classes was impossible before Ivy AI. The smart reminders and visual timeline help me stay focused on what matters most without feeling overwhelmed.",
    name: "Riley Thompson",
    title: "Psychology Student",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    content:
      "The grade tracking feature is phenomenal! I can see exactly where I stand in each class and what I need to score on upcoming assignments to achieve my target grade.",
    name: "Marcus Chen",
    title: "Pre-Med Student",
    gradient: "from-amber-500 to-orange-600"
  },
];

const TestimonialsSection: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };
  
  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };
  
  return (
    <section ref={containerRef} className="py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute -top-40 -right-40 w-72 h-72 md:w-96 md:h-96 bg-[#11ba82]/10 rounded-full blur-[80px] md:blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-[80px] md:blur-[100px]"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            What Students Are Saying
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Join thousands of students who have transformed their academic life with Ivy AI
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 scale-[0.9] sm:scale-95 md:scale-100 origin-top mx-auto max-w-md xs:max-w-lg sm:max-w-xl md:max-w-none"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-xl shadow-md sm:shadow-lg md:shadow-xl p-4 sm:p-6 relative ${
                index === 1 ? "md:mt-8" : ""
              }`}
            >
              <Quote className="text-[#11ba82]/20 w-8 h-8 sm:w-10 sm:h-10 absolute top-3 right-3 sm:top-4 sm:right-4" />
              <p className="text-gray-700 text-sm xs:text-base mb-4 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className={`w-8 h-8 xs:w-10 xs:h-10 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-xs xs:text-sm`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-sm xs:text-base">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs xs:text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 