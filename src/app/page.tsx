import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatsUpSection from "@/components/WhatsUpSection";
import SelectedWork from "@/components/SelectedWork";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TechnicalFocus from "@/components/TechnicalFocus";
import EngineeringApproach from "@/components/EngineeringApproach";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full notebook-ruled-bg flex flex-col justify-between selection:bg-[var(--ca-yellow)] selection:text-[var(--ca-ink)]">
      {/* Creative Artsy Header Tabs */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="w-full">
        {/* Scrapbook Hero */}
        <Hero />

        {/* What's Up Intro Section */}
        <WhatsUpSection />

        {/* Selected Work (Folder Tab Cards) */}
        <SelectedWork />

        {/* Experience (Lab Notebook & Achievement Stamp) */}
        <ExperienceTimeline />

        {/* Technical Focus (Sticker Toolkit) */}
        <TechnicalFocus />

        {/* Engineering Approach (Blueprint Index Cards) */}
        <EngineeringApproach />

        {/* About, Education & Credentials */}
        <AboutSection />

        {/* Contact / Let's Make Something */}
        <ContactSection />
      </main>

      {/* Minimal Scrapbook Footer */}
      <Footer />
    </div>
  );
}
