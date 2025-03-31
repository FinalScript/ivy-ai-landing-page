import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import Navigation from "../components/layout/Navigation";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import GetStartedSection from "../components/sections/GetStartedSection";
import Footer from "../components/layout/Footer";
import { AlertTriangle } from 'lucide-react';

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Handler for button click
  const handleTryDemoClick = () => {
    console.log("Try Demo button clicked");
    // You can add additional functionality here if needed
  };

  return (
    <div className="min-h-screen bg-white text-[#171919] font-sans">
      {/* Navigation */}
      <Navigation scrolled={scrolled} />

      {/* Add spacing to account for fixed navbar */}
      <div className="h-24"></div>

      {/* Hero Section without calendar */}
      <HeroSection onTryDemoClick={handleTryDemoClick} />

      {/* Calendar Demo as separate component with negative margin for overlap effect */}
      <div className="relative z-20 mt-[-200px] xs:mt-[-250px] sm:mt-[-300px] lg:mt-[-250px] 2xl:mt-[-300px]">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <CalendarDemoPreview />
        </div>
      </div>

      {/* Features Section - Updated */}
      <FeaturesSection onExploreClick={handleTryDemoClick} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Get Started Section */}
      <GetStartedSection onGetStartedClick={handleTryDemoClick} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Simplified calendar preview component specifically for the hero section intersection
const CalendarDemoPreview = () => {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 mb-10">
      {/* macOS-style window header */}
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm font-medium text-center flex-grow">Ivy Calendar Dashboard</div>
      </div>
      
      {/* Dashboard layout */}
      <div className="flex flex-col md:flex-row" style={{ minHeight: '550px' }}>
        {/* Left sidebar with navigation menu */}
        <div className="w-full md:w-72 bg-gray-50 p-4 pl-8 border-r border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-6 text-lg">QUICK ACCESS</h3>
          
          <div className="space-y-7">
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-lg text-gray-700">Courses</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="text-lg text-gray-700">Assignments</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg text-gray-700">Quizzes</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              <span className="text-lg text-gray-700">Exams</span>
            </div>
          </div>
          
          <h3 className="font-semibold text-gray-800 mt-12 mb-6 text-lg">MY COURSES</h3>
          
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <div className="text-md text-gray-700">CS 202 - Data Structures</div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <div className="text-md text-gray-700">MATH 101 - Calculus II</div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="text-md text-gray-700">PSYC 101 - Intro Psychology</div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <div className="text-md text-gray-700">PHYS 102 - Physics II</div>
            </div>
          </div>
        </div>
        
        {/* Middle calendar section */}
        <div className="flex-grow p-4 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div className="font-semibold text-xl text-gray-800">April 2024</div>
            <div className="flex space-x-2">
              <button className="p-1.5 rounded-full hover:bg-gray-100">
                {/* ChevronLeft Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button className="p-1.5 rounded-full hover:bg-gray-100">
                 {/* ChevronRight Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>
          
          {/* Calendar Header - Updated Styles */}
          <div className="grid grid-cols-7 gap-1 mb-2 text-center">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
              <div key={`cal-head-${i}`} className="text-[10px] font-medium text-gray-400 py-1">{d}</div>
            ))}
          </div>
          
          {/* Calendar Days - Updated Styles & Structure */}
          <div className="grid grid-cols-7 gap-1 text-sm flex-grow">
            {[...Array(5 * 7)].map((_, index) => {
              // Calculate day number (simple placeholder logic for demo)
              const dayOfMonth = index - 4; // Start days offset for April 2024 example
              const isCurrentMonth = dayOfMonth > 0 && dayOfMonth <= 30;
              let dayClasses = "text-xs p-1 rounded aspect-square flex flex-col items-center justify-center relative";
              const dayContent = isCurrentMonth ? dayOfMonth : "";
              let innerContent = <>{dayContent}</>;

              if (!isCurrentMonth) {
                dayClasses += " text-gray-300"; // Dim days outside the month
              } else {
                 // Apply base styling for current month days
                 dayClasses += " text-gray-700"; 

                 // --- Conditional Styling --- 
                 
                 // 1. Current Day (Day 5 - Moved to Thursday) - Blue Outline + Blue/Purple dots
                 if (dayOfMonth === 5) { 
                   dayClasses += " ring-2 ring-blue-500 ring-inset text-blue-600 font-semibold";
                   innerContent = (
                     <>
                       {dayContent}
                       <div className="flex space-x-0.5 mt-0.5">
                         <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                         <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                       </div>
                     </>
                   );
                 }
                 // 2. Multi-Event Day (Day 4) - Now using Purple/Green dots
                 else if (dayOfMonth === 4) {
                   dayClasses += " font-semibold"; // Keep text bold if needed
                   innerContent = (
                     <>
                       {dayContent}
                       <div className="flex space-x-0.5 mt-0.5">
                         <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                         <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                       </div>
                     </>
                   );
                 }
                 // 3. Single Event Highlights (Existing + Added More)
                 else if (dayOfMonth === 7) {
                   dayClasses += " bg-green-100 text-green-600";
                 } else if (dayOfMonth === 10) {
                   dayClasses += " bg-orange-100 text-orange-600 font-semibold";
                   // Add priority indicator icon (!)
                   innerContent = (
                     <>
                       {dayContent}
                       <AlertTriangle size={14} className="absolute top-1 right-1 text-red-500" />
                     </>
                   );
                 } else if (dayOfMonth === 13) {
                   dayClasses += " bg-purple-100 text-purple-600";
                 } else if (dayOfMonth === 18) { // Added Highlight
                   dayClasses += " bg-orange-100 text-orange-600";
                 } else if (dayOfMonth === 21) { // Added Highlight
                   dayClasses += " bg-green-100 text-green-600";
                 } else if (dayOfMonth === 26) { // Added Highlight
                   dayClasses += " bg-blue-100 text-blue-600";
                 }
              }

              return (
                <div key={`day-${index}`} className={dayClasses}>
                  {innerContent} {/* Render day number or number + dots */}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Right sidebar with overview */}
        <div className="w-full md:w-72 bg-gray-50 p-4 border-l border-gray-200">
          <h3 className="font-semibold text-gray-700 mb-4">Today's Overview</h3>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="text-xs text-gray-500 uppercase mb-2">UPCOMING</div>
              <div className="text-2xl font-bold text-gray-800">1</div>
              <div className="text-xs text-gray-500">assignment due next week</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 uppercase mb-2">
                <span>PRIORITY</span>
                <AlertTriangle size={14} className="text-red-500 ml-0.5 self-center relative top-[-0.5px]" />
              </div>
              <div className="flex items-center space-x-3 mt-1">
                <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0"></div>
                <div className="text-sm font-medium">PSYC 101 Assignment</div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Due on the 10th at 11:59 PM</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="text-xs text-gray-500 uppercase mb-2">STUDY TIME</div>
              <div className="text-2xl font-bold text-gray-800">2.5<span className="text-sm font-normal ml-1">hours</span></div>
              <div className="text-xs text-gray-500">recommended today</div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <div className="text-xs text-gray-500 uppercase mb-2">Classes Today</div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <div className="text-sm">CS 202 Lecture (9:00 AM)</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <div className="text-sm">MATH 101 (1:30 PM)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
