import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import { CalendarDemo } from "../components/sections/CalendarDemo";
import FeaturesSection from "../components/sections/FeaturesSection";
import GetStartedSection from "../components/sections/GetStartedSection";
import HeroSection from "../components/sections/HeroSection";
import PricingSection from "../components/sections/PricingSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

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

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
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
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-10 sm:pb-12 md:pb-14 lg:pb-16">
                    <CalendarDemo />
                </div>
            </div>

            {/* Features Section - Updated */}
            <FeaturesSection onExploreClick={handleTryDemoClick} />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Get Started Section */}
            <GetStartedSection onGetStartedClick={handleTryDemoClick} />

            {/* Pricing Section */}
            <PricingSection />

            {/* Footer */}
            <Footer />
        </div>
    );
}
