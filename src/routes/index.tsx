import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import Navigation from "../components/layout/Navigation";
import HeroSection from "../components/sections/HeroSection";
import CalendarDemo from "../components/sections/CalendarDemo";
import FeaturesSection from "../components/sections/FeaturesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import GetStartedSection from "../components/sections/GetStartedSection";
import Footer from "../components/layout/Footer";

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

      {/* Hero Section */}
      <HeroSection onTryDemoClick={handleTryDemoClick} />

      {/* Calendar Demo */}
      <CalendarDemo />

      {/* Features Section - Updated */}
      <FeaturesSection onExploreClick={handleTryDemoClick} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Get Started Section */}
      <GetStartedSection onTryClick={handleTryDemoClick} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
