import React, { useRef } from "react";
import { motion } from "framer-motion";
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
  
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
        stiffness: 120
      }
    }
  };
  
  return (
    <section ref={containerRef} className="py-0 pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-white relative">
      {/* Top wave separator no longer needed */}
      
      {/* Background image to the left */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 md:w-2/5 lg:w-1/3 overflow-hidden z-0">
        <img 
          src="/ivy_studentswalking.jpg" 
          alt="" 
          className="h-full w-full object-contain object-left"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white sm:block hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white sm:hidden"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
          >
            What Students Are <span className="text-[#11ba82]">Saying</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm xs:text-base sm:text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Join thousands of students who have transformed their academic life with Ivy AI
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 scale-[0.95] sm:scale-95 md:scale-100 origin-top mx-auto max-w-md xs:max-w-lg sm:max-w-xl md:max-w-none"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-xl shadow-md sm:shadow-lg md:shadow-xl p-4 sm:p-6 relative border border-gray-100 ${
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
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          className="relative block w-full h-[30px] sm:h-[40px] md:h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#ffffff"
            opacity="1"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default TestimonialsSection; 