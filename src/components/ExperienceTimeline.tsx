"use client";

import React from "react";
import { Award, Calendar, CheckCircle, MapPin, Sparkles } from "lucide-react";
import { experienceData } from "@/data/portfolioData";
import PolaroidCollage from "./PolaroidCollage";

export default function ExperienceTimeline() {
  const exp = experienceData[0]; // HashedIn by Deloitte

  return (
    <section id="experience" className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Handwritten Section Header */}
        <div className="mb-8 sm:mb-10 text-left">
          <span className="font-hand text-3xl sm:text-5xl text-[var(--ca-ink)] block select-none">
            about my experience!
          </span>
          <div className="flex items-center space-x-2 sm:space-x-3 mt-1 flex-wrap gap-y-1.5">
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl text-[var(--ca-ink)] uppercase tracking-tight">
              ENGINEERING EXPERIENCE
            </h2>
            <span className="px-2.5 py-0.5 rounded-full border border-[var(--ca-ink)] bg-[var(--ca-mint)] font-ca-mono text-[11px] sm:text-xs font-bold text-[var(--ca-ink)]">
              HASHEDIN BY DELOITTE
            </span>
          </div>
        </div>

        {/* 2-Column Grid: Experience Notebook on Left + Polaroid Collage on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Lab Notebook Card Container with Washi Tape */}
          <div className="lg:col-span-7 relative border-2 border-[var(--ca-ink)] bg-white p-4 xs:p-6 sm:p-8 pop-shadow-lg">
            {/* Washi Tape on Top Left & Right */}
            <div className="ca-tape ca-tape-blue -top-3.5 left-4 sm:left-10 rotate-[-6deg]" />
            <div className="ca-tape ca-tape-yellow -top-3.5 right-4 sm:right-10 rotate-[5deg]" />

            {/* Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 sm:pb-6 border-b-2 border-[var(--ca-ink)] gap-3 sm:gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                  <span className="font-ca-mono text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded border border-[var(--ca-ink)] bg-[var(--ca-yellow)] text-[var(--ca-ink)] font-bold">
                    2026 // INTERNSHIP
                  </span>
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--ca-ink)]">
                    {exp.company}
                  </span>
                </div>
                <div className="font-ca-mono text-xs sm:text-sm font-bold text-[var(--ca-gray)]">
                  {exp.role} · Bangalore, India
                </div>
              </div>

              {/* Top 5 / 17 Teams Stamp Badge */}
              <div className="inline-flex items-center space-x-2 px-2.5 sm:px-3 py-1.5 rounded-lg border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] text-[var(--ca-ink)] font-ca-mono text-[11px] sm:text-xs font-bold pop-shadow-sm rotate-[2deg] hover:rotate-0 transition-transform self-start sm:self-auto">
                <Award className="w-4 h-4 text-[var(--ca-orange)] fill-[var(--ca-orange)] shrink-0" />
                <span>TOP 5 / 17 TEAMS AWARD</span>
              </div>
            </div>

            {/* 4 Technical Areas Grid */}
            <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {exp.areas.map((area, idx) => (
                <div
                  key={idx}
                  className="border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] p-3.5 xs:p-4 sm:p-5 rounded-none relative pop-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[var(--ca-ink)]/20">
                      <span className="font-ca-mono text-[11px] font-bold uppercase tracking-wider text-[var(--ca-blue)]">
                        {area.label}
                      </span>
                      <span className="font-ca-mono text-[10px] text-[var(--ca-gray)]">
                        DOMAIN 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-sm sm:text-base text-[var(--ca-ink)] mb-2 leading-snug">
                      {area.title}
                    </h3>

                    <p className="text-xs text-[var(--ca-gray)] leading-relaxed mb-4">
                      {area.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-[var(--ca-ink)]/10">
                    {area.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-ca-mono font-bold bg-white border border-[var(--ca-ink)] text-[var(--ca-ink)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Polaroid Collage */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <PolaroidCollage />
          </div>
        </div>
      </div>
    </section>
  );
}
