import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingPlan {
  title: string;
  price: string;
  frequency: string;
  description: string;
  features: string[];
  ctaText: string;
  basePlan?: 'FREE' | 'PRO';
  isRecommended?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'FREE',
    price: '$0',
    frequency: 'forever',
    description: 'Get started organizing your academic life. Perfect for trying out the basics.',
    features: [
      'Upload up to 3 syllabi',
      'Basic calendar view & sync',
      'Manual task entry',
      'Standard deadline reminders',
    ],
    ctaText: 'Get Started Free',
  },
  {
    title: 'PRO',
    price: '$5',
    frequency: 'per month',
    description: 'Unlock AI-powered features to optimize your schedule and boost your grades.',
    features: [
      'Unlimited syllabus uploads',
      'AI Priority Manager',
      'Smart Reminders & Scheduling',
      'Grade Optimizer tool',
      'Advanced Calendar Sync (Google, Outlook)',
      'Basic performance analytics',
    ],
    ctaText: 'Start Pro Trial',
    basePlan: 'FREE',
    isRecommended: true,
  },
  {
    title: 'PREMIUM',
    price: '$10',
    frequency: 'per month',
    description: 'Access advanced study tools and personalized insights for peak performance.',
    features: [
      'Curated Study Content suggestions',
      'Advanced performance analytics',
      'What-if grade scenarios',
      'Priority support',
      'Early access to new features',
    ],
    ctaText: 'Go Premium',
    basePlan: 'PRO',
  },
];

const PricingSection: React.FC = () => {
  return (
    <section 
      id="pricing" 
      className="pt-16 sm:pt-10 md:pt-10 lg:pt-10 pb-10 sm:pb-12 md:pb-14 lg:pb-16 scroll-mt-32"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        <div className="text-center mb-12 md:mb-16 opacity-60 relative" aria-hidden="true">
          <img 
            src="/ivy_pricing.png"
            alt=""
            className="w-full max-w-6xl mx-auto"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Simple pricing for <span className="text-[#11ba82]">every student</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. Start free, upgrade anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg flex flex-col h-full ${
                plan.isRecommended
                  ? 'border-2 border-[#11ba82] relative'
                  : 'border border-gray-200/80 overflow-hidden mt-8'
              }`}
            >
              {plan.isRecommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <span className="inline-block px-4 py-1 bg-[#11ba82] text-white text-xs font-semibold uppercase rounded-full shadow">
                    Recommended
                  </span>
                </div>
              )}
              <div className={`${plan.isRecommended ? 'p-8 pt-12 pb-16' : 'p-8'} flex-grow`}>
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${
                  plan.isRecommended ? 'text-[#11ba82]' : 'text-gray-500'
                }`}>
                  {plan.title}
                </h3>

                <div className="mb-4">
                  <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 text-sm ml-1">{plan.frequency}</span>
                </div>

                 <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors mb-6 ${
                    plan.isRecommended
                      ? 'bg-[#11ba82] text-white hover:bg-[#0ea371] shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {plan.ctaText}
                </button>

                <p className="text-gray-700 mb-6 text-sm">{plan.description}</p>

                {plan.basePlan && (
                  <p className="font-semibold text-gray-800 text-sm mb-3">
                    Everything in {plan.basePlan}, plus:
                  </p>
                )}

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check
                        className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5 text-[#11ba82]"
                       />
                      <span className="text-sm text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 