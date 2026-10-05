"use client";

import React from "react";
import { Award, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { certificationsData, educationData, personalInfo } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Handwritten Section Header */}
        <div className="mb-8 sm:mb-10 text-left">
          <span className="font-hand text-3xl sm:text-5xl text-[var(--ca-ink)] block select-none">
            about me!
          </span>
          <div className="flex items-center space-x-2 sm:space-x-3 mt-1 flex-wrap gap-y-1">
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--ca-ink)] uppercase tracking-tight">
              BACKGROUND & CREDENTIALS
            </h2>
            <span className="px-2.5 py-0.5 rounded-full border border-[var(--ca-ink)] bg-[var(--ca-mint)] font-ca-mono text-[11px] sm:text-xs font-bold text-[var(--ca-ink)]">
              CSE 2026
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Bio Card with Washi Tape */}
          <div className="lg:col-span-6 relative border-2 border-[var(--ca-ink)] bg-white p-4 xs:p-6 sm:p-8 pop-shadow-lg">
            {/* Washi Tape on Top Left */}
            <div className="ca-tape ca-tape-yellow -top-3.5 left-4 sm:left-8 rotate-[-6deg]" />

            <div className="flex items-center justify-between pb-2.5 sm:pb-3 mb-3.5 sm:mb-4 border-b-2 border-[var(--ca-ink)]">
              <span className="font-ca-mono text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)]">
                PROFESSIONAL SUMMARY
              </span>
              <span className="font-ca-mono text-[10px] px-2 py-0.5 rounded border border-[var(--ca-ink)] bg-[var(--ca-yellow)] font-bold">
                ENGINEER
              </span>
            </div>

            <div className="space-y-3.5 sm:space-y-4 font-ca-mono text-xs sm:text-sm text-[var(--ca-ink)] leading-relaxed">
              <p>{personalInfo.about.paragraph1}</p>
              <p>{personalInfo.about.paragraph2}</p>
            </div>

            <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t-2 border-[var(--ca-ink)] grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 font-ca-mono text-xs">
              <div>
                <span className="text-[10px] uppercase text-[var(--ca-gray)] block font-bold">
                  FOCUS DOMAINS
                </span>
                <span className="text-[var(--ca-ink)] font-bold">
                  Backend · AI · Data Platforms
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[var(--ca-gray)] block font-bold">
                  LOCATION
                </span>
                <span className="text-[var(--ca-ink)] font-bold">
                  {personalInfo.contact.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            {/* Education Card */}
            <div className="relative border-2 border-[var(--ca-ink)] bg-white p-4 xs:p-6 pop-shadow">
              <div className="ca-tape ca-tape-blue -top-3.5 right-4 sm:right-8 rotate-[4deg]" />

              <div className="flex items-center justify-between pb-2.5 sm:pb-3 mb-3.5 sm:mb-4 border-b-2 border-[var(--ca-ink)]">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-[var(--ca-ink)]" />
                  <span className="font-ca-mono text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)]">
                    EDUCATION
                  </span>
                </div>
                <span className="font-ca-mono text-xs text-[var(--ca-gray)]">
                  {educationData.period}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[var(--ca-ink)]">
                    {educationData.institution}
                  </h3>
                  <p className="font-ca-mono text-xs text-[var(--ca-gray)] mt-0.5">
                    {educationData.degree}
                  </p>
                </div>

                <div className="border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] px-3.5 py-1.5 sm:px-4 sm:py-2 text-left sm:text-right shrink-0 pop-shadow-sm self-start sm:self-auto">
                  <div className="font-ca-mono text-[10px] text-[var(--ca-ink)] font-bold uppercase">
                    CGPA
                  </div>
                  <div className="font-heading font-extrabold text-lg sm:text-xl text-[var(--ca-ink)] leading-none">
                    {educationData.cgpa} <span className="text-xs text-[var(--ca-gray)]">/ {educationData.scale}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="border-2 border-[var(--ca-ink)] bg-white p-4 xs:p-6 pop-shadow">
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[var(--ca-ink)]">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-[var(--ca-ink)]" />
                  <span className="font-ca-mono text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)]">
                    VERIFIED CREDENTIALS
                  </span>
                </div>
                <span className="font-ca-mono text-xs text-[var(--ca-gray)]">
                  2 ISSUED
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certificationsData.map((cert) => (
                  <div
                    key={cert.title}
                    className="border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] p-3 pop-shadow-sm"
                  >
                    <div className="font-heading font-bold text-xs text-[var(--ca-ink)] mb-1">
                      {cert.title}
                    </div>
                    <div className="font-ca-mono text-[10px] text-[var(--ca-blue)] font-bold flex items-center justify-between">
                      <span>{cert.issuer}</span>
                      <span className="text-[var(--ca-green)]">VERIFIED ✓</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
